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
  features?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  // Stats
  stats?: Array<{
    number: string;
    label: string;
  }>;

  // Final CTA
  finalCtaTitle?: string;
  finalCtaDescription?: string;
  finalCtaButton?: string;
  finalCtaHref?: string;
}

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
  colors?: {
    primary?: string;
    primaryDark?: string;
    secondary?: string;
    background?: string;
    surface?: string;
    text?: string;
    textMuted?: string;
    accent?: string;
  };

  // Language switcher
  showLanguageSwitcher?: boolean;
  locale?: string;
  onLocaleChange?: (locale: string) => void;
  languageOptions?: Array<{
    code: string;
    flag: string;
    label: string;
  }>;

  // Footer
  footerLinks?: Array<{
    label: string;
    href: string;
  }>;
}
