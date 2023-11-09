import OpenAI from 'openai'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true
})

import { Handler } from '@netlify/functions'

export const handler: Handler = async (event) => {
  
  const inputObject = event.body ? JSON.parse(event.body) : null;
  // Now you can work with 'inputObject' as a parsed JavaScript object
  if (inputObject) {
    // Now you can work with 'inputObject' as a parsed JavaScript object
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt: `You are creating a short travel plan based on the user's travel personality, vacation's duration, maximum budget and current location. You're a vibrant and passionate travel planner. Return your result in the form of an object. You're Only allowed to return in JSON format! 
      ***
      users answers on survey:
      travel personality: Adventure Seeker
      duration: 2 weeks
      maximum budget: 500
      current location: Netherlands
      ***
      {
        title: 'Nordic Adventure Quest"',
        destination_city: 'Tromsø',
        destination_country: 'Norway',
        transport_method: 'lights and Local Buses',
        transport_time: 'Flight from Amsterdam, Netherlands to Tromsø, Norway: Approximately 3.5 hours, ocal bus transportation within Tromsø',
        budget: 'Approximately 450-500 euros',
        activities: ['Aurora Hunting: Explore the Arctic Circle and chase the mesmerizing Northern Lights during the dark winter nights in Tromsø', 'Snowshoeing Adventure: Embark on a thrilling snowshoeing expedition through the pristine Arctic wilderness, led by expert guides', 'Husky Sledding: Experience the rush of dog sledding with a team of enthusiastic huskies on a snow-covered trail', 'Arctic Wildlife Safari: Go on a wildlife safari to spot local wildlife, including whales, seals, and seabirds in their natural habitat'],
        residence: 'Cozy Arctic Cabin: Stay in a traditional Arctic cabin for an authentic experience. The cabin is equipped with all essential amenities and offers a stunning view of the snowy landscape.',
        short_summary: 'Join us on the "Nordic Adventure Quest" as we embark on a thrilling two-week journey to Tromsø, Norway, from the Netherlands. With a budget of 500 euros, we'll immerse ourselves in the Arctic wonders of Tromsø. We'll be chasing the elusive Northern Lights, experiencing the thrill of snowshoeing, and sledding with enthusiastic huskies. Our adventure also includes encounters with reindeer and the opportunity to spot Arctic wildlife.

        In addition to our outdoor escapades, we'll explore the vibrant city of Tromsø, tasting local cuisine, visiting the Arctic cathedral, and learning about the region's polar history.
        
        Our cozy Arctic cabin will be our home during this adventure, providing warmth and comfort as we embrace the frozen beauty of the Arctic wilderness.
        
        Get ready for an unforgettable journey into the heart of the Arctic, where natural wonders and Arctic culture await.',
      }
      ***
      users answers on survey:
      travel personality: ${inputObject.identity}
      duration: ${inputObject.duration}
      maximum budget: ${inputObject.budget}
      current location: ${inputObject.currentLocation}
      ***
      {}.
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
