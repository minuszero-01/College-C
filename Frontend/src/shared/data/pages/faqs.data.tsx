import { CallToActionProps, FAQsProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on FAQs page *******************
export const heroFaqs: HeroProps = {
  title: 'Frequently Asked Questions',
  subtitle: (
    <>
      <span className="hidden md:inline">
        {`Whether you need help using College Compass, solving problems, or just want some useful tips, our FAQs are here to assist you.`}
      </span>{' '}
      Explore them to optimize your experience with our platform.
    </>
  ),
  tagline: 'College Compass FAQs Page',
};


// FAQS4 data on FAQs page *******************
export const faqs4Faqs: FAQsProps = {
  id: 'faqsFour-on-faqs',
  hasBackground: true,
  header: {
    title: 'Find what you need',
    subtitle: 'Get quick answers to your questions: Everything you need in one spot.',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General',
        href: '/tab1',
      },
      items: [
        {
          title: 'What do I need to start?',
          description: `To get started with College Compass, you'll need your enrollment details and an internet connection. Follow our setup guide for step-by-step instructions.`,
        },
        {
          title: 'How do I access my course schedule?',
          description: `Log in to your College Compass account and navigate to the Student Dashboard. Here you can view your current course schedule, attendance, and more.`,
        },
        {
          title: "What features does the teacher dashboard include?",
          description: `The teacher dashboard allows you to manage class schedules, track attendance, and communicate directly with students. Explore all the features designed to streamline your teaching experience.`,
        },
        {
          title: "How do I join a club activity?",
          description: `Visit the Clubs section on your dashboard to view upcoming activities. You can join events directly from this page and stay updated with all the latest club news.`,
        },
        {
          title: 'How secure is my data on College Compass?',
          description: `We prioritize your data security with advanced encryption and regular updates. Your personal and academic information is securely stored and protected.`,
        },
        {
          title: 'Can I access College Compass on my mobile?',
          description: `Yes, College Compass is fully responsive and can be accessed on any device, including smartphones and tablets, for on-the-go convenience.`,
        },
      ],
    },
    {
      link: {
        label: 'Plans, prices and payments',
        href: '/tab2',
      },
      items: [
        {
          title: 'What subscription plans are available?',
          description: `College Compass offers a range of subscription plans to suit different needs. Whether you're a student, teacher, or administrator, find the plan that's right for you.`,
        },
        {
          title: 'What are my payment options?',
          description: `We accept various payment methods, including credit cards, PayPal, and direct bank transfers. Choose the option that's most convenient for you.`,
        },
        {
          title: 'How do I upgrade my plan?',
          description: `You can upgrade your plan anytime by visiting the Subscription section in your account settings. Follow the prompts to select and pay for your new plan.`,
        },
        {
          title: 'What happens at the end of my free trial?',
          description: `At the end of your free trial, you will need to select a subscription plan to continue using College Compass. Don't worry, we'll remind you before your trial ends.`,
        },
        {
          title: 'Can I import data from other platforms?',
          description: `Yes, you can easily import data from other academic management tools into College Compass. Our support team can assist you with the process.`,
        },
        {
          title: 'Can I cancel my subscription anytime?',
          description: `Absolutely. You can cancel your subscription at any time from your account settings. Your access will remain active until the end of your current billing period.`,
        },
      ],
    },
    {
      link: {
        label: 'Others',
        href: '/tab3',
      },
      items: [
        {
          title: 'How do I download the mobile app?',
          description: `You can download the College Compass mobile app from the App Store or Google Play. The app provides all the features of the web platform in a mobile-friendly format.`,
        },
        {
          title: 'How do I customize my dashboard?',
          description: `You can customize your dashboard by adding or removing widgets, changing the layout, and selecting the information you want to see first. Personalize it to suit your needs.`,
        },
        {
          title: 'Is there a user guide available?',
          description: `Yes, we provide detailed user guides and video tutorials to help you get the most out of College Compass. Access these resources from the Help section in your account.`,
        },
        {
          title: 'Are there any additional fees for using College Compass?',
          description: `Our subscription plans cover all the standard features. However, some premium features or additional services may incur extra fees. Check our pricing page for details.`,
        },
      ],
    },
  ],
};

// CallToAction data on FAQs page *******************
export const callToActionFaqs: CallToActionProps = {
  id: 'callToAction-on-faqs',
  hasBackground: true,
  title: 'Still have questions?',
  subtitle:
    'If you need further assistance or have more questions, feel free to reach out to our support team. We are here to help you make the most of College Compass.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
