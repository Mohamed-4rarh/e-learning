import ContactForm from '@/components/ContactForm'
import CustomHero from '@/components/CustomHero'
import React from 'react'

export default function page() {
  return (
    <>
      <CustomHero 
        header={'Contact Us'}
        description="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
      />
      <section className='wrapper'>
        <div className='form-wrapper'>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
