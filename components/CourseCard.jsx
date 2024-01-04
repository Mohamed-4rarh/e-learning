import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CourseCard({img, duration, level, creator, title, description, path}) {
  return (
    <div 
        className='bg-[#fff] border border-border rounded-lg overflow-hidden p-5 sm:p-6 md:p-7 lg:p-10'
    >
        <Image 
            src={img}
            width={800}
            height={380}
            unoptimized
            alt='course'
        />
        <div
            className='mt-6 sm:mt-7 md:mt-8 flex gap-5 flex-col lg:flex-row lg:justify-between items-left lg:items-center'
        >
            <div className='flex gap-2 sm:gap-4'>
                <span 
                    className='flex capitalize text-[14px] sm:text-[16px] md:text-[18px] font-medium text-paragraph-color rounded-lg border border-border py-[8px] px-[14px] md:py-[10px] md:px-[16px]'
                >
                    {duration}
                </span>
                <span 
                    className='flex capitalize text-[14px] sm:text-[16px] md:text-[18px] font-medium text-paragraph-color rounded-lg border border-border py-[8px] px-[14px] md:py-[10px] md:px-[16px]'
                >
                    {level}
                </span>
            </div>
            
            <span className='text-head-color m-0 text-[16px] sm:text-[18px] md:text-[20px] capitalize'>{creator}</span>
        </div>
        <h3 
            className='text-head-color font-medium capitalize text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mt-5 sm:mt-6 md:mt-[30px]'
        >
            {title}
        </h3>
        <p
            className='text-paragraph-color text-[14px] sm:text-[16px] md:text-[18px] mt-[10px] sm:mt-[12px] md:mt-[14px] lg:mt-[16px] '
        >{description}</p>
        <Link
            href={'/'}
            className='bg-button-gray font-semibold rounded-lg border border-border flex justify-center py-[14px] px-[24px] sm:py-[16px] md:py-[18px] text-[14px] sm:text-[16px] md:text-[18px] mt-[24px] md:mt-[30px]'
        >
            Get it Now
        </Link>
    </div>
  )
}
