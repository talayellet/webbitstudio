import clsx from 'clsx';
import { STYLES, LocaleStrings, DEFAULT_LOCALE_STRINGS } from '../utils';
import { useStickyHeader } from '../hooks';

export interface HeaderProps {
  companyName: string;
  logoLetter: string;
  productName?: string;
  locale?: LocaleStrings;
}

export const Header = ({
  companyName,
  logoLetter,
  productName,
  locale = DEFAULT_LOCALE_STRINGS,
}: HeaderProps) => {
  const { isScrolled, scrollToTop } = useStickyHeader();

  return (
    <header
      className={clsx(STYLES.HEADER, isScrolled && STYLES.HEADER_SCROLLED)}
    >
      <div className={STYLES.CONTAINER}>
        <nav className={STYLES.NAV}>
          <a href="/" onClick={scrollToTop} className={clsx(STYLES.NAV_BRAND)}>
            <div className={clsx(STYLES.LOGO_CONTAINER, STYLES.ICON_GRADIENT)}>
              {logoLetter}
            </div>
            <span>{productName || companyName}</span>
          </a>
          <ul className={STYLES.NAV_LIST}>
            <li>
              <a
                href="#top"
                onClick={scrollToTop}
                className={clsx(STYLES.NAV_LINK)}
              >
                {locale.header.nav.home}
              </a>
            </li>
            <li>
              <a href="#features" className={clsx(STYLES.NAV_LINK)}>
                {locale.header.nav.features}
              </a>
            </li>
            <li>
              <a href="#about" className={clsx(STYLES.NAV_LINK)}>
                {locale.header.nav.about}
              </a>
            </li>
            <li>
              <a href="#contact" className={clsx(STYLES.NAV_LINK)}>
                {locale.header.nav.contact}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
