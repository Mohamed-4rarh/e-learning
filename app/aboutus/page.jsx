import CustomHero from '@/components/CustomHero'
import Achievements from '@/containers/Achievements'
import OurGoals from '@/containers/OurGoals'
import React from 'react'

export default function page() {
  return (
    <>
        <CustomHero 
            header="About Skillbridge"
            description="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
        />
        <Achievements />
        <OurGoals />
    </>
  )
}
