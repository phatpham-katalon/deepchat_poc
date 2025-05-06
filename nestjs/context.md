# Katalon Knowledge Assistant Implementation Guide

This document outlines the implementation of the Katalon Knowledge Assistant, a chat application that uses MCP (Model Context Protocol) servers for tool calling to query information from an internal knowledge base.

## Architecture Overview

The application consists of two main components:

1. **Frontend (ReactJS)**: Located in the `ui` folder

   - Uses DeepChat React component for the chat interface
   - Communicates with the backend via REST API

2. **Backend (NestJS)**: Located in the `nestjs` folder
   - Exposes API endpoints for the frontend
   - Integrates with MCP server for tool calling
   - Uses OpenAI for LLM capabilities

## Implementation Details

### Backend (NestJS)

The backend serves as a proxy between the frontend and the MCP server. It:

1. Receives chat messages from the frontend
2. Fetches available tools from the MCP server
3. Sends the message and tools to OpenAI
4. Executes tool calls via the MCP server if needed
5. Returns the final response to the frontend

Key components:

- **MCPProxyService**: Handles communication with the MCP server and OpenAI
- **AppController**: Exposes the `/mcp-chat` endpoint

### Frontend (ReactJS)

The frontend provides a user interface for interacting with the chat application. It:

1. Displays the chat interface using DeepChat
2. Sends user messages to the backend
3. Displays responses from the backend

Key components:

- **MCPChat.tsx**: Main component that renders the DeepChat interface and handles API calls
- **setupProxy.js**: Configures proxy for development environment

## Setup Instructions

### Backend Setup

1. Navigate to the `nestjs` folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with:
   ```
   OPENAI_API_KEY=your_openai_api_key
   MCP_SERVER_URL=your_mcp_server_url
   ```
4. Start the server:
   ```bash
   npm run start:dev
   ```

### Frontend Setup

1. Navigate to the `ui` folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## API Documentation

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

## Troubleshooting

- **MCP Server Connection Issues**: Ensure the MCP server URL is correct in the `.env` file
- **OpenAI API Errors**: Verify the OpenAI API key is valid
- **CORS Issues**: Check the CORS configuration in `main.ts`
- **Empty Response or Missing Tool Usage**: If you receive empty responses or toolsUsed is empty despite tools being called, consider:
  - Using `toolChoice: 'auto'` instead of forcing a specific tool
  - Implementing manual tool call tracking in the `onStepFinish` callback
  - Adding proper error handling around tool calls

## Recent Updates

### MCPProxyService Improvements

The MCPProxyService has been updated to address several issues:

1. **Environment Variable Loading**
   - Ensured proper loading of OpenAI API key from `.env` file
   - Added validation to check if API key is properly loaded

2. **Enhanced Error Handling**
   - Added try/catch blocks around tool calls and text generation
   - Improved error messages for better debugging
   - Added logging for tool call results

3. **Tool Usage Tracking**
   - Implemented manual tracking of tool usage to ensure `toolsUsed` is properly populated
   - Modified the response structure to correctly indicate when tools were used

4. **System Prompt Optimization**
   - Updated system prompt to ensure LLM provides comprehensive answers
   - Added instructions to handle cases when no relevant information is found

Example implementation for tracking tool usage:

```typescript
// Biến để theo dõi tool calls
const usedTools = [];

const { text: reply, toolCalls, usage } = await generateText({
  // Other parameters...
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

// Use tracked tools in response
return {
  text: reply,
  source: usedTools.length > 0 ? 'mcp_verified' : 'model_only',
  metadata: { 
    usage, 
    toolsUsed: usedTools
  },
};
```
