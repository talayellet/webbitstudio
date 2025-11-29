/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SaasLaunch } from './saas-launch';
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
          (globalThis as any).window?.scrollTo({ top: 0, behavior: 'smooth' });
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
            element.scrollIntoView({ behavior: 'smooth' });
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
  component: SaasLaunch,
  title: 'Landing Templates/SaasLaunch',
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
          'A comprehensive, production-ready SaaS landing page template with multi-language support, theming, and extensive customization options.',
      },
    },
  },
  args: {
    // Default handler for feature clicks in Storybook
    onFeatureClick: (feature: any) => {
      // @ts-expect-error - alert is available in browser environment
      alert(
        `Feature clicked: ${feature.title}\n\nRoute: ${feature.routePath}\n\nIn a real app, this would navigate to the feature detail page.`
      );
    },
  },
  tags: ['autodocs'],
  argTypes: {
    companyName: {
      control: 'text',
      description: 'The name of your company',
      table: {
        category: 'Branding',
      },
    },
    logo: {
      control: 'text',
      description: 'Single letter to display in the logo',
      table: {
        category: 'Branding',
      },
    },
    locale: {
      control: 'select',
      options: [LOCALES.EN, LOCALES.ES, LOCALES.FR],
      description: 'Current locale/language',
      table: {
        category: 'Localization',
      },
    },
    theme: {
      control: 'select',
      options: ['dark', 'light', 'ocean', 'sunset', 'forest'],
      description: 'Built-in theme to use',
      table: {
        category: 'Theming',
        defaultValue: { summary: 'dark' },
      },
    },
    showLanguageSwitcher: {
      control: 'boolean',
      description: 'Show or hide the language switcher',
      table: {
        category: 'Features',
      },
    },
    showThemeSwitcher: {
      control: 'boolean',
      description: 'Show or hide the theme switcher',
      table: {
        category: 'Features',
      },
    },
    showFooter: {
      control: 'boolean',
      description: 'Show or hide the footer',
      table: {
        category: 'Layout',
      },
    },
    colors: {
      control: 'object',
      description: 'Custom color overrides (takes precedence over theme)',
      table: {
        category: 'Theming',
      },
    },
  },
} satisfies Meta<typeof SaasLaunch>;

export default meta;
type Story = StoryObj<typeof SaasLaunch>;

// ============================================================================
// Basic Examples
// ============================================================================

/**
 * The default configuration with all features enabled.
 * This is the quickest way to get started.
 */
export const Default: Story = {
  args: {},
};

/**
 * Default footer link behavior.
 * When footer links (Privacy, Terms) are clicked, an "Under Construction" page is shown
 * while keeping the header and footer visible. Click "Back to Home" to return.
 */
export const FooterLinksDefault: Story = {
  args: {
    companyName: 'Default Behavior',
    logo: 'D',
  },
};

// ============================================================================
// Content Customization
// ============================================================================

/**
 * Full content customization demonstrating the content override system.
 * Override any text content without changing locale strings.
 */
export const CustomContent: Story = {
  args: {
    companyName: 'TechFlow',
    logo: 'T',
    content: {
      launchBadgeText: '🚀 Launching Q1 2026',
      heroTitle: 'The Future of Development',
      tagline: 'Build. Deploy. Scale.',
      heroDescription:
        'Experience the next generation of developer tools designed for modern workflows. Ship faster, scale better, and focus on what matters.',
      primaryCtaText: 'Join Waitlist',
      secondaryCtaText: 'Watch Demo',
      primaryCtaHref: '#waitlist',
      secondaryCtaHref: '#demo',
      featuresSectionTitle: 'Why Choose TechFlow?',
      features: [
        {
          icon: '⚡',
          title: 'Lightning Fast',
          description:
            'Deploy in seconds with our optimized infrastructure and CDN.',
        },
        {
          icon: '🔒',
          title: 'Enterprise Security',
          description: 'SOC 2 Type II certified with end-to-end encryption.',
        },
        {
          icon: '🎯',
          title: 'Developer First',
          description:
            'Built by developers, for developers. Simple and powerful.',
        },
        {
          icon: '🌍',
          title: 'Global Scale',
          description:
            'Deploy to 200+ edge locations worldwide with one click.',
        },
        {
          icon: '📊',
          title: 'Real-time Analytics',
          description:
            'Monitor performance and user behavior with detailed insights.',
        },
        {
          icon: '🤝',
          title: 'Team Collaboration',
          description:
            'Work together seamlessly with built-in collaboration tools.',
        },
      ],
      stats: [
        { number: '50K+', label: 'Active Developers' },
        { number: '99.99%', label: 'Uptime SLA' },
        { number: '<10ms', label: 'Response Time' },
        { number: '150+', label: 'Countries' },
      ],
      finalCtaTitle: 'Ready to revolutionize your workflow?',
      finalCtaDescription:
        'Join thousands of developers building the future. Get started today with our free tier.',
      finalCtaButton: 'Start Building →',
      finalCtaHref: '#signup',
    },
  },
};

