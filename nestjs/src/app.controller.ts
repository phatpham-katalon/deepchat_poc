import {UseInterceptors, UploadedFiles, Controller, Post, Req, Res, UseFilters, Body, OnModuleDestroy} from '@nestjs/common';
import { MCPProxyService } from './services/mcpProxy';

@Controller()
export class AppController implements OnModuleDestroy {
  constructor(
    private readonly mcpProxy: MCPProxyService
  ) {}

  @Post('mcp-chat')
  async mcpChat(@Body('text') text: string) {
    if (!text) {
      return { text: 'Empty query', source: 'error' };
    }
    return this.mcpProxy.chat(text);
  }

  async onModuleDestroy() {
    // Cleanup any resources if needed
  }
}
