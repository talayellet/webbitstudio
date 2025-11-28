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

export interface Feature {
  icon: string;
  title: string;
  description: string;
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
}

// ============================================================================
// Language
// ============================================================================

export interface LanguageOption {
  code: string;
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
  features?: Array<Feature>;

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

// ============================================================================
// Main Component Props
// ============================================================================

export interface SaasLaunchProps {
  // Brand/Company
  productName?: string;
  companyName?: string;
  logoLetter?: string;

  // Content overrides (optional - falls back to locale strings)
  content?: ContentOverrides;

  // About Section
  aboutSection?: React.ReactNode;

  // Contact Section
  contactSection?: React.ReactNode;

  // Color scheme
  colors?: ColorScheme;

  // Language switcher
  showLanguageSwitcher?: boolean;
  locale?: string;
  onLocaleChange?: (locale: string) => void;
  languageOptions?: Array<LanguageOption>;

  // Theme switcher
  showThemeSwitcher?: boolean;

  // Footer
  showFooter?: boolean;
  footerLinks?: Array<FooterLink>;
}
