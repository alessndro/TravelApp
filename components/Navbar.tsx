import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='border-2 flexBetween max-container padding-container relative z-30 py-5'>
        <Link href="/">
            <Image src='/hilink-logo.svg' alt='logo' width={74} height={29}/>
        </Link>
    </nav>
  )
}
