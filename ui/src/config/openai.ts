import { createOpenAI } from '@ai-sdk/openai';

// Create OpenAI client with API key
const openai = createOpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY || ''
});

export const openaiClient = openai.chat('gpt-4o'); 