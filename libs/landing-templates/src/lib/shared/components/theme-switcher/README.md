# Theme Switcher Component

A reusable, accessible theme switcher component with a dropdown menu interface and localStorage persistence. The component displays the current theme with an icon emoji and allows users to switch between 5 pre-configured color themes.

## Features

- **5 Pre-configured Themes**: Dark, Light, Ocean, Sunset, and Forest
- **Dropdown Interface**: Uses Headless UI Menu for accessible dropdown behavior
- **Theme Icons**: Visual representation of each theme with emojis
- **LocalStorage Persistence**: Remembers user's theme preference across sessions
- **CSS Custom Properties**: Applies theme colors via CSS variables
- **Keyboard Navigation**: Full keyboard support via Headless UI
- **Smooth Transitions**: Enter/leave animations with scale and opacity
- **Focus States**: Visual feedback on hover and keyboard focus
- **Type-Safe**: Full TypeScript support with typed props and constants
- **Customizable**: Pass custom themes array or use defaults
- **Flexible Positioning**: Configurable position (top-left, top-right, bottom-left, bottom-right)

## Installation

The component is part of the shared components library:

```tsx
import { ThemeSwitcher, useTheme } from '@webbitstudio/landing-templates';
```

## Basic Usage

```tsx
import { ThemeSwitcher, useTheme } from '@webbitstudio/landing-templates';

export const App = () => {
  const { currentTheme, setTheme } = useTheme();

  return (
    <div>
      <ThemeSwitcher currentTheme={currentTheme} onThemeChange={setTheme} />
      {/* Your app content */}
    </div>
  );
};
```

## Pre-configured Themes

The component includes 5 themes by default:

### 🌙 Dark (Default)

```typescript
{
  name: 'dark',
  colors: {
    primary: '#60a5fa',
    primaryDark: '#3b82f6',
    secondary: '#a78bfa',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f1f5f9',
    textMuted: '#94a3b8',
    accent: '#22d3ee',
  }
}
```

### ☀️ Light

```typescript
{
  name: 'light',
  colors: {
    primary: '#3b82f6',
    primaryDark: '#2563eb',
    secondary: '#8b5cf6',
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#1e293b',
    textMuted: '#64748b',
    accent: '#06b6d4',
  }
}
```

### 🌊 Ocean

```typescript
{
  name: 'ocean',
  colors: {
    primary: '#0ea5e9',
    primaryDark: '#0284c7',
    secondary: '#06b6d4',
    background: '#f0f9ff',
    surface: '#e0f2fe',
    text: '#0c4a6e',
    textMuted: '#0369a1',
    accent: '#38bdf8',
  }
}
```

### 🌅 Sunset

```typescript
{
  name: 'sunset',
  colors: {
    primary: '#f97316',
    primaryDark: '#ea580c',
    secondary: '#ec4899',
    background: '#fff7ed',
    surface: '#ffedd5',
    text: '#7c2d12',
    textMuted: '#9a3412',
    accent: '#fb923c',
  }
}
```

### 🌲 Forest

```typescript
{
  name: 'forest',
  colors: {
    primary: '#22c55e',
    primaryDark: '#16a34a',
    secondary: '#84cc16',
    background: '#f0fdf4',
    surface: '#dcfce7',
    text: '#14532d',
    textMuted: '#166534',
    accent: '#4ade80',
  }
}
```

## Props API

### `ThemeSwitcherProps`

| Prop            | Type                         | Required | Description                                                      |
| --------------- | ---------------------------- | -------- | ---------------------------------------------------------------- |
| `currentTheme`  | `ThemeName`                  | No       | The currently selected theme (defaults to stored or 'dark')      |
| `themes`        | `ThemeOption[]`              | No       | Array of available theme options (defaults to 5 built-in themes) |
| `onThemeChange` | `(theme: ThemeName) => void` | No       | Callback function called when theme changes                      |
| `position`      | `ThemePosition`              | No       | Position of the switcher (default: 'top-right')                  |

### `ThemeName` Constants

