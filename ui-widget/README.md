# DeepChat MCP UI Widget

This project implements a chatbot UI widget using DeepChat CDN that connects to a backend NestJS server. The backend server acts as a proxy to communicate with an MCP (Model Context Protocol) server and LLM model.

## Features

- Floating chat bubble that toggles the chat interface
- Streaming text responses for a smooth user experience
- Custom styling with Katalon branding
- Integration with MCP server for enhanced AI capabilities
- Backend proxy to handle API calls to LLM models

## Prerequisites

Before running the UI widget locally, you need to:

1. Have Node.js installed (v14 or higher recommended)
2. Start the backend NestJS server first
3. Have an MCP server running and accessible

## Backend Setup

The UI widget depends on a backend server that handles the communication with the MCP server and LLM model. Before running the UI widget, make sure to set up and start the backend server:

1. Navigate to the NestJS backend directory:
   ```bash
   cd ../nestjs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create or update the `.env` file with the following environment variables:
   ```
   OPENAI_API_KEY=your_openai_api_key
   MCP_SERVER_URL=your_mcp_server_url
   ```

4. Start the backend server:
   ```bash
   npm run start:dev
   ```

The backend server will:
- Connect to an MCP server specified in the environment variables
- Use OpenAI's o3-mini model for processing requests
- Proxy requests from the UI to the LLM model
- Stream responses back to the UI
- Handle tool calls through the MCP protocol

## Running the UI Widget Locally

To run the UI widget locally:

1. Navigate to the ui-widget directory:
   ```bash
   cd /path/to/deepchat-mcp/ui-widget
   ```

2. Start a local development server. You can use any of these options:

   - Using Visual Studio Code's Live Server extension:
     - Install the "Live Server" extension if you haven't already
     - Right-click on `index.html` and select "Open with Live Server"

   - Using Python's built-in HTTP server:
     ```bash
     # Python 3
     python -m http.server 5500
     ```

   - Using Node.js http-server:
     ```bash
     # Install http-server globally if you haven't already
     npm install -g http-server
     
     # Start the server
     http-server -p 5500
     ```

3. Open your browser and navigate to:
   - http://localhost:5500 (or the port specified by your server)

## How It Works

The UI widget uses DeepChat v2.2.0, a customizable chat interface library loaded from CDN:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/deep-chat@2.2.0/dist/deepChat.min.js"></script>
```

The chat interface connects to the backend server at `http://localhost:8000/mcp-chat` with streaming enabled:

```javascript
chat.connect = {
  url: "http://localhost:8000/mcp-chat",
  stream: true,
};
```

When a user sends a message:
1. The UI sends the message to the backend server
2. The backend server forwards the request to the OpenAI o3-mini model with MCP tools
3. The LLM may use MCP tools to enhance its response (like searching Katalon knowledge base)
4. The backend streams the response tokens back to the UI
5. The UI displays the response with a typing effect

## Backend Architecture

The backend consists of several key components:

1. **MCPProxyService** (`mcpProxy.ts`):
   - Connects to the MCP server specified in the environment variables
   - Handles streaming responses using the `streamText` function from the AI SDK
   - Manages tool calls through the MCP protocol
   - Tracks which tools were used during the conversation
   - Uses a system prompt focused on Katalon knowledge

2. **AppController** (`app.controller.ts`):
   - Exposes the `/mcp-chat` endpoint
   - Handles incoming requests from the UI
   - Sets up proper headers for server-sent events
   - Streams responses back to the client

3. **OpenAI Configuration** (`openAI.config.ts`):
   - Sets up the OpenAI client using the API key from environment variables
   - Configures the model to use (o3-mini)

4. **Main Application** (`main.ts`):
   - Configures CORS to allow requests from any origin
   - Sets up the NestJS application to run on port 8000

## Customization

You can customize the appearance of the chat widget by modifying:

- The CSS styles in the `<style>` section of `index.html`
- The DeepChat configuration in the JavaScript section
- The avatar image by replacing `./assets/Logo-1_1.png`
- The system prompt in `mcpProxy.ts` to change the AI's behavior

## Troubleshooting

If you encounter issues:

1. Make sure the backend server is running and accessible at `http://localhost:8000`
2. Check browser console for any JavaScript errors
3. Verify that the MCP server URL is correctly set in the backend environment variables
4. Ensure your OpenAI API key is valid and has sufficient credits
5. Check the NestJS server logs for any connection issues with the MCP server
6. Ensure you have proper CORS settings if running on different domains/ports

## Contributing

Feel free to enhance this widget by:
- Adding more customization options
- Implementing additional features
- Improving the UI/UX
- Optimizing performance
- Extending the MCP tool capabilities

## License

[Your license information here]
