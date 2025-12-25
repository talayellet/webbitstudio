# eCommerce Home Page Component

A fully-featured, responsive eCommerce home page component built with React, TypeScript, and Tailwind CSS.

## Features

- **Sticky Header** with:

  - Store logo or name
  - Login/Signup buttons (or user greeting when logged in)
  - Shopping cart with item count badge
  - Location selector
  - Language selector

- **Category Grid** displaying:

  - Category images with hover effects
  - Category names
  - Sub-category descriptions
  - Clickable cards for navigation

- **Sticky Footer** with:
  - Privacy Policy link
  - Terms of Service link
  - Cookie Policy link
  - Contact Us link
  - Back to Top button

## Installation

The component is part of the `@webbitstudio/e-commerce` library:

```bash
yarn add @webbitstudio/e-commerce
```

## Usage

### Basic Example

```tsx
import { ECommerceHomePage } from '@webbitstudio/e-commerce';

const App = () => {
  return (
    <ECommerceHomePage
      storeName="My Store"
      cartItemCount={3}
      categories={[
        {
          id: '1',
          name: 'Electronics',
          description: 'Phones, Laptops, Tablets & more',
          imageUrl: '/images/electronics.jpg',
        },
        {
          id: '2',
          name: 'Fashion',
          description: 'Clothing, Shoes, Accessories',
          imageUrl: '/images/fashion.jpg',
        },
      ]}
      onLogin={() => console.log('Login clicked')}
      onSignup={() => console.log('Signup clicked')}
      onCartClick={() => console.log('Cart clicked')}
      onCategoryClick={(categoryId) => console.log('Category clicked:', categoryId)}
    />
  );
};
```

### Advanced Example with All Features

```tsx
import { ECommerceHomePage } from '@webbitstudio/e-commerce';
import type { ShoppingCategory, User, Location, Language } from '@webbitstudio/e-commerce';

const App = () => {
  const user: User = {
    id: '123',
    name: 'John Doe',
    email: 'john@example.com',
  };

  const categories: ShoppingCategory[] = [
    {
      id: 'electronics',
      name: 'Electronics',
      description: 'Phones, Laptops, Tablets, Smart Watches & more',
      imageUrl: 'https://example.com/electronics.jpg',
      subCategories: ['Phones', 'Laptops', 'Tablets'],
    },
    {
      id: 'fashion',
      name: 'Fashion',
      description: 'Clothing, Shoes, Bags, Accessories',
      imageUrl: 'https://example.com/fashion.jpg',
      subCategories: ['Men', 'Women', 'Kids'],
    },
  ];

  const locations: Location[] = [
    { code: 'us', name: 'United States', flag: '🇺🇸' },
    { code: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'ca', name: 'Canada', flag: '🇨🇦' },
  ];

  const languages: Language[] = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
  ];

  return <ECommerceHomePage logoUrl="https://example.com/logo.png" storeName="My Awesome Store" user={user} cartItemCount={5} categories={categories} currentLocation={locations[0]} locations={locations} currentLanguage={languages[0]} languages={languages} onLogin={() => router.push('/login')} onSignup={() => router.push('/signup')} onCartClick={() => router.push('/cart')} onCategoryClick={(categoryId) => router.push(`/category/${categoryId}`)} onLocationChange={(code) => setLocation(code)} onLanguageChange={(code) => setLanguage(code)} onPrivacyPolicyClick={() => router.push('/privacy')} onTermsClick={() => router.push('/terms')} onCookiePolicyClick={() => router.push('/cookies')} onContactClick={() => router.push('/contact')} />;
};
```

### Localization

