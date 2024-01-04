import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TestimonialCard({review,img, name}) {
  return (
    <div className='border border-border rounded-lg overflow-hidden'>
        <div
            className='bg-[#fff] p-6 sm:p-7 md:p-8 lg:p-9 border-b border-border'
        >
            <p
                className='text-[14px] sm:text-[16px] md:text-[18px] font-medium text-paragraph-color'
            >{review}</p>
        </div>
        <div
            className='flex items-center justify-between bg-card-gray p-6 sm:p-7 md:p-8 lg:p-9'
        >
            <div className='flex gap-2 items-center font-semibold text-[16px] sm:text-[18px] md:text-[20px]'>
                <Image 
                    src={img}
                    width={50}
                    height={50}
                    alt='review user'
                    unoptimized
                />
                {name}
            </div>
            <Link
                href={'/'}
                className='border border-border rounded-lg bg-button-gray py-[14px] px-[16px] md:py-[18px] md:px-[24px] text-[14px] sm:text-[16px] md:text-[18px]'
            >
                Read Full Story
            </Link>
        </div>
    </div>
  )
}
