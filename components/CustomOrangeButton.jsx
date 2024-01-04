import Link from 'next/link'
import React from 'react'

export default function CustomOrangeButton({text, path, filled}) {
  return (
    <Link
        href={path}
        className={`py-[12px] md:py-[14px] px-[20px] md:px-[34px] font-semibold ${ filled ? 'bg-main-orange text-[#fff] border-main-orange' : 'bg-[#fff] text-head-color border-border'} rounded-[8px] text-[14px] md:text-[18px]`}
    >
        {text}
    </Link>
  )
}
