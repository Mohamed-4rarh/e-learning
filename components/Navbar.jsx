"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CustomOrangeButton from './CustomOrangeButton'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='pt-5 pb-6 border-b border-border relative'>
        <div
            className='max-w-[1600px] mx-auto flex items-center justify-between'
        >
            <div className='flex gap-[50px]'>
                <Link href={'/'}>
                    <Image 
                        src={'/logo.svg'}
                        width={46}
                        height={46}
                        alt='E-Learning'
                        className='p-2 bg-main-orange rounded-[8px]'
                        unoptimized
                    />
                </Link>
                <ul
                    className={`absolute ${toggle ? 'flex z-10' : 'hidden'} top-full lg:top-0 right-0 lg:right-0 w-full lg:w-fit bg-[#fff] lg:bg-opacity-0 flex-col lg:relative lg:flex lg:flex-row gap-5`}
                >
                    <li
                        className='py-[14px] px-[24px] hover:cursor-pointer hover:bg-border text-center items-center rounded-[8px]'
                    >
                        <Link href={'/'}>
                            Home
                        </Link>
                    </li>
                    <li
                        className='py-[14px] px-[24px] hover:cursor-pointer hover:bg-border text-center items-center rounded-[8px]'
                    >
                        <Link href={'/courses'}>
                            Courses
                        </Link>
                    </li>
                    <li
                        className='py-[14px] px-[24px] hover:cursor-pointer hover:bg-border text-center items-center rounded-[8px]'
                    >
                        <Link href={'/aboutus'}>
                            About Us
                        </Link>
                    </li>
                    <li
                        className='py-[14px] px-[24px] hover:cursor-pointer hover:bg-border text-center items-center rounded-[8px]'
                    >
                        <Link href={'/pricing'}>
                            Pricing
                        </Link>
                    </li>
                    <li
                        className='py-[14px] px-[24px] hover:cursor-pointer hover:bg-border text-center items-center rounded-[8px]'
                    >
                        <Link href={'/contact'}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='flex gap-5 md:gap-[30px] items-center text-[18px]'>
                <Link href={'/signup'}
                    className='text-[14px] md:text-[18px]'
                >Sign Up</Link>
                <CustomOrangeButton text={'Login'} path={'/login'} filled />
                <div
                    className='lg:hidden'
                    onClick={() => setToggle(prev => prev = !prev)}
                >
                    {
                        toggle ? <X className='h-[34px] w-[34px]' /> : <Menu className='h-[34px] w-[34px]' />
                    }
                </div>
            </div>
        </div>
    </nav>
  )
}
