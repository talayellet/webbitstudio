import type { Meta, StoryObj } from '@storybook/react-vite';
import { SaasLaunch } from './saas-launch';

const meta = {
  component: SaasLaunch,
  title: 'SaasLaunch',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SaasLaunch>;
export default meta;

type Story = StoryObj<typeof SaasLaunch>;

export const Primary = {
  args: {
    companyName: 'Acme Corp',
    logoLetter: 'A',
    launchBadgeText: 'Coming Soon',
    heroTitle: 'Build Something Amazing',
    heroDescription:
      'Transform your ideas into reality with our powerful platform.',
    primaryCtaText: 'Get Started',
    secondaryCtaText: 'Learn More',
  },
} satisfies Story;

export const CustomBranding = {
  args: {
    companyName: 'TechFlow',
    logoLetter: 'T',
    launchBadgeText: 'Launching Q1 2026',
    heroTitle: 'The Future of Development',
    heroDescription:
      'Experience the next generation of developer tools designed for modern workflows.',
    primaryCtaText: 'Join Waitlist',
    secondaryCtaText: 'Watch Demo',
    finalCtaTitle: 'Be among the first to know',
    finalCtaDescription: 'Get early access and exclusive benefits.',
    finalCtaButton: 'Sign Up Now',
  },
} satisfies Story;
