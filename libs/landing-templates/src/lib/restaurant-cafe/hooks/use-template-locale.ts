import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { type Locale } from '../../shared';

export interface UseTemplateLocaleProps {
  /**
   * Locale prop (controlled mode if provided and not default)
   */
  locale: Locale;
  /**
   * Default locale to use when no locale is specified
   */
  defaultLocale: Locale;
  /**
   * Callback when locale changes
   */
  onLocaleChange?: (locale: Locale) => void;
}

export interface UseTemplateLocaleResponse {
  /**
   * Current active locale
   */
  currentLocale: Locale;
  /**
   * Handler for locale changes
   */
  handleLocaleChange: (newLocale: Locale) => void;
}

/**
 * Custom hook to manage locale state for landing page templates
 *
 * Features:
 * - Reads locale from URL search params on mount
 * - Supports controlled/uncontrolled pattern via locale prop
 * - Manages internal locale state when not controlled
 * - Calls onLocaleChange callback when locale changes
 *
 * @example
 * ```tsx
 * const { currentLocale, handleLocaleChange } = useTemplateLocale({
 *   locale: props.locale || DEFAULT_LOCALE,
 *   defaultLocale: DEFAULT_LOCALE,
 *   onLocaleChange: props.onLocaleChange,
 * });
 * ```
 */
export const useTemplateLocale = ({
  locale,
  defaultLocale,
  onLocaleChange,
}: UseTemplateLocaleProps): UseTemplateLocaleResponse => {
  const [searchParams] = useSearchParams();
  const [internalLocale, setInternalLocale] = useState<Locale>(locale);

  // Read locale from URL search params on mount
  useEffect(() => {
    const localeParam = searchParams.get('locale') as Locale | null;
    if (localeParam && locale === defaultLocale) {
      setInternalLocale(localeParam);
    }
  }, [searchParams, locale, defaultLocale]);

  // Determine current locale (controlled vs uncontrolled)
  const currentLocale = locale !== defaultLocale ? locale : internalLocale;

  // Handle locale changes
  const handleLocaleChange = (newLocale: Locale) => {
    // Update internal state only in uncontrolled mode
    if (locale === defaultLocale) {
      setInternalLocale(newLocale);
    }
    // Always call the callback
    onLocaleChange?.(newLocale);
  };

  return {
    currentLocale,
    handleLocaleChange,
  };
};
