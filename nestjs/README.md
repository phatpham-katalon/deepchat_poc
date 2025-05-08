# Katalon Knowledge Assistant

A chat application that leverages the Model Context Protocol (MCP) to search and answer questions about Katalon from an internal knowledge base.

## Architecture Overview

The application consists of two main components:

1. **Frontend (ReactJS)**: Located in the `ui` folder
   - Uses DeepChat component for the chat interface
   - Communicates with the backend via REST API

2. **Backend (NestJS)**: Located in the `nestjs` folder
   - Provides API endpoints for the frontend
   - Integrates with MCP server for tool calling
   - Uses OpenAI for natural language processing capabilities

## Installation and Setup

### Backend (NestJS)

1. Navigate to the `nestjs` directory:
   ```bash
   cd nestjs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following environment variables:
   ```
   OPENAI_API_KEY=your_openai_api_key
   MCP_SERVER_URL=your_mcp_server_url
   ```

4. Start the server:
   ```bash
   npm run start:dev
   ```

### Frontend (ReactJS)

1. Navigate to the `ui` directory:
   ```bash
   cd ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Key Features

### MCPChat Component

The `MCPChat.tsx` component is the main part of the user interface, providing:

- User-friendly chat interface
- Sending questions to the backend and displaying answers
- Chat history storage (can be enabled/disabled)
- Clear chat history button
- Display of source information when AI uses search tools

### API Endpoints

#### POST /mcp-chat

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
  "source": "from_mcp_verified",
  "metadata": {
    "usage": {
      "promptTokens": 1006,
      "completionTokens": 214,
      "totalTokens": 1220
    },
    "toolsUsed": ["search_katalon_knowledge_base"]
  }
}
```

## Error Handling and Debugging

- **MCP Server Connection Issues**: Ensure the MCP server URL in the `.env` file is correct
- **OpenAI API Errors**: Verify the OpenAI API key is valid
- **CORS Issues**: Check the CORS configuration in `main.ts`
- **Empty Response or Missing Tool Usage**: If you receive empty responses or toolsUsed is empty despite tools being called, consider:
  - Using `toolChoice: 'auto'` instead of forcing a specific tool
  - Implementing manual tool call tracking in the `onStepFinish` callback
  - Adding proper error handling around tool calls

## Project Structure

```
katalon-knowledge-assistant/
├── nestjs/                  # NestJS Backend
│   ├── src/
│   │   ├── services/
│   │   │   ├── mcpProxy.ts  # Handles communication with MCP server
│   │   │   └── ...
│   │   ├── app.controller.ts # Defines endpoints
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── .env                 # Environment variables
│   └── package.json
└── ui/                      # React Frontend
    ├── src/
    │   ├── components/
    │   │   └── MCPChat.tsx  # Main chat component
    │   ├── utils/
    │   │   └── api.ts       # API client configuration
    │   ├── App.tsx
    │   └── index.tsx
    └── package.json
```

## Implementation Details

The MCPChat component uses the following approach:

```typescript
// Define message types
type MessageContent = { role: 'user' | 'ai'; text: string };

interface HistMsg extends MessageContent {
  timestamp: string;
  metadata?: any;
}

// Chat component implementation
export default function MCPChat() {
  // State management for messages, loading state, and errors
  const [hist, setHist] = useState<HistMsg[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatRef = useRef<any>(null);

  // Optional: Load/save chat history from localStorage
  // Currently disabled but can be enabled if needed

  // Handle sending messages to the backend
  const ask = async (text: string): Promise<MessageContent> => {
    // Implementation details...
  };

  // Convert history to DeepChat format
  const dcHistory: MessageContent[] = hist.map(({ role, text }) => ({ role, text }));

  // Clear chat history
  const clear = () => {
    setHist([]);
    chatRef.current?.clearMessages?.();
  };

  return (
    <div>
      {/* Header with title and clear button */}
      {/* Error and loading indicators */}
      {/* DeepChat component */}
    </div>
  );
}
```

## Contributing

Please ensure that any changes are thoroughly tested before submitting a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

[Add your license information here]
