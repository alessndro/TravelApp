import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mt-15 max-container mx-auto padding-container py-10 2xl:py-20">
            <div className="md:py-8">
                <div className="flex justify-between items-center">                
                    <Link href="/">
                        <Image src='/hilink-logo.svg' alt='logo' width={74} height={29}/>
                    </Link>
                        <div className=' flex gap-2'>
                            <Link className='regular-16 text-gray-50 transition-all hover:font-bold' href="/">
                                Test1
                            </Link>
                            <Link className='regular-16 text-gray-50 transition-all hover:font-bold' href="/">
                                Test2
                            </Link>
                            <Link className='regular-16 text-gray-50 transition-all hover:font-bold' href="/">
                                Test3
                            </Link>
                        </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-black-100 sm:text-center font-normal ">© 2023 <a href="https://flowbite.com/" className="hover:underline">Travels™</a>. All Rights Reserved.</span>
            </div>
        </footer>
  )
}
