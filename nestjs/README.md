# Katalon Knowledge Assistant Backend

This is the NestJS backend for the Katalon Knowledge Assistant, which integrates with MCP (Model Context Protocol) servers to provide tool calling capabilities.

## Features

- MCP server integration for tool calling
- OpenAI integration for LLM capabilities
- RESTful API endpoints for chat functionality
- Error handling and retry mechanisms

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key
- MCP server URL

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with the following variables:

```
OPENAI_API_KEY=your_openai_api_key
MCP_SERVER_URL=your_mcp_server_url
```

### Running the application

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## API Endpoints

### POST /mcp-chat

Processes a chat message using the MCP server and OpenAI.

**Request Body:**

```json
{
  "text": "Your question about Katalon"
}
```

**Response:**

```json
{
  "text": "The answer to your question",
  "source": "mcp",
  "metadata": {
    "timestamp": "2025-05-06T08:50:22.000Z",
    "model": "gpt-4o",
    "toolsUsed": ["tool1", "tool2"]
  }
}
```

## Architecture

The backend uses a proxy pattern to communicate with the MCP server:

1. Client sends a message to the NestJS backend
2. Backend fetches available tools from the MCP server
3. Backend sends the message and tools to OpenAI
4. If OpenAI decides to use tools, backend executes the tool calls via MCP server
5. Backend sends the final response back to the client

## Error Handling

The application includes robust error handling for:
- MCP server connection issues
- OpenAI API errors
- Tool execution failures
- Request timeouts

Each error is properly logged and appropriate error messages are returned to the client.
