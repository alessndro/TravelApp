import React from 'react'
import Image from 'next/image'

export default function Guide() {
  return (
    <section className='border-2 border-red-500 container max-container padding-container flex flex-col gap-20 py-10 2xl:py-20'>
        <div className='flex flex-col lg:flex-row'>
            <div className='relative lg:w-1/2'>
                <Image 
                    src="/camp.svg"
                    alt='camp icon'
                    width={40}
                    height={40}
                    className='absolute left-[-5px] top-[-35px]'
                />
                <p className='text-green-700'>WE ARE HERE FOR YOU</p>
                <h2 className='bold-32 md:bold-40 mb-5 lg:max-w-xs'>Guide You to Easy Path</h2>
            </div>
            <div className='lg:w-1/2'>
                <p className='regular-16 text-gray-30'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
            </div>
        </div>
        <div className='flex justify-center items-center border bg-bg-img-3 full-w relative z-0 sm:justify-start sm:items-start rounded-2xl'>
            <Image 
                    src="/boat.png"
                    alt='camp icon'
                    width={1440}
                    height={580}
                    className='w-full object-cover object-center overflow-hidden rounded-2xl'
                />
            <div className='p-5 flex justify-start shadow-2xl w-[250px] h-[150px] rounded-2xl absolute bg-white sm:mt-10 sm:ml-10'>
            <Image 
                    src="/meter.svg"
                    alt='camp icon'
                    width={20}
                    height={20}
                    className=''
                />
                <div className='flex flex-col'>
                    <div className=' ml-5'>
                        <p className='text-gray-30 regular-14'>Destination<span className='text-green-500 ml-10 font-bold'>
                            48 min</span></p>
                        <p className='font-bold bold-10'>Aguas Calientes</p>
                    </div>
                    <div className=' ml-5 mt-5'>
                        <p className='text-gray-30 regular-14'>Current Location</p>
                        <p className='font-bold bold-10'>Euteamo Muito</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
