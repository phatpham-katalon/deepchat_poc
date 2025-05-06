import { useState, useEffect, useCallback } from 'react';
import { DeepChat } from 'deep-chat-react';
import { streamText, generateText } from 'ai';
import { openaiClient } from '../config/openai';
import { initializeMCPTools } from '../tools/mcpTools';
import { SYSTEM_PROMPT, MAX_RETRIES, RETRY_DELAY } from '../config/chatConfig';

type Message = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

export const OpenAIMCPChat: React.FC = () => {
  const [mcpClient, setMcpClient] = useState<any>(null);
  const [tools, setTools] = useState<any>({});
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const initializeMCP = useCallback(async () => {
    try {
      console.log('Starting MCP initialization...');
      
      const { client, tools: availableTools } = await initializeMCPTools();
      
      // Update state in the correct order
      setTools(availableTools);
      setMcpClient(client);
      setIsInitialized(true);
      setError(null);
      
      console.log('MCP initialization completed successfully');
      console.log('Available tools:', Object.keys(availableTools));
      return true;
    } catch (err: any) {
      console.error('MCP initialization failed with error:', {
        name: err?.name || 'Unknown',
        message: err?.message || 'Unknown error',
        stack: err?.stack,
        cause: err?.cause
      });
      setError(err instanceof Error ? err.message : 'Failed to connect to MCP server');
      setIsInitialized(false);
      setMcpClient(null);
      setTools({});
      return false;
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      if (isMounted) {
        await initializeMCP();
      }
    };

    init();

    return () => {
      isMounted = false;
      if (mcpClient) {
        console.log('Cleaning up MCP client...');
        mcpClient.close();
      }
    };
  }, [initializeMCP]);

  const handleMessage = async (question: string) => {
    console.log('Handling message:', { 
      question, 
      isInitialized, 
      hasClient: !!mcpClient, 
      hasTools: !!tools,
      toolsKeys: tools ? Object.keys(tools) : [],
      clientStatus: mcpClient ? 'connected' : 'disconnected'
    });

    // Validate input
    if (!question || typeof question !== 'string') {
      console.error('Invalid question:', question);
      return {
        text: "Invalid input. Please provide a valid question."
      };
    }

    // Check initialization status
    if (!isInitialized || !mcpClient || !tools) {
      console.error('System not ready:', { 
        isInitialized, 
        hasClient: !!mcpClient, 
        hasTools: !!tools,
        toolsKeys: tools ? Object.keys(tools) : [],
        clientStatus: mcpClient ? 'connected' : 'disconnected',
        error: error || 'No error message available'
      });
      
      // Try to reinitialize if not ready
      console.log('Attempting to reinitialize MCP...');
      const reinitialized = await initializeMCP();
      console.log('Reinitialization result:', reinitialized);
      
      if (!reinitialized) {
        return {
          text: error || "System is not ready. Please try again in a moment."
        };
      }
    }

    try {
      console.log('Available tools:', Object.keys(tools));
      console.log('Tools details:', JSON.stringify(tools, null, 2));
      
      // Add user message to chat history
      const updatedHistory = [...chatHistory, { role: 'user' as const, content: question }];
      setChatHistory(updatedHistory);
      
      // Use streamText instead of generateText for better streaming support
      let responseText = '';
      let toolCallsUsed = false;
      
      const response = await generateText ({
        model: openaiClient,
        tools,
        toolChoice: "auto", // Force tool usage
        temperature: 0.7,
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPT
          },
          ...updatedHistory
        ]
      });
      
    
      
      console.log('AI Response:', response);
      console.log('Tools were used:', toolCallsUsed);

      // Add AI response to chat history
      setChatHistory([...updatedHistory, { role: 'assistant' as const, content: response.text }]);

      return {
        text: response.text
      };
    } catch (error) {
      console.error("Error processing message:", error);
      return {
        text: "Sorry, there was an error processing your request."
      };
    }
  };

  return (
    <div style={{ height: '100%', margin: 'auto', width: '20%' }}>
      {error && (
        <div style={{ color: 'red', padding: '10px', marginBottom: '10px' }}>
          Error: {error}
        </div>
      )}
      <DeepChat
        style={{ borderRadius: '10px' }}
        textInput={{ placeholder: { text: 'Type a message...' } }}
        connect={{
          stream: true,
          handler: async (body: any, signals: any) => {
            console.log('Received message body:', body);
            
            if (!body?.messages?.length) {
              console.error('Invalid message body:', body);
              await signals.onResponse({
                text: "Invalid message format. Please try again."
              });
              return;
            }

            const lastMessage = body.messages[body.messages.length - 1];
            console.log('Last message:', lastMessage);

            if (!lastMessage?.text) {
              console.error('Invalid last message:', lastMessage);
              await signals.onResponse({
                text: "Invalid message content. Please try again."
              });
              return;
            }

            const result = await handleMessage(lastMessage.text);
            console.log('Handler result:', result);
            await signals.onResponse(result);
          }
        }}
      />
    </div>
  );
};
