import React from 'react'

export default function AchievementCard({icon, title, achieve}) {
  return (
    <div
        className='bg-[#fff] rounded-lg border border-border p-[30px] md:p-[35px] lg:p-[40px] xl:p-[45px] 2xl:p-[50px]'
    >
        <div
            className='rounded-lg w-fit border border-[#FFEACC] bg-[#FFF9F0] p-[14px] lg:p-[16px]'
        >
            {icon}
        </div>

        <h3
            className='text-head-color font-medium mt-6 mb-2 text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]'
        >
            {title}
        </h3>

        <p className='text-paragraph-color text-[14px] md:text-[16px] xl:text-[18px]'>
            {achieve}
        </p>
    </div>
  )
}