```tsx
import { ECommerceHomePage } from '@webbitstudio/e-commerce';

const App = () => {
  const spanishLocale = {
    HEADER: {
      LOGIN: 'Iniciar sesión',
      SIGNUP: 'Registrarse',
      CART_ARIA_LABEL: 'Carrito de compras',
      ITEMS_IN_CART: 'artículos en el carrito',
    },
    FOOTER: {
      PRIVACY_POLICY: 'Política de privacidad',
      TERMS_OF_SERVICE: 'Términos de servicio',
      COOKIE_POLICY: 'Política de cookies',
      CONTACT_US: 'Contáctenos',
      BACK_TO_TOP: 'Volver arriba',
    },
  };

  return <ECommerceHomePage storeName="Mi Tienda" cartItemCount={0} categories={categories} locale={spanishLocale} onCategoryClick={(id) => console.log(id)} />;
};
```

### Custom Styling

```tsx
import { ECommerceHomePage } from '@webbitstudio/e-commerce';

const App = () => {
  const customStyles = {
    HEADER: 'fixed top-0 left-0 right-0 z-50 bg-purple-600 border-b border-purple-700',
    AUTH_BUTTON_PRIMARY: 'px-4 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg',
    CATEGORY_CARD: 'group bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300',
  };

  return <ECommerceHomePage storeName="Custom Store" cartItemCount={0} categories={categories} styles={customStyles} onCategoryClick={(id) => console.log(id)} />;
};
```

## API Reference

### Props

| Prop                   | Type                               | Required | Description                       |
| ---------------------- | ---------------------------------- | -------- | --------------------------------- |
| `logoUrl`              | `string`                           | No       | URL for the store logo image      |
| `storeName`            | `string`                           | No       | Store name (fallback if no logo)  |
| `user`                 | `User`                             | No       | Currently signed-in user object   |
| `cartItemCount`        | `number`                           | Yes      | Number of items in shopping cart  |
| `categories`           | `ShoppingCategory[]`               | Yes      | Array of shopping categories      |
| `currentLocation`      | `Location`                         | No       | Current selected location         |
| `locations`            | `Location[]`                       | No       | Available locations               |
| `currentLanguage`      | `Language`                         | No       | Current selected language         |
| `languages`            | `Language[]`                       | No       | Available languages               |
| `styles`               | `Partial<typeof HOME_PAGE_STYLES>` | No       | Custom style overrides            |
| `locale`               | `Partial<typeof DEFAULT_LOCALE>`   | No       | Localized text content            |
| `onLogin`              | `() => void`                       | No       | Callback when login is clicked    |
| `onSignup`             | `() => void`                       | No       | Callback when signup is clicked   |
| `onCartClick`          | `() => void`                       | No       | Callback when cart is clicked     |
| `onCategoryClick`      | `(categoryId: string) => void`     | No       | Callback when category is clicked |
| `onLocationChange`     | `(locationCode: string) => void`   | No       | Callback when location changes    |
| `onLanguageChange`     | `(languageCode: string) => void`   | No       | Callback when language changes    |
| `onPrivacyPolicyClick` | `() => void`                       | No       | Callback for privacy policy link  |
| `onTermsClick`         | `() => void`                       | No       | Callback for terms link           |
| `onCookiePolicyClick`  | `() => void`                       | No       | Callback for cookie policy link   |
| `onContactClick`       | `() => void`                       | No       | Callback for contact link         |

### Types

#### User

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
```

#### ShoppingCategory

```typescript
interface ShoppingCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  subCategories?: string[];
}
```

#### Location

```typescript
interface Location {
  code: string;
  name: string;
  flag?: string;
}
```

#### Language

```typescript
interface Language {
  code: string;
  name: string;
  nativeName: string;
}
```

## Accessibility

The component follows accessibility best practices:

- Semantic HTML elements (`header`, `main`, `footer`, `nav`)
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management
- Proper heading hierarchy
- Alt text for images

## Responsive Design

The component is fully responsive with breakpoints:

- Mobile: Single column category grid
- Tablet (sm): 2 columns
- Desktop (lg): 3 columns
- Large Desktop (xl): 4 columns

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT
