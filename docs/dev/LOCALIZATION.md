# Localization System Documentation

## Overview

The landing templates library uses a comprehensive localization (i18n) system that allows components to support multiple languages. All user-facing text is stored in typed locale files, ensuring type safety and maintainability.

## Architecture

### Locale Files Structure

```
utils/locales/
  ├── en.ts          # English locale (defines LocaleStrings interface)
  ├── es.ts          # Spanish locale
  ├── fr.ts          # French locale
  └── index.ts       # Exports and utilities
```

### Type System

The `LocaleStrings` interface (defined in `en.ts`) ensures all locales have complete translations:

```typescript
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
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
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
    copyright: string; // Supports {year} and {companyName} placeholders
    links: {
      privacy: string;
      terms: string;
      contact: string;
    };
  };
  aria: {
    // Accessibility labels for screen readers
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
```

## Implementing Localization in Components

### Internal Component Implementation

When building internal components within the library, follow these patterns:

### 1. Add Locale Prop to Component Interface

```typescript
import { LocaleStrings } from '../../utils/locales';

export interface MyComponentProps {
  // ... other props
  locale?: LocaleStrings;
}
```

### 2. Use Default Locale Import

```typescript
import { DEFAULT_LOCALE_STRINGS } from '../../utils';

export const MyComponent = ({ locale = DEFAULT_LOCALE_STRINGS, ...otherProps }: MyComponentProps) => {
  return (
    <div>
      <h2>{locale.mySection.title}</h2>
      <p>{locale.mySection.description}</p>
    </div>
  );
};
```

### 3. Handle Placeholders in Locale Strings

For dynamic content like dates or names, use placeholder syntax with string replacement:

```typescript
// In locale file
copyright: '© {year} {companyName}. All rights reserved.';

// In component - use useMemo for performance
const copyrightText = useMemo(() => locale.footer.copyright.replace('{year}', new Date().getFullYear().toString()).replace('{companyName}', companyName), [locale, companyName]);
```

### 4. Accessibility Labels

Always localize `aria-label` attributes for screen readers:

```typescript
<span role="img" aria-label={locale.aria.rocket}>
  🚀
</span>
```

### 5. ID Attributes (Do NOT Localize)

Never localize `id` or `href` attributes as they're used for navigation and JavaScript:

```typescript
// ❌ Wrong
<section id={locale.sections.about}>

// ✅ Correct
<section id="about">
  <h2>{locale.sections.about.title}</h2>
</section>
```

## Adding a New Language

### Step 1: Create Locale File

Create `utils/locales/de.ts` (German example):

```typescript
import { LocaleStrings } from './en';

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
      successMessage: 'Vielen Dank! Wir melden uns bald.',
    },
  },
  about: {
    title: 'Über uns',
    paragraph1: 'Wir haben es uns zur Aufgabe gemacht...',
    paragraph2: 'Gegründet von einem Team...',
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
      {
        icon: '🔒',
        title: 'Standardmäßig sicher',
        description: 'Sicherheit auf Unternehmensniveau in jeder Ebene.',
      },
      {
        icon: '🎨',
        title: 'Schönes Design',
        description: 'Beeindruckende Oberflächen.',
      },
    ],
  },
  stats: {
    items: [
      { number: '10K+', label: 'Aktive Nutzer' },
      { number: '99.9%', label: 'Verfügbarkeit' },
      { number: '24/7', label: 'Support' },
      { number: '50+', label: 'Länder' },
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

### Step 2: Register Locale

Update `utils/locales/index.ts`:

```typescript
import { de } from './de';

export { en } from './en';
export { es } from './es';
export { fr } from './fr';
export { de } from './de'; // Add export
export type { LocaleStrings } from './en';

export const DEFAULT_LOCALE = 'en';

export const AVAILABLE_LOCALES = ['en', 'es', 'fr', 'de'] as const; // Add to array
export type AvailableLocale = (typeof AVAILABLE_LOCALES)[number];

export const getLocaleStrings = (locale: string): LocaleStrings => {
  switch (locale) {
    case 'es':
      return es;
    case 'fr':
      return fr;
    case 'de':
      return de; // Add case
    case 'en':
    default:
      return en;
  }
};
```

### Step 3: Update Language Switcher

If you want to add the language to the default language switcher, you can provide custom language options to the `SaasLaunch` component:

```typescript
<SaasLaunch
  showLanguageSwitcher={true}
  languageOptions={[
    { code: 'en', flag: '🇺🇸', label: 'English' },
    { code: 'es', flag: '🇪🇸', label: 'Español' },
    { code: 'fr', flag: '🇫🇷', label: 'Français' },
    { code: 'de', flag: '🇩🇪', label: 'Deutsch' }, // Add new language
  ]}
/>
```

## Usage Examples

### Basic Usage with Locale

```typescript
import { SaasLaunch } from '@webbitstudio/landing-templates';

// Use Spanish locale
<SaasLaunch locale="es" productName="Mi Producto" companyName="Mi Empresa" />;
```

### Dynamic Language Switching

```typescript
import { useState } from 'react';
import { SaasLaunch } from '@webbitstudio/landing-templates';

function App() {
  const [currentLocale, setCurrentLocale] = useState('en');

  return <SaasLaunch locale={currentLocale} onLocaleChange={setCurrentLocale} showLanguageSwitcher={true} productName="My Product" />;
}
```

### Override Content While Using Locale

```typescript
import { SaasLaunch } from '@webbitstudio/landing-templates';

