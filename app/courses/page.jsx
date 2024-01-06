import CourseContainer from '@/components/CourseContainer'
import CustomHero from '@/components/CustomHero'
import { coursesContainers } from '@/constants'
import React from 'react'

export default function page() {
  return (
    <>
        <CustomHero 
            header={'Online Courses on Design and Development'}
            description={'Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.'}
        />
        <div 
            className='wrapper flex flex-col gap-10 mt-[50px] lg:mt-[80px] xl:px-[40px] mb-[50px] lg:mb-[150px]'
        >    
            {
                coursesContainers.map((course, idx) => (
                    <CourseContainer 
                        key={idx}
                        name={course.name}
                        description={course.description}
                        images={course.images}
                        duration={course.duration}
                        level={course.level}
                        creator={course.creator}
                        curriculum={course.curriculum}
                    />
                ))
            }
        </div>
    </>
  )
}
