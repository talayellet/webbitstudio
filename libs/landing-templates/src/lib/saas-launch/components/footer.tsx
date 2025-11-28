import { useMemo } from 'react';
import clsx from 'clsx';
import {
  STYLES,
  LocaleStrings,
  DEFAULT_LOCALE_STRINGS,
  FOOTER_PATHS,
} from '../utils';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  companyName: string;
  locale?: LocaleStrings;
  links?: FooterLink[];
}

export const Footer = ({
  companyName,
  locale = DEFAULT_LOCALE_STRINGS,
  links,
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const copyrightText = useMemo(
    () =>
      locale.footer.copyright
        .replace('{year}', currentYear.toString())
        .replace('{companyName}', companyName),
    [locale, currentYear, companyName]
  );

  const footerLinks = useMemo(
    () =>
      links || [
        { label: locale.footer.links.privacy, href: FOOTER_PATHS.PRIVACY },
        { label: locale.footer.links.terms, href: FOOTER_PATHS.TERMS },
        { label: locale.footer.links.contact, href: FOOTER_PATHS.CONTACT },
      ],
    [links, locale]
  );

  return (
    <footer className={STYLES.FOOTER}>
      <div className={STYLES.CONTAINER}>
        <div className={STYLES.FOOTER_CONTENT}>
          <div className={STYLES.FOOTER_COPYRIGHT}>{copyrightText}</div>
          <ul className={STYLES.FOOTER_LIST}>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={clsx(STYLES.FOOTER_LINK)}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
