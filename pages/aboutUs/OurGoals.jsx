import AchievementCard from '@/components/AchievementCard'
import HeadTitle from '@/components/HeadTitle'
import { Backpack, BellRing, BookCheck, Puzzle } from 'lucide-react'
import React from 'react'

export default function OurGoals() {
  return (
    <section className='wrapper margins'>
        <HeadTitle 
            title={'Our Goals'}
            description={"At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to"}
        />
        <div className='mt-[50px] mb-[50px] lg:mb-[100px] achiev-grid'>
            <AchievementCard 
                title={'Provide Practical Skills'}
                icon={<Backpack width={30} height={30} color='#ff9500' />}
                achieve={'We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.'}
            />
            <AchievementCard 
                title={'Foster Creative Problem-Solving'}
                icon={<BookCheck width={30} height={30} color='#ff9500' />}
                achieve={'We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.'}
            />
            <AchievementCard 
                title={'Promote Collaboration and Community'}
                icon={<Puzzle width={30} height={30} color='#ff9500' />}
                achieve={'We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.'}
            />
            <AchievementCard 
                title={'Stay Ahead of the Curve'}
                icon={<BellRing width={30} height={30} color='#ff9500' />}
                achieve={'The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.'}
            />
        </div>
    </section>
  )
}