Use the `THEME_NAMES` constant for type-safe theme names:

```typescript
import { THEME_NAMES } from '@webbitstudio/landing-templates';

THEME_NAMES.DARK; // 'dark'
THEME_NAMES.LIGHT; // 'light'
THEME_NAMES.OCEAN; // 'ocean'
THEME_NAMES.SUNSET; // 'sunset'
THEME_NAMES.FOREST; // 'forest'
```

### `ThemePosition` Constants

Use the `THEME_POSITIONS` constant for type-safe positioning:

```typescript
import { THEME_POSITIONS } from '@webbitstudio/landing-templates';

THEME_POSITIONS.TOP_LEFT; // 'top-left'
THEME_POSITIONS.TOP_RIGHT; // 'top-right'
THEME_POSITIONS.BOTTOM_LEFT; // 'bottom-left'
THEME_POSITIONS.BOTTOM_RIGHT; // 'bottom-right'
```

## `useTheme` Hook

The `useTheme` hook manages theme state and applies CSS custom properties.

### Hook API

```typescript
const { currentTheme, currentThemeOption, themes, setTheme, themeColors, colorStyles } = useTheme(options);
```

### Options

```typescript
interface UseThemeOptions {
  initialTheme?: ThemeName;
  themes?: ThemeOption[];
  colorOverrides?: ColorOverrides;
}
```

### Return Value

```typescript
interface UseThemeResponse {
  currentTheme: ThemeName; // Current theme name
  currentThemeOption: ThemeOption; // Full theme object
  themes: ThemeOption[]; // All available themes
  setTheme: (theme: ThemeName) => void; // Function to change theme
  themeColors: ThemeColors; // Current theme colors
  colorStyles: React.CSSProperties; // CSS custom properties object
}
```

## Advanced Examples

### With Custom Position

```tsx
import { ThemeSwitcher, useTheme, THEME_POSITIONS } from '@webbitstudio/landing-templates';

export const App = () => {
  const { currentTheme, setTheme } = useTheme();

  return <ThemeSwitcher currentTheme={currentTheme} onThemeChange={setTheme} position={THEME_POSITIONS.BOTTOM_RIGHT} />;
};
```

### With Custom Themes

```tsx
import { ThemeSwitcher, useTheme, ThemeOption } from '@webbitstudio/landing-templates';

const customThemes: ThemeOption[] = [
  {
    name: 'cyberpunk',
    label: 'Cyberpunk',
    icon: '🤖',
    colors: {
      primary: '#ff00ff',
      primaryDark: '#cc00cc',
      secondary: '#00ffff',
      background: '#0a0a0a',
      surface: '#1a1a1a',
      text: '#ffffff',
      textMuted: '#888888',
      accent: '#ffff00',
    },
  },
  // ... more custom themes
];

export const App = () => {
  const { currentTheme, setTheme } = useTheme({ themes: customThemes });

  return <ThemeSwitcher currentTheme={currentTheme} themes={customThemes} onThemeChange={setTheme} />;
};
```

### With Initial Theme

```tsx
import { ThemeSwitcher, useTheme, THEME_NAMES } from '@webbitstudio/landing-templates';

export const App = () => {
  const { currentTheme, setTheme } = useTheme({
    initialTheme: THEME_NAMES.OCEAN,
  });

  return <ThemeSwitcher currentTheme={currentTheme} onThemeChange={setTheme} />;
};
```

### With Color Overrides

Use color overrides to customize the theme while still using the theme switcher:

```tsx
import { useTheme } from '@webbitstudio/landing-templates';

export const App = () => {
  const { colorStyles } = useTheme({
    colorOverrides: {
      primary: '#custom-color',
      accent: '#another-custom-color',
    },
  });

  return <div style={colorStyles}>{/* Your app content with custom colors */}</div>;
};
```

### With Browser Preference Detection

