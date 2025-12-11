import { useMemo } from 'react';
import { NavLink, LocaleStrings, createNavClickHandler } from '../utils';

export interface UseDefaultNavLinksProps {
  locale: LocaleStrings;
  scrollToTop: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const useDefaultNavLinks = ({
  locale,
  scrollToTop,
}: UseDefaultNavLinksProps): NavLink[] => {
  return useMemo(() => {
    // Check if we're on a template preview page or feature page
    const isOnTemplatePreview =
      window.location.pathname.includes('/templates/');
    const isOnFeaturePage = window.location.pathname.includes('/features/');

    // Determine the correct href format based on current location
    let homeHref: string;
    let featuresHref: string;
    let aboutHref: string;
    let contactHref: string;

    if (isOnFeaturePage) {
      // On feature page: navigate back to main template page with hash anchors
      // Get the base template path (e.g., /templates/saas-launch)
      const pathSegments = window.location.pathname.split('/');
      const featuresIndex = pathSegments.indexOf('features');
      const basePath = pathSegments.slice(0, featuresIndex).join('/');

      homeHref = basePath || '/';
      featuresHref = `${basePath}#features`;
      aboutHref = `${basePath}#about`;
      contactHref = `${basePath}#contact`;
    } else if (isOnTemplatePreview) {
      // On main template page: use relative hash links
      homeHref = '#';
      featuresHref = '#features';
      aboutHref = '#about';
      contactHref = '#contact';
    } else {
      // On home page: use absolute paths with hash
      homeHref = '/';
      featuresHref = '/#features';
      aboutHref = '/#about';
      contactHref = '/#contact';
    }

    const navItems = [
      { href: homeHref, label: locale.header.nav.home },
      { href: featuresHref, label: locale.header.nav.features },
      { href: aboutHref, label: locale.header.nav.about },
      { href: contactHref, label: locale.header.nav.contact },
    ];

    return navItems.map(({ href, label }) => ({
      href,
      label,
      onClick: createNavClickHandler(href, scrollToTop),
    }));
  }, [locale, scrollToTop]);
};
