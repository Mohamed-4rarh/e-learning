import Link from 'next/link'
import React from 'react'

export default function HeadTitle({title, description, path}) {
  return (
    <div className='flex flex-col gap-[20px] xl:flex-row xl:items-end xl:justify-between'>
        <div>
            <h3 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-head-color'>{title}</h3>
            <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-2 font-medium text-paragraph-color max-w-[1100px]'>{description}</p>
        </div>
        <Link 
            href={'/'}
            className='text-head-color font-semibold bg-card-gray py-[14px] px-[20px] text-[14px] size-fit sm:text-[16px] md:text-[18px] lg:text-[20px] border border-border rounded-lg'    
        >
            View All
        </Link>
    </div>
  )
}
