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

//courses cards
export const courses = [
    {
        duration: '4 weeks',
        level: 'Beginner',
        creator: 'By John Smith',
        title: 'Web Design Fundamentals',
        description: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
        img: '/course1.jpg'
    },
    {
        duration: '6 weeks',
        level: 'intermediate',
        creator: 'By Emily Johnson',
        title: 'UI/UX Design',
        description: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',
        img: '/course2.jpg'
    },
    {
        duration: '8 weeks',
        level: 'intermediate',
        creator: 'By David Brown',
        title: 'Mobile App Development',
        description: 'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.',
        img: '/course3.jpg'
    },
    {
        duration: '10 weeks',
        level: 'beginner',
        creator: 'By Sarah Thompson',
        title: 'Graphic Design for Beginners',
        description: 'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.',
        img: '/course4.jpg'
    },
    {
        duration: '10 weeks',
        level: 'intermediate',
        creator: 'By Michael Adams',
        title: 'Front-End Web Development',
        description: 'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.',
        img: '/course5.jpg'
    },
    {
        duration: '6 weeks',
        level: 'advanced',
        creator: 'By Jennifer Wilson',
        title: 'Advanced JavaScript',
        description: 'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.',
        img: '/course6.jpg'
    }
]

//testimnoials
export const testimonials = [
    {
        img: '/review1.jpg',
        name: 'Sarah L',
        review: 'The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!'
    },
    {
        img: '/review2.jpg',
        name: 'Jason M',
        review: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!"
    },
    {
        img: '/review3.jpg',
        name: 'Emily R',
        review: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!"
    },
    {
        img: '/review4.jpg',
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

//courses in courses page containers
export const coursesContainers = [
    {
        name: 'Web Design Fundamentals',
        description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
        images: [
            '/coursecontainer11.jpg', '/coursecontainer12.jpg', '/coursecontainer13.jpg'
        ],
        duration: '4 Weeks',
        level: 'Beginner',
        creator: 'By John Smith',
        curriculum: [
            'Introduction to HTML',
            'Styling with CSS and CSS modules',
            'Introduction to Responsive Design',
            'Design Principles for Web',
            'Building a Basic Website'
        ]
    },
    {
        name: 'UI/UX Design',
        description: 'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',
        images: [
            '/coursecontainer21.jpg', '/coursecontainer22.jpg', '/coursecontainer23.jpg'
        ],
        duration: '6 Weeks',
        level: 'Intermediate',
        creator: 'By Emily Johnson',
        curriculum: [
            'Introduction to UI/UX Design',
            'User Research and Personas',
            'Wireframing and Prototyping',
            'Visual Design and Branding',
            'Usability Testing and Iteration'
        ]
    },
    {
        name: 'Mobile App Development',
        description: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
        images: [
            '/coursecontainer31.jpg', '/coursecontainer32.jpg', '/coursecontainer33.jpg'
        ],
        duration: '8 Weeks',
        level: 'Intermediate',
        creator: 'By David Brown',
        curriculum: [
            'Introduction to Mobile App Development',
            'Fundamentals of Swift Programming (iOS)',
            'Fundamentals of Kotlin Programming (Android)',
            'Building User Interfaces',
            'App Deployment and Testing'
        ]
    },
    {
        name: 'Graphic Design for Beginners',
        description: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
        images: [
            '/coursecontainer41.jpg', '/coursecontainer42.jpg', '/coursecontainer43.jpg'
        ],
        duration: '10 Weeks',
        level: 'Beginner',
        creator: 'By Sarah Thompson',
        curriculum: [
            'Introduction to Graphic Design',
            'Typography and Color Theory',
            'Layout Design and Composition',
            'Image Editing and Manipulation',
            'Designing for Print and Digital Media'
        ]
    },
    {
        name: 'Front-End Web Development',
        description: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
        images: [
            '/coursecontainer51.jpg', '/coursecontainer52.jpg', '/coursecontainer53.jpg'
        ],
        duration: '10 Weeks',
        level: 'Intermediate',
        creator: 'By Michael Adams',
        curriculum: [
            'HTML Fundamentals',
            'CSS Styling and Layouts',
            'JavaScript Basics',
            'Building Responsive Websites',
            'Introduction to Bootstrap and React'
        ]
    }
]