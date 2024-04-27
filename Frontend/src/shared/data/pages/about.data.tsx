import {
	ContactProps,
	FAQsProps,
	FeaturesProps,
	HeroProps,
	StatsProps,
	StepsProps,
	TeamProps,
	TestimonialsProps,
} from '~/shared/types';
import hero2Img from '~/assets/images/hero2.jpg';
import {
	IconAdjustments,
	IconAward,
	IconBook,
	IconBrandLinkedin,
	IconBrandTwitter,
	IconBulb,
	IconCirclesRelation,
	IconClock,
	IconFlame,
	IconHeartHandshake,
	IconHomeEco,
	IconMail,
	IconMapPin,
	IconNumber1,
	IconNumber2,
	IconNumber3,
	IconNumber4,
	IconNumber5,
	IconPalette,
	IconPhoneCall,
	IconPuzzle2,
	IconScale,
	IconThumbUp,
	IconUser,
} from '@tabler/icons-react';

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
	title: 'Great companies are made by great people',
	subtitle: 'We are the minions of our College . Silent but effective :)',
	tagline: 'About Us Demo Page',
	callToAction: {
		text: 'View Company Profile',
		href: 'https://www.linkedin.com/',
		targetBlank: true,
	},
	callToAction2: {
		text: 'Contact us',
		href: '/contact',
	},
	image: {
		src: hero2Img,
		alt: 'Hero TailNext',
	},
};

// Stats data on About page *******************
export const statsAbout: StatsProps = {
	id: 'stats-on-about',
	hasBackground: true,
	items: [{
			title: 20200,
			description: 'Students',
		},
		{
			title: 200,
			description: 'Teachers',
		},
		{
			title: 220000,
			description: 'Data Points',
		},
		{
			title: '2',
			description: 'Colleges On board',
		},
	],
};

// Team data on About page *******************
export const teamAbout: TeamProps = {
	id: 'team-on-about',
	hasBackground: false,
	header: {
		title: 'Meet our executive team',
		subtitle: 'Some minions took tech too seriously in thier life.',
		tagline: 'team',
	},
	teams: [{
			name: 'Monil Karia',
			occupation: 'Co-Founder & AI/ML Engineer',
			image: {
				src: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
				alt: 'Monil Karia',
			},
			items: [{
					title: 'Know more on Twitter',
					icon: IconBrandTwitter,
					href: '#',
				},
				{
					title: 'Know more on Linkedin',
					icon: IconBrandLinkedin,
					href: '#',
				},
				{
					title: 'Contact by email',
					icon: IconMail,
					href: '#',
				},
			],
		},
		{
			name: 'Manali Thakkar',
			occupation: 'Co-Founder  & Data Analyst',
			image: {
				src: 'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
				alt: 'Manali Thakkar',
			},
			items: [{
					title: 'Know more on Twitter',
					icon: IconBrandTwitter,
					href: '#',
				},
				{
					title: 'Know more on Linkedin',
					icon: IconBrandLinkedin,
					href: '#',
				},
				{
					title: 'Contact by email',
					icon: IconMail,
					href: '#',
				},
			],
		},
		{
			name: 'Harsh Hande',
			occupation: 'Co-Founder and Full-Stack Developer',
			image: {
				src: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80',
				alt: 'Harsh Hande',
			},
			items: [{
					title: 'Know more on Twitter',
					icon: IconBrandTwitter,
					href: '#',
				},
				{
					title: 'Know more on Linkedin',
					icon: IconBrandLinkedin,
					href: '#',
				},
				{
					title: 'Contact by email',
					icon: IconMail,
					href: '#',
				},
			],
		},
		{
			name: 'Incoming Designer',
			occupation: 'INTERN for Graphic Desgining',
			image: {
				src: '',
				alt: 'Desginer',
			},
			items: [{
					title: 'Know more on Twitter',
					icon: IconBrandTwitter,
					href: '#',
				},
				{
					title: 'Know more on Linkedin',
					icon: IconBrandLinkedin,
					href: '#',
				},
				{
					title: 'Contact by email',
					icon: IconMail,
					href: '#',
				},
			],
		},
	],
};

