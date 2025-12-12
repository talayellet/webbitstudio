/**
 * Supported locales
 */
export const LOCALES = {
  EN: 'en',
  ES: 'es',
  FR: 'fr',
  HE: 'he',
} as const;

export type Locale = (typeof LOCALES)[keyof typeof LOCALES];

export interface PageUnderConstructionLocale {
  title: string;
  message: string;
  backButton: string;
}
