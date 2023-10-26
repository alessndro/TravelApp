import React from 'react'
import Image from 'next/image'

export default function Button(props) {
  return (
    <button className={`${props.theme} flexCenter gap-2 rounded-full border`}>
        {props.icon && <Image src={props.icon} width={15} height={15} alt="small user icon" />}
        <label className='bold-16 whitespace-nowrap'>{props.title}</label>
    </button>
  )
}
