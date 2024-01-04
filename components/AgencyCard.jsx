import Image from 'next/image'
import React from 'react'

export default function AgencyCard({img}) {
  return (
    <div
        className='py-[20px] px-[30px] lg:py-[30px] lg:px-[40px] flex'
    >
        <Image 
            src={img}
            width={70}
            height={35}
            alt='agency'
            unoptimized
        />
    </div>
  )
}
