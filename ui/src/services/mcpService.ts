import { DeepChat } from 'deep-chat';

export const mcpService = {
  chat: async (body: { messages: { text: string }[] }) => {
    const response = await fetch('http://localhost:8080/mcp-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: body.messages[body.messages.length - 1].text
      }),
    });
    return response.json();
  }
}; 