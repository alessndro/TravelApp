import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mt-15 max-container mx-auto padding-container py-10 2xl:py-20">
            <div className="md:py-8">
                <div className="flex justify-between items-center">                
                    <Link href="/">
                        <h3 className='bold-18'>Traveler's Insight</h3>
                    </Link>
                        <div className=' flex gap-2'>
                        <Link className='regular-16 text-gray-50 transition-all hover:font-bold' href="/personality">
                            Travel Personality
                        </Link>
                        <Link className='regular-16 text-gray-50 transition-all hover:font-bold' href="/travelItenary">
                            Travel Plan
                        </Link>
                        </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-black-100 sm:text-center font-normal ">© 2023 <a href="https://flowbite.com/" className="hover:underline">Travels™</a>. All Rights Reserved.</span>
            </div>
        </footer>
  )
}
