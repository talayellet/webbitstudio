import type { Locale } from '../../shared';

// ============================================================================
// Menu
// ============================================================================

export interface MenuItem {
  icon: string;
  name: string;
  description: string;
  price: string;
}

// ============================================================================
// Hours
// ============================================================================

export interface Hours {
  line1: string;
  line2: string;
  line3: string;
}

// ============================================================================
// Location
// ============================================================================

export interface Location {
  line1: string;
  line2: string;
  line3: string;
}

// ============================================================================
// Contact
// ============================================================================

export interface Contact {
  phone: string;
  email: string;
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
// Footer
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

// ============================================================================
// Language Options
// ============================================================================

// Using LanguageOption from @webbitstudio/shared-utils

// ============================================================================
// Content Overrides
// ============================================================================

export interface ContentOverrides {
  // Hero Section
  heroSubtitle?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroCta?: string;

  // About Section
  aboutTitle?: string;
  aboutParagraph1?: string;
  aboutParagraph2?: string;

  // Menu Section
  menuTitle?: string;
  menuDescription?: string;
  menuItems?: MenuItem[];

  // Info Section
  hoursTitle?: string;
  hours?: Hours;
  locationTitle?: string;
  location?: Location;
  contactTitle?: string;
  contact?: Contact;

  // Reservation Section
  reservationTitle?: string;
  reservationDescription?: string;
  reservationButton?: string;

  // Footer
  footerTagline?: string;
}

// ============================================================================
// Color Scheme
// ============================================================================

export interface ColorScheme {
  primary?: string;
  primaryLight?: string;
  secondary?: string;
  accent?: string;
  background?: string;
  surface?: string;
  text?: string;
  textMuted?: string;
}

// ============================================================================
// Show Sections
// ============================================================================

export interface ShowSections {
  hero?: boolean;
  about?: boolean;
  menu?: boolean;
  info?: boolean;
  reservation?: boolean;
}

// ============================================================================
// Locale Strings
// ============================================================================

export interface LocaleStrings {
  defaultRestaurantName: string;
  header: {
    nav: {
      about: string;
      menu: string;
      contact: string;
    };
    aria: {
      mainNavigation: string;
      returnToTop: string;
    };
  };
  hero: {
    subtitle: string;
    title: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  menu: {
    title: string;
    description: string;
    items: MenuItem[];
  };
  info: {
    hoursTitle: string;
    hours: Hours;
    locationTitle: string;
    location: Location;
    contactTitle: string;
    contact: Contact;
  };
  reservation: {
    title: string;
    description: string;
    button: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    followUs: string;
    copyright: string;
    links: {
      about: string;
      menu: string;
      contact: string;
      instagram: string;
      facebook: string;
      twitter: string;
    };
  };
  pageUnderConstruction: {
    title: string;
    message: string;
    backButton: string;
  };
  themes: {
    warm: string;
    elegant: string;
    modern: string;
    rustic: string;
    coastal: string;
  };
}
