import HeadTitle from '@/components/HeadTitle'
import PlanCard from '@/components/PlanCard'
import React from 'react'
import { plans } from '@/constants'

export default function Pricing() {
  return (
    <section className="section-container wrapper">
        <HeadTitle 
            path={'/'}
            title={'Our Pricing'}
            description={'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'}
        />
        <div className='mt-[60px]'>
            <div 
                className="plans-grid border border-border rounded-lg bg-[#fff] p-[20px] sm:p-[30px] md:p-[40px] lg:p-[50px]"
            >
                {
                    plans.map((plan, index) => (
                        <PlanCard 
                            key={index}
                            path={'/plans'}
                            planeName={plan.name}
                            price={plan.price}
                            details={plan.details}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}
