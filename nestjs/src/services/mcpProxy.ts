import { Injectable } from '@nestjs/common';
import { experimental_createMCPClient, generateText } from 'ai';
import { openai, createOpenAI } from '@ai-sdk/openai';
import {openaiClient} from './openAI.config';

@Injectable()
export class MCPProxyService {
  private readonly mcpServerUrl =
    process.env.MCP_SERVER_URL ?? 'Not set mcp server';

  /** Chat‑model with apiKey injected */
  private readonly model = openaiClient

  private mcpClient: any = null;
  private readonly retryDelay = 1_000;
  private readonly maxRetries = 3;

  private readonly systemPrompt = `
You are a helpful assistant that can answer questions about Katalon.
Always call search_katalon_knowledge_base first; cite the URI in your answer.`;

  /* ---------- bootstrap ---------- */
  constructor() {
    void this.initClient(); // fire & forget
  
  }

  /* ---------- utils ---------- */
  private wait(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
  }

  private async initClient(retries = this.maxRetries): Promise<boolean> {
    try {
      this.mcpClient = await experimental_createMCPClient({
        transport: { type: 'sse', url: this.mcpServerUrl },
      });
      const tools = await this.mcpClient.tools();
      if (!tools || !Object.keys(tools).length) throw new Error('no tools');
      return true;
    } catch (err) {
      if (retries) {
        await this.wait(this.retryDelay);
        return this.initClient(retries - 1);
      }
      this.mcpClient = null;
      return false;
    }
  }

  /* ---------- public API ---------- */
  async chat(text: string) {
    try {
      if (!text.trim()) return { text: 'Empty query', source: 'error' };

      if (!this.mcpClient && !(await this.initClient()))
        return { text: 'MCP offline', source: 'error' };

      console.log('MCP client initialized successfully');
      console.log('MCP server URL:', this.mcpServerUrl);
      
      try {
        const tools = await this.mcpClient.tools();
        console.log('Available tools:', Object.keys(tools));
        const usedTools = [];
        /* ---- generate reply ---- */
        const { text: reply, usage } = await generateText({
          model: this.model,
          messages: [
            { role: 'system', content: this.systemPrompt },
            { role: 'user', content: text },
          ],
          tools,
          /*  MUST be the exact object syntax – makes GPT wait for 2nd round  */
          toolChoice: "auto",
          maxSteps: 5, // ≥2 so GPT can read tool results
          /* Optional debug */
          onStepFinish({ finishReason, toolResults }) {
            console.log('STEP', finishReason, toolResults?.[0]?.result);
            // Theo dõi tool calls
            if (toolResults && toolResults.length > 0) {
              toolResults.forEach(result => {
                if (result.toolName && !usedTools.includes(result.toolName)) {
                  usedTools.push(result.toolName);
                }
              });
            }
          },
        });

        
        return {
          text: reply,
          source: usedTools.length > 0 ? 'from_mcp_verified' : 'from_model_only',
          metadata: { 
            usage, 
            toolsUsed: usedTools // List of tools used had followed before
          },
        };
      } catch (toolError) {
        console.error('Error fetching tools or generating text:', toolError);
        return { 
          text: 'Error processing your request with tools. Please try again later.', 
          source: 'error',
          error: toolError.message 
        };
      }
    } catch (error) {
      console.error('Chat error:', error);
      return { 
        text: 'An error occurred while processing your request. Please try again later.', 
        source: 'error',
        error: error.message 
      };
    }
  }
}
