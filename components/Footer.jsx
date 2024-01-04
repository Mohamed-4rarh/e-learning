import { Facebook, Linkedin, Locate, Mail, Phone, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-[#fff] px-[20px] pt-[50px] rounded-lg border border-border'>
      <div className="wrapper flex justify-between gap-7 flex-wrap items-start">
        <div>
          <Image 
            src={'/logo.svg'}
            width={46}
            height={46}
            alt='E-Learning'
            className='p-2 bg-main-orange rounded-[8px] mb-[30px]'
            unoptimized
          />
          <h3 className='flex gap-3 items-center text-paragraph-color text-[14px] md:text-[18px] font-medium'><Mail className='text-head-color' /> hello@skillbridge.com</h3>
          <h3 className='flex gap-3 items-center text-paragraph-color text-[14px] md:text-[18px] font-medium my-[10px]'><Phone className='text-head-color' /> +91 91813 23 2309</h3>
          <h3 className='flex gap-3 items-center text-paragraph-color text-[14px] md:text-[18px] font-medium'><Locate className='text-head-color' /> Somewhere in the World</h3>
        </div>
        <div>
          <h3 className='text-[18px] md:text-[20px] text-head-color font-semibold'>Home</h3>
          <ul className='mt-[14px] md:mt-[18px] flex flex-col gap-[10px]'>
            <li className='text-[14px] md:text-[16px] lg:text-[18px] text-paragraph-color'> <Link href={'/'}>Benefits</Link></li>
            <li className='text-[14px] md:text-[16px] lg:text-[18px] text-paragraph-color'> <Link href={'/'}>Our Courses</Link></li>
            <li className='text-[14px] md:text-[16px] lg:text-[18px] text-paragraph-color'> <Link href={'/'}>Our Testimonials</Link></li>
            <li className='text-[14px] md:text-[16px] lg:text-[18px] text-paragraph-color'> <Link href={'/'}>Our FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className='text-[18px] md:text-[20px] text-head-color font-semibold'>About Us</h3>
          <ul className='mt-[14px] md:mt-[18px] flex flex-col gap-[10px]'>
            <li className='text-[14px] md:text-[16px] lg:text-[18px] text-paragraph-color'> <Link href={'/'}>Company</Link></li>
            <li className='text-[14px] md:text-[16px] lg:text-[18px] text-paragraph-color'> <Link href={'/'}>Achievements</Link></li>
            <li className='text-[14px] md:text-[16px] lg:text-[18px] text-paragraph-color'> <Link href={'/'}>Our Goals</Link></li>
          </ul>
        </div>
        <div>
          <h3 className='text-[18px] md:text-[20px] text-head-color font-semibold'>Social Profiles</h3>
          <ul className='mt-[20px] md:mt-[14px] flex gap-7'>
            <li className='bg-button-gray p-[10px] md:p-[12px] rounded-lg border border-border'><Facebook /></li>
            <li className='bg-button-gray p-[10px] md:p-[12px] rounded-lg border border-border'><Twitter /></li>
            <li className='bg-button-gray p-[10px] md:p-[12px] rounded-lg border border-border'><Linkedin /></li>
          </ul>
        </div>
      </div>
      <div className='text-center text-paragraph-color text-[15px] border-t border-border py-6 mt-[50px]'>
        © 2023 Skillbridge. All rights reserved.
      </div>
    </footer>
  )
}
