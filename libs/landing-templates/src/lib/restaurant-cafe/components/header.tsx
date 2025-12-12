import { ReactNode } from 'react';
import clsx from 'clsx';
import { STYLES, NavLink } from '../utils';

interface HeaderProps {
  restaurantName: string;
  logo: ReactNode;
  navLinks: NavLink[];
}

/**
 * Header component for restaurant-cafe template
 */
export const Header = ({ restaurantName, logo, navLinks }: HeaderProps) => {
  return (
    <header className={STYLES.HEADER}>
      <div className={STYLES.CONTAINER}>
        <nav className={STYLES.NAV}>
          {logo ? (
            <div className={STYLES.LOGO}>{logo}</div>
          ) : (
            <a
              href="#top"
              className={STYLES.LOGO}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {restaurantName}
            </a>
          )}
          <ul className={STYLES.NAV_MENU}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      const element = document.getElementById(
                        link.href.substring(1)
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                    link.onClick?.(e);
                  }}
                  className={clsx(STYLES.NAV_LINK)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
