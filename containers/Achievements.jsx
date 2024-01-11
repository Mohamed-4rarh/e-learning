import AchievementCard from '@/components/AchievementCard'
import HeadTitle from '@/components/HeadTitle'
import { Blocks, Crown, Laugh, Medal } from 'lucide-react'
import React from 'react'

export default function Achievements() {
  return (
    <section className='wrapper margins mb-[50px] lg:mb-[100px]'>
        <HeadTitle 
            title={'Achievements'}
            description={'Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements'}
        />
        <div className='mt-[50px] achiev-grid grid'>
            <AchievementCard 
                title={'Trusted by Thousands'}
                icon={ <Crown width={30} height={30} color='#ff9500' /> }
                achieve={'We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.'}
            />
            <AchievementCard 
                title={'Award-Winning Courses'}
                icon={ <Medal width={30} height={30} color='#ff9500' /> }
                achieve={'Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.'}
            />
            <AchievementCard 
                title={'Positive Student Feedback'}
                icon={ <Laugh width={30} height={30} color='#ff9500' /> }
                achieve={'We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.'}
            />
            <AchievementCard 
                title={'Industry Partnerships'}
                icon={ <Blocks width={30} height={30} color='#ff9500' /> }
                achieve={'We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies'}
            />
        </div>
    </section>
  )
}
