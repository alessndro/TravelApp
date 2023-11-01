// import OpenAI from 'openai'

// const OPENAI_API_KEY = process.env.OPENAI_API_KEY

// const openai = new OpenAI({
//     apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true
// })

import { Handler } from '@netlify/functions'

export const handler: Handler = async (event) => {
  // const { name = 'stranger' } = event.queryStringParameters || {}

  // const queryStringParameters = event.queryStringParameters || {};
  // const name = queryStringParameters.name || 'stranger';
  const input  = event.body
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${input}!`,
    }),
  }
}
