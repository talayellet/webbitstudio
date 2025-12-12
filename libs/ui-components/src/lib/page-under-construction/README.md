# PageUnderConstruction Component

A generic "Page Under Construction" component with a back button that navigates to the previous URL.

## Features

- Clean, centered design with construction icon
- Responsive layout
- Built-in localization support (EN, ES, FR, DE, HE)
- Customizable styles
- Automatic back navigation using browser history
- Optional custom back handler
- Full accessibility support

## Usage

### Basic Usage

```tsx
import { PageUnderConstruction } from '@webbitstudio/ui-components';

const UnderConstructionPage = () => {
  return <PageUnderConstruction />;
};
```

### Custom Content

```tsx
import { PageUnderConstruction } from '@webbitstudio/ui-components';

const UnderConstructionPage = () => {
  return <PageUnderConstruction heading="Coming Soon" message="We're building something amazing. Stay tuned!" backButtonText="Return Home" />;
};
```

### Custom Back Handler

```tsx
import { PageUnderConstruction } from '@webbitstudio/ui-components';
import { useNavigate } from 'react-router-dom';

const UnderConstructionPage = () => {
  const navigate = useNavigate();

  return <PageUnderConstruction onBack={() => navigate('/home')} />;
};
```

### Localization

```tsx
import { PageUnderConstruction } from '@webbitstudio/ui-components';

const UnderConstructionPage = () => {
  return <PageUnderConstruction locale="es" />;
};
```

### Custom Styles

```tsx
import { PageUnderConstruction } from '@webbitstudio/ui-components';

const UnderConstructionPage = () => {
  return (
    <PageUnderConstruction
      styles={{
        container: 'min-h-screen bg-gradient-to-r from-purple-500 to-pink-500',
        heading: 'text-white text-6xl',
        button: 'bg-purple-600 hover:bg-purple-700',
      }}
    />
  );
};
```

## Props

| Prop             | Type         | Default                 | Description                          |
| ---------------- | ------------ | ----------------------- | ------------------------------------ |
| `heading`        | `string`     | Localized default       | Heading text for the page            |
| `message`        | `string`     | Localized default       | Message text to display              |
| `backButtonText` | `string`     | Localized default       | Text for the back button             |
| `onBack`         | `() => void` | `window.history.back()` | Callback when back button is clicked |
| `locale`         | `string`     | `DEFAULT_LANGUAGE`      | Locale for default strings           |
| `styles`         | `object`     | Default styles          | Custom style classes                 |

### Styles Object

```typescript
{
  container?: string;    // Main container wrapper
  content?: string;      // Content wrapper
  icon?: string;         // Construction icon
  heading?: string;      // Heading text
  message?: string;      // Message text
  button?: string;       // Back button
}
```

## Supported Locales

- `en` - English
- `es` - Spanish
- `fr` - French
- `de` - German
- `he` - Hebrew

## Accessibility

- Semantic HTML structure
- Proper ARIA labels for icon
- Keyboard accessible button
- Focus management

## Default Behavior

When no `onBack` handler is provided, the component uses `window.history.back()` to navigate to the previous URL in the browser history. This works seamlessly with most routing libraries and standard browser navigation.
