import React from 'react'
import Location from './Location'
import Image from 'next/image'

export default function Travel() {


  return (
    <section className='border border-red-600 container max-container py-10 lg:padding-container relative 2xl:py-20'>
        <div className='flex hide-scrollbar overflow-x-auto justify-start gap-8 h-[340px] border-2 border-green-50 relative lg:h-[400px] xl:h-[640px]'>
                <Location name="Cultural Explorer" location="Art and Culture Unveiled: 4-Day Dive into Rome's Heritage" joined="50+ Joined" backgroundImage="bg-bg-img-1" />
                <Location name="Adventure Seeker" location="Wilderness Wanderlust: 10-Day Adventure Camping Expedition" joined="100+ Joined" backgroundImage="bg-bg-img-2" />
            </div>
        <div className='w-full padding-container mt-10 border border-green-400 z-20 relative lg:-mt-20 lg:flexEnd'>
                <div className='bg-green-500 rounded-xl text-white p-4 full-w lg:max-w-lg overflow-hidden lg:py-5 lg:px-10'>
                    <h2 className='regular-20 md:regular-32 mb-3 lg:mb-5'>Feeling lost, Not Knowing Where to go?</h2>
                    <p className='regular-14 text-gray-200 md:regular-16'>Your extraordinary adventure begins here. We make travel planning effortless. With Traveler's Insight, you don't just travel; you embark on a tailor-made expedition that transcends the ordinary. Join us today, and let your inner explorer shine.</p>
                    <Image 
                        src="/quote.svg"
                        alt="camp-2"
                        width={186}
                        height={219}
                        className="camp-quote"
                    />
                </div>
                
        </div> 
       
    

            {/* <div className='flex hide-scrollbar overflow-x-auto justify-start gap-8 h-[340px] border-2 border-green-50 relative z-10 lg:h-[400px] xl:h-[640px]'>
                <Location name="Putuk Truno Camp" location="Prigen, Pasuruan" joined="50+ Joined" backgroundImage="bg-bg-img-1" />
                <Location name="Putuk Truno Camp" location="Prigen, Pasuruan" joined="50+ Joined" backgroundImage="bg-bg-img-2" />
            </div>
            <div className='w-full px-4 py-6 mt-10 border border-red-400 z-20 lg:-mt-20 lg:flexEnd'>
                <div className='bg-green-500 rounded-xl text-white p-4 full-w'>
                    <h2 className='regular-24 md:regular-32'>Feeling lost, Not Knowing Where to go?</h2>
                </div>
            </div> */}

               {/* <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div> */}
    </section>
  )
}
