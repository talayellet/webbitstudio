import { LOCALES, Locale } from '../types';

interface CreateLocaleStringsGetterProps<T> {
  localeMap: Record<Locale, T>;
  defaultLocale?: Locale;
}

/**
 * Creates a locale strings getter function.
 * Falls back to the default locale if the requested locale is not found.
 */
export function createLocaleStringsGetter<T>({
  localeMap,
  defaultLocale = LOCALES.EN,
}: CreateLocaleStringsGetterProps<T>): (locale: string) => T {
  return (locale: string): T => {
    return localeMap[locale as Locale] || localeMap[defaultLocale];
  };
}