// ============================================================================
// Theming & Colors
// ============================================================================

/**
 * Custom color scheme with brand colors.
 * Demonstrates partial color customization - only override brand colors,
 * allowing the theme to control background/surface colors.
 */
export const CustomColors: Story = {
  args: {
    companyName: 'VibrantTech',
    logo: 'V',
    colors: {
      primary: '#8B5CF6', // Purple
      primaryDark: '#7C3AED',
      secondary: '#EC4899', // Pink
      accent: '#F59E0B', // Amber
    },
    content: {
      heroTitle: 'Bold & Vibrant Design',
      heroDescription:
        'Stand out with our customizable color system. Make it your own.',
    },
  },
};

/**
 * Light, minimal color scheme.
 * Demonstrates using the built-in 'light' theme.
 */
export const LightTheme: Story = {
  args: {
    companyName: 'Minimalist',
    logo: 'M',
    theme: 'light',
    content: {
      heroTitle: 'Clean & Minimal',
      heroDescription: 'Less is more. Focus on what matters.',
    },
  },
};

/**
 * Dark, high-contrast theme with custom colors.
 * Demonstrates using custom color overrides for accessibility.
 */
export const DarkHighContrast: Story = {
  args: {
    companyName: 'DarkMode Pro',
    logo: 'D',
    showThemeSwitcher: false,
    colors: {
      primary: '#00F0FF',
      primaryDark: '#00D4E6',
      secondary: '#FF00FF',
      accent: '#FFD700',
      background: '#000000',
      surface: '#0A0A0A',
      text: '#FFFFFF',
      textMuted: '#A0A0A0',
    },
    content: {
      heroTitle: 'Maximum Contrast',
      heroDescription: 'Perfect for accessibility and night reading.',
    },
  },
};

// ============================================================================
// Localization
// ============================================================================

/**
 * Spanish language variant (Español).
 */
export const SpanishLocale: Story = {
  args: {
    companyName: 'Mi Empresa',
    logo: 'M',
    locale: 'es',
  },
};

// ============================================================================
// Layout Variations
// ============================================================================

/**
 * No footer variant for simpler layouts.
 */
export const NoFooter: Story = {
  args: {
    companyName: 'Minimal Co',
    logo: 'M',
    showFooter: false,
    content: {
      heroTitle: 'Simple & Clean',
      heroDescription: 'Sometimes less is more. No footer, just content.',
    },
  },
};

/**
 * No switchers (language/theme) for cleaner UI.
 */
export const NoSwitchers: Story = {
  args: {
    companyName: 'Clean UI',
    logo: 'C',
    showLanguageSwitcher: false,
    showThemeSwitcher: false,
    content: {
      heroTitle: 'Focused Experience',
      heroDescription: 'Distraction-free landing page.',
    },
  },
};

// ============================================================================
// Custom Sections
// ============================================================================

/**
 * Custom about section with rich content.
 */
