import { createOpenAI } from '@ai-sdk/openai';
import { config } from 'dotenv';

// Load environment variables
config();

const apiKey = process.env.OPENAI_API_KEY;
console.log('OpenAI API Key:', apiKey ? 'Defined (length: ' + apiKey.length + ')' : 'Undefined');

const openai = createOpenAI({
  apiKey: apiKey || ''
});

export const openaiClient = openai.chat('o3-mini');
