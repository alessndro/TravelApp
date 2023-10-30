import React from 'react'
import Image from 'next/image'

type ButtonProps = {
  theme: string; // Specify the appropriate type for theme
  icon?: string; // Make icon an optional string prop
  title: string;
  type?: string;
};

export default function Button(props: ButtonProps) {
  
  return (
    <button className={`${props.theme} flexCenter gap-2 rounded-full border`}>
        {props.icon && <Image src={props.icon} width={15} height={15} alt="small user icon" />}
        <label className='bold-16 whitespace-nowrap'>{props.title}</label>
    </button>
  )
}
