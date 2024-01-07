import CustomHero from '@/components/CustomHero'
import FAQ from '@/pages/home/FAQ'
import Pricing from '@/pages/home/Pricing'
import React from 'react'

export default function page() {
  return (
    <>
        <CustomHero 
            header={'Our Pricings'}
            description={"Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."}
        />
        <Pricing />
        <FAQ />
    </>
  )
}
