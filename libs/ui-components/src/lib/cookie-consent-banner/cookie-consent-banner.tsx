import { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
  useGranularConsent,
  COOKIE_CONSENT_SHOW_BANNER_EVENT,
} from '@webbitstudio/shared-utils';
import { COOKIE_CONSENT_BANNER_STYLES, type CookieCategoryInfo } from './utils';
import { ConsentButtons, CookiesPreferencesPanel } from './components';
import { CloseIcon } from '../svg-icons';

export interface CookieConsentBannerProps {
  /**
   * Localized banner text content
   */
  message: string;
  /**
   * Text for accept all button
   */
  acceptButtonText: string;
  /**
   * Text for reject all button
   */
  rejectButtonText: string;
  /**
   * Text for customize preferences button
   */
  customizeButtonText: string;
  /**
   * Text for save preferences button
   */
  savePreferencesButtonText: string;
  /**
   * Title for preferences section
   */
  preferencesTitle: string;
  /**
   * Accessible label for the cookie categories group
   */
  categoriesGroupLabel: string;
  /**
   * Aria label for close button
   */
  closeButtonAriaLabel: string;
  /**
   * Cookie category information (labels and descriptions)
   */
  categories: {
    essential: CookieCategoryInfo;
    analytics: CookieCategoryInfo;
    marketing: CookieCategoryInfo;
  };
  /**
   * Optional link to privacy policy
   */
  privacyPolicyLink?: string;
  /**
   * Text for privacy policy link
   */
  privacyPolicyText?: string;
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
    customizeButton?: string;
    link?: string;
  };
}

export const CookieConsentBanner = ({
  message,
  acceptButtonText,
  rejectButtonText,
  customizeButtonText,
  savePreferencesButtonText,
  preferencesTitle,
  categoriesGroupLabel,
  closeButtonAriaLabel,
  categories,
  privacyPolicyLink,
  privacyPolicyText,
  styles = {},
}: CookieConsentBannerProps) => {
  const {
    preferences,
    isVisible,
    acceptAll,
    rejectAll,
    savePreferences,
    updatePreference,
  } = useGranularConsent();

  const [showPreferences, setShowPreferences] = useState(false);
  const [temporarilyDismissed, setTemporarilyDismissed] = useState(false);

  // Listen for custom event to show banner
  useEffect(() => {
    const handleShowBanner = () => {
      setTemporarilyDismissed(false);
      setShowPreferences(false);
    };

    window.addEventListener(COOKIE_CONSENT_SHOW_BANNER_EVENT, handleShowBanner);
    return () =>
      window.removeEventListener(
        COOKIE_CONSENT_SHOW_BANNER_EVENT,
        handleShowBanner
      );
  }, []);

  // Reset preferences panel when isVisible changes
  useEffect(() => {
    setShowPreferences(false);
  }, [isVisible]);

  if (!isVisible || temporarilyDismissed) {
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
    customizeButton:
      styles.customizeButton || COOKIE_CONSENT_BANNER_STYLES.customizeButton,
    link: styles.link || COOKIE_CONSENT_BANNER_STYLES.link,
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  return (
    <div className={mergedStyles.container} role="dialog" aria-live="polite">
      <button
        onClick={() => setTemporarilyDismissed(true)}
        className={COOKIE_CONSENT_BANNER_STYLES.closeButton}
        aria-label={closeButtonAriaLabel}
        type="button"
      >
        <CloseIcon className={COOKIE_CONSENT_BANNER_STYLES.closeIcon} />
      </button>
      <div
        className={clsx(
          mergedStyles.content,
          showPreferences
            ? COOKIE_CONSENT_BANNER_STYLES.contentWithPreferences
            : COOKIE_CONSENT_BANNER_STYLES.contentInner
        )}
      >
        {!showPreferences && (
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
        )}

        {!showPreferences && (
          <ConsentButtons
            acceptButtonText={acceptButtonText}
            rejectButtonText={rejectButtonText}
            customizeButtonText={customizeButtonText}
            onAcceptAll={acceptAll}
            onRejectAll={rejectAll}
            onCustomize={() => setShowPreferences(true)}
            styles={{
              buttonContainer: mergedStyles.buttonContainer,
              acceptButton: mergedStyles.acceptButton,
              rejectButton: mergedStyles.rejectButton,
              customizeButton: mergedStyles.customizeButton,
            }}
          />
        )}

        {showPreferences && (
          <CookiesPreferencesPanel
            preferencesTitle={preferencesTitle}
            savePreferencesButtonText={savePreferencesButtonText}
            categoriesGroupLabel={categoriesGroupLabel}
            message={message}
            categories={categories}
            preferences={preferences}
            onUpdatePreference={updatePreference}
            onSavePreferences={handleSavePreferences}
            buttonContainerStyle={mergedStyles.buttonContainer}
          />
        )}
      </div>
    </div>
  );
};
