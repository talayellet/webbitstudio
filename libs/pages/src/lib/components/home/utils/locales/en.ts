import type { Package, FAQ } from '../types';

/**
 * English (US) locale strings for Webbit Studio home page
 */
export const en = {
  // Header
  header: {
    logo: {
      title: 'Webbit Studio',
      subtitle: 'Websites for modern businesses',
    },
    nav: {
      packages: 'Packages',
      process: 'Process',
      why: 'Why Us',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
    },
    ariaLabels: {
      toggleMenu: 'Toggle menu',
      closeMenu: 'Close menu',
      scrollToTop: 'Scroll to top',
      mobileMenu: 'Mobile navigation menu',
    },
  },

  // Hero Section
  hero: {
    title: 'Websites that make your business look great - delivered fast.',
    description:
      'Webbit Studio builds landing pages, business websites, hosting setups, deployments, and custom admin panels so you can manage your content with ease. Designed for small businesses worldwide.',
    primaryCta: 'Start your project',
    secondaryCta: 'See packages',
    visual: {
      mockCards: [
        {
          title: 'Landing',
          subtitle: 'Fast, simple, effective.',
        },
        {
          title: 'Pro Site',
          subtitle: 'Multi-page & hosted.',
        },
        {
          title: 'Premium CMS',
          subtitle: 'Edit content yourself.',
        },
      ],
    },
  },

  // Tech Strip
  techStrip: {
    title: 'Built with modern technology',
    badges: [
      'React',
      'TypeScript',
      'Tailwind',
      'Prisma',
      'TanStack Query',
      'Zod',
      'Zustand',
    ],
  },

  // Packages Section
  packagesSection: {
    title: 'Choose your package',
    subtitle:
      'From simple landing pages to full websites with content management, we have something for every business.',
    pricing: {
      startingFrom: 'Starting from',
      typicalRange: 'Typical range:',
      priceNote: 'Final quote depends on project scope and complexity.',
      cta: 'Get a quote',
    },
    packages: [
      {
        name: 'Landing Page Package',
        tagline: 'Perfect for freelancers and small businesses.',
        description:
          'An effective landing page that makes a great first impression and encourages potential customers to reach out.',
        features: [
          'Custom-designed landing page',
          'Mobile responsive layout',
          'Basic SEO setup',
          'Fast delivery (5–7 business days)',
          'Optional changes billed per request',
        ],
        startingPrice: '$249',
        typicalRange: '$249–$399',
        highlight: 'Best for quick online presence',
      },
      {
        name: 'Pro Business Website',
        tagline: 'For growing businesses that need more pages.',
        description:
          'A business website with up to 5 pages, including hosting and deployment.',
        features: [
          'Up to 5 pages (Home, About, Services, Contact, Custom)',
          'Hosting & deployment setup',
          'Secure custom domain connection',
          'Basic SEO & performance optimization',
          'Monthly hosting + domain subscription',
        ],
        startingPrice: '$499',
        typicalRange: '$499–$899',
        highlight: 'Most popular for small businesses',
      },
      {
        name: 'Premium Website + Admin Panel (CMS)',
        tagline: 'Complete control over your website content.',
        description:
          'Full business website with a custom content management system. Update text, images, and pages yourself anytime - no technical skills or developer needed. Save time and reduce costs.',
        features: [
          'All Pro Business Website features',
          'Custom content management (CMS)',
          'Training & onboarding included',
          'Self-service text & image editing',
          'Unlimited content updates',
        ],
        startingPrice: '$899',
        typicalRange: '$899–$1,599',
        highlight: 'Best for businesses that want independence and flexibility',
      },
    ] as Package[],
  },

  // Process Section
  processSection: {
    title: 'How we work',
    subtitle:
      "We've designed a simple, efficient process to get your website from idea to launch as quickly as possible.",
    steps: [
      {
        number: '01',
        title: 'Share your requirements',
        description:
          'Fill out our contact form or reach out via phone or email. Tell us about your business, pages you need, and your timeline.',
      },
      {
        number: '02',
        title: 'Get your quote',
        description:
          "We'll review your request and send a tailored quote within 3 business days, along with a suggested package and timeline.",
      },
      {
        number: '03',
        title: 'We build your site',
        description:
          "Once approved, we get to work. You'll receive progress updates and can request changes throughout the process.",
      },
      {
        number: '04',
        title: 'Launch & support',
        description:
          'We handle hosting, deployment, and domain setup. After launch, you can request updates or manage content yourself (Premium).',
      },
    ],
  },

  // Why Section
  whySection: {
    title: 'Why Webbit Studio?',
    subtitle:
      'We focus on modern technologies, clean design, and timelines that actually work for busy business owners.',
    benefits: [
      {
        title: 'Fast delivery',
        text: 'Most landing pages are finished in 5–7 business days. Pro and Premium websites typically completed within 2–3 weeks.',
      },
      {
        title: 'Fair pricing',
        text: 'We adjust final quotes based on project complexity and business size to keep our services accessible.',
      },
      {
        title: 'Modern technologies',
        text: 'React, TypeScript, Tailwind, and modern hosting platforms keep your site fast and reliable.',
      },
      {
        title: 'Effective design',
        text: 'Each page is structured to guide visitors toward contacting you or using your service.',
      },
      {
        title: 'Flexible content management',
        text: 'Choose simple one-time build packages, or go Premium and manage your own content through a custom admin panel.',
      },
      {
        title: 'Clear communication',
        text: 'Reach us via email, phone, or video call. We keep you updated from start to launch.',
      },
    ],
  },

  // Pricing Section
  pricingSection: {
    title: 'Simple, fair, global pricing',
    intro:
      'We show "starting from" prices so expectations are clear, then adjust final quotes based on your project complexity.',
    labels: {
      startingFrom: 'Starting from',
      typicalRange: 'typical range:',
    },
    packages: [
      {
        name: 'Landing Page Package',
        startingPrice: '$249',
        typicalRange: '$249–$399',
        note: 'Final quote depends on project complexity.',
      },
      {
        name: 'Pro Business Website',
        startingPrice: '$499',
        typicalRange: '$499–$899',
        note: 'Subscription for hosting & domain applies.',
      },
      {
        name: 'Premium Website + Admin Panel (CMS)',
        startingPrice: '$899',
        typicalRange: '$899–$1,599',
        note: 'Subscription for hosting & domain applies.',
      },
    ],
  },

  // FAQ Section
  faqSection: {
    title: 'Frequently asked questions',
    subtitle:
      "Have other questions? We're happy to answer them—just reach out via the contact form below.",
    faqs: [
      {
        question: 'How fast can I get my website?',
        answer:
          'Most landing pages take around 5–7 business days. Pro and Premium packages typically take 2–3 weeks, depending on scope and feedback rounds.',
      },
      {
        question: 'Do you offer changes after delivery?',
        answer:
          'Yes. For Landing & Pro packages, content updates can be requested anytime and are billed per update. Premium includes a self-managed admin panel, so you can edit your content whenever you like.',
      },
      {
        question: 'Do you support multiple languages?',
        answer:
          'Yes. Multi-language websites are available upon request. We can discuss your target markets and suggest a structure that works best.',
      },
      {
        question: 'Do I own my website?',
        answer:
          "Yes. You always own your website. We'll also help you set up and manage your domain so it stays in your control.",
      },
      {
        question: 'How does pricing work?',
        answer:
          'Final quotes are adjusted based on project complexity and business size to keep pricing fair and accessible.',
      },
    ] as FAQ[],
  },

  // Contact Section
  contactSection: {
    title: 'Ready to start your website?',
    intro:
      "Tell us a bit about your business, your location, and what kind of website you need. We'll get back with a tailored quote and suggested package.",
    contactPoints: [
      'Landing page, business website, or Premium CMS',
      'Most landing pages finished in 5–7 business days. Pro and Premium websites typically completed within 2–3 weeks.',
    ],
    form: {
      name: {
        label: 'Name',
        placeholder: 'Your name',
      },
      email: {
        label: 'Email',
        placeholder: 'you@example.com',
      },
      country: {
        label: 'Country / Region',
        placeholder: 'Your country or region',
      },
      package: {
        label: 'What are you looking for?',
        placeholder: 'Select a package',
        options: [
          'Landing Page Package',
          'Pro Business Website',
          'Premium Website + Admin Panel (CMS)',
          'Not sure yet / need help deciding',
        ],
      },
      details: {
        label: 'Project details',
        placeholder:
          'Tell us about your business, pages you need, and any deadlines or special requirements.',
      },
      submit: 'Submit inquiry',
      submitting: 'Submitting...',
      note: 'Prefer a quick phone call? We can share direct contact details in our reply.',
      emailFallback: 'Or email us directly at',
      phoneFallback: 'or call',
      errors: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email address',
        serverError: 'Server error. Please try again later.',
        rateLimitError: 'Too many requests. Please try again later.',
        submissionFailed: 'Failed to submit form. Please try again.',
      },
      successMessage: "Thank you for your inquiry! We'll get back to you soon.",
    },
  },

  // Footer
  footer: {
    copyright: '© {year} {companyName}. All rights reserved.',
    tagline: 'Modern websites for small businesses worldwide.',
    companyName: 'Webbit Studio',
    website: 'webbitstudio.com',
    backToTop: 'Back to top',
    links: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },

  // Price Conversion Notice
  priceConversionNotice: {
    error: 'Currency conversion unavailable. Prices shown in USD.',
    loading: 'Converting prices to {currency}...',
    ariaLabels: {
      warning: 'Warning',
    },
  },

  // Accessibility
  accessibility: {
    skipToContent: 'Skip to main content',
    languageSwitcher: 'Select language. Current language:',
    currencySwitcher: 'Select currency. Current currency:',
  },
};

export type LocaleStrings = typeof en;
