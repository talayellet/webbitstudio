import { DEFAULT_LANGUAGE } from '@webbitstudio/shared-utils';
import {
  PAGE_UNDER_CONSTRUCTION_STYLES,
  getPageUnderConstructionLocaleStrings,
} from './utils';

export interface PageUnderConstructionProps {
  /**
   * Heading text for the page
   */
  heading?: string;
  /**
   * Message text to display
   */
  message?: string;
  /**
   * Text for the back button
   */
  backButtonText?: string;
  /**
   * URL to navigate to when back button is clicked
   * Takes precedence over onBack callback
   */
  backUrl?: string;
  /**
   * Callback when the back button is clicked
   * If not provided and no backUrl is set, will use window.history.back()
   */
  onBack?: () => void;
  /**
   * Locale for default strings (used if heading/message/backButtonText not provided)
   * @default DEFAULT_LANGUAGE
   */
  locale?: string;
  /**
   * Custom styles
   */
  styles?: {
    container?: string;
    content?: string;
    icon?: string;
    heading?: string;
    message?: string;
    button?: string;
  };
}

/**
 * PageUnderConstruction component
 *
 * A generic page under construction component with a back button
 * that navigates to the previous URL
 *
 * @example
 * ```tsx
 * <PageUnderConstruction />
 * ```
 *
 * @example
 * ```tsx
 * <PageUnderConstruction
 *   heading="Custom Heading"
 *   message="We're working on something amazing!"
 *   backButtonText="Go Back"
 *   onBack={() => navigate('/home')}
 * />
 * ```
 */
export const PageUnderConstruction = ({
  heading,
  message,
  backButtonText,
  backUrl,
  onBack,
  locale = DEFAULT_LANGUAGE,
  styles = {},
}: PageUnderConstructionProps) => {
  const localeStrings = getPageUnderConstructionLocaleStrings(locale);

  const finalHeading = heading || localeStrings.heading;
  const finalMessage = message || localeStrings.message;
  const finalBackButtonText = backButtonText || localeStrings.backButtonText;

  const handleBack = () => {
    if (backUrl) {
      window.location.href = backUrl;
    } else if (onBack) {
      onBack();
    } else {
      window.history.back();
    }
  };

  const mergedStyles = {
    container: styles.container || PAGE_UNDER_CONSTRUCTION_STYLES.container,
    content: styles.content || PAGE_UNDER_CONSTRUCTION_STYLES.content,
    icon: styles.icon || PAGE_UNDER_CONSTRUCTION_STYLES.icon,
    heading: styles.heading || PAGE_UNDER_CONSTRUCTION_STYLES.heading,
    message: styles.message || PAGE_UNDER_CONSTRUCTION_STYLES.message,
    button: styles.button || PAGE_UNDER_CONSTRUCTION_STYLES.button,
  };

  return (
    <div className={mergedStyles.container}>
      <div className={mergedStyles.content}>
        <span
          className={mergedStyles.icon}
          role="img"
          aria-label="Under construction"
        >
          🚧
        </span>
        <h1 className={mergedStyles.heading}>{finalHeading}</h1>
        <p className={mergedStyles.message}>{finalMessage}</p>
        <button
          type="button"
          onClick={handleBack}
          className={mergedStyles.button}
        >
          {finalBackButtonText}
        </button>
      </div>
    </div>
  );
};
