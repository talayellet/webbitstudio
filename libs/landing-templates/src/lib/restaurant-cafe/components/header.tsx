import { ReactNode } from 'react';
import clsx from 'clsx';
import { useScrollBehavior } from '@webbitstudio/shared-utils';
import { STYLES, NavLink } from '../utils';

interface HeaderProps {
  restaurantName: string;
  logo: ReactNode;
  navLinks: NavLink[];
  ariaMainNavigation: string;
  ariaReturnToTop: string;
}

/**
 * Header component for restaurant-cafe template
 */
export const Header = ({
  restaurantName,
  logo,
  navLinks,
  ariaMainNavigation,
  ariaReturnToTop,
}: HeaderProps) => {
  const scrollBehavior = useScrollBehavior();

  return (
    <header className={STYLES.HEADER}>
      <div className={STYLES.CONTAINER}>
        <nav
          className={STYLES.NAV}
          role="navigation"
          aria-label={ariaMainNavigation}
        >
          {logo ? (
            <div className={STYLES.LOGO}>{logo}</div>
          ) : (
            <a
              href="#top"
              className={STYLES.LOGO}
              aria-label={`${restaurantName} - ${ariaReturnToTop}`}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: scrollBehavior });
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
                        element.scrollIntoView({ behavior: scrollBehavior });
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
