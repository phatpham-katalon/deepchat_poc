import {GlobalExceptionMiddleware} from './utils/globalExceptionMiddleware';
import {AppController} from './app.controller';
import {APP_FILTER} from '@nestjs/core';
import {Module} from '@nestjs/common';
import { MCPProxyService } from './services/mcpProxy';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionMiddleware,
    },
    MCPProxyService,
  ],
})
export class AppModule {}
