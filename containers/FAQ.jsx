import CustomOrangeButton from '@/components/CustomOrangeButton'
import FAQCard from '@/components/FAQCard'
import Link from 'next/link'
import React from 'react'

export default function FAQ() {
  return (
    <div className='section-container wrapper flex flex-col lg:flex-row lg:gap-[30px] xl:gap-[50px] 2xl:gap-[120px] bg-[#fff] rounded-lg border border-border my-[50px] md:my-[100px] xl:my-[150px] p-[24px] lg:p-[60px] xl:p-[80px]'> 
        <div>
            <h1 className='text-[28px] lg:text-[38px] xl:text-[48px] font-bold text-head-color'>Frequently <br /> Asked Questions</h1>
            <p className='text-paragraph-color text-[14px] md:text-[16px] lg:text-[18px] font-medium mb-5 lg:mb-[40px] xl:mb-[50px]'>Still you have any questions? Contact our <br /> Team via support@skillbridge.com</p>
            <Link
                href={'#'}
                className='text-head-color flex w-fit text-[14px] lg:text-[18px] border border-border rounded-lg py-[14px] px-[20px] xl:py-[18px] xl:px-[24px]'
            >
                See All FAQ&#39;s
            </Link>
        </div>
        <div className='flex flex-col gap-[20px] lg:gap[40px] flex-1'>
            <FAQCard 
                faq={'Can I enroll in multiple courses at once?'}
            />
            <FAQCard 
                faq={'What kind of support can I expect from instructors?'}
            />
            <FAQCard 
                faq={'Are the courses self-paced or do they have specific start and end dates?'}
            />
            <FAQCard 
                faq={'Are there any prerequisites for the courses?'}
            />
            <FAQCard 
                faq={'Can I download the course materials for offline access?'}
            />
        </div>
    </div>
  )
}
