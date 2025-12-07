import { useMemo } from 'react';
import {
  COOKIE_CONSENT_BANNER_STYLES,
  COOKIE_CONSENT_DOM_IDS,
  type CookieCategoryInfo,
} from '../utils';
import { CustomToggle } from '../../custom-toggle';

export interface CookieCategoryItemProps {
  /**
   * Category information (label and description)
   */
  category: CookieCategoryInfo;
  /**
   * Whether this category is enabled
   */
  enabled: boolean;
  /**
   * Whether this category can be toggled (essential cookies cannot)
   */
  disabled?: boolean;
  /**
   * Callback when category state changes
   */
  onChange: () => void;
}

/**
 * Renders a single cookie category item with toggle
 */
export const CookieCategoryItem = ({
  category,
  enabled,
  disabled,
  onChange,
}: CookieCategoryItemProps) => {
  // Generate unique ID for accessibility association
  const labelId = useMemo(
    () =>
      `${COOKIE_CONSENT_DOM_IDS.CATEGORY_LABEL_PREFIX}-${category.label
        .toLowerCase()
        .replace(/\s+/g, '-')}`,
    [category.label]
  );

  return (
    <div className={COOKIE_CONSENT_BANNER_STYLES.categoryItem}>
      <div className={COOKIE_CONSENT_BANNER_STYLES.categoryContent}>
        <div
          id={labelId}
          className={COOKIE_CONSENT_BANNER_STYLES.categoryLabel}
        >
          {category.label}
        </div>
        <div className={COOKIE_CONSENT_BANNER_STYLES.categoryDescription}>
          {category.description}
        </div>
      </div>
      <CustomToggle
        enabled={enabled}
        disabled={disabled}
        onChange={onChange}
        ariaLabelledBy={labelId}
        styles={{
          container: COOKIE_CONSENT_BANNER_STYLES.toggle,
          containerEnabled: COOKIE_CONSENT_BANNER_STYLES.toggleEnabled,
          containerDisabled: COOKIE_CONSENT_BANNER_STYLES.toggleDisabled,
          button: COOKIE_CONSENT_BANNER_STYLES.toggleButton,
          buttonEnabled: COOKIE_CONSENT_BANNER_STYLES.toggleButtonEnabled,
          buttonDisabled: COOKIE_CONSENT_BANNER_STYLES.toggleButtonDisabled,
          disabledOpacity: COOKIE_CONSENT_BANNER_STYLES.toggleDisabledOpacity,
        }}
      />
    </div>
  );
};
