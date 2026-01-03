# eCommerce Login Page Component

A professional, accessible login page component for eCommerce applications with built-in form validation, social login support, and localization.

## Features

- **Email/Password Authentication**

  - Built-in form validation
  - Real-time error messages
  - Required field validation
  - Email format validation
  - Password minimum length validation

- **User Experience**

  - Forgot password link
  - Sign up redirect
  - Loading states
  - Disabled states during submission
  - Auto-complete support

- **Social Login** (Optional)

  - Google login
  - Facebook login

- **Accessibility**

  - Proper form labels
  - ARIA attributes
  - Keyboard navigation support
  - Screen reader friendly

- **Internationalization**
  - RTL support
  - Localization ready
  - Includes English, Hebrew, and Spanish locales

## Installation

The component is part of the `@webbitstudio/e-commerce` library:

```bash
yarn add @webbitstudio/e-commerce
```

## Usage

### Basic Example

```tsx
import { LoginPage } from '@webbitstudio/e-commerce';

const App = () => {
  const handleLogin = async (email: string, password: string) => {
    // Call your authentication API
    await authService.login(email, password);
    // Navigate to authenticated area
    router.push('/dashboard');
  };

  return <LoginPage onLogin={handleLogin} onSignup={() => router.push('/signup')} onForgotPassword={() => router.push('/forgot-password')} />;
};
```

### With Social Login

```tsx
import { LoginPage } from '@webbitstudio/e-commerce';

const App = () => {
  return <LoginPage onLogin={(email, password) => handleEmailLogin(email, password)} onSignup={() => router.push('/signup')} onForgotPassword={() => router.push('/forgot-password')} onGoogleLogin={() => handleGoogleLogin()} onFacebookLogin={() => handleFacebookLogin()} showSocialLogin={true} />;
};
```

### With Custom Logo

```tsx
import { LoginPage } from '@webbitstudio/e-commerce';

const App = () => {
  return <LoginPage logo={<img src="/logo.png" alt="My Store" />} onLogin={handleLogin} onSignup={() => router.push('/signup')} />;
};
```

### Localization

```tsx
import { LoginPage, SPANISH_LOGIN_LOCALE } from '@webbitstudio/e-commerce';

const App = () => {
  return <LoginPage locale={SPANISH_LOGIN_LOCALE} onLogin={handleLogin} onSignup={() => router.push('/signup')} />;
};
```

### RTL Support

```tsx
import { LoginPage, HEBREW_LOGIN_LOCALE } from '@webbitstudio/e-commerce';

const App = () => {
  return <LoginPage isRtl={true} locale={HEBREW_LOGIN_LOCALE} onLogin={handleLogin} onSignup={() => router.push('/signup')} />;
};
```

## API Reference

### Props

| Prop               | Type                                                         | Required | Description                                  |
| ------------------ | ------------------------------------------------------------ | -------- | -------------------------------------------- |
| `logo`             | `React.ReactNode`                                            | No       | Custom logo element                          |
| `isRtl`            | `boolean`                                                    | No       | Enable RTL layout (default: `false`)         |
| `locale`           | `LoginPageLocale`                                            | No       | Localized text content                       |
| `onLogin`          | `(email: string, password: string) => void \| Promise<void>` | No       | Callback when login form is submitted        |
| `onSignup`         | `() => void`                                                 | No       | Callback when signup link is clicked         |
| `onForgotPassword` | `() => void`                                                 | No       | Callback when forgot password is clicked     |
| `onGoogleLogin`    | `() => void`                                                 | No       | Callback for Google login                    |
| `onFacebookLogin`  | `() => void`                                                 | No       | Callback for Facebook login                  |
| `showSocialLogin`  | `boolean`                                                    | No       | Show social login buttons (default: `false`) |

### Types

#### LoginPageLocale

```typescript
interface LoginPageLocale {
  PAGE_TITLE: string;
  EMAIL_LABEL: string;
  EMAIL_PLACEHOLDER: string;
  PASSWORD_LABEL: string;
  PASSWORD_PLACEHOLDER: string;
  LOGIN_BUTTON: string;
  FORGOT_PASSWORD: string;
  NO_ACCOUNT: string;
  SIGNUP_LINK: string;
  OR_DIVIDER: string;
  CONTINUE_WITH_GOOGLE: string;
  CONTINUE_WITH_FACEBOOK: string;
  EMAIL_REQUIRED: string;
  EMAIL_INVALID: string;
  PASSWORD_REQUIRED: string;
  PASSWORD_MIN_LENGTH: string;
  LOGGING_IN: string;
}
```

## Built-in Locales

The component includes three pre-configured locales:

- `ENGLISH_LOGIN_LOCALE` - English (default)
- `HEBREW_LOGIN_LOCALE` - Hebrew (RTL)
- `SPANISH_LOGIN_LOCALE` - Spanish

## Form Validation

The component includes built-in validation:

- **Email**: Required, must be valid email format
- **Password**: Required, minimum 8 characters

Validation occurs:

- On blur (when user leaves a field)
- On submit
- Real-time after first error (to provide immediate feedback when user corrects)

## Styling

The component uses Tailwind CSS classes and can be customized by:

1. **Override styles** using the `LOGIN_PAGE_STYLES` constants
2. **Theme customization** through Tailwind config
3. **Custom classes** by forking the component

## Accessibility

- Semantic HTML with proper form structure
- Proper label associations
- Auto-complete attributes for password managers
- Focus management
- Loading and disabled states
- Error messages linked to inputs

## Browser Support

Supports all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT
