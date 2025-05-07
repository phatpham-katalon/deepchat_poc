import { Injectable } from '@nestjs/common';
import { experimental_createMCPClient, generateText } from 'ai';
import { openaiClient } from '../utils/openAI.config';
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js"
type ToolName = string;

@Injectable()
export class MCPProxyService {
  private readonly mcpServerUrl = process.env.MCP_SERVER_URL ?? '';
  private readonly retryDelay   = 1_000;   // ms
  private readonly maxRetries   = 3;

  private readonly systemPrompt = `
You are a helpful assistant that can answer questions about Katalon.
Always call search_katalon_knowledge_base first; cite the URI in your answer.`;

  private mcpClient: any = null;           // set by initClient()
  private readonly model = openaiClient;   // GPT‑4o‑mini with apiKey
  constructor() {
    void this.initClient();                
  }

  private wait(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
  }

  private async initClient(retries = this.maxRetries): Promise<boolean> {
    try {
      this.mcpClient = await experimental_createMCPClient({
        transport: new StreamableHTTPClientTransport(new URL(this.mcpServerUrl)),
      });
      await this.mcpClient.tools(); 
      this.mcpClient.removeAllListeners?.('close');
      this.mcpClient.on?.('close', async () => {
        console.warn('MCP SSE closed – will reconnect on next request');
        this.mcpClient = null;            
      });

      return true;
    } catch (err) {
      if (retries) {
        await this.wait(this.retryDelay);
        return this.initClient(retries - 1);
      }
      console.error('Init MCP failed:', err);
      this.mcpClient = null;
      return false;
    }
  }

  private async runWithTools(prompt: string): Promise<any> {
    const tools = await this.mcpClient.tools();
    const used: ToolName[] = [];

    const { text } = await generateText({
      model: this.model,
      messages: [
        { role: 'system', content: this.systemPrompt },
        { role: 'user',   content: prompt },
      ],
      tools,
      toolChoice: 'auto',
      maxSteps: 5,
      onStepFinish({ toolResults }) {
        toolResults?.forEach(r => {
          if (r.toolName && !used.includes(r.toolName)) used.push(r.toolName);
          console.log('TOOL RESULT', r.toolName, r.result);
        });
      },
    });

    return {
      text,
      source: used.length ? 'mcp_verified' : 'model_only',
      metadata: { toolsUsed: used },
    };
  }

  async chat(text: string) {
    if (!text.trim()) return { text: 'Empty query', source: 'error' };

    if (!this.mcpClient && !(await this.initClient()))
      return { text: 'MCP offline', source: 'error' };

    try {
      return await this.runWithTools(text);
    } catch (err: any) {
      const transient =
        err.code === 'ECONNRESET' ||
        err.code === 'ERR_STREAM_WRITE_AFTER_END' ||
        /socket|SSE closed/i.test(err.message);

      if (transient) {
        console.warn('MCP socket dead, recreating…');
        if (await this.initClient()) {
          try {
            return await this.runWithTools(text); // retry once
          } catch (inner) {
            console.error('Retry failed:', inner);
          }
        }
      }
      console.error('Chat failed:', err);
      return { text: 'Error processing request', source: 'error', error: err.message };
    }
  }
}
