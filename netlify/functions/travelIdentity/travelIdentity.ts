import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  // const { name = 'stranger' } = event.queryStringParameters || {}

  const queryStringParameters = event.queryStringParameters || {};
  const name = queryStringParameters.name || 'stranger';
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  }
}
