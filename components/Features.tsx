import React from 'react'
import Image from 'next/image'

export default function Features() {
  return (
    <section className='border-2 border-red-500 flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 lg:flex-row'>
        <div className='max-container padding-container container relative w-full flex flex-row'>
            <div className='flex lg:w-[40%] relative'>
                <Image 
                src='/phone.png' 
                alt="phone"
                width={440}
                height={700}
                className='absolute z-10 max-w-[1500px] rotate-[15deg] hidden lg:flex md:-ml-30 lg:relative'/>
            </div>

            <div className='border border-yellow-500 z-20 flex w-full flex-col relative lg:w-[60%]'>
            <Image 
                src="/camp.svg"
                alt='camp icon'
                width={50}
                height={50}
                className='absolute left-[-5px] top-[-40px] w-10 lg:w-[50px]'
            />
             <h2 className='bold-32 md:bold-40 lg:mb-10'>Our features</h2>
        
             <div className='flex flex-col border lg:grid lg:grid-cols-2 lg:gap-10'>
                
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
                    <h3 className='bold-20 lg:bold-32 lg:mt-5'>Real Maps Can be Offline</h3>
                        <p className='regular-14 text-gray-30 mt-2'>We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location</p>
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
                    <h3 className='bold-20 lg:bold-32 lg:mt-5'>Real Maps Can be Offline</h3>
                    <p className='regular-14 text-gray-30 mt-2'>We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location</p>
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
                    <h3 className='bold-20 lg:bold-32 lg:mt-5'>Real Maps Can be Offline</h3>
                    <p className='regular-14 text-gray-30 mt-2'>We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location</p>
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
                    <h3 className='bold-20 lg:bold-32 lg:mt-5'>Real Maps Can be Offline</h3>
                    <p className='regular-14 text-gray-30 mt-2'>We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location</p>
                </div>

             </div>
            </div>
        </div>
    </section>
  )
}