```tsx
import { useTheme, THEME_NAMES } from '@webbitstudio/landing-templates';

const detectPreferredTheme = (): ThemeName => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return THEME_NAMES.DARK;
  }
  return THEME_NAMES.LIGHT;
};

export const App = () => {
  const { currentTheme, setTheme } = useTheme({
    initialTheme: detectPreferredTheme(),
  });

  return <ThemeSwitcher currentTheme={currentTheme} onThemeChange={setTheme} />;
};
```

## Styling

The component uses centralized style constants from `THEME_SWITCHER_STYLES`.

### CSS Custom Properties Applied

The theme switcher automatically applies these CSS variables to the document root:

- `--primary`: Primary brand color
- `--primary-dark`: Darker variant of primary
- `--secondary`: Secondary brand color
- `--background`: Main background color
- `--surface`: Card/surface background color
- `--text`: Primary text color
- `--text-muted`: Secondary/muted text color
- `--accent`: Accent color for highlights

### Using Theme Colors in Your Components

```tsx
// Use CSS custom properties
<div className="bg-[var(--surface)] text-[var(--text)]">
  <h1 className="text-[var(--primary)]">Title</h1>
  <p className="text-[var(--text-muted)]">Description</p>
</div>;

// Or use the colorStyles object
const { colorStyles } = useTheme();
<div style={colorStyles}>{/* Content will inherit theme colors */}</div>;
```

### Default Position and Styling

- **Position**: `fixed` at top-right corner
- **z-index**: `1000`
- **Width**: `192px` (w-48)
- **Backdrop Filter**: Applied for glassmorphism effect
- **Border**: Subtle border with theme colors
- **Shadow**: Elevated shadow on hover

### Customizing Styles

To customize styles, you can override the constants in your theme or use custom CSS:

```css
/* Override specific theme switcher styles */
.theme-switcher-custom {
  /* Your custom styles */
}
```

## Integration with SaaS Launch Template

The Theme Switcher is built into the SaaS Launch template:

```tsx
import { SaasLaunch } from '@webbitstudio/landing-templates';

// Theme switcher is enabled by default
<SaasLaunch productName="My Product" />

// Disable theme switcher
<SaasLaunch productName="My Product" showThemeSwitcher={false} />

// Combine with language switcher
<SaasLaunch
  productName="My Product"
  showLanguageSwitcher={true}
  showThemeSwitcher={true}
/>
```

The template automatically positions the theme switcher at `top-left` and the language switcher at `top-right` for a balanced layout.

## Accessibility

The component follows accessibility best practices:

- **Keyboard Navigation**: Full keyboard support (Tab, Enter, Arrow keys, Escape)
- **ARIA Labels**: Theme icons have `aria-label` attributes
- **Focus Management**: Headless UI handles focus states automatically
- **Screen Reader Support**: Proper semantic HTML and ARIA attributes
- **Visual Indicators**: Active theme shows checkmark and distinct styling

## Component Architecture

### Dependencies

- **React**: Core framework with hooks (useState, useCallback, useEffect, useMemo)
- **Headless UI**: Accessible UI components (`Menu`, `MenuButton`, `MenuItem`, `MenuItems`, `Transition`)
- **clsx**: Conditional class name utility
- **Tailwind CSS**: Utility-first CSS framework

### Internal Behavior

1. **State Management**: Uses `useState` for current theme
2. **Persistence**: Saves theme to localStorage on change
3. **CSS Variable Application**: Updates document root styles via `useEffect`
4. **Memoization**: Caches theme option lookup and color styles
5. **Transitions**: Smooth scale and opacity animations on dropdown

### LocalStorage Key

The theme is stored in localStorage with the key:

```typescript
const THEME_STORAGE_KEY = 'app-theme';
```

## Type Safety

The component provides full TypeScript support with:

- **Const Assertions**: Theme names and positions use `as const` pattern
- **Derived Types**: Types derived from const objects for accuracy
- **Interface Validation**: All themes must implement `ThemeOption` interface
- **Autocomplete**: IDEs provide suggestions for theme names and positions

Example of type-safe usage:

