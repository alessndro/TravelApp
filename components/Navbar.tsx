'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Button from './Button'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    function toggleMenu() {
        setIsMenuOpen(prevMenu => !prevMenu)
    }
  return (
    <nav className='container flexBetween max-container padding-container relative z-30 py-5'>
        <Link href="/">
            <h3 className='bold-18'>Traveler's Insight</h3>
        </Link>

        <div className='hidden gap-5 lg:flex'>
            <Link className='regular-16 text-gray-50 transition-all hover:font-bold' href="/personality">
                Personality Test
            </Link>
            <Link className='regular-16 text-gray-50 transition-all hover:font-bold' href="/">
                Travel plan
            </Link>
        </div>

        <div className='hidden lg:flex' >
            <Link href="/personality"> <Button type="button" title='Get Started' theme='btn_dark_green' icon="/user.svg"/></Link>
           
        </div>
       
        {isMenuOpen ?  <Image onClick={toggleMenu} className="swirl-in-fwd lg:hidden" src='/close.png' alt='logo' width={30} height={30}/> : <Image onClick={toggleMenu} className="cursor-pointer inline-block lg:hidden"src="/menu.svg" alt="hamburger menu icon" width={30} height={30}/>}

        {isMenuOpen && <div className='slide-in-fwd-center shadow-md py-5 px-10 right-20 top-10 flex flex-col items-center justify-center gap-5 transition-all absolute bg-white text-center lg:hidden'>
            
        
            <div className='flex flex-col items-center justify-center gap-3'>
                <Link className='regular-16 text-gray-50 transition-all hover:font-bold' href="/">
                    Test1
                </Link>
                <Link className='regular-16 text-gray-50 transition-all hover:font-bold' href="/">
                    Test2
                </Link>
                <Link className='regular-16 text-gray-50 transition-all hover:font-bold' href="/destination">
                    Destination
                </Link>

                <div className='flex' >
                    <Button type="button" title='Get Started' theme='btn_dark_green' icon="/user.svg"/>
                </div>
            </div>
        </div>}
    </nav>


  )
}
