import clsx from 'clsx';
import { STYLES } from './utils';
import { useStickyHeader } from './hooks';

export interface HeaderProps {
  companyName: string;
  logoLetter: string;
  productName?: string;
}

export const Header = ({
  companyName,
  logoLetter,
  productName,
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
              <a href="#features" className={clsx(STYLES.NAV_LINK)}>
                Features
              </a>
            </li>
            <li>
              <a href="#about" className={clsx(STYLES.NAV_LINK)}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className={clsx(STYLES.NAV_LINK)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
