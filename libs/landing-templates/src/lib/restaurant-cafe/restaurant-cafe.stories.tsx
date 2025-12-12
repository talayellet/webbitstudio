/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { RestaurantCafe } from './restaurant-cafe';
import { LOCALES } from '../shared/utils/types';
import React, { useEffect, useState } from 'react';

// Wrapper to sync Storybook controls with component state
const StorybookWrapper = ({ children, ...props }: any) => {
  const [key, setKey] = useState(0);

  // Force re-render when theme or locale changes from controls
  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [props.theme, props.locale]);

  return <div key={key}>{children}</div>;
};

// Storybook decorator to handle hash navigation and home link
const HashNavigationDecorator = (Story: React.ComponentType) => {
  useEffect(() => {
    // Check user's motion preference for smooth scrolling (WCAG 2.3.3)
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scrollBehavior: ScrollBehavior = prefersReducedMotion
      ? 'auto'
      : 'smooth';

    // Handle navigation in Storybook
    const handleNavigation = (e: Event) => {
      const target = e.target as any;
      // Find parent anchor element if clicked on a child element
      const anchor = target?.tagName === 'A' ? target : target?.closest?.('a');

      if (anchor) {
        const href = anchor.getAttribute?.('href');

        // Handle home link - scroll to top
        if (href === '/') {
          e.preventDefault();
          (globalThis as any).window?.scrollTo({
            top: 0,
            behavior: scrollBehavior,
          });
          return;
        }

        // Handle hash links
        if (href?.startsWith('#') || href?.includes('/#')) {
          e.preventDefault();
          const hash = href.includes('/#')
            ? href.split('/#')[1]
            : href.substring(1);
          const element = (globalThis as any).document?.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: scrollBehavior });
          }
        }
      }
    };

    (globalThis as any).document?.addEventListener('click', handleNavigation);
    return () =>
      (globalThis as any).document?.removeEventListener(
        'click',
        handleNavigation
      );
  }, []);

  return <Story />;
};

const meta = {
  component: RestaurantCafe,
  title: 'Landing Templates/RestaurantCafe',
  decorators: [
    (Story, context) => (
      <StorybookWrapper {...context.args}>
        <Story />
      </StorybookWrapper>
    ),
    HashNavigationDecorator,
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'An elegant restaurant/cafe landing page template with multi-language support, theming, and showcase for menu items, hours, and location.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    restaurantName: {
      control: 'text',
      description: 'The name of your restaurant',
      table: {
        category: 'Branding',
      },
    },
    logo: {
      control: false,
      description: 'Custom logo component or element',
      table: {
        category: 'Branding',
      },
    },
    theme: {
      control: 'select',
      options: ['warm', 'elegant', 'modern', 'rustic', 'coastal'],
      description: 'Visual theme of the landing page',
      table: {
        category: 'Appearance',
      },
    },
    colors: {
      control: 'object',
      description: 'Custom color overrides for the template',
      table: {
        category: 'Appearance',
      },
    },
    locale: {
      control: 'select',
      options: [LOCALES.EN, LOCALES.ES, LOCALES.FR],
      description: 'Language/locale for the content',
      table: {
        category: 'Localization',
      },
    },
    showLanguageSwitcher: {
      control: 'boolean',
      description: 'Show/hide the language switcher',
      table: {
        category: 'Localization',
      },
    },
    showThemeSwitcher: {
      control: 'boolean',
      description: 'Show/hide the theme switcher',
      table: {
        category: 'Appearance',
      },
    },
    showFooter: {
      control: 'boolean',
      description: 'Show/hide the footer',
      table: {
        category: 'Layout',
      },
    },
    content: {
      control: 'object',
      description: 'Override default content with custom text',
      table: {
        category: 'Content',
      },
    },
    footerSections: {
      control: 'object',
      description: 'Footer sections with links',
      table: {
        category: 'Layout',
      },
    },
    onLocaleChange: {
      control: false,
      description: 'Callback when locale changes',
      table: {
        category: 'Events',
      },
    },
  },
} satisfies Meta<typeof RestaurantCafe>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default restaurant-cafe template with all features enabled
 */
export const Default: Story = {
  args: {
    restaurantName: 'La Maison',
    showLanguageSwitcher: true,
    showThemeSwitcher: true,
    showFooter: true,
  },
};

/**
 * English locale
 */
export const English: Story = {
  args: {
    restaurantName: 'The Golden Spoon',
    locale: LOCALES.EN,
  },
};

/**
 * Spanish locale
 */
export const Spanish: Story = {
  args: {
    restaurantName: 'El Sabor',
    locale: LOCALES.ES,
  },
};

/**
 * French locale
 */
export const French: Story = {
  args: {
    restaurantName: 'Le Bistro',
    locale: LOCALES.FR,
  },
};

/**
 * Custom colors
 */
export const CustomColors: Story = {
  args: {
    restaurantName: 'Crimson Rose',
    colors: {
      primary: '#8b2e3e',
      primaryLight: '#a6495a',
      secondary: '#1a1a1a',
      accent: '#d4a574',
      background: '#fff5f7',
      surface: '#ffffff',
      text: '#2a2a2a',
      textMuted: '#6b6b6b',
    },
  },
};

/**
 * Custom content overrides
 */
export const CustomContent: Story = {
  args: {
    restaurantName: 'Urban Kitchen',
    content: {
      heroSubtitle: 'Modern Culinary Excellence',
      heroTitle: 'Taste the Future',
      heroDescription:
        'Where innovation meets tradition. Experience a new era of gastronomy.',
      heroCta: 'Reserve Now',
      aboutTitle: 'Our Vision',
      aboutParagraph1:
        'At Urban Kitchen, we believe in pushing boundaries while respecting culinary heritage. Our team of innovative chefs crafts dishes that surprise and delight.',
      aboutParagraph2:
        'Using locally sourced ingredients and cutting-edge techniques, we create unforgettable dining experiences.',
      menuTitle: 'Featured Creations',
      menuDescription: 'A glimpse into our world of culinary innovation',
      reservationTitle: 'Join Us Tonight',
      reservationDescription:
        'Experience the future of dining. Limited seating available.',
      reservationButton: 'Book Your Table',
    },
  },
};

/**
 * Minimal version without language/theme switchers
 */
export const Minimal: Story = {
  args: {
    restaurantName: 'Simple Eats',
    showLanguageSwitcher: false,
    showThemeSwitcher: false,
  },
};

/**
 * Elegant theme (dark sophisticated)
 */
export const ElegantTheme: Story = {
  args: {
    restaurantName: 'Noir Bistro',
    theme: 'elegant',
  },
};

/**
 * Modern theme (clean minimal)
 */
export const ModernTheme: Story = {
  args: {
    restaurantName: 'Bright Cafe',
    theme: 'modern',
  },
};
