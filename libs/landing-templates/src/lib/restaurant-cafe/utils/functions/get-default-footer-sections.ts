import { LocaleStrings, FooterSection } from '../types';
import { FOOTER_PATHS } from '../constants';

/**
 * Generate default footer sections based on locale strings
 * This ensures footer sections are properly localized
 */
export const getDefaultFooterSections = (
  localeStrings: LocaleStrings
): FooterSection[] => {
  return [
    {
      title: localeStrings.footer.quickLinks,
      links: [
        { label: localeStrings.footer.links.about, href: FOOTER_PATHS.ABOUT },
        { label: localeStrings.footer.links.menu, href: FOOTER_PATHS.MENU },
        {
          label: localeStrings.footer.links.contact,
          href: FOOTER_PATHS.CONTACT,
        },
      ],
    },
    {
      title: localeStrings.footer.followUs,
      links: [
        {
          label: localeStrings.footer.links.instagram,
          href: FOOTER_PATHS.INSTAGRAM,
        },
        {
          label: localeStrings.footer.links.facebook,
          href: FOOTER_PATHS.FACEBOOK,
        },
        {
          label: localeStrings.footer.links.twitter,
          href: FOOTER_PATHS.TWITTER,
        },
      ],
    },
  ];
};
