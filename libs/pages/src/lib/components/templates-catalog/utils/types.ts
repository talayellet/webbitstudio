export const TEMPLATE_CATEGORY_IDS = {
  ALL: 'all',
  BUSINESS: 'business',
  ECOMMERCE: 'ecommerce',
  PORTFOLIO: 'portfolio',
  SAAS: 'saas',
} as const;

export type TemplateCategoryId =
  (typeof TEMPLATE_CATEGORY_IDS)[keyof typeof TEMPLATE_CATEGORY_IDS];

export interface LandingPageTemplate {
  id: string;
  name: string;
  description: string;
  category: TemplateCategoryId;
  thumbnailUrl: string;
  previewUrl: string;
  tags: string[];
}
