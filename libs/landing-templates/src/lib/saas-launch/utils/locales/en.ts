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
    items: [
      {
        icon: '⚡',
        title: 'Lightning Fast',
        description: 'Built for speed and performance from the ground up.',
      },
      {
        icon: '🔒',
        title: 'Secure by Default',
        description: 'Enterprise-grade security built into every layer.',
      },
      {
        icon: '🎨',
        title: 'Beautiful Design',
        description: 'Stunning interfaces that users love to interact with.',
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
    items: ReadonlyArray<{
      icon: string;
      title: string;
      description: string;
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
