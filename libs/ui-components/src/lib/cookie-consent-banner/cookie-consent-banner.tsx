import clsx from 'clsx';
import { useLocalStorageConsent } from '@webbitstudio/shared-utils';
import {
  DEFAULT_COOKIE_STORAGE_KEY,
  COOKIE_CONSENT_BANNER_STYLES,
} from './utils';

export interface CookieConsentBannerProps {
  /**
   * Localized banner text content
   */
  message: string;
  /**
   * Text for accept button
   */
  acceptButtonText: string;
  /**
   * Text for reject button
   */
  rejectButtonText: string;
  /**
   * Optional link to privacy policy
   */
  privacyPolicyLink?: string;
  /**
   * Text for privacy policy link
   */
  privacyPolicyText?: string;
  /**
   * Callback when user accepts cookies
   */
  onAccept?: () => void;
  /**
   * Callback when user rejects cookies
   */
  onReject?: () => void;
  /**
   * LocalStorage key for storing consent
   */
  storageKey?: string;
  /**
   * Custom styles
   */
  styles?: {
    container?: string;
    content?: string;
    message?: string;
    buttonContainer?: string;
    acceptButton?: string;
    rejectButton?: string;
    link?: string;
  };
}

export const CookieConsentBanner = ({
  message,
  acceptButtonText,
  rejectButtonText,
  privacyPolicyLink,
  privacyPolicyText,
  onAccept,
  onReject,
  storageKey = DEFAULT_COOKIE_STORAGE_KEY,
  styles = {},
}: CookieConsentBannerProps) => {
  const { isVisible, accept, reject } = useLocalStorageConsent({
    storageKey,
    onAccept,
    onReject,
  });

  if (!isVisible) {
    return null;
  }

  const mergedStyles = {
    container: styles.container || COOKIE_CONSENT_BANNER_STYLES.container,
    content: styles.content || COOKIE_CONSENT_BANNER_STYLES.content,
    message: styles.message || COOKIE_CONSENT_BANNER_STYLES.message,
    buttonContainer:
      styles.buttonContainer || COOKIE_CONSENT_BANNER_STYLES.buttonContainer,
    acceptButton:
      styles.acceptButton || COOKIE_CONSENT_BANNER_STYLES.acceptButton,
    rejectButton:
      styles.rejectButton || COOKIE_CONSENT_BANNER_STYLES.rejectButton,
    link: styles.link || COOKIE_CONSENT_BANNER_STYLES.link,
  };

  return (
    <div className={mergedStyles.container} role="dialog" aria-live="polite">
      <div
        className={clsx(
          mergedStyles.content,
          COOKIE_CONSENT_BANNER_STYLES.contentInner
        )}
      >
        <div className={mergedStyles.message}>
          {message}{' '}
          {privacyPolicyLink && privacyPolicyText && (
            <a
              href={privacyPolicyLink}
              className={mergedStyles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {privacyPolicyText}
            </a>
          )}
        </div>
        <div className={mergedStyles.buttonContainer}>
          <button
            onClick={reject}
            className={mergedStyles.rejectButton}
            type="button"
          >
            {rejectButtonText}
          </button>
          <button
            onClick={accept}
            className={mergedStyles.acceptButton}
            type="button"
          >
            {acceptButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};
