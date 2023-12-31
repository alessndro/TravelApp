import React from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link'

export default function Hero() {
  return (
    <section className='container max-container padding-container flex flex-col gap-20 py-10 2xl:py-20 lg:flex-row'>
        <div className='hero-map' />
        
        {/* LEFT SIDE OF HERO */}
        <div className='relative z-20  flex flex-1 flex-col lg:w-1/2'>
            <Image 
                src="/plane.svg"
                alt='plane icon'
                width={50}
                height={50}
                className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]'
            />
             <h1 className='bold-52 lg:bold-64'>Let's Craft Your Dream Journey! </h1>
             <p className='regular-16 text-gray-30 mt-5'>Step into a world of personalized exploration where your journey begins with understanding your travel personality. Take our immersive travel personality test, and watch as your desires, curiosities, and dreams shape the path to your next great adventure. </p>

             <div className='flex items-center justify-start mt-5'>
                <Image src='/star.svg' width={20} height={20} alt={'star'} />
                <Image src='/star.svg' width={20} height={20} alt={'star'} />
                <Image src='/star.svg' width={20} height={20} alt={'star'} />
                <Image src='/star.svg' width={20} height={20} alt={'star'} />
                <Image src='/star.svg' width={20} height={20} alt={'star'} />
                <p className='ml-5 medium-14'>50k<span className='ml-1 text-gray-30'>Verified Reviews</span></p>
             </div>

             <div className='flex flex-col w-full gap-3 mt-10 sm:flex-row'>
                <Link href="/personality">   <Button theme='btn_green' title="Start Personality test" type="button" /></Link>
                <Link href="/travelItenary"> <Button theme="btn_white_text" title="Directly to Travel Plan" icon="/play.svg" /></Link>
             </div>
        </div>
        <div className=' relative z-20  flex flex-1 flex-col  justify-start items-start lg:w-1/2'>
            <div className='bg-green-90 relative rounded-3xl px-5 py-5'>
                
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col mr-10'>
                        <p className='text-gray-20 medium-14'>Travel Personality</p>
                        <p className='text-white bold-16 '>Adventure Seeker</p>
                    </div>
                </div>

                <div className='flex flex-row mt-5'>
                    <div className='flex flex-col'>
                        <p className='text-gray-20 text-sm'>Suggested Location</p>
                        <p className='text-white bold-16 '>Camping De Paris</p>
                    </div>
                    <div className='flex flex-col ml-10'>
                        <p className='text-gray-20 text-sm'>Days</p>
                        <p className='text-white bold-16 '>7</p>
                    </div>
                    
                </div>
                
                <Image className='absolute top-5 right-5' src='/white-close.png' width={20} height={5} alt={'star'} />
            </div>
        </div>
       
    </section>
  );
}
