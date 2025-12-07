export interface ConsentButtonsProps {
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
   * Callback when user accepts all cookies
   */
  onAcceptAll: () => void;
  /**
   * Callback when user rejects all cookies
   */
  onRejectAll: () => void;
  /**
   * Callback when user wants to customize preferences
   */
  onCustomize: () => void;
  /**
   * Custom styles for buttons and container
   */
  styles: {
    buttonContainer: string;
    acceptButton: string;
    rejectButton: string;
    customizeButton: string;
  };
}

/**
 * Renders the initial consent action buttons (accept/reject/customize)
 */
export const ConsentButtons = ({
  acceptButtonText,
  rejectButtonText,
  customizeButtonText,
  onAcceptAll,
  onRejectAll,
  onCustomize,
  styles,
}: ConsentButtonsProps) => (
  <div className={styles.buttonContainer}>
    <button onClick={onRejectAll} className={styles.rejectButton} type="button">
      {rejectButtonText}
    </button>
    <button
      onClick={onCustomize}
      className={styles.customizeButton}
      type="button"
    >
      {customizeButtonText}
    </button>
    <button onClick={onAcceptAll} className={styles.acceptButton} type="button">
      {acceptButtonText}
    </button>
  </div>
);
