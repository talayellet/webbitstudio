import { DEFAULT_COLORS } from './styles';
import {
  ContentOverrides,
  ShowSections,
  ContactInfo,
  ContactFieldsConfig,
  LanguageOption,
} from './types';
import React from 'react';
import { AboutSection, ContactSection } from '../components';
import { en } from './locales';
import { LOCALES, THEME_NAMES } from '../../shared';
import { SaasLaunchProps } from '../saas-launch';

export * from './locales';

// ============================================================================
// Contact Info
// ============================================================================

export const DEFAULT_CONTACT_FIELDS: ContactFieldsConfig = {
  showAddress: true,
  showEmail: true,
  showPhone: true,
  showSocialMedia: true,
  socialLinks: {
    showTwitter: true,
    showLinkedin: true,
    showGithub: true,
    showCustom: true,
  },
} as const;

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
} as const;

// ============================================================================
// Contact Section
// ============================================================================

export const DEFAULT_CONTACT_SECTION_TITLE = 'Get In Touch';
export const DEFAULT_CONTACT_SECTION_SUBTITLE =
  "Have a question or want to work together? We'd love to hear from you.";
export const DEFAULT_CONTACT_FORM_TITLE = 'Send us a message';

export const CONTACT_FORM = {
  ERROR_IDS: {
    NAME: 'name-error',
    EMAIL: 'email-error',
    MESSAGE: 'message-error',
    CONSENT: 'consent-error',
  },
  PRIVACY_POLICY_PATH: '/privacy-policy',
} as const;

// ============================================================================
// About Section
// ============================================================================

export const DEFAULT_ABOUT_SECTION_TITLE = 'About Us';
export const DEFAULT_ABOUT_SECTION_PARAGRAPH_1 =
  "We're on a mission to empower creators and businesses with tools that make building amazing products effortless. Our platform combines cutting-edge technology with intuitive design to help you bring your vision to life.";
export const DEFAULT_ABOUT_SECTION_PARAGRAPH_2 =
  'Founded by a team of passionate developers and designers, we believe that great software should be accessible to everyone. Join us in shaping the future of digital innovation.';

// ============================================================================
// Locale
// ============================================================================

export const DEFAULT_LOCALE_STRINGS = en;

// ============================================================================
// Footer
// ============================================================================

export const FOOTER_PATHS = {
  PRIVACY: '/privacy',
  TERMS: '/terms',
  CONTACT: '/contact',
} as const;

// ============================================================================
// Language
// ============================================================================

export const DEFAULT_LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: LOCALES.EN, flag: '🇺🇸', label: 'English' },
  { code: LOCALES.ES, flag: '🇪🇸', label: 'Español' },
  { code: LOCALES.FR, flag: '🇫🇷', label: 'Français' },
];

// ============================================================================
// Section Visibility
// ============================================================================

export const DEFAULT_SHOW_SECTIONS: ShowSections = {
  hero: true,
  features: true,
  stats: true,
  finalCta: true,
} as const;

// ============================================================================
// Template
// ============================================================================

export const DEFAULT_TEMPLATE: Omit<
  Required<Omit<SaasLaunchProps, 'content'>>,
  'web3formsAccessKey'
> & {
  content?: ContentOverrides;
  web3formsAccessKey?: string;
} = {
  productName: 'Product',
  companyName: 'Company',
  logo: 'C',
  aboutSection: React.createElement(AboutSection),
  contactSection: React.createElement(ContactSection),
  contactFieldsConfig: DEFAULT_CONTACT_FIELDS,
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
  showThemeSwitcher: true,
  locale: LOCALES.EN,
  onLocaleChange: () => {
    // Default no-op handler
  },
  onFeatureClick: () => {
    // Default no-op handler
  },
  onFooterLinkClick: () => {
    // Default no-op handler
  },
  languageOptions: DEFAULT_LANGUAGE_OPTIONS,
  showFooter: true,
  footerLinks: [
    {
      label: en.footer.links.privacy,
      href: FOOTER_PATHS.PRIVACY,
    },
    {
      label: en.footer.links.terms,
      href: FOOTER_PATHS.TERMS,
    },
  ],
  theme: THEME_NAMES.DARK,
};

// ============================================================================
// Scroll
// ============================================================================

export const DEFAULT_SCROLL_THRESHOLD = 150;
