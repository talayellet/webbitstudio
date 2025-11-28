# Language Switcher Component

A reusable, accessible language switcher component with a dropdown menu interface. The component displays the current language with a flag emoji and allows users to switch between available languages.

## Features

- **Dropdown Interface**: Uses Headless UI Menu for accessible dropdown behavior
- **Flag Emojis**: Visual representation of each language with country flags
- **Keyboard Navigation**: Full keyboard support via Headless UI
- **Smooth Transitions**: Enter/leave animations with scale and opacity
- **Focus States**: Visual feedback on hover and keyboard focus
- **Type-Safe**: Full TypeScript support with typed props
- **Customizable**: Pass any languages array with flags and labels
- **CSS Variables**: Uses CSS custom properties for theming

## Installation

The component is part of the shared components library:

```tsx
import { LanguageSwitcher } from '@webbitstudio/landing-templates';
```

## Basic Usage

```tsx
import { LanguageSwitcher, LanguageOption } from '@webbitstudio/landing-templates';

const languages: LanguageOption[] = [
  { code: 'en', flag: '🇺🇸', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
];

export const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  return <LanguageSwitcher currentLanguage={currentLanguage} languages={languages} onLanguageChange={setCurrentLanguage} />;
};
```

## Props API

### `LanguageSwitcherProps`

| Prop               | Type                         | Required | Description                                    |
| ------------------ | ---------------------------- | -------- | ---------------------------------------------- |
| `currentLanguage`  | `string`                     | Yes      | The code of the currently selected language    |
| `languages`        | `LanguageOption[]`           | Yes      | Array of available language options            |
| `onLanguageChange` | `(language: string) => void` | Yes      | Callback function called when language changes |

### `LanguageOption`

| Property | Type     | Required | Description                                   |
| -------- | -------- | -------- | --------------------------------------------- |
| `code`   | `string` | Yes      | Unique language code (e.g., 'en', 'es', 'fr') |
| `flag`   | `string` | Yes      | Flag emoji representing the language          |
| `label`  | `string` | Yes      | Display name in the language itself           |

## Styling

The component uses centralized style constants from `LANGUAGE_SWITCHER_STYLES`:

### CSS Custom Properties

The component references these CSS variables for theming:

- `--surface`: Background color for button and dropdown
- `--text`: Text color for active language
- `--text-muted`: Text color for inactive languages
- `--primary`: Background color for selected language in dropdown

### Position

By default, the component is positioned:

- `fixed` positioning
- Top-right corner (`top: 1.25rem`, `right: 1.25rem`)
- `z-index: 1000`

### Customizing Styles

To customize styles, override the constants in `utils/styles.ts`:

```typescript
export const LANGUAGE_SWITCHER_STYLES = {
  CONTAINER: 'fixed top-5 right-5 z-[1000]',
  WRAPPER: 'w-48',
  BUTTON: 'w-full flex items-center gap-2 px-4 py-2 ...',
  // ... other styles
};
```

## Advanced Examples

### With More Languages

```tsx
const languages: LanguageOption[] = [
  { code: 'en', flag: '🇺🇸', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'ja', flag: '🇯🇵', label: '日本語' },
  { code: 'zh', flag: '🇨🇳', label: '中文' },
];

<LanguageSwitcher currentLanguage={currentLanguage} languages={languages} onLanguageChange={setCurrentLanguage} />;
```

### With Persistence (localStorage)

```tsx
import { useState, useEffect } from 'react';
import { LanguageSwitcher } from '@webbitstudio/landing-templates';

const STORAGE_KEY = 'preferredLanguage';

export const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  });

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem(STORAGE_KEY, language);
  };

  return <LanguageSwitcher currentLanguage={currentLanguage} languages={languages} onLanguageChange={handleLanguageChange} />;
};
```

### With URL Synchronization

```tsx
import { useState, useEffect } from 'react';
import { LanguageSwitcher } from '@webbitstudio/landing-templates';

export const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') || 'en';
  });

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);

    // Update URL without page reload
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.pushState({}, '', url);
  };

  return <LanguageSwitcher currentLanguage={currentLanguage} languages={languages} onLanguageChange={handleLanguageChange} />;
};
```

### With Browser Language Detection

```tsx
import { useState } from 'react';
import { LanguageSwitcher } from '@webbitstudio/landing-templates';

const detectBrowserLanguage = (supportedCodes: string[]): string => {
  const browserLang = navigator.language.split('-')[0];
  return supportedCodes.includes(browserLang) ? browserLang : 'en';
};

export const App = () => {
  const supportedLanguages: LanguageOption[] = [
    { code: 'en', flag: '🇺🇸', label: 'English' },
    { code: 'es', flag: '🇪🇸', label: 'Español' },
    { code: 'fr', flag: '🇫🇷', label: 'Français' },
  ];

  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const codes = supportedLanguages.map((lang) => lang.code);
    return detectBrowserLanguage(codes);
  });

  return <LanguageSwitcher currentLanguage={currentLanguage} languages={supportedLanguages} onLanguageChange={setCurrentLanguage} />;
};
```

## Accessibility

The component follows accessibility best practices:

- **Keyboard Navigation**: Full keyboard support (Tab, Enter, Arrow keys, Escape)
- **ARIA Labels**: Flag emojis have `aria-label` attributes with language names
- **Focus Management**: Headless UI handles focus states automatically
- **Screen Reader Support**: Proper semantic HTML and ARIA attributes

## Component Architecture

### Dependencies

- **React**: Core framework
- **Headless UI**: Accessible UI components (`Menu`, `MenuButton`, `MenuItem`, `MenuItems`, `Transition`)
- **clsx**: Conditional class name utility
- **Tailwind CSS**: Utility-first CSS framework

### Internal Behavior

1. **Memoization**: Uses `useMemo` to cache the current language option lookup
2. **Null Check**: Returns `null` if current language is not found in the languages array
3. **Focus States**: Uses Headless UI's `focus` prop for hover/keyboard states
4. **Transitions**: Smooth scale and opacity animations on open/close

## Integration with SaaS Launch Template

The Language Switcher integrates with the SaaS Launch template's localization system:

```tsx
import { SaasLaunch } from '@webbitstudio/landing-templates';

// Language switcher is built-in and enabled by default
<SaasLaunch />

// Hide the language switcher
<SaasLaunch showLanguageSwitcher={false} />

// Control language externally
<SaasLaunch
  locale={currentLocale}
  onLocaleChange={setCurrentLocale}
/>
```

## Browser Support

The component works in all modern browsers that support:

- ES6+ JavaScript features
- CSS custom properties
- Backdrop filter (with graceful degradation)

## Notes

- The component is **controlled** - you must manage the `currentLanguage` state
- Returns `null` if `currentLanguage` is not found in the `languages` array
- Flag emojis may render differently across operating systems
- The dropdown automatically closes on selection or when clicking outside
- Maximum width is constrained to `w-48` (192px) for consistency
