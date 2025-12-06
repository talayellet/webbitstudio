import type { CountryCode } from '@webbitstudio/shared-utils';
import type {
  PrivacyPolicyContent,
  TermsOfServiceContent,
  CookiePolicyContent,
} from './types';
import { privacyPolicyDe } from './locales/legal-content/privacy-policy/de';
import { privacyPolicyEn } from './locales/legal-content/privacy-policy/en';
import { privacyPolicyEs } from './locales/legal-content/privacy-policy/es';
import { privacyPolicyFr } from './locales/legal-content/privacy-policy/fr';
import { privacyPolicyHe } from './locales/legal-content/privacy-policy/he';
import { termsOfServiceDe } from './locales/legal-content/terms-of-service/de';
import { termsOfServiceEn } from './locales/legal-content/terms-of-service/en';
import { termsOfServiceEs } from './locales/legal-content/terms-of-service/es';
import { termsOfServiceFr } from './locales/legal-content/terms-of-service/fr';
import { termsOfServiceHe } from './locales/legal-content/terms-of-service/he';
import { cookiePolicyDe } from './locales/legal-content/cookie-policy/de';
import { cookiePolicyEn } from './locales/legal-content/cookie-policy/en';
import { cookiePolicyEs } from './locales/legal-content/cookie-policy/es';
import { cookiePolicyFr } from './locales/legal-content/cookie-policy/fr';
import { cookiePolicyHe } from './locales/legal-content/cookie-policy/he';

const privacyPolicies: Record<CountryCode, PrivacyPolicyContent> = {
  de: privacyPolicyDe,
  en: privacyPolicyEn,
  es: privacyPolicyEs,
  fr: privacyPolicyFr,
  he: privacyPolicyHe,
};

const termsOfServices: Record<CountryCode, TermsOfServiceContent> = {
  de: termsOfServiceDe,
  en: termsOfServiceEn,
  es: termsOfServiceEs,
  fr: termsOfServiceFr,
  he: termsOfServiceHe,
};

const cookiePolicies: Record<CountryCode, CookiePolicyContent> = {
  de: cookiePolicyDe,
  en: cookiePolicyEn,
  es: cookiePolicyEs,
  fr: cookiePolicyFr,
  he: cookiePolicyHe,
};

export const getPrivacyPolicyContent = (
  locale: CountryCode
): PrivacyPolicyContent => privacyPolicies[locale] || privacyPolicies.en;

export const getTermsOfServiceContent = (
  locale: CountryCode
): TermsOfServiceContent => termsOfServices[locale] || termsOfServices.en;

export const getCookiePolicyContent = (
  locale: CountryCode
): CookiePolicyContent => cookiePolicies[locale] || cookiePolicies.en;
