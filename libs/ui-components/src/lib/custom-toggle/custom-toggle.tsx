import clsx from 'clsx';
import { TOGGLE_STYLES } from './utils';

export interface CustomToggleProps {
  /**
   * Whether the toggle is enabled
   */
  enabled: boolean;
  /**
   * Whether the toggle is disabled (cannot be changed)
   */
  disabled?: boolean;
  /**
   * Callback when toggle state changes
   */
  onChange: () => void;
  /**
   * Optional accessible label for the toggle.
   * If not provided, the component should be used within a properly labeled context.
   */
  ariaLabel?: string;
  /**
   * Optional ID reference to label the toggle.
   * Takes precedence over ariaLabel when both are provided.
   */
  ariaLabelledBy?: string;
  /**
   * Custom styles to override default styles
   */
  styles?: {
    container?: string;
    containerEnabled?: string;
    containerDisabled?: string;
    button?: string;
    buttonEnabled?: string;
    buttonDisabled?: string;
    disabledOpacity?: string;
  };
}

/**
 * Reusable toggle switch component with accessibility support
 */
export const CustomToggle = ({
  enabled,
  disabled,
  onChange,
  ariaLabel,
  ariaLabelledBy,
  styles = {},
}: CustomToggleProps) => {
  const mergedStyles = {
    container: styles.container || TOGGLE_STYLES.container,
    containerEnabled: styles.containerEnabled || TOGGLE_STYLES.containerEnabled,
    containerDisabled:
      styles.containerDisabled || TOGGLE_STYLES.containerDisabled,
    button: styles.button || TOGGLE_STYLES.button,
    buttonEnabled: styles.buttonEnabled || TOGGLE_STYLES.buttonEnabled,
    buttonDisabled: styles.buttonDisabled || TOGGLE_STYLES.buttonDisabled,
    disabledOpacity: styles.disabledOpacity || TOGGLE_STYLES.disabledOpacity,
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabelledBy ? undefined : ariaLabel}
      aria-readonly={disabled}
      disabled={disabled}
      onClick={onChange}
      className={clsx(
        mergedStyles.container,
        enabled
          ? mergedStyles.containerEnabled
          : mergedStyles.containerDisabled,
        disabled && mergedStyles.disabledOpacity
      )}
    >
      <span
        className={clsx(
          mergedStyles.button,
          enabled ? mergedStyles.buttonEnabled : mergedStyles.buttonDisabled
        )}
      />
    </button>
  );
};
