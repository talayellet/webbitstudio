import { DEFAULT_COLORS } from './styles';
import { SaasLaunchProps, ContentOverrides } from './types';
import React from 'react';
import { AboutSection, DefaultContactSection } from '../components';
import { en } from './locales';

export * from './locales';

export interface ContactInfo {
  address?: {
    line1?: string;
    line2?: string;
    line3?: string;
  };
  email?: string;
  phone?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const DEFAULT_CONTACT_INFO: ContactInfo = {
  address: {
    line1: '123 Tech Street, Suite 100',
    line2: 'San Francisco, CA 94105',
    line3: 'United States',
  },
  email: 'hello@company.com',
  phone: '+1 (415) 555-1234',
  social: {
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
};

export const DEFAULT_CONTACT_SECTION_TITLE = 'Get In Touch';
export const DEFAULT_CONTACT_SECTION_SUBTITLE =
  "Have a question or want to work together? We'd love to hear from you.";
export const DEFAULT_CONTACT_FORM_TITLE = 'Send us a message';

export const DEFAULT_ABOUT_SECTION_TITLE = 'About Us';
export const DEFAULT_ABOUT_SECTION_PARAGRAPH_1 =
  "We're on a mission to empower creators and businesses with tools that make building amazing products effortless. Our platform combines cutting-edge technology with intuitive design to help you bring your vision to life.";
export const DEFAULT_ABOUT_SECTION_PARAGRAPH_2 =
  'Founded by a team of passionate developers and designers, we believe that great software should be accessible to everyone. Join us in shaping the future of digital innovation.';

// Default locale strings
export const DEFAULT_LOCALE_STRINGS = en;

// Footer path constants
export const FOOTER_PATHS = {
  PRIVACY: '/privacy',
  TERMS: '/terms',
  CONTACT: '/contact',
} as const;

// Default language options
export const DEFAULT_LANGUAGE_OPTIONS = [
  { code: 'en', flag: '🇺🇸', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
];

export const DEFAULT_TEMPLATE: Required<Omit<SaasLaunchProps, 'content'>> & {
  content?: ContentOverrides;
} = {
  productName: 'Product',
  companyName: 'Company',
  logoLetter: 'C',
  aboutSection: React.createElement(AboutSection),
  contactSection: React.createElement(DefaultContactSection),
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
  showLanguageSwitcher: true,
  locale: 'en',
  onLocaleChange: () => {
    // Default no-op handler
  },
  languageOptions: DEFAULT_LANGUAGE_OPTIONS,
  footerLinks: [],
};

export const DEFAULT_SCROLL_THRESHOLD = 150;
