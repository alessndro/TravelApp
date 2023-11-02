import React from 'react';
import Image from 'next/image';
import Button from './Button';

export default function Hero() {
  return (
    <section className='container max-container padding-container flex flex-col gap-20 py-10 2xl:py-20 lg:flex-row'>
        <div className='hero-map' />
        
        {/* LEFT SIDE OF HERO */}
        <div className='relative z-20  flex flex-1 flex-col lg:w-1/2'>
            <Image 
                src="/camp.svg"
                alt='camp icon'
                width={50}
                height={50}
                className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
            />
             <h1 className='bold-52 lg:bold-88'>AI generated Personal Travel Plan</h1>
             <p className='regular-16 text-gray-30 mt-5'>Lorem ipsum dolor do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

             <div className='flex items-center justify-start mt-5'>
                <Image src='/star.svg' width={20} height={20} alt={'star'} />
                <Image src='/star.svg' width={20} height={20} alt={'star'} />
                <Image src='/star.svg' width={20} height={20} alt={'star'} />
                <Image src='/star.svg' width={20} height={20} alt={'star'} />
                <Image src='/star.svg' width={20} height={20} alt={'star'} />
                <p className='ml-5 medium-14'>198k<span className='ml-1 text-gray-30'>Verified Reviews</span></p>
             </div>

             <div className='flex flex-col w-full gap-3 mt-10 sm:flex-row'>
                <Button theme='btn_green' title="Start Now" type="button" />
                <Button theme="btn_white_text" title="How Does it Work?" icon="/play.svg" />
             </div>
        </div>
        <div className=' relative z-20  flex flex-1 flex-col  justify-start items-start lg:w-1/2'>
            <div className='bg-green-90 relative rounded-3xl px-5 py-5'>
                
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col mr-10'>
                        <p className='text-gray-20 medium-14'>Location</p>
                        <p className='text-white bold-16 '>Praia da Adraga</p>
                    </div>
                </div>

                <div className='flex flex-row mt-5'>
                    <div className='flex flex-col'>
                        <p className='text-gray-20 text-sm'>Distance</p>
                        <p className='text-white bold-16 '>215 km</p>
                    </div>
                    <div className='flex flex-col ml-10'>
                        <p className='text-gray-20 text-sm'>Elvation</p>
                        <p className='text-white bold-16 '>35 m</p>
                    </div>
                </div>
                <Image className='absolute top-5 right-5' src='/white-close.png' width={20} height={5} alt={'star'} />
            </div>
        </div>
       
    </section>
  );
}
