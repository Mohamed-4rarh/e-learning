import BenefitCard from '@/components/BenefitCard'
import HeadTitle from '@/components/HeadTitle'
import React from 'react'
import { benefits } from '@/constants'

export default function Benefits() {
  return (
    <section className='section-container wrapper'>
        <HeadTitle
            title={'Benefits'}
            path={'/aboutus'}
            description={'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'}
        />
        <div className='mt-[60px] benefits-grid'>
          {
            benefits.map((item, index) => (
              <BenefitCard 
                key={index}
                number={`0${index + 1}`}
                title={item.title}
                description={item.description}
              />
            ))
          }
        </div>
    </section>
  )
}
