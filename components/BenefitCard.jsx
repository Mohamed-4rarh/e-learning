import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function BenefitCard({number, title, description}) {
  return (
    <div
      className='bg-[#fff] grid rounded-lg border border-border p-[20px] sm:p-[30px] md:p-[40px] '
    >
      <h1
        className='font-bold text-head-color text-right text-[50px] sm:text-[60px] md:text-[70px] mb-2'
      >
        {number}
      </h1>
      <h3
        className='font-semibold text-head-color text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] m-0'
      >
        {title}
      </h3>
      <p
        className='font-medium text-paragraph-color text-[14px] sm:text-[16px] md:text-[18px] my-5 lg:my-6'
      >
        {description}
      </p>
      <Link
        href={'/'}
        className='flex justify-self-end w-fit bg-button-gray border border-border rounded-lg p-2 sm:p-3 lg:p-4'
      >
        <ArrowUpRight 
          className='text-main-orange w-[26px] h-[26px] md:w-[28px] md:h-[28px] lg:w-[34px] lg:h-[34px]'
        />
      </Link>  
    </div>
  )
}
