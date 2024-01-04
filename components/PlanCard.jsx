import { CheckCircle, XCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function PlanCard({planeName, price, details, path}) {
  return (
    <div
        className='bg-main-gray border border-border rounded-lg py-[30px] px-[20px] md:py-[40px] md:px-[24px] lg:px-[30px]'
    >
        <div
            className='border border-[#FFEACC] rounded-lg bg-[#FFF9F0] font-medium text-center capitalize text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] px-[22px] py-[8px] sm:py-[10px] md:py-[12px]'
        >
            {planeName}
        </div>
        <h2
            className='text-center text-head-color font-bold text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] my-[30px] md:my-[40px] lg:my-[50px]'
        >   
            ${price}
            <span className='font-normal text-paragraph-color text-[20px]'>/m</span>
        </h2>
        <div
            className='bg-[#fff] rounded-t-lg border border-b-0 border-border p-[20px] md:p-[30px] lg:p-[40px]'
        >
            <h3 
                className='font-semibold text-head-color text-center text-[16px] sm:text-[18px] lg:text-[20px]'
            >
                Available Features
            </h3>
            <ul className='flex flex-col gap-5 mt-5 lg:mt-8'>
                {
                    details.map((item) => (
                        <li
                            key={item}
                            className='flex gap-2 lg:gap-3 items-center border border-border rounded-lg p-3 lg:p-4 font-medium text-paragraph-color text-[14px] md:text-[16px] lg:text-[18px]'
                        >
                            {item.available ? <div className='bg-[#fff4e5] w-6 md:w-8 h-6 md:h-8 flex justify-center items-center p-1 lg:p-2 rounded-lg'><CheckCircle /></div>  : <div className='bg-[#fff] border border-border w-6 md:w-8 h-6 md:h-8 flex justify-center items-center p-1 lg:p-2 rounded-lg'><XCircle /></div>}
                            {item.service}
                        </li>
                    ))
                }
            </ul>
        </div>
        <Link
            href={path}
            className='font-meduim text-[14px] lg:text-[18px] flex text-center justify-center bg-main-orange text-[#fff] rounded-b-lg py-4 lg:py-5 px-6'
        >
            Get Started
        </Link>
    </div>
  )
}
