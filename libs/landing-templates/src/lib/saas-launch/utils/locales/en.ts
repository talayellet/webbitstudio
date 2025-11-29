import { saasLaunchImages } from '../../../../assets';

/**
 * English (US) locale strings for SaaS Launch template
 */
export const en = {
  // Contact Section
  contact: {
    title: 'Get In Touch',
    subtitle:
      "Have a question or want to work together? We'd love to hear from you.",
    formTitle: 'Send us a message',
    sectionTitle: 'Contact Information',
    labels: {
      address: 'Address',
      email: 'Email',
      phone: 'Phone',
      socialMedia: 'Social Media',
    },
    form: {
      name: {
        label: 'Name',
        placeholder: 'Your name',
      },
      email: {
        label: 'Email',
        placeholder: 'your@email.com',
      },
      message: {
        label: 'Message',
        placeholder: 'Tell us about your project...',
      },
      submit: 'Send Message',
      successMessage:
        'Thank you for your message! We will get back to you soon.',
      errors: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email address',
        messageRequired: 'Message is required',
        messageTooLong: 'Message must be 1000 characters or less',
      },
    },
  },

  // About Section
  about: {
    title: 'About Us',
    paragraph1:
      "We're on a mission to empower creators and businesses with tools that make building amazing products effortless. Our platform combines cutting-edge technology with intuitive design to help you bring your vision to life.",
    paragraph2:
      'Founded by a team of passionate developers and designers, we believe that great software should be accessible to everyone. Join us in shaping the future of digital innovation.',
  },

  // Header/Navigation
  header: {
    nav: {
      home: 'Home',
      features: 'Features',
      about: 'About',
      contact: 'Contact',
    },
  },

  // Hero Section
  hero: {
    launchBadge: 'Coming Soon',
    title: 'Build Something Amazing',
    tagline: 'Your Tagline',
    description:
      'Transform your ideas into reality with our powerful platform.',
    primaryCta: 'Get Started',
    secondaryCta: 'Learn More',
  },

  // Features Section
  features: {
    title: 'Features',
    learnMore: 'Learn more →',
    items: [
      {
        icon: '⚡',
        title: 'Lightning Fast',
        description: 'Built for speed and performance from the ground up.',
        routePath: '/features/lightning-fast',
        featureDetails: {
          price: '$29/mo',
          image: saasLaunchImages.lightningFast,
          altImage: 'Lightning fast performance dashboard',
          fullDescription:
            "Experience blazing-fast performance with our cutting-edge technology stack. We've optimized every layer of our platform to deliver sub-second response times, ensuring your users never have to wait.",
          features: [
            'Sub-second response times across all operations',
            'Advanced caching mechanisms for instant data retrieval',
            'Global CDN delivery for worldwide speed',
            'Optimized database queries and indexing',
            'Real-time performance monitoring and alerts',
          ],
        },
      },
      {
        icon: '🔒',
        title: 'Secure by Default',
        description: 'Enterprise-grade security built into every layer.',
        routePath: '/features/secure-by-default',
        featureDetails: {
          price: '$49/mo',
          image: saasLaunchImages.secureByDefault,
          altImage: 'Security and encryption protection',
          fullDescription:
            "Security is not an afterthought - it's built into every aspect of our platform. From end-to-end encryption to regular security audits, we ensure your data is always protected.",
          features: [
            'End-to-end encryption for all data transfers',
            'SOC 2 Type II compliance certified',
            'Regular third-party security audits',
            'Advanced threat detection and prevention',
            'Automatic security patches and updates',
          ],
        },
      },
      {
        icon: '🎨',
        title: 'Beautiful Design',
        description: 'Stunning interfaces that users love to interact with.',
        routePath: '/features/beautiful-design',
        featureDetails: {
          price: '$39/mo',
          image: saasLaunchImages.beautifulDesign,
          altImage: 'Beautiful and modern interface design',
          fullDescription:
            'Every pixel matters. Our design team has crafted beautiful, intuitive interfaces that delight users and make complex tasks feel simple.',
          features: [
            'Modern, clean interface design',
            'Fully responsive across all devices',
            'Customizable themes and branding',
            'Accessible design following WCAG 2.1 guidelines',
            'Smooth animations and transitions',
          ],
        },
      },
    ],
  },

  // Stats Section
  stats: {
    items: [
      { number: '10K+', label: 'Active Users' },
      { number: '99.9%', label: 'Uptime' },
      { number: '24/7', label: 'Support' },
      { number: '50+', label: 'Countries' },
    ],
  },

  // Final CTA Section
  finalCta: {
    title: 'Ready to get started?',
    description: 'Join thousands of users already using our platform.',
    button: 'Start Free Trial',
  },

  // Feature Page
  featurePage: {
    backButton: 'Back',
    overview: 'Overview',
    keyFeatures: 'Key Features',
    priceLabel: 'Price',
  },

  // Footer
  footer: {
    copyright: '© {year} {companyName}. All rights reserved.',
    links: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact',
    },
  },

  // Accessibility labels
  aria: {
    location: 'location',
    email: 'email',
    phone: 'phone',
    socialMedia: 'social media',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    rocket: 'rocket',
  },
} as const;

export interface LocaleStrings {
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    sectionTitle: string;
    labels: {
      address: string;
      email: string;
      phone: string;
      socialMedia: string;
    };
    form: {
      name: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      message: {
        label: string;
        placeholder: string;
      };
      submit: string;
      successMessage: string;
      errors: {
        nameRequired: string;
        emailRequired: string;
        emailInvalid: string;
        messageRequired: string;
        messageTooLong: string;
      };
    };
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  header: {
    nav: {
      home: string;
      features: string;
      about: string;
      contact: string;
    };
  };
  hero: {
    launchBadge: string;
    title: string;
    tagline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  features: {
    title: string;
    learnMore: string;
    items: ReadonlyArray<{
      icon: string;
      title: string;
      description: string;
      routePath?: string;
      featureDetails?: {
        price?: string;
        image?: string;
        altImage?: string;
        fullDescription?: string;
        features?: readonly string[];
      };
    }>;
  };
  stats: {
    items: ReadonlyArray<{
      number: string;
      label: string;
    }>;
  };
  finalCta: {
    title: string;
    description: string;
    button: string;
  };
  featurePage: {
    backButton: string;
    overview: string;
    keyFeatures: string;
    priceLabel: string;
  };
  footer: {
    copyright: string;
    links: {
      privacy: string;
      terms: string;
      contact: string;
    };
  };
  aria: {
    location: string;
    email: string;
    phone: string;
    socialMedia: string;
    twitter: string;
    linkedin: string;
    github: string;
    rocket: string;
  };
}
