import { DEFAULT_LANGUAGE } from '../constants';

/**
 * Hook to get user's browser language preference
 * This doesn't require consent as it reads from browser settings (user's explicit preference)
 * Falls back to English if language not supported
 *
 * @returns Browser language code (e.g., 'en', 'he', 'fr')
 *
 * @example
 * ```tsx
 * const browserLocale = useBrowserLocale();
 * // Returns 'he' for Hebrew speakers, 'en' for English, etc.
 * ```
 */
export const useBrowserLocale = (): string => {
  if (typeof navigator === 'undefined') {
    return DEFAULT_LANGUAGE; // SSR fallback
  }

  // Get browser language (e.g., "he-IL", "en-US", "fr-FR")
  const browserLang =
    navigator.language || navigator.languages?.[0] || DEFAULT_LANGUAGE;

  // Extract primary language code (he-IL → he)
  const primaryLang = browserLang.split('-')[0].toLowerCase();

  return primaryLang;
};
