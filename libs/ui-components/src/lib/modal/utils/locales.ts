import { DEFAULT_LANGUAGE } from '@webbitstudio/shared-utils';

/**
 * Default locale strings for Modal component
 * These are fallback values - consumers should provide localized strings
 */

export const MODAL_LOCALES = {
  en: {
    ariaLabel: 'Dialog',
    closeButtonAriaLabel: 'Close',
  },
  es: {
    ariaLabel: 'Diálogo',
    closeButtonAriaLabel: 'Cerrar',
  },
  fr: {
    ariaLabel: 'Dialogue',
    closeButtonAriaLabel: 'Fermer',
  },
  de: {
    ariaLabel: 'Dialog',
    closeButtonAriaLabel: 'Schließen',
  },
  he: {
    ariaLabel: 'תיבת דו-שיח',
    closeButtonAriaLabel: 'סגור',
  },
} as const;

export type ModalLocale = keyof typeof MODAL_LOCALES;

/**
 * Get localized strings for Modal component
 * Falls back to English if locale not found
 */
export const getModalLocaleStrings = (locale: string = DEFAULT_LANGUAGE) => {
  return (
    MODAL_LOCALES[locale as ModalLocale] || MODAL_LOCALES[DEFAULT_LANGUAGE]
  );
};
