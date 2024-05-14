import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconChevronsRight,
  IconComponents,
  IconListCheck,
  IconRocket,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';

import heroImg from '~/assets/images/hero.jpg';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: 'College-Compass',
  subtitle:
    ' Get in touch with Teachers, get all your data centrally at one platform and get some intresting features with our platform.',
  callToAction: {
    text: 'Start Exploring',
    href: 'https://github.com/onwidget/tailnext',
    targetBlank: true,
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Our Services',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description: 'Seamlessly integrate Next.js with Tailwind CSS for a powerful, responsive, and modern web development experience.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use Components',
      description: 'Access a library of pre-built, customizable components to accelerate your development process.',
      icon: IconComponents,
    },
    {
      title: 'Best Practices',
      description: 'Adopt industry-standard best practices for clean, maintainable, and efficient code.',
      icon: IconListCheck,
    },
    {
      title: 'Excellent Page Speed',
      description: 'Achieve top-notch performance and fast load times for an optimal user experience.',
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Enhance your site’s visibility with our comprehensive SEO strategies, ensuring your content ranks high on search engines.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Open to new ideas and contributions',
      description: 'We value innovation and collaboration, welcoming new ideas and contributions to continuously improve.',
      icon: IconBulb,
    },
  ],
}


// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  content:
    'Experience the next level of academic management with our cutting-edge features designed to enhance productivity and communication.',
  items: [
    {
      title: 'Personalized Dashboards',
      description:
        'Get quick access to essential academic information with tailored dashboards for students and teachers, promoting efficient navigation and organization.',
    },
    {
      title: 'Seamless Communication',
      description:
        'Facilitate direct communication between students and teachers with built-in messaging tools and announcement features, fostering a collaborative learning environment.',
    },
    {
      title: 'Dynamic Timetables',
      description:
        'Generate personalized timetables that adapt to individual preferences and course requirements, ensuring clarity and organization in daily schedules.',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: false,
};


// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
  id: 'contentOne-on-services-two',
  hasBackground: false,
  content:
    'Discover how our innovative features can transform your academic experience by enhancing productivity, communication, and organization.',
  items: [
    {
      title: 'Centralized Data Management',
      description:
        'Securely store and manage student and teacher information, facilitating easy retrieval of essential data for administrative purposes.',
    },
    {
      title: 'Interactive Club Activities',
      description:
        'Stay informed about upcoming events and activities, promoting engagement and participation within the campus community.',
    },
    {
      title: 'Real-time Updates',
      description:
        'Receive instant notifications on important announcements, ensuring you never miss out on critical information.',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: true,
};


// Feature4 data on Services page *******************
export const features4Services: FeaturesProps = {
  id: 'featuresFour-on-services',
  hasBackground: true,
  columns: 2,
  header: {
    title: 'Main Features',
    subtitle:
      'Explore the core features of our platform designed to enhance your academic experience through seamless integration, ready-to-use components, and best practices.',
  },
  isImageDisplayed: true,
  image: {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    alt: 'Hero TailNext',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description: 'Leverage the power of Next.js and Tailwind CSS for a modern, responsive, and efficient web development experience.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use Components',
      description: 'Utilize a library of pre-built, customizable components to accelerate your development and maintain consistency.',
      icon: IconComponents,
    },
    {
      title: 'Best Practices',
      description: 'Implement industry-standard best practices for clean, maintainable, and efficient code, ensuring high-quality development.',
      icon: IconListCheck,
    },
    {
      title: 'Excellent Page Speed',
      description: 'Optimize your site for top performance and fast load times, providing users with a superior browsing experience.',
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Boost your site’s visibility with advanced SEO techniques, ensuring your content ranks high on search engines and reaches a wider audience.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Open to new ideas and contributions',
      description: 'Encourage innovation and collaboration by welcoming new ideas and contributions, continuously improving our platform.',
      icon: IconBulb,
    },
  ],
};


// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: false,
  isTestimonialUp: true,
  header: {
    title: 'Satisfied Experiences',
    subtitle:
      'Listen to what Students + Teachers Says',
  },
	testimonials: [{
    name: 'Aman Kamble',
    job: 'Teacher - MIT ADT University',
    testimonial: `College Compass has completely transformed the way I manage my academic life. The personalized dashboard helps me keep track of my grades, attendance, and schedule all in one place.`,
    image: {
      src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      alt: 'Aman Kamble',
    },
    href: '/',
  },
  {
    name: 'Shafi Pathan',
    job: 'Student - MIT ADT University',
    testimonial: `As a teacher, College Compass has been a game-changer. The platform makes it incredibly easy to manage my class schedules and track attendance. I appreciate how it keeps all the necessary information, like student contact details and room assignments, organized and accessible.`,
    image: {
      src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      alt: 'Shafi Pathan',
    },
    href: '/',
  },
  {
    name: 'Harsh Hande',
    job: 'Student - MIT ADT University & CEO',
    testimonial: ' The communication tools have made it so much easier to stay in touch with my professors and classmates. I cant imagine going back to the old way of doing things!',
    image: {
      src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      alt: 'Kelsey Arden',
    },
    href: '/',
  },
  {
    name: 'Monil Karia',
    job: 'Student - MIT ADT University',
    testimonial: 'College Compass has revolutionized the way we manage our academic operations. The centralized data management system ensures that all student and teacher information is stored securely and can be retrieved easily. ',
    image: {
      src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      alt: 'Sarah Johnson',
    },
    href: '/',
  },
  {
    name: 'Manali Thakkar',
    job: 'Student - MIT ADT University',
    testimonial: 'The platforms user-friendly interface has made it simple for both students and teachers to navigate and utilize its features effectively. Its a powerful tool that has enhanced our institutions efficiency and communication',
    image: {
      src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      alt: 'Keith Young',
    },
    href: '/',
  },
  {
    name: 'Manali"s Friend',
    job: 'Student - MIT ADT University',
    testimonial: 'College Compass is an essential tool for any educator. The platforms ability to manage class schedules and track attendance saves me so much time and effort. ',
    image: {
      src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      alt: 'Lisa Gordon',
    },
    href: '/',
  },
],
  callToAction: {
    targetBlank: true,
    text: 'More testimonials...',
    href: '/',
  },
};

// FAQS data on Services page *******************
export const faqsServices: FAQsProps = {
  id: 'faqs-on-services',
  hasBackground: true,
  header: {
    title: 'Answers to Common Queries',
    subtitle:
      'Find solutions to frequently asked questions about College Compass, ensuring you make the most of our platform.',
  },
  columns: 1,
  items: [
    {
      title: 'What is my dashboard?',
      description: `Absolutely! College Compass allows you to show your pernalized Dashboard.`,
      icon: IconChevronsRight,
    },
    {
      title: 'What if I need help using the platform?',
      description: `We're here to assist! Our support team is available to help you navigate and utilize the platform effectively. Whether you need help with specific features or general guidance, we've got you covered.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Are there user guides available?',
      description: `Yes, College Compass provides comprehensive user guides and tutorials to help you get started.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Can I get support for technical issues?',
      description: `Definitely! If you encounter any technical issues, our dedicated support team is ready to help. We aim to resolve any problems quickly to ensure a smooth experience on College Compass.`,
      icon: IconChevronsRight,
    },
  ],
};


// CallToAction data on Services page *******************
export const callToActionServices: CallToActionProps = {
  id: 'callToAction-on-services',
  hasBackground: false,
  title: 'Still have questions?',
  subtitle:
    'East Peasy Contact us using the below button. :)',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
