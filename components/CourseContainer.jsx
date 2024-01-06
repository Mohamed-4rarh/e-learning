import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CourseContainer({name, description, images, duration, level, creator, curriculum}) {
  return (
    <div
        className='rounded-lg border border-border bg-[#fff] p-6 lg:p-[30px] xl:p-[40px] 2xl:p-[50px]'
    >
        <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-2'>
            <div className='max-w-[1024px]'>
                <h1 className='font-semibold text-[18px] md:text-[20px] lg:text-[24px] mb-2'>
                    {name}
                </h1>
                <p className='text-paragraph-color text-[14px] md:text-[16px] 2xl:text-[18px]'>
                    {description}
                </p>
            </div>
            <Link href={'/'}
                className='py-[14px] px-[16px] 2xl:py-[18px] 2xl:px-[24px] text-[14px] rounded-lg font-medium text-head-color border border-border bg-[#fcfcfd]'
            >
                View Course
            </Link>
        </div>

        <div className='flex gap-[10px] my-[30px] 2xl:my-[40px]'>
            {
                images.map((img, idx) => (
                    <div className='flex-1' key={idx}>
                        <Image 
                            src={img}
                            alt='img'
                            width={480}
                            height={425}
                            unoptimized
                        />
                    </div>
                ))
            }
        </div>

        <div className='flex flex-col gap-2 sm:flex-row mb-[50px] sm:items-center'>
            <div className='flex gap-2'>
                <span 
                    className='flex mr-3 capitalize text-[14px] sm:text-[16px] md:text-[18px] font-medium text-paragraph-color rounded-lg border border-border py-[8px] px-[14px] md:py-[10px] md:px-[16px]'
                >
                    {duration}
                </span>
                <span 
                    className='flex capitalize text-[14px] sm:text-[16px] md:text-[18px] font-medium text-paragraph-color rounded-lg border border-border py-[8px] px-[14px] md:py-[10px] md:px-[16px]'
                >
                    {level}
                </span>
            </div>
            <span className='text-head-color font-medium mt-3 sm:mt-0 text-[16px] sm:text-[18px] md:text-[20px] flex-1 text-left sm:text-right capitalize'>{creator}</span>
        </div>

        <div 
            className='border border-border rounded-lg p-6'
        >
            <h3 className='font-bold text-[18px] mb-[20px]'>Curriculum</h3>
            <ul 
                className='pt-[30px] border-t border-border flex flex-wrap items-start gap-[30px]'
            >
                {
                    curriculum.map((item, idx) => (
                        <li
                            key={idx}
                            className='flex-1 min-w-[200px]'
                        >
                            <h3 className='font-bold text-[30px] md:text-[40px] xl:text-[50px] mb-2 text-head-color'>0{idx + 1}</h3>
                            <p className=' text-paragraph-color text-[14px] lg:text-[16px] xl:text-[18px]'>{item}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
