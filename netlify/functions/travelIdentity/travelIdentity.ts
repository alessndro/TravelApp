import OpenAI from 'openai'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true
})

import { Handler } from '@netlify/functions'

export const handler: Handler = async (event) => {
  const inputObject = event.body ? JSON.parse(event.body) : null;
  if (inputObject) {
    // Now you can work with 'inputObject' as a parsed JavaScript object
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt: `You are creating a short survey to determine a person's travel personality based on their preferences in five categories: type of travel, location, activity, food, and evening activities. The survey will classify individuals into maximum one of the following travel personalities:

      1. **Adventurous Explorer:** These travelers seek adventure and excitement, favoring destinations with thrilling activities like hiking and rafting. They are content with basic accommodations.
      
      2. **Culture and City Explorer:** This type is fascinated by the history, culture, and city life of places they visit. They enjoy exploring cities, museums, and local cuisine.
      
      3. **Luxury Enthusiast:** For these travelers, luxury and comfort are paramount. They prefer five-star hotels, gourmet restaurants, and exclusive experiences.
      
      4. **Relaxation and Nature Lover:** These individuals seek relaxation and a connection with nature, enjoying serene beaches and wellness retreats. Comfortable accommodations and natural beauty are essential.
      
      5. **Budget Traveler:** Some travelers prefer budget-friendly experiences and are resourceful when it comes to getting value for their money. They opt for cost-effective accommodations and activities.
      ****
      users answers on survey:
      type of travel: ${inputObject.type}
      Location: ${inputObject.location}
      Activity: ${inputObject.activity}
      Food: ${inputObject.food}
      Evening: ${inputObject.evening}

      ***
      Inside the response dont repeat the answers of the survey. Try to rephrase them and give different examples.
      Your response: Your Unique Travel personality is [insert personality]. Based on your survey responses, you're a true [Travel Personality Name]. Your travel style is all about [Brief Description of Personality]. You love [Specific Travel Preferences].
      `,
      max_tokens: 500,
    });

    const data = response.choices[0].text;
    console.log('inside severless function')
    console.log(data)
    return {
      statusCode: 200,
      body: JSON.stringify({
        value: data, 
      }),
    };
  } else {
    // Handle the case when event.body is null
    return {
      statusCode: 400, // Or another appropriate status code
      body: JSON.stringify({
        error: 'Invalid request body',
      }),
    };
  }
};
