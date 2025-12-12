import { LandingPageTemplate } from './types';

/**
 * Mock template data - replace with actual templates
 */
export const DEFAULT_TEMPLATES: LandingPageTemplate[] = [
  {
    id: 'saas-launch',
    name: 'SaaS Launch',
    description:
      'Modern SaaS landing page with pricing tables and feature showcases',
    category: 'saas',
    thumbnailUrl: '/templates/saas-launch-thumb.jpg',
    previewUrl: '/templates/saas-launch',
    tags: ['Modern', 'Pricing', 'Features'],
  },
  {
    id: 'portfolio-creative',
    name: 'Creative Portfolio',
    description:
      'Showcase your work with elegant galleries and smooth animations',
    category: 'portfolio',
    thumbnailUrl: '/templates/portfolio-creative-thumb.jpg',
    previewUrl: '/templates/portfolio-creative',
    tags: ['Creative', 'Gallery', 'Minimal'],
  },
  {
    id: 'business-pro',
    name: 'Business Pro',
    description:
      'Professional business website with services and contact sections',
    category: 'business',
    thumbnailUrl: '/templates/business-pro-thumb.jpg',
    previewUrl: '/templates/business-pro',
    tags: ['Professional', 'Services', 'Contact'],
  },
];
