import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'

export default function GetApp() {
  return (
    <section className=' container max-container flex flex-col py-10 2xl:py-20 lg:padding-container'>
        <div className='border flex flex-col border-green-500 p-5 relative w-full bg-pattern bg-center bg-cover bg-no-repeat px-6 py-12 text-white gap-10 lg:px-20 md:flex-row md:rounded-2xl lg:rounded-3xl'>
            
            <div className='flex flex-col justify-center sm:w-1/2'>
                <h2 className='bold-32 md:bold-40'>Start Traveling Now!</h2>
                <p className='mt-5 max-w-lg'>Are you ready for a journey that's uniquely yours? Unleash the power of AI with Traveler's Insight and embark on your dream adventure. 🌍✈️</p>
                <div className='flex flex-col gap-3 mt-5 lg:flex-row'>
                  <Link href="/personality"><Button type="button" title="Start your Personality test" theme="btn_white"/></Link>
                    {/* <Button 
                        type="button"
                        title="Play Store"
                        icon="/android.svg"
                        theme="btn_dark_green_outline"
                        /> */}
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Image src="/phones1.png" alt="phones" width={350} height={370} />
            </div>
       </div>
    </section>
  )
}


// max-container relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl;