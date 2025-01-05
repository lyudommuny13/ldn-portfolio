import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export const runtime = 'edge';

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.trim() === '') {
    return new Response(
      JSON.stringify({ error: 'OpenAI API key is missing or invalid' }), 
      { status: 500 }
    );
  }

  try {
    const { messages } = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: 'Invalid messages format. Expected an array of messages.' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    console.log(`Processing chat request with ${messages.length} messages`);

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant. Provide clear and concise responses."
        },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500,
    }).catch(error => {
      console.error('OpenAI API Error:', {
        message: error.message,
        code: error.code,
        type: error.type
      });
      throw error;
    });

    console.log('Successfully created chat completion stream');
    
    const stream = OpenAIStream(response as any);
    return new StreamingTextResponse(stream);
    
  } catch (error: any) {
    console.error('Chat API Error:', {
      message: error.message,
      name: error.name,
      code: error.code,
      type: error.type,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
    
    const errorMessage = error.code === 'invalid_api_key' 
      ? 'Invalid API key configuration'
      : error.code === 'rate_limit_exceeded'
      ? 'Rate limit exceeded. Please try again later'
      : error.message || 'An unexpected error occurred';

    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        code: error.code || 'unknown_error',
        type: error.type || 'server_error'
      }), 
      {
        status: error.code === 'invalid_api_key' ? 401 : 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
} 