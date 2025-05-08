import { Injectable, Logger } from '@nestjs/common';
import {
  experimental_createMCPClient,
  streamText,
} from 'ai';
import { openaiClient } from '../utils/openAI.config';
import { StreamableHTTPClientTransport }
        from '@modelcontextprotocol/sdk/client/streamableHttp.js';

type ToolName = string;
type Chunk = { role: 'ai'; text?: string; done?: boolean; toolsUsed?: string[] };

@Injectable()
export class MCPProxyService {
  private readonly log  = new Logger(MCPProxyService.name);
  private readonly url  = process.env.MCP_SERVER_URL ?? '';
  private readonly wait = (ms: number) => new Promise(r => setTimeout(r, ms));

  private mcpClient: any = null;
  private readonly model = openaiClient ;

  private readonly systemPrompt = `
You are a helpful assistant that can answer questions about Katalon.
Always call search_katalon_knowledge_base first; cite the URI in your answer.`;

  /* ---------- bootstrap ---------- */
  constructor() { void this.initClient(); }

  private async initClient(retries = 3): Promise<boolean> {
    try {
      this.mcpClient = await experimental_createMCPClient({
        transport: new StreamableHTTPClientTransport(new URL(this.url)),
      });
      await this.mcpClient.tools();
      this.mcpClient.on?.('close', () => {
        this.log.warn('MCP closed – reconnect on next request');
        this.mcpClient = null;
      });
      return true;
    } catch (e) {
      if (retries) { await this.wait(1_000); return this.initClient(retries - 1); }
      this.log.error('Init MCP failed', e);
      return false;
    }
  }

  /* ---------- push ND-JSON each token ---------- */
  async streamRaw(prompt: string, push: (c: Chunk) => void) {
    if (!prompt.trim()) { push({ role:'ai', text:'Empty query', done:true }); return; }
    if (!this.mcpClient && !(await this.initClient())) {
      push({ role:'ai', text:'MCP offline', done:true }); return;
    }

    const tools = await this.mcpClient.tools();
    const used : ToolName[] = [];

    const { textStream } = await streamText({
      model: this.model,
      messages: [
        { role:'system', content:this.systemPrompt },
        { role:'user',   content:prompt         },
      ],
      tools,
      toolChoice:'auto',
      maxSteps:5,
      onStepFinish({ toolResults }) {
        toolResults?.forEach(r=>{
          if(r.toolName && !used.includes(r.toolName)) used.push(r.toolName);
        });
      },
    });

    for await (const token of textStream) {
      this.log.verbose('CHUNK: ' + token);
      push({ role:'ai', text: token, done: false });        // each token = 1 line
    }
    push({ role:'ai', done:true, toolsUsed: used });
  }
}
