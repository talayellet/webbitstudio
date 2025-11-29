import { LOCALES, type Locale } from './types';

export const EMAIL_REG = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
export const DEFAULT_LOCALE: Locale = LOCALES.EN;