```typescript
import { THEME_NAMES, THEME_POSITIONS } from '@webbitstudio/landing-templates';

// TypeScript ensures only valid values
const theme: ThemeName = THEME_NAMES.OCEAN; // ✓
const position: ThemePosition = THEME_POSITIONS.TOP_LEFT; // ✓

// These will cause TypeScript errors
const invalidTheme: ThemeName = 'invalid'; // ✗
const invalidPosition: ThemePosition = 'center'; // ✗
```

## Browser Support

The component works in all modern browsers that support:

- ES6+ JavaScript features
- CSS custom properties (CSS variables)
- localStorage API
- Backdrop filter (with graceful degradation)

## Performance Considerations

- **Memoization**: Uses `useMemo` for expensive computations
- **Selective Updates**: Only re-renders when theme changes
- **Efficient Storage**: Minimal localStorage usage
- **CSS Variables**: Leverages browser-native theming mechanism

## Testing

### Manual Testing

Test each theme by selecting it from the dropdown:

```tsx
import { ThemeSwitcher, useTheme } from '@webbitstudio/landing-templates';

export const ThemeTestPage = () => {
  const { currentTheme, setTheme } = useTheme();

  return (
    <div>
      <h1>Current Theme: {currentTheme}</h1>
      <ThemeSwitcher currentTheme={currentTheme} onThemeChange={setTheme} />
    </div>
  );
};
```

### Unit Testing

```typescript
import { render, screen } from '@testing-library/react';
import { ThemeSwitcher } from './theme-switcher';
import { THEME_NAMES } from './types';

describe('ThemeSwitcher', () => {
  it('renders current theme', () => {
    render(<ThemeSwitcher currentTheme={THEME_NAMES.DARK} onThemeChange={jest.fn()} />);
    expect(screen.getByText('Dark')).toBeInTheDocument();
  });
});
```

## Migration Guide

### From Custom Color Props to Theme Switcher

If you were using custom `colors` prop:

```tsx
// Before
<SaasLaunch
  colors={{
    primary: '#60a5fa',
    background: '#0f172a',
    // ...
  }}
/>

// After - colors prop still works as overrides
<SaasLaunch
  showThemeSwitcher={true}
  colors={{
    primary: '#custom-color', // Optional override
  }}
/>
```

The `colors` prop now serves as color overrides that work alongside the theme switcher.

## Common Patterns

### Theme Switcher with Analytics

```tsx
import { ThemeSwitcher, useTheme } from '@webbitstudio/landing-templates';

export const App = () => {
  const { currentTheme, setTheme } = useTheme();

  const handleThemeChange = (theme: ThemeName) => {
    setTheme(theme);
    // Track theme change in analytics
    analytics.track('Theme Changed', { theme });
  };

  return <ThemeSwitcher currentTheme={currentTheme} onThemeChange={handleThemeChange} />;
};
```

### Conditional Theme Switcher

```tsx
import { ThemeSwitcher, useTheme } from '@webbitstudio/landing-templates';

export const App = ({ enableTheming }: { enableTheming: boolean }) => {
  const { currentTheme, setTheme } = useTheme();

  return <>{enableTheming && <ThemeSwitcher currentTheme={currentTheme} onThemeChange={setTheme} />}</>;
};
```

## Future Enhancements

Consider implementing:

- **Custom Theme Builder**: UI for creating custom themes
- **Theme Import/Export**: JSON-based theme sharing
- **Gradient Themes**: Support for gradient backgrounds
- **Animation Presets**: Different transition styles
- **Theme Scheduling**: Auto-switch based on time of day
- **System Sync**: Follow OS dark/light mode automatically
- **Theme Preview**: Hover preview before applying
- **More Themes**: Expanded theme library

## Notes

- The component is **controlled** when `onThemeChange` is provided
- Theme persists automatically via localStorage
- Returns `null` if `currentTheme` is not found in the `themes` array
- Theme icons (emojis) may render differently across operating systems
- The dropdown automatically closes on selection or when clicking outside
- CSS variables are applied to `:root` for global theming