export const CustomAboutSection: Story = {
  play: async () => {
    // Scroll to the about section when the story loads
    await new Promise((resolve) => setTimeout(resolve, 100));
    const aboutSection = (globalThis as any).document?.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  },
  args: {
    companyName: 'StoryTech',
    logo: 'S',
    aboutSection: (
      <div
        style={{ padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto' }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          Our Story
        </h2>
        <div
          style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Founded in 2024
            </h3>
            <p style={{ lineHeight: '1.8', opacity: 0.8 }}>
              We started with a simple idea: make technology accessible to
              everyone. What began as a side project has grown into a platform
              used by thousands.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Our Mission
            </h3>
            <p style={{ lineHeight: '1.8', opacity: 0.8 }}>
              Empower creators, developers, and entrepreneurs with tools that
              remove technical barriers and let them focus on their vision.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              The Team
            </h3>
            <p style={{ lineHeight: '1.8', opacity: 0.8 }}>
              A diverse team of engineers, designers, and product thinkers from
              around the world, united by a passion for great software.
            </p>
          </div>
        </div>
      </div>
    ),
  },
};

/**
 * Custom contact section with different layout.
 */
export const CustomContactSection: Story = {
  play: async () => {
    // Scroll to the contact section when the story loads
    await new Promise((resolve) => setTimeout(resolve, 100));
    const contactSection = (globalThis as any).document?.getElementById(
      'contact'
    );
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  },
  args: {
    companyName: 'Reach Us',
    logo: 'R',
    contactSection: (
      <div
        style={{
          padding: '4rem 1rem',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Let's Connect
        </h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.8 }}>
          We'd love to hear from you! Choose your preferred way to reach out.
        </p>
        <div
          style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          }}
        >
          <div
            style={{
              padding: '2rem',
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '1rem',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              <span role="img" aria-label="email">
                📧
              </span>
            </div>
            <h3 style={{ marginBottom: '0.5rem' }}>Email</h3>
            <p style={{ opacity: 0.8 }}>hello@company.com</p>
          </div>
          <div
            style={{
              padding: '2rem',
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '1rem',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              <span role="img" aria-label="chat">
                💬
              </span>
            </div>
            <h3 style={{ marginBottom: '0.5rem' }}>Live Chat</h3>
            <p style={{ opacity: 0.8 }}>Available 9am-5pm EST</p>
          </div>
          <div
            style={{
              padding: '2rem',
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '1rem',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              <span role="img" aria-label="phone">
                📞
              </span>
            </div>
            <h3 style={{ marginBottom: '0.5rem' }}>Phone</h3>
            <p style={{ opacity: 0.8 }}>+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    ),
  },
};

// ============================================================================
// Footer Customization
// ============================================================================

/**
 * Custom footer links.
 */
export const CustomFooterLinks: Story = {
  args: {
    companyName: 'LinkTech',
    logo: 'L',
    footerLinks: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
      { label: 'Blog', href: '/blog' },
      { label: 'Status', href: '/status' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
};

// ============================================================================
// Real-World Examples
// ============================================================================

/**
 * AI/ML product landing page.
 */
export const AIProduct: Story = {
  args: {
    companyName: 'NeuralFlow AI',
    logo: 'N',
    colors: {
      primary: '#6366F1',
      primaryDark: '#4F46E5',
      secondary: '#8B5CF6',
      accent: '#EC4899',
    },
    content: {
      launchBadgeText: '🤖 Powered by GPT-4',
      heroTitle: 'AI That Understands Your Business',
      tagline: 'Intelligence you can trust',
      heroDescription:
        'Transform your workflow with AI-powered automation. No ML expertise required.',
      primaryCtaText: 'Start Free Trial',
      secondaryCtaText: 'See Demo',
      features: [
        {
          icon: '🧠',
          title: 'Smart Automation',
          description:
            'AI learns from your data and automates repetitive tasks.',
        },
        {
          icon: '🎯',
          title: 'Predictive Insights',
          description: 'Forecast trends and make data-driven decisions.',
        },
        {
          icon: '🔐',
          title: 'Privacy First',
          description: 'Your data never leaves your infrastructure.',
        },
        {
          icon: '⚡',
          title: 'Real-time Processing',
          description: 'Process millions of records in seconds.',
        },
        {
          icon: '🔄',
          title: 'Continuous Learning',
          description: 'Model improves automatically as you use it.',
        },
        {
          icon: '📊',
          title: 'Visual Analytics',
          description: 'Beautiful dashboards with actionable insights.',
        },
      ],
      stats: [
        { number: '99.9%', label: 'Accuracy' },
        { number: '10M+', label: 'Predictions/Day' },
        { number: '500ms', label: 'Avg Response' },
        { number: '1000+', label: 'Happy Customers' },
      ],
      finalCtaTitle: 'Ready to leverage AI?',
      finalCtaDescription: 'Join leading companies using NeuralFlow AI.',
      finalCtaButton: 'Get Started Free',
    },
  },
};

/**
 * Developer tools/API product.
 */
export const DeveloperTools: Story = {
  args: {
    companyName: 'DevKit API',
    logo: 'D',
    colors: {
      primary: '#10B981',
      primaryDark: '#059669',
      secondary: '#3B82F6',
      accent: '#F59E0B',
      background: '#0F172A',
      surface: '#1E293B',
      text: '#F1F5F9',
      textMuted: '#94A3B8',
    },
    content: {
      launchBadgeText: '⚡ v2.0 Beta',
      heroTitle: 'APIs Developers Love',
      tagline: 'Built by devs, for devs',
      heroDescription:
        'Simple, powerful APIs with great DX. Get started in minutes with our comprehensive SDKs.',
      primaryCtaText: 'View Docs',
      secondaryCtaText: 'Try Free',
      features: [
        {
          icon: '📚',
          title: 'Great Documentation',
          description: 'Clear examples, interactive playground, and SDKs.',
        },
        {
          icon: '🚀',
          title: 'Fast & Reliable',
          description: 'Sub-100ms response times, 99.99% uptime SLA.',
        },
        {
          icon: '🔑',
          title: 'Simple Auth',
          description: 'API keys, OAuth 2.0, and JWT support built-in.',
        },
        {
          icon: '📊',
          title: 'Usage Analytics',
          description: 'Real-time metrics and debugging tools.',
        },
        {
          icon: '💰',
          title: 'Fair Pricing',
          description: 'Pay for what you use. No hidden fees.',
        },
        {
          icon: '🛠️',
          title: 'SDKs & Tools',
          description: 'Official SDKs for all major languages.',
        },
      ],
      stats: [
        { number: '1B+', label: 'API Calls/Month' },
        { number: '50K+', label: 'Developers' },
        { number: '<100ms', label: 'P99 Latency' },
        { number: '10+', label: 'Languages' },
      ],
      finalCtaTitle: 'Start building in minutes',
      finalCtaDescription:
        '10,000 free requests/month. No credit card required.',
      finalCtaButton: 'Get API Key →',
    },
  },
};

/**
 * Fintech/Finance product.
 */
export const FintechProduct: Story = {
  args: {
    companyName: 'SecurePay',
    logo: 'S',
    colors: {
      primary: '#2563EB',
      primaryDark: '#1D4ED8',
      secondary: '#059669',
      accent: '#DC2626',
      background: '#FFFFFF',
      surface: '#F9FAFB',
      text: '#111827',
      textMuted: '#6B7280',
    },
    content: {
      launchBadgeText: '🏦 PCI DSS Certified',
      heroTitle: 'Payments Made Simple',
      tagline: 'Trusted by 50,000+ businesses',
      heroDescription:
        'Accept payments globally with our secure, compliant payment infrastructure.',
      primaryCtaText: 'Create Account',
      secondaryCtaText: 'Contact Sales',
      features: [
        {
          icon: '💳',
          title: 'All Payment Methods',
          description:
            'Credit cards, ACH, wire transfers, and digital wallets.',
        },
        {
          icon: '🌍',
          title: 'Global Reach',
          description: 'Accept payments in 135+ currencies worldwide.',
        },
        {
          icon: '🔒',
          title: 'Bank-Level Security',
          description: 'PCI DSS Level 1 certified with fraud detection.',
        },
        {
          icon: '📈',
          title: 'Advanced Analytics',
          description: 'Real-time reporting and reconciliation.',
        },
        {
          icon: '⚡',
          title: 'Instant Payouts',
          description: 'Get paid faster with next-day settlements.',
        },
        {
          icon: '🤝',
          title: 'White-Label',
          description: 'Fully customizable checkout experience.',
        },
      ],
      stats: [
        { number: '$5B+', label: 'Processed' },
        { number: '50K+', label: 'Merchants' },
        { number: '99.99%', label: 'Uptime' },
        { number: '135+', label: 'Currencies' },
      ],
      finalCtaTitle: 'Ready to grow your revenue?',
      finalCtaDescription:
        'Join thousands of businesses using SecurePay. Start free.',
      finalCtaButton: 'Get Started',
    },
  },
};
