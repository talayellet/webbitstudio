import type { Locale } from '../../shared';

// ============================================================================
// Contact
// ============================================================================

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrorMessages {
  serverError: string;
  rateLimitError: string;
  submissionFailed: string;
}

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
    custom?: React.ReactElement;
  };
}

export interface ContactFieldsConfig {
  showAddress?: boolean;
  showEmail?: boolean;
  showPhone?: boolean;
  showSocialMedia?: boolean;
  socialLinks?: {
    showTwitter?: boolean;
    showLinkedin?: boolean;
    showGithub?: boolean;
    showCustom?: boolean;
  };
}

// ============================================================================
// Navigation
// ============================================================================

export interface NavLink {
  href: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// ============================================================================
// Features
// ============================================================================

export interface FeatureDetails {
  price?: string;
  image?: string;
  altImage?: string;
  fullDescription?: string;
  features?: readonly string[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  routePath?: string;
  featureDetails?: FeatureDetails;
}

// ============================================================================
// Stats
// ============================================================================

export interface Stat {
  number: string;
  label: string;
}

// ============================================================================
// Footer
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// ============================================================================
// Language
// ============================================================================

export interface LanguageOption {
  code: Locale;
  flag: string;
  label: string;
}

// ============================================================================
// Theme
// ============================================================================

export interface ColorScheme {
  primary?: string;
  primaryDark?: string;
  secondary?: string;
  background?: string;
  surface?: string;
  text?: string;
  textMuted?: string;
  accent?: string;
}

// ============================================================================
// Content Overrides
// ============================================================================

export interface ContentOverrides {
  // Hero Section
  launchBadgeText?: string;
  heroTitle?: string;
  tagline?: string;
  heroDescription?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaHref?: string;

  // Features
  features?: Feature[];
  featuresSectionTitle?: string;

  // Stats
  stats?: Array<Stat>;

  // Final CTA
  finalCtaTitle?: string;
  finalCtaDescription?: string;
  finalCtaButton?: string;
  finalCtaHref?: string;
}

// ============================================================================
// Section Visibility
// ============================================================================

export interface ShowSections {
  hero?: boolean;
  features?: boolean;
  stats?: boolean;
  finalCta?: boolean;
}
