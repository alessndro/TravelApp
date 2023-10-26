import React from 'react'
import Image from 'next/image';

export default function Location(props) {
  return (
    <div className={`h-full w-full min-w-[1100px] ${props.backgroundImage} p-10 lg:rounded-3xl`}>
        <div className='flex flex-col justify-between h-full'>
            <div className='flex-center flex'>
                <div className='bg-green-500 rounded-full p-4'>
                <Image className='' src='/folded-map.svg' width={30} height={30} alt={'star'} />
                </div>
                <div className='text-white flex flex-col justify-center ml-3'>
                    <h5 className='bold-16 font-black lg:bold-20'>{props.name}</h5>
                    <p className='regular-14 text-gray-200 lg:regular-16'>{props.location}</p>
                </div>
            </div>

            <div className='flex items-center'>
                <div className='flex items-center'>
                    <Image className='md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]' src='/person-1.png' width={20} height={20} alt={'person'} />
                    <Image className='ml-[-5px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]'src='/person-2.png' width={20} height={20} alt={'person'} />
                    <Image className='ml-[-5px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]'src='/person-3.png' width={20} height={20} alt={'person'} />
                    <Image className='ml-[-5px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]' src='/person-4.png' width={20} height={20} alt={'person'} />
                </div>
                <p className='medium-14 text-white ml-2 lg:regular-16'>{props.joined}</p>
            </div>
        </div>
    </div>
  )
}
