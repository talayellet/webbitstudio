import { useMemo } from 'react';
import { ContentOverrides } from '../utils/types';
import { LocaleStrings } from '../utils/locales';

interface UseLocalizedContentProps {
  launchBadgeText: string;
  heroTitle: string;
  tagline: string;
  heroDescription: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaHref: string;
  features: ReadonlyArray<{
    icon: string;
    title: string;
    description: string;
  }>;
  stats: ReadonlyArray<{
    number: string;
    label: string;
  }>;
  finalCtaTitle: string;
  finalCtaDescription: string;
  finalCtaButton: string;
  finalCtaHref: string;
}

/**
 * Custom hook to get localized content with optional overrides
 * Content overrides take precedence over locale strings
 */
export const useLocalizedContent = (
  localeStrings: LocaleStrings,
  contentOverrides?: ContentOverrides
): UseLocalizedContentProps => {
  return useMemo(
    () => ({
      launchBadgeText:
        contentOverrides?.launchBadgeText ?? localeStrings.hero.launchBadge,
      heroTitle: contentOverrides?.heroTitle ?? localeStrings.hero.title,
      tagline: contentOverrides?.tagline ?? localeStrings.hero.tagline,
      heroDescription:
        contentOverrides?.heroDescription ?? localeStrings.hero.description,
      primaryCtaText:
        contentOverrides?.primaryCtaText ?? localeStrings.hero.primaryCta,
      secondaryCtaText:
        contentOverrides?.secondaryCtaText ?? localeStrings.hero.secondaryCta,
      primaryCtaHref: contentOverrides?.primaryCtaHref ?? '#',
      secondaryCtaHref: contentOverrides?.secondaryCtaHref ?? '#',
      features: contentOverrides?.features ?? localeStrings.features.items,
      stats: contentOverrides?.stats ?? localeStrings.stats.items,
      finalCtaTitle:
        contentOverrides?.finalCtaTitle ?? localeStrings.finalCta.title,
      finalCtaDescription:
        contentOverrides?.finalCtaDescription ??
        localeStrings.finalCta.description,
      finalCtaButton:
        contentOverrides?.finalCtaButton ?? localeStrings.finalCta.button,
      finalCtaHref: contentOverrides?.finalCtaHref ?? '#',
    }),
    [contentOverrides, localeStrings]
  );
};
