export interface SaasLaunchProps {
  // Brand/Company
  productName?: string;
  tagline?: string;
  companyName?: string;
  logoLetter?: string;

  // Hero Section
  launchBadgeText?: string;
  heroTitle?: string;
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

  // About Section
  aboutSection?: React.ReactNode;

  // Final CTA
  finalCtaTitle?: string;
  finalCtaDescription?: string;
  finalCtaButton?: string;
  finalCtaHref?: string;

  // Colors (CSS variables)
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
}
