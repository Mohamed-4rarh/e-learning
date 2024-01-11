"use client"
import { Facebook, Linkedin, Locate, Mail, Phone, Twitter } from 'lucide-react'
import React from 'react'

export default function ContactForm() {
  return (
    <div className='flex flex-col lg:flex-row gap-[100px]'>
        <div className='flex-1'>
            <form action="" className='text-[14px] lg:text-[16px] xl:text-[18px]'>
                <div className='flex gap-7 flex-wrap'>
                    <div className='flex flex-col flex-1 gap-3'>
                        <label className='font-medium' htmlFor="firstName">First Name</label>
                        <input className='form-input' placeholder='First Name' type="text" name="firstName" id="firstName" />
                    </div>
                    <div className='flex flex-col flex-1 gap-3'>
                        <label className='font-medium' htmlFor="lastName">Last Name</label>
                        <input className='form-input' placeholder='Last Name' type="text" name="lastName" id="lastName" />
                    </div>
                </div>

                <div className='flex gap-7 my-[30px] flex-wrap'>
                    <div className='flex flex-col flex-1 gap-3'>
                        <label className='font-medium' htmlFor="email">Email</label>
                        <input className='form-input' placeholder='Email' type="email" name="email" id="email" />
                    </div>
                    <div className='flex flex-col flex-1 gap-3'>
                        <label className='font-medium' htmlFor="phone">Phone</label>
                        <input className='form-input' placeholder='Phone' type="number" name="phone" id="phone" />
                    </div>
                </div>

                <div className='flex flex-col gap-3'> 
                    <label className='font-medium' htmlFor="subject">Subject</label>
                    <input className='form-input' placeholder='Subject' type="text" name="subject" id="subject" />
                </div>

                <div className='my-[30px] flex flex-col gap-3'>
                    <label className='font-medium' htmlFor="message">Message</label>
                    <textarea className='form-input resize-none h-[140px] lg:h-[180px]' placeholder='Message' name="message" id="message"></textarea>
                </div>

                <button className='text-[#fff] bg-main-orange rounded-lg py-[14px] px-[20px] xl:py-[18px] xl:px-[24px] flex mx-auto'>Send Your Message</button>

            </form>
        </div>

        <div className='flex flex-col gap-7'>
            <div className='rounded-lg flex-1 border border-border p-[30px] bg-[#fcfcfd]'>
                <div className='rounded-lg border border-border bg-[#f7f7f8] p-[10px] w-fit mx-auto'>
                    <Mail />
                </div>
                <h3 className='mt-[14px] text-paragraph-color text-[14x] md:text-[16px] xl:text-[18px] text-center'>support@skillbridge.com</h3>
            </div>

            <div className='rounded-lg flex-1 border border-border p-[30px] bg-[#fcfcfd]'>
                <div className='rounded-lg border border-border bg-[#f7f7f8] p-[10px] w-fit mx-auto'>
                    <Phone />
                </div>
                <h3 className='mt-[14px] text-paragraph-color text-[14x] md:text-[16px] xl:text-[18px] text-center'>+91 00000 00000</h3>
            </div>

            <div className='rounded-lg flex-1 border border-border p-[30px] bg-[#fcfcfd]'>
                <div className='rounded-lg border border-border bg-[#f7f7f8] p-[10px] w-fit mx-auto'>
                    <Locate />
                </div>
                <h3 className='mt-[14px] text-paragraph-color text-[14x] md:text-[16px] xl:text-[18px] text-center'>Some Where in the World</h3>
            </div>

            <div className='rounded-lg flex-1  border border-border p-[30px] bg-[#fcfcfd]'>
                <div className='flex gap-3 items-center justify-center'>
                    <div className='rounded-lg border border-border bg-[#f7f7f8] p-[10px] w-fit mx-auto'>
                        <Facebook />
                    </div>
                    <div className='rounded-lg border border-border bg-[#f7f7f8] p-[10px] w-fit mx-auto'>
                        <Twitter />
                    </div>
                    <div className='rounded-lg border border-border bg-[#f7f7f8] p-[10px] w-fit mx-auto'>
                        <Linkedin />
                    </div>
                </div>
                <h3 className='mt-[14px] text-paragraph-color text-[14x] md:text-[16px] xl:text-[18px] text-center'>Social Profiles</h3>
            </div>
        </div>
    </div>
  )
}
