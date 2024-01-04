//benefits
export const benefits = [
    {
        title: 'Flexible Learning Schedule',
        description: 'Fit your coursework around your existing commitments and obligations.'
    },
    {
        title: 'Expert Instruction',
        description: 'Learn from industry experts who have hands-on experience in design and development.'
    },
    {
        title: 'Diverse Course Offerings',
        description: 'Explore a wide range of design and development courses covering various topics.'
    },
    {
        title: 'Updated Curriculum',
        description: 'Access courses with up-to-date content reflecting the latest trends and industry practices.'
    },
    {
        title: 'Practical Projects and Assignments',
        description: 'Develop a portfolio showcasing your skills and abilities to potential employers.'
    },
    {
        title: 'Interactive Learning Environment',
        description: 'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.'
    }
]

//courses
export const courses = [
    {
        duration: '4 weeks',
        level: 'Beginner',
        creator: 'By John Smith',
        title: 'Web Design Fundamentals',
        description: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
        img: '/webdesigncourse.jpg'
    },
    {
        duration: '6 weeks',
        level: 'intermediate',
        creator: 'By Emily Johnson',
        title: 'UI/UX Design',
        description: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',
        img: '/webdesigncourse.jpg'
    },
    {
        duration: '8 weeks',
        level: 'intermediate',
        creator: 'By David Brown',
        title: 'Mobile App Development',
        description: 'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.',
        img: '/webdesigncourse.jpg'
    },
    {
        duration: '10 weeks',
        level: 'beginner',
        creator: 'By Sarah Thompson',
        title: 'Graphic Design for Beginners',
        description: 'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.',
        img: '/webdesigncourse.jpg'
    },
    {
        duration: '10 weeks',
        level: 'intermediate',
        creator: 'By Michael Adams',
        title: 'Front-End Web Development',
        description: 'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.',
        img: '/webdesigncourse.jpg'
    },
    {
        duration: '6 weeks',
        level: 'advanced',
        creator: 'By Jennifer Wilson',
        title: 'Advanced JavaScript',
        description: 'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.',
        img: '/webdesigncourse.jpg'
    }
]

//testimnoials
export const testimonials = [
    {
        img: '/review.jpg',
        name: 'Sarah L',
        review: 'The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!'
    },
    {
        img: '/review.jpg',
        name: 'Jason M',
        review: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!"
    },
    {
        img: '/review.jpg',
        name: 'Emily R',
        review: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!"
    },
    {
        img: '/review.jpg',
        name: 'Michael K',
        review: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!"
    },
]

//plans
export const plans = [
    {
        name: 'free plan',
        price: 0,
        details: [
            {
                service: 'Access to selected free courses.',
                available: true
            },
            {
                service: 'Limited course materials and resources.',
                available: true
            },
            {
                service: 'Basic community support.',
                available: true
            },
            {
                service: 'No certification upon completion.',
                available: true
            },
            {
                service: 'Ad-supported platform.',
                available: true
            },
            {
                service: 'Access to exclusive Pro Plan community forums.',
                available: false
            },
            {
                service: 'Early access to new courses and updates.',
                available: false
            }
        ]
    },
    {
        name: 'pro plan',
        price: 79,
        details: [
            {
                service: 'Unlimited access to all courses.',
                available: true
            },
            {
                service: 'Unlimited course materials and resources.',
                available: true
            },
            {
                service: 'Priority support from instructors.',
                available: true
            },
            {
                service: 'Course completion certificates.',
                available: true
            },
            {
                service: 'Ad-free experience.',
                available: true
            },
            {
                service: 'Access to exclusive Pro Plan community forums.',
                available: true
            },
            {
                service: 'Early access to new courses and updates.',
                available: true
            },
        ]
    }
]