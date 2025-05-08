import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { MCPProxyService } from './services/mcpProxy';

@Controller()
export class AppController {
  constructor(private readonly mcp: MCPProxyService) {}

  @Post('mcp-chat')
  async stream(@Body() body: any, @Res() res: Response) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no');

    const prompt = body.messages?.at(-1)?.text ?? '';
    await this.mcp.streamRaw(prompt, chunk => {
      res.write(`data: ${JSON.stringify(chunk)}\n\n`);
    });

    res.end();
  }
}
