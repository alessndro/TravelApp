import React from 'react'
import Image from 'next/image'

export default function Features() {
  return (
    <section className='  flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 lg:flex-row'>
        <div className='max-container padding-container container relative w-full flex flex-row'>
            <div className='flex lg:w-[40%] relative'>
                <Image 
                src='/phone1.png' 
                alt="phone"
                width={440}
                height={700}
                className='absolute z-10 max-w-[1500px] rotate-[15deg] hidden lg:flex md:-ml-30 lg:relative'/>
            </div>

            <div className=' z-20 flex w-full flex-col relative lg:w-[60%]'>
            <Image 
                src="/plane.svg"
                alt='camp icon'
                width={50}
                height={50}
                className='absolute left-[-5px] top-[-40px] w-10 lg:w-[50px]'
            />
             <h2 className='bold-32 md:bold-40 lg:mb-10'>How Does Traveler's Insight Work?</h2>
        
             <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-10'>
                
                <div className='flex flex-col mt-5'>
                    <div className='bg-green-500 rounded-full p-3 w-[50px] items-start'>
                        <Image 
                            src="/map.svg"
                            alt='camp icon'
                            width={30}
                            height={30}
                            className=''
                        />
                    </div>
                    <div className='bg-white-100'>
                    <h3 className='bold-20 lg:bold-32 lg:mt-5'>Travel Personality Survey</h3>
                        <p className='regular-14 text-gray-30 mt-2'>Discover your unique travel identity through our comprehensive Travel Personality Survey. Answer thought-provoking questions about your travel preferences, interests, and style to uncover the adventurer within you.</p>
                    </div>
                </div>

                <div className='flex flex-col mt-5'>
                <div className='bg-green-500 rounded-full p-3 w-[50px] items-start'>
                        <Image 
                            src="/map.svg"
                            alt='camp icon'
                            width={30}
                            height={30}
                            className='flex-1'
                        />
                    </div>
                    <h3 className='bold-20 lg:bold-32 lg:mt-5'>Cutting-Edge AI Technology</h3>
                    <p className='regular-14 text-gray-30 mt-2'>We leverage state-of-the-art AI technology to create personalized travel itineraries tailored to your individuality. Our AI engine analyzes your survey responses and user profile to generate custom travel plans that perfectly align with your preferences.</p>
                </div>

                <div className='flex flex-col mt-5'>
                <div className='bg-green-500 rounded-full p-3 w-[50px] items-start'>
                        <Image 
                            src="/map.svg"
                            alt='camp icon'
                            width={30}
                            height={30}
                            className='flex-1'
                        />
                    </div>
                    <h3 className='bold-20 lg:bold-32 lg:mt-5'>Location and Vacation Customization</h3>
                    <p className='regular-14 text-gray-30 mt-2'>Your adventure starts with you. Share your starting location and vacation preferences, and watch as we customize your journey to match your desires. Whether you're looking for a serene escape or an action-packed adventure, we've got you covered</p>
                </div>

                <div className='flex flex-col mt-5'>
                    <div className='bg-green-500 rounded-full p-3 w-[50px] items-start'>
                        <Image 
                            src="/map.svg"
                            alt='camp icon'
                            width={30}
                            height={30}
                            className='flex-1'
                        />
                    </div>
                    <h3 className='bold-20 lg:bold-32 lg:mt-5'>Activities Tailored to Your Identity</h3>
                    <p className='regular-14 text-gray-30 mt-2'>We handpick activities and experiences that resonate with your unique travel personality. From cultural explorations and outdoor adventures to culinary delights, your itinerary is a reflection of who you are and what you love.</p>
                </div>

             </div>
            </div>
        </div>
    </section>
  )
}
