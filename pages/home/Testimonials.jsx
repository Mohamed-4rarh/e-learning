import HeadTitle from '@/components/HeadTitle'
import TestimonialCard from '@/components/TestimonialCard'
import { testimonials } from '@/constants'
import React from 'react'

export default function Testimonials() {
  return (
    <section className="section-container wrapper">
        <HeadTitle 
            title={'Our Testimonials'}
            description={'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'}
        />
        <div className='mt-[60px] courses-grid'>
          {
            testimonials.map((review, idx) => (
              <TestimonialCard 
                key={idx}
                img={review.img}
                name={review.name}
                review={review.review}
              />
            ))
          }
        </div>
    </section>
  )
}