// Use French locale but override specific content
<SaasLaunch
  locale="fr"
  productName="Mon Produit"
  content={{
    heroTitle: 'Bienvenue sur notre plateforme',
    primaryCtaText: 'Essai gratuit',
    features: [
      {
        icon: '🚀',
        title: 'Rapide',
        description: 'Performance optimale',
      },
    ],
  }}
/>;
```

## Best Practices

### 1. Type Safety First

Always implement the `LocaleStrings` interface to ensure complete translations:

```typescript
// TypeScript will error if any required translations are missing
export const de: LocaleStrings = {
  // ... must include all required properties
};
```

### 2. Use Readonly Arrays

Features and stats use `ReadonlyArray` to prevent mutations:

```typescript
features: {
  items: ReadonlyArray<{
    icon: string;
    title: string;
    description: string;
  }>;
}
```

### 3. Default Fallback

Always provide a default locale in component props:

```typescript
import { DEFAULT_LOCALE_STRINGS } from '../../utils';

export const MyComponent = ({ locale = DEFAULT_LOCALE_STRINGS }: MyComponentProps) => {
  // Component will work even if locale prop is not provided
};
```

### 4. Use useMemo for Computed Values

When deriving values from locale strings:

```typescript
const copyrightText = useMemo(() => locale.footer.copyright.replace('{year}', currentYear.toString()).replace('{companyName}', companyName), [locale, currentYear, companyName]);
```

### 4. Use useMemo for Computed Values

When deriving values from locale strings:

```typescript
const copyrightText = useMemo(() => locale.footer.copyright.replace('{year}', currentYear.toString()).replace('{companyName}', companyName), [locale, currentYear, companyName]);
```

### 5. Consistent Placeholder Syntax

Use curly braces for placeholders:

```typescript
// ✅ Good
welcome: 'Welcome, {username}!';

// ❌ Avoid
welcome: 'Welcome, $username!';
```

### 6. Meaningful Aria Labels

Provide descriptive labels for screen readers:

```typescript
aria: {
  rocket: 'rocket emoji indicating launch',
  email: 'email address',
  phone: 'phone number',
}
```

### 7. Document Placeholders

Add comments for strings with placeholders:

```typescript
footer: {
  // Placeholders: {year}, {companyName}
  copyright: '© {year} {companyName}. All rights reserved.',
}
```

## Testing Localization

### Manual Testing

Test each locale by passing it to the SaasLaunch component:

```typescript
// Test all languages
<SaasLaunch locale="en" productName="My Product" />
<SaasLaunch locale="es" productName="Mi Producto" />
<SaasLaunch locale="fr" productName="Mon Produit" />
```

### Automated Testing

Ensure all locales implement the interface correctly. TypeScript will catch missing translations at compile time:

```typescript
import type { LocaleStrings } from './en';
import { es, fr } from './';

// TypeScript compilation ensures all locales are valid LocaleStrings
const testLocale: LocaleStrings = es; // Will error if es is incomplete
```

## RTL Language Support (Future Enhancement)

For right-to-left languages (Arabic, Hebrew), you would need to:

1. Add a `direction` field to `LocaleStrings`:

```typescript
export interface LocaleStrings {
  direction?: 'ltr' | 'rtl';
  // ... other fields
}
```

2. Apply the direction in your components:

```typescript
<div dir={locale.direction || 'ltr'}>
  <SaasLaunch locale="ar" />
</div>
```

## Migration Guide

### Migrating Existing Components to Use Localization

1. **Identify hardcoded strings** in the component
2. **Add them to the LocaleStrings interface** (in `en.ts`)
3. **Update all existing locale files** (es.ts, fr.ts) with translations
4. **Add locale prop** to component interface with default value
5. **Replace hardcoded strings** with locale references
6. **Wrap computed values in useMemo**
7. **Test** with multiple locales

Example:

```typescript
// Before
export const MyComponent = () => {
  return <h1>Welcome</h1>;
};

// After
import { LocaleStrings } from '../../utils/locales';
import { DEFAULT_LOCALE_STRINGS } from '../../utils';

interface MyComponentProps {
  locale?: LocaleStrings;
}

export const MyComponent = ({ locale = DEFAULT_LOCALE_STRINGS }: MyComponentProps) => {
  return <h1>{locale.welcome.title}</h1>;
};
```

## Common Pitfalls

### ❌ Don't Localize Technical Strings

```typescript
// Wrong - don't localize IDs, classes, or technical identifiers
<section id={locale.sections.about}>

// Correct
<section id="about">
  <h2>{locale.sections.about.title}</h2>
</section>
```

### ❌ Don't Use String Concatenation

```typescript
// Wrong - hard to translate
const message = locale.welcome + ' ' + userName;

// Correct - use placeholders
const message = locale.welcomeMessage.replace('{userName}', userName);
```

### ❌ Don't Forget Accessibility

```typescript
// Wrong - aria-label not localized
<span role="img" aria-label="rocket">🚀</span>

// Correct
<span role="img" aria-label={locale.aria.rocket}>🚀</span>
```

## Future Enhancements

Consider implementing:

- **Number formatting** using `Intl.NumberFormat`
- **Date formatting** using `Intl.DateTimeFormat`
- **Currency formatting** using `Intl.NumberFormat` with currency option
- **Pluralization rules** for languages with complex plural forms
- **Language detection** from browser settings
- **URL-based routing** for language selection (/en/, /es/)
- **Lazy loading** of locale files for performance
