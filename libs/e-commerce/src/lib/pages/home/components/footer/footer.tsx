import { useCallback, memo } from 'react';
import { HOME_PAGE_STYLES, Locale } from '../../utils';

/**
 * eCommerce Footer Component
 *
 * A sticky footer featuring:
 * - Navigation links (Privacy Policy, Terms of Service, Cookie Policy, Contact Us)
 * - Back to top button
 *
 * @example
 * ```tsx
 * <Footer
 *   locale={ENGLISH_LOCALE.FOOTER}
 *   onPrivacyPolicyClick={handlePrivacyPolicy}
 *   onTermsClick={handleTerms}
 *   onCookiePolicyClick={handleCookiePolicy}
 *   onContactClick={handleContact}
 * />
 * ```
 */
export interface FooterProps {
  /** Localized text content */
  locale: Locale['FOOTER'];
  /** Callback for privacy policy link */
  onPrivacyPolicyClick?: () => void;
  /** Callback for terms of service link */
  onTermsClick?: () => void;
  /** Callback for cookie policy link */
  onCookiePolicyClick?: () => void;
  /** Callback for contact us link */
  onContactClick?: () => void;
}

const FooterComponent = ({
  locale,
  onPrivacyPolicyClick,
  onTermsClick,
  onCookiePolicyClick,
  onContactClick,
}: FooterProps) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <footer className={HOME_PAGE_STYLES.FOOTER}>
      <div className={HOME_PAGE_STYLES.FOOTER_CONTAINER}>
        <div className={HOME_PAGE_STYLES.FOOTER_CONTENT}>
          <nav
            className={HOME_PAGE_STYLES.FOOTER_LINKS}
            aria-label={locale.FOOTER_ARIA_LABEL}
          >
            <button
              onClick={onPrivacyPolicyClick}
              className={HOME_PAGE_STYLES.FOOTER_LINK}
              type="button"
            >
              {locale.PRIVACY_POLICY}
            </button>
            <span className={HOME_PAGE_STYLES.FOOTER_DIVIDER}>|</span>
            <button
              onClick={onTermsClick}
              className={HOME_PAGE_STYLES.FOOTER_LINK}
              type="button"
            >
              {locale.TERMS_OF_SERVICE}
            </button>
            <span className={HOME_PAGE_STYLES.FOOTER_DIVIDER}>|</span>
            <button
              onClick={onCookiePolicyClick}
              className={HOME_PAGE_STYLES.FOOTER_LINK}
              type="button"
            >
              {locale.COOKIE_POLICY}
            </button>
            <span className={HOME_PAGE_STYLES.FOOTER_DIVIDER}>|</span>
            <button
              onClick={onContactClick}
              className={HOME_PAGE_STYLES.FOOTER_LINK}
              type="button"
            >
              {locale.CONTACT_US}
            </button>
          </nav>
          <button
            onClick={scrollToTop}
            className={HOME_PAGE_STYLES.BACK_TO_TOP_BUTTON}
            type="button"
          >
            {locale.BACK_TO_TOP}
          </button>
        </div>
      </div>
    </footer>
  );
};

export const Footer = memo(FooterComponent);
