import { useEffect, useRef } from 'react';
import type { CookiePreferences } from '@webbitstudio/shared-utils';
import {
  COOKIE_CONSENT_BANNER_STYLES,
  COOKIE_CATEGORY_KEYS,
  COOKIE_CONSENT_DOM_IDS,
  type CookieCategoryInfo,
} from '../utils';
import { CookieCategoryItem } from './cookie-category-item';

export interface CookiesPreferencesPanelProps {
  /**
   * Title for preferences section
   */
  preferencesTitle: string;
  /**
   * Text for save preferences button
   */
  savePreferencesButtonText: string;
  /**
   * Accessible label for the cookie categories group.
   * Used by screen readers to announce the purpose of the grouped controls.
   */
  categoriesGroupLabel: string;
  /**
   * Cookie category information (labels and descriptions)
   */
  categories: {
    essential: CookieCategoryInfo;
    analytics: CookieCategoryInfo;
    marketing: CookieCategoryInfo;
  };
  /**
   * Current user preferences
   */
  preferences: CookiePreferences;
  /**
   * Callback to update a specific preference
   */
  onUpdatePreference: (
    category: keyof CookiePreferences,
    value: boolean
  ) => void;
  /**
   * Callback when user saves preferences
   */
  onSavePreferences: () => void;
  /**
   * Custom style for button container
   */
  buttonContainerStyle: string;
}

/**
 * Renders the preferences panel with all cookie categories
 */
export const CookiesPreferencesPanel = ({
  preferencesTitle,
  savePreferencesButtonText,
  categoriesGroupLabel,
  categories,
  preferences,
  onUpdatePreference,
  onSavePreferences,
  buttonContainerStyle,
}: CookiesPreferencesPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  // Focus management: move focus to panel when it opens
  useEffect(() => {
    if (panelRef.current) {
      panelRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={panelRef}
      className={COOKIE_CONSENT_BANNER_STYLES.preferencesContainer}
      role="region"
      aria-labelledby={COOKIE_CONSENT_DOM_IDS.PREFERENCES_TITLE}
      tabIndex={-1}
    >
      <h3
        id={COOKIE_CONSENT_DOM_IDS.PREFERENCES_TITLE}
        className={COOKIE_CONSENT_BANNER_STYLES.preferencesTitle}
      >
        {preferencesTitle}
      </h3>
      <div
        className={COOKIE_CONSENT_BANNER_STYLES.categoryContainer}
        role="group"
        aria-label={categoriesGroupLabel}
      >
        {/* Essential Cookies - Always enabled */}
        <CookieCategoryItem
          category={categories.essential}
          enabled={true}
          disabled={true}
          onChange={() => {
            // Essential cookies cannot be disabled
          }}
        />

        {/* Analytics Cookies */}
        <CookieCategoryItem
          category={categories.analytics}
          enabled={preferences.analytics}
          onChange={() =>
            onUpdatePreference(
              COOKIE_CATEGORY_KEYS.ANALYTICS,
              !preferences.analytics
            )
          }
        />

        {/* Marketing Cookies */}
        <CookieCategoryItem
          category={categories.marketing}
          enabled={preferences.marketing}
          onChange={() =>
            onUpdatePreference(
              COOKIE_CATEGORY_KEYS.MARKETING,
              !preferences.marketing
            )
          }
        />
      </div>

      <div className={buttonContainerStyle}>
        <button
          onClick={onSavePreferences}
          className={COOKIE_CONSENT_BANNER_STYLES.saveButton}
          type="button"
        >
          {savePreferencesButtonText}
        </button>
      </div>
    </div>
  );
};
