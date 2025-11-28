# @webbitstudio/landing-templates

This library was generated with [Nx](https://nx.dev).

## Templates

### SaaS Launch Template

A modern, fully responsive landing page template for SaaS products with built-in localization support, customizable content, and beautiful animations.

## Installation

```bash
yarn add @webbitstudio/landing-templates
```

## Basic Usage

```tsx
import { SaasLaunch } from '@webbitstudio/landing-templates';

function App() {
  return <SaasLaunch productName="My Product" companyName="My Company" logoLetter="M" />;
}
```

## Features

- 🌍 **Multi-language support** - English, Spanish, and French out of the box
- 🎨 **Fully customizable** - Colors, content, and sections
- 📱 **Responsive design** - Mobile-first approach using Tailwind CSS
- ✨ **Smooth animations** - Scroll-reveal effects and transitions
- ⚡ **Performance optimized** - Built with React best practices

## API Reference

### SaasLaunch Component Props

```typescript
interface SaasLaunchProps {
  // Brand/Company
  productName?: string;
  companyName?: string;
  logoLetter?: string;

  // Content overrides (optional - falls back to locale strings)
  content?: ContentOverrides;

  // Custom sections
  aboutSection?: React.ReactNode;
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
  locale?: string; // 'en' | 'es' | 'fr'
  onLocaleChange?: (locale: string) => void;
  languageOptions?: Array<{
    code: string;
    flag: string;
    label: string;
  }>;

  // Theme switcher
  showThemeSwitcher?: boolean;

  // Footer
  footerLinks?: Array<{
    label: string;
    href: string;
  }>;
}
```

### Content Overrides

Override specific text content while keeping the locale's default values for everything else:

```typescript
interface ContentOverrides {
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
```

## Examples

### Basic Usage with Spanish Locale

```tsx
import { SaasLaunch } from '@webbitstudio/landing-templates';

<SaasLaunch locale="es" productName="Mi Producto" companyName="Mi Empresa" />;
```

### Dynamic Language Switching

```tsx
import { useState } from 'react';
import { SaasLaunch } from '@webbitstudio/landing-templates';

function App() {
  const [language, setLanguage] = useState('en');

  return <SaasLaunch locale={language} onLocaleChange={setLanguage} showLanguageSwitcher={true} productName="My Product" companyName="My Company" />;
}
```

### Customizing Content

Override specific content while keeping locale defaults:

```tsx
<SaasLaunch
  locale="en"
  productName="My SaaS"
  companyName="Acme Inc"
  content={{
    heroTitle: 'Welcome to the Future',
    heroDescription: 'Our platform helps you build amazing products faster.',
    primaryCtaText: 'Start Free Trial',
    primaryCtaHref: '/signup',
    features: [
      {
        icon: '🚀',
        title: 'Super Fast',
        description: 'Lightning-fast performance guaranteed.',
      },
      {
        icon: '🔐',
        title: 'Secure',
        description: 'Bank-level security for your data.',
      },
      {
        icon: '💎',
        title: 'Premium Quality',
        description: 'Built with attention to every detail.',
      },
    ],
    stats: [
      { number: '100K+', label: 'Users' },
      { number: '99.9%', label: 'Uptime' },
      { number: '24/7', label: 'Support' },
    ],
  }}
/>
```

### Custom Color Scheme

```tsx
<SaasLaunch
  productName="My Brand"
  colors={{
    primary: '#6366f1',
    primaryDark: '#4f46e5',
    secondary: '#8b5cf6',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f1f5f9',
    textMuted: '#94a3b8',
    accent: '#22d3ee',
  }}
/>
```

### Custom Footer Links

```tsx
<SaasLaunch
  companyName="My Company"
  footerLinks={[
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ]}
/>
```

### Custom About and Contact Sections

```tsx
import { SaasLaunch } from '@webbitstudio/landing-templates';

const CustomAbout = () => (
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
    <p className="text-lg">Custom about content here...</p>
  </div>
);

const CustomContact = () => (
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
    <form>{/* Custom form */}</form>
  </div>
);

<SaasLaunch productName="My Product" aboutSection={<CustomAbout />} contactSection={<CustomContact />} />;
```

### Using the Theme Switcher

The template includes a built-in theme switcher with 5 pre-configured themes:

```tsx
import { SaasLaunch } from '@webbitstudio/landing-templates';

// Theme switcher is enabled by default
<SaasLaunch productName="My Product" />

// Disable theme switcher
<SaasLaunch productName="My Product" showThemeSwitcher={false} />
```

**Available Themes:**

- 🌙 **Dark** (default) - Dark slate with soft blues and purples
- ☀️ **Light** - Bright blue and purple tones
- 🌊 **Ocean** - Sky blue aquatic colors
- 🌅 **Sunset** - Warm oranges and pinks
- 🌲 **Forest** - Fresh greens and lime

Themes persist across page reloads using localStorage and automatically apply CSS custom properties for seamless color transitions.

## Localization

### Supported Languages

- **English (en)** - Default
- **Spanish (es)**
- **French (fr)**

### Locale Structure

Each locale provides translations for all template sections:

- **Header Navigation** - Home, Features, About, Contact
- **Hero Section** - Launch badge, title, tagline, description, CTA buttons
- **Features Section** - Feature items with icons, titles, and descriptions
- **Stats Section** - Statistics with numbers and labels
- **About Section** - Title and content paragraphs
- **Contact Section** - Form labels, placeholders, and messages
- **Final CTA Section** - Call-to-action title, description, and button
- **Footer** - Copyright text and links
- **Accessibility Labels** - ARIA labels for screen readers

### Adding a New Language

1. **Create locale file** in `src/lib/saas-launch/utils/locales/de.ts`:

```typescript
import type { LocaleStrings } from './en';

export const de: LocaleStrings = {
  contact: {
    title: 'Kontakt aufnehmen',
    subtitle: 'Haben Sie Fragen? Wir helfen Ihnen gerne weiter.',
    formTitle: 'Senden Sie uns eine Nachricht',
    sectionTitle: 'Kontaktinformationen',
    labels: {
      address: 'Adresse',
      email: 'E-Mail',
      phone: 'Telefon',
      socialMedia: 'Soziale Medien',
    },
    form: {
      name: {
        label: 'Name',
        placeholder: 'Ihr Name',
      },
      email: {
        label: 'E-Mail',
        placeholder: 'ihre@email.de',
      },
      message: {
        label: 'Nachricht',
        placeholder: 'Erzählen Sie uns von Ihrem Projekt...',
      },
      submit: 'Nachricht senden',
      successMessage: 'Vielen Dank! Wir melden uns bald bei Ihnen.',
    },
  },
  about: {
    title: 'Über uns',
    paragraph1: '...',
    paragraph2: '...',
  },
  header: {
    nav: {
      home: 'Startseite',
      features: 'Funktionen',
      about: 'Über uns',
      contact: 'Kontakt',
    },
  },
  hero: {
    launchBadge: 'Demnächst',
    title: 'Bauen Sie etwas Erstaunliches',
    tagline: 'Ihr Slogan',
    description: 'Verwandeln Sie Ihre Ideen in Realität.',
    primaryCta: 'Jetzt starten',
    secondaryCta: 'Mehr erfahren',
  },
  features: {
    items: [
      {
        icon: '⚡',
        title: 'Blitzschnell',
        description: 'Von Grund auf für Geschwindigkeit entwickelt.',
      },
      // ... more features
    ],
  },
  stats: {
    items: [
      { number: '10K+', label: 'Aktive Nutzer' },
      // ... more stats
    ],
  },
  finalCta: {
    title: 'Bereit loszulegen?',
    description: 'Schließen Sie sich Tausenden von Nutzern an.',
    button: 'Kostenlos testen',
  },
  footer: {
    copyright: '© {year} {companyName}. Alle Rechte vorbehalten.',
    links: {
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      contact: 'Kontakt',
    },
  },
  aria: {
    location: 'Standort',
    email: 'E-Mail',
    phone: 'Telefon',
    socialMedia: 'soziale Medien',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    rocket: 'Rakete',
  },
};
```

2. **Export locale** in `src/lib/saas-launch/utils/locales/index.ts`:

```typescript
export { de } from './de';
export const AVAILABLE_LOCALES = ['en', 'es', 'fr', 'de'] as const;
```

3. **Update getLocaleStrings** function:

```typescript
export const getLocaleStrings = (locale: string): LocaleStrings => {
  switch (locale) {
    case 'de':
      return de;
    case 'es':
      return es;
    case 'fr':
      return fr;
    case 'en':
    default:
      return en;
  }
};
```

## Running unit tests

Run `nx test @webbitstudio/landing-templates` to execute the unit tests via [Vitest](https://vitest.dev/).