// Testimonial2 data on About page *******************
export const testimonials2About: TestimonialsProps = {
	id: 'testimonialsTwo-on-about',
	hasBackground: true,
	isTestimonialUp: true,
	header: {
		title: 'Our Student and teacher Says :',
		tagline: 'Student + Teachers comments',
	},
	testimonials: [{
			name: 'Tayla Kirsten',
			job: 'Teacher - MIT ADT University',
			testimonial: `Something Good`,
			image: {
				src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
				alt: 'Tayla Kirsten',
			},
			href: '/',
		},
		{
			name: 'Silver Jordan',
			job: 'Student - MIT ADT University',
			testimonial: `Something Good`,
			image: {
				src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
				alt: 'Silver Jordan',
			},
			href: '/',
		},
		{
			name: 'Kelsey Arden',
			job: 'Student - MIT ADT University & CEO',
			testimonial: 'Something Good again',
			image: {
				src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
				alt: 'Kelsey Arden',
			},
			href: '/',
		},
		{
			name: 'Sarah Johnson',
			job: 'Student - MIT ADT University',
			testimonial: 'Something good again part 2',
			image: {
				src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
				alt: 'Sarah Johnson',
			},
			href: '/',
		},
		{
			name: 'Keith Young',
			job: 'Student - MIT ADT University',
			testimonial: 'Something Good not parts',
			image: {
				src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
				alt: 'Keith Young',
			},
			href: '/',
		},
		{
			name: 'Lisa Gordon',
			job: 'Student - MIT ADT University',
			testimonial: 'Good is Good never Bad',
			image: {
				src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
				alt: 'Lisa Gordon',
			},
			href: '/',
		},
	],
};

// FAQS data on About page *******************
export const faqsAbout: FAQsProps = {
	id: 'faqs-on-faqs',
	hasBackground: false,
	header: {
		title: 'Frequently Asked Questions',
		subtitle: 'Get answers to commonly asked questions about College Compass.',
		tagline: 'FAQS',
	},
	items: [{
			title: 'Who can use College Compass?',
			description: `College Compass is designed for both students and teachers at your institution.`,
		},
		{
			title: 'How can I access my College Compass dashboard?',
			description: `You can access your College Compass dashboard through your institution's login portal (specific instructions will be provided by your school).`,
		},
		{
			title: "What features does the Student Dashboard offer?",
			description: `The Student Dashboard allows students to view their current CGPA, attendance, and course schedule. They can also access teacher profiles to learn about their expertise and availability, and stay updated on club activities, news, and announcements.`,
		},
		{
			title: "How do I stay informed about club activities and news updates?",
			description: `College Compass keeps students informed about upcoming events, activities, and news updates through the platform. You can access this information directly from your Student Dashboard, promoting engagement and participation within the campus community.`,
		},
		{
			title: 'How does College Compass handle student data?',
			description: `College Compass stores and manages student information securely in accordance with all relevant data privacy regulations.`,
		},
		{
			title: 'How does College Compass benefit school administration?',
			description: `College Compass facilitates easy data retrieval for administrative purposes, streamlining tasks and improving efficiency.`,
		},
	],
};

// Contact data on About page *******************
export const contactAbout: ContactProps = {
	id: 'contact-on-about',
	hasBackground: true,
	header: {
		title: 'Contact us',
		tagline: 'Contact info',
	},
	content: 'Have a question, comment, or just want to say hello? We would love to hear from you! Whether you are a student, teacher, or just curious about College Compass, do not hesitate to reach out. Our friendly team is here to assist you with any inquiries or assistance you may need. Drop us a message, and lets start a conversation today!',
	items: [{
			title: 'Our Address',
			description: ['MIT ADT University, Loni Kalbhor'],
			icon: IconMapPin,
		},
		{
			title: 'Contact',
			description: ['Mobile: 1234567890', 'Mail: collegecompass@gmail.com'],
			icon: IconPhoneCall,
		},
		{
			title: 'Working hours',
			description: ['Nerds by Day, Superheroes by Night. Inshort Alltime :)'],
			icon: IconClock,
		},
	],
	form: {
		inputs: [{
				type: 'text',
				label: 'Name',
				name: 'name',
				placeholder: 'Introduce your name',
				autocomplete: 'off',
			},
			{
				type: 'email',
				label: 'Email address',
				name: 'email',
				placeholder: 'Introduce your email address',
				autocomplete: 'on',
			},
		],
		textarea: {
			cols: 30,
			rows: 5,
			label: 'How can we help you?',
			name: 'textarea',
			placeholder: 'Write your message...',
		},
		checkboxes: [{
			label: 'Have you read our privacy policy?',
			value: '',
		}, ],
		btn: {
			title: 'Contact us',
			type: 'submit',
		},
	},
};