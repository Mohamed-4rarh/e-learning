import React from 'react'

export default function CustomHero({header, description}) {
  return (
    <main className='mt-[50px] md:mt-[60px] lg:mt-[70px] xl:mt-[80px]'>
        <div className="wrapper flex items-start gap-4 flex-wrap pb-[50px] xl:px-[40px] border-b-[1px] border-[#E4E4E7]">
            <div className='flex-1 min-w-[320px]'>
                <h1
                    className='text-head-color font-bold text-[28px] sm:text-[33px] md:text-[38px] lg:text-[43px] xl:text-[48px]'
                >
                    { header }
                </h1>
            </div>
            <div className='flex-1 min-w-[300px]'>
                <p
                    className='text-paragraph-color font-medium text-[14px] md:text-[16px] lg:text-[18px]'
                >
                    {description}
                </p>
            </div>
        </div>
    </main>
  )
}
