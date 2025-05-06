declare module '@modelcontextprotocol/sdk' {
  export class Client {
    constructor(config: { name: string; version: string });
    connect(transport: SSEClientTransport): Promise<void>;
    disconnect(): Promise<void>;
    isConnected(): boolean;
    processQuery(text: string): Promise<string>;
  }

  export class SSEClientTransport {
    constructor(url: URL);
  }
} 