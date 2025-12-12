import clsx from 'clsx';
import { STYLES, FooterSection } from '../utils';

interface FooterProps {
  restaurantName: string;
  tagline: string;
  footerSections: FooterSection[];
  copyright: string;
}

/**
 * Footer component for restaurant-cafe template
 */
export const Footer = ({
  restaurantName,
  tagline,
  footerSections,
  copyright,
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={STYLES.FOOTER}>
      <div className={STYLES.CONTAINER}>
        <div className={STYLES.FOOTER_CONTENT}>
          <div>
            <div className={STYLES.FOOTER_BRAND}>{restaurantName}</div>
            <p className={STYLES.FOOTER_TAGLINE}>{tagline}</p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index} className={STYLES.FOOTER_SECTION}>
              <h4 className={STYLES.FOOTER_SECTION_TITLE}>{section.title}</h4>
              <ul className={STYLES.FOOTER_LINKS}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      className={clsx(STYLES.FOOTER_LINK)}
                      target={
                        link.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        link.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      aria-label={
                        link.href.startsWith('http')
                          ? `${link.label} (opens in new window)`
                          : undefined
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={STYLES.FOOTER_BOTTOM}>
          © {currentYear} {restaurantName}. {copyright}
        </div>
      </div>
    </footer>
  );
};
