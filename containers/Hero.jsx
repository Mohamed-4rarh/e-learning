import AgencyCard from '@/components/AgencyCard'
import CustomOrangeButton from '@/components/CustomOrangeButton'
import { Crown, Zap } from 'lucide-react'
import React from 'react'

export default function Hero() {
  return (
    <main>
        <div 
            className='hero-dash relative flex justify-center gap-[5px] sm:gap-[14px] items-center p-[11px] md:py-[16px] md:px-[24px] w-fit bg-[#fff] rounded-lg border border-border shadow-sm mt-[50px] sm:mt-[80px] md:mt-[100px] lg:mt-[120px] max-w-[850px] mx-auto'
        >
            <Crown 
                className='absolute -top-[15px] md:-top-[20px] -left-[15px] md:-left-[20px] fill-main-orange -rotate-45 w-[26px] h-[26px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]'
            />
            <div className='p-3 lg:p-4 bg-icon-bg rounded-lg flex justify-center items-center'>
                <Zap className='w-6 h-6 lg:w-12 lg:h-12 fill-[#000]'/>
            </div>
            <h3
                className='capitalize font-semibold text-[16px] sm:text-[32px] md:text-[36px] lg:text-[48px]'
            >
                <span className='text-main-orange'>Unlock</span> your creative potential
            </h3>
        </div>
        <h1 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] text-center font-semibold mt-6 text-head-color'>with Online Design and Development Courses.</h1>
        <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center font-medium mt-3 text-paragraph-color'>Learn from Industry Experts and Enhance Your Skills.</p>
        <div className='mt-[60px] flex gap-5 justify-center'>
            <CustomOrangeButton text='Explore Courses' path={'/courses'} filled />
            <CustomOrangeButton text='View Pricing' path={'/pricing'} />
        </div>
        <div
            className='flex flex-wrap justify-between bg-[#fff] border border-border rounded-lg p-[10px] sm:p-[15px] md:p-[24px] lg:p-[30px] mt-[30px] sm:mt-[50px] md:mt-[80px] lg:mt-[100px] max-w-[1600px] mx-auto'
        >
            <AgencyCard img={'/zapier.svg'} />
            <AgencyCard img={'/spotify.svg'} />
            <AgencyCard img={'/zoom.svg'} />
            <AgencyCard img={'/amazon.svg'} />
            <AgencyCard img={'/adobe.svg'} />
            <AgencyCard img={'/notion.svg'} />
            <AgencyCard img={'/netflix.svg'} />
        </div>
    </main>
  )
}
