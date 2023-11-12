import React from 'react'
import Location from './Location'
import Image from 'next/image'

export default function Travel() {


  return (
    <section className=' container max-container py-10 lg:padding-container relative 2xl:py-20'>
        <div className='flex hide-scrollbar overflow-x-auto justify-start gap-8 h-[340px] relative lg:h-[400px] xl:h-[640px]'>
                <Location name="Cultural Explorer" location="Art and Culture Unveiled: 4-Day Dive into Rome's Heritage" joined="50+ Joined" backgroundImage="bg-bg-img-1" />
                <Location name="Adventure Seeker" location="Wilderness Wanderlust: 10-Day Adventure Camping Expedition" joined="100+ Joined" backgroundImage="bg-bg-img-2" />
            </div>
        <div className='w-full padding-container mt-10  z-20 relative lg:-mt-20 lg:flexEnd'>
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
    </section>
  )
}
