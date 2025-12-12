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
  // Check user's motion preference for smooth scrolling (WCAG 2.3.3)
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scrollBehavior: ScrollBehavior = prefersReducedMotion
    ? 'auto'
    : 'smooth';

  return (
    <header className={STYLES.HEADER}>
      <div className={STYLES.CONTAINER}>
        <nav
          className={STYLES.NAV}
          role="navigation"
          aria-label="Main navigation"
        >
          {logo ? (
            <div className={STYLES.LOGO}>{logo}</div>
          ) : (
            <a
              href="#top"
              className={STYLES.LOGO}
              aria-label={`${restaurantName} - Return to top`}
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
