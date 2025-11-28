import { DEFAULT_COLORS } from './styles';
import { SaasLaunchProps } from './types';
import React from 'react';
import { DefaultAboutSection, DefaultContactSection } from '../main-sections';
export const DEFAULT_TEMPLATE: Required<SaasLaunchProps> = {
  productName: 'Product',
  tagline: 'Your Tagline',
  companyName: 'Company',
  logoLetter: 'C',
  launchBadgeText: 'Coming Soon',
  heroTitle: 'Build Something Amazing',
  heroDescription:
    'Transform your ideas into reality with our powerful platform.',
  primaryCtaText: 'Get Started',
  secondaryCtaText: 'Learn More',
  primaryCtaHref: '#',
  secondaryCtaHref: '#',
  features: [
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
  stats: [
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'Countries' },
  ],
  aboutSection: React.createElement(DefaultAboutSection),
  contactSection: React.createElement(DefaultContactSection),
  finalCtaTitle: 'Ready to get started?',
  finalCtaDescription: 'Join thousands of users already using our platform.',
  finalCtaButton: 'Start Free Trial',
  finalCtaHref: '#',
  colors: {
    primary: DEFAULT_COLORS.PRIMARY,
    primaryDark: DEFAULT_COLORS.PRIMARY_DARK,
    secondary: DEFAULT_COLORS.SECONDARY,
    background: DEFAULT_COLORS.BACKGROUND,
    surface: DEFAULT_COLORS.SURFACE,
    text: DEFAULT_COLORS.TEXT,
    textMuted: DEFAULT_COLORS.TEXT_MUTED,
    accent: DEFAULT_COLORS.ACCENT,
  },
};

export const DEFAULT_SCROLL_THRESHOLD = 150;
