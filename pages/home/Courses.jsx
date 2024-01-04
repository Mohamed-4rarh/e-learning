import CourseCard from '@/components/CourseCard'
import HeadTitle from '@/components/HeadTitle'
import { courses } from '@/constants'
import React from 'react'

export default function Courses() {
  return (
    <section className="section-container wrapper">
        <HeadTitle 
            title={'Our Courses'}
            path={'/courses'}
            description={'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'}
        />
        <div className='mt-[60px] courses-grid'>
            {
                courses.map((course, index) => (
                    <CourseCard 
                        key={index}
                        path={'/courses'}
                        img={course.img}
                        duration={course.duration}
                        level={course.level}
                        creator={course.creator}
                        title={course.title}
                        description={course.description}
                    />
                ))
            }
        </div>
    </section>
  )
}
