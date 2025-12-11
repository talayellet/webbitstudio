import { DEFAULT_LANGUAGE } from '@webbitstudio/shared-utils';

/**
 * Locale strings interface for PageUnderConstruction component
 */
interface PageUnderConstructionStrings {
  heading: string;
  message: string;
  backButtonText: string;
}

/**
 * Default locale strings for PageUnderConstruction component
 * These are fallback values - consumers should provide localized strings
 */

export const PAGE_UNDER_CONSTRUCTION_LOCALES: Record<
  string,
  PageUnderConstructionStrings
> = {
  en: {
    heading: 'Page Under Construction',
    message:
      "We're working hard to bring you something amazing. Please check back soon!",
    backButtonText: 'Go Back',
  },
  es: {
    heading: 'Página en Construcción',
    message:
      '¡Estamos trabajando duro para traerte algo increíble. Por favor, vuelve pronto!',
    backButtonText: 'Volver',
  },
  fr: {
    heading: 'Page en Construction',
    message:
      "Nous travaillons dur pour vous apporter quelque chose d'incroyable. Revenez bientôt !",
    backButtonText: 'Retour',
  },
  de: {
    heading: 'Seite im Aufbau',
    message:
      'Wir arbeiten hart daran, Ihnen etwas Erstaunliches zu bieten. Schauen Sie bald wieder vorbei!',
    backButtonText: 'Zurück',
  },
  he: {
    heading: 'דף בבניה',
    message: 'אנחנו עובדים קשה כדי להביא לכם משהו מדהים. בקרו שוב בקרוב!',
    backButtonText: 'חזרה',
  },
};

export type PageUnderConstructionLocale =
  keyof typeof PAGE_UNDER_CONSTRUCTION_LOCALES;

/**
 * Get localized strings for PageUnderConstruction component
 * Falls back to English if locale not found
 */
export const getPageUnderConstructionLocaleStrings = (
  locale: string = DEFAULT_LANGUAGE
): PageUnderConstructionStrings => {
  return (
    PAGE_UNDER_CONSTRUCTION_LOCALES[locale as PageUnderConstructionLocale] ||
    PAGE_UNDER_CONSTRUCTION_LOCALES[DEFAULT_LANGUAGE]
  );
};
