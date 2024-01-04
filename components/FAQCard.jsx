import { Plus } from 'lucide-react'
import React from 'react'

export default function FAQCard({faq}) {
  return (
    <div className='rounded-lg border border-border w-full flex justify-between items-center py-[20px] px-[24px] lg:py-[24px] lg:px-[40px] xl:py-[30px] xl:px-[50px]'>
        <h3 className='text-head-color text-[16px] md:text-[18px] lg:text-[20px] font-medium'>{faq}</h3>
        <div
            className='p-[10px] lg:p-[12px] rounded-lg bg-[#fff4e5]'
        ><Plus className='w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px]' /></div>
    </div>
  )
}
