import { useState, useEffect } from 'react';
import { DeepChat } from 'deep-chat-react';
import axios from 'axios';
import {useRef} from 'react';
import { api } from '../utils/api';

export const MCPChat: React.FC = () => {
  // State for tracking loading status and errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Reference to the DeepChat component
  const chatRef = useRef<any>(null);
  
  // Effect to add welcome message when component mounts
  useEffect(() => {
    // Add a small delay to ensure the chat component is fully initialized
    const timer = setTimeout(() => {
      if (chatRef.current) {
        // Some implementations of DeepChat might have a programmatic way to add messages
        // This is a placeholder - check DeepChat documentation for the correct method
        console.log('Chat component mounted');
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  /**
   * Handles sending a message to the backend API
   * @param message - The user's message text
   * @returns The response object from the API
   */
  const handleMessage = async (message: string) => {
    // Set loading state to true while waiting for response
    setLoading(true);
    setError(null);
    
    try {
      // Call the backend API with the user's message
      const response = await api.post('/mcp-chat', {
        text: message
      });
      
      setLoading(false);
      return response.data;
    } catch (err: any) {
      // Handle any errors that occur during the API call
      console.error('Error calling MCP API:', err);
      setLoading(false);
      
      const errorMessage = err.response?.data?.text || err.message || 'Unknown error occurred';
      setError(errorMessage);
      
      return {
        text: `Error: ${errorMessage}`
      };
    }
  };

  return (
    <div style={{ height: '100%', margin: 'auto', width: '100%', maxWidth: '800px' }}>
      {/* Display error message if there is one */}
      {error && (
        <div style={{ color: 'red', padding: '10px', marginBottom: '10px', borderRadius: '5px', backgroundColor: '#ffeeee' }}>
          {error}
        </div>
      )}
      
      {/* Display loading indicator when processing a request */}
      {loading && (
        <div style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', backgroundColor: '#eeeeff' }}>
          Processing your request...
        </div>
      )}
      
      {/* DeepChat component for the chat interface */}
      <DeepChat
        ref={chatRef}
        style={{ borderRadius: '10px', height: 'calc(100vh - 100px)' }}
        textInput={{ placeholder: { text: 'Ask about Katalon...' } }}
        connect={{
          stream: false,
          handler: async (body: any, signals: any) => {
            console.log('Received message body:', body);
            
            // Validate the message body
            if (!body?.messages?.length) {
              console.error('Invalid message body:', body);
              await signals.onResponse({
                text: "Invalid message format. Please try again."
              });
              return;
            }

            // Get the last message from the user
            const lastMessage = body.messages[body.messages.length - 1];
            console.log('Last message:', lastMessage);

            // Validate the message content
            if (!lastMessage?.text) {
              console.error('Invalid last message:', lastMessage);
              await signals.onResponse({
                text: "Invalid message content. Please try again."
              });
              return;
            }

            // Process the message and get a response
            const result = await handleMessage(lastMessage.text);
            console.log('Handler result:', result);
            
            // If this is the first message, add a welcome message first
            if (body.messages.length === 1) {
              await signals.onResponse({
                text: "Hello! I can help you with questions about Katalon. What would you like to know?"
              });
              // Small delay before showing the actual response
              await new Promise(resolve => setTimeout(resolve, 500));
            }
            
            // Send the response back to the chat interface
            await signals.onResponse(result);
          }
        }}
        // Note: initialMessages is not used as it's not supported by the component
      />
    </div>
  );
};
