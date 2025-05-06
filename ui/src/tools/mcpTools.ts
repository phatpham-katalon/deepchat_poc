import { experimental_createMCPClient } from 'ai';
import { MAX_RETRIES, RETRY_DELAY } from '../config/chatConfig';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Format tools to ensure they're in the correct structure for OpenAI
const formatToolsForOpenAI = (mcpTools: any) => {
  // Log the original tools structure
  console.log('Original MCP tools structure:', mcpTools);
  
  // If tools is already in the correct format, return it
  if (typeof mcpTools === 'object' && !Array.isArray(mcpTools)) {
    return mcpTools;
  }
  
  // If it's not in the expected format, try to convert it
  try {
    // Convert to array if needed
    const toolsArray = Array.isArray(mcpTools) ? mcpTools : Object.values(mcpTools);
    
    // Ensure each tool has the required properties
    const formattedTools = toolsArray.map((tool: any) => {
      // Make sure each tool has at least a name and description
      if (!tool.name) {
        console.error('Tool missing name:', tool);
        throw new Error('Invalid tool format: missing name');
      }
      
      return {
        type: tool.type || 'function',
        function: {
          name: tool.name,
          description: tool.description || `Tool for ${tool.name}`,
          parameters: tool.parameters || { type: 'object', properties: {}, required: [] }
        }
      };
    });
    
    console.log('Formatted tools for OpenAI:', formattedTools);
    return formattedTools;
  } catch (error) {
    console.error('Error formatting tools:', error);
    return mcpTools; // Return original if formatting fails
  }
};

export const initializeMCPTools = async (retries = MAX_RETRIES): Promise<{ client: any; tools: any }> => {
  try {
    console.log('Initializing MCP tools...', { attempt: MAX_RETRIES - retries + 1 });
    
    const client = await experimental_createMCPClient({
      transport: {
        type: 'sse',
        url: process.env.REACT_APP_MCP_SERVER_URL || 'https://poc-docs-mcp-server.daohoangson.workers.dev/sse',
      }
    });
    
    console.log('MCP client created successfully');
    
    const rawTools = await client.tools();
    console.log('Raw MCP tools received:', Object.keys(rawTools));
    
    if (!rawTools || Object.keys(rawTools).length === 0) {
      throw new Error('No tools available from MCP server');
    }
    
    // Format tools for OpenAI compatibility
    const formattedTools = formatToolsForOpenAI(rawTools);
    
    return { client, tools: formattedTools };
  } catch (error) {
    console.error('Failed to initialize MCP tools:', error);
    
    if (retries > 0) {
      console.log(`Retrying initialization... ${retries} attempts left`);
      await wait(RETRY_DELAY);
      return initializeMCPTools(retries - 1);
    }
    
    throw new Error(`Failed to initialize MCP tools after ${MAX_RETRIES} attempts: ${(error as Error).message}`);
  }
};
