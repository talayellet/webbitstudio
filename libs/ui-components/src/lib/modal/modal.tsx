import { useRef } from 'react';
import {
  DEFAULT_LANGUAGE,
  useEscapeKey,
  useFocusTrap,
} from '@webbitstudio/shared-utils';
import { MODAL_STYLES, getModalLocaleStrings } from './utils';
import { CloseIcon } from '../svg-icons';

export interface ModalProps {
  /**
   * Whether the modal is open
   */
  isOpen: boolean;
  /**
   * Callback when the modal is closed
   */
  onClose: () => void;
  /**
   * The content to render inside the modal
   */
  children: React.ReactNode;
  /**
   * Aria label for the modal dialog
   */
  ariaLabel?: string;
  /**
   * Aria label for the close button
   */
  closeButtonAriaLabel?: string;
  /**
   * Locale for default strings (used if ariaLabel/closeButtonAriaLabel not provided)
   * @default DEFAULT_LANGUAGE
   */
  locale?: string;
  /**
   * Custom styles
   */
  styles?: {
    overlay?: string;
    modal?: string;
    header?: string;
    closeButton?: string;
    closeIcon?: string;
    closeText?: string;
    content?: string;
  };
}

/**
 * Modal component
 *
 * A generic modal dialog with overlay, close button, and proper accessibility
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   ariaLabel="Privacy Policy"
 * >
 *   <YourContent />
 * </Modal>
 * ```
 */
export const Modal = ({
  isOpen,
  onClose,
  children,
  ariaLabel,
  closeButtonAriaLabel,
  locale = DEFAULT_LANGUAGE,
  styles = {},
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const localeStrings = getModalLocaleStrings(locale);
  const finalAriaLabel = ariaLabel || localeStrings.ariaLabel;
  const finalCloseButtonAriaLabel =
    closeButtonAriaLabel || localeStrings.closeButtonAriaLabel;

  // Handle Escape key and focus management
  useEscapeKey(onClose, isOpen);
  useFocusTrap(isOpen, modalRef);

  if (!isOpen) return null;

  const mergedStyles = {
    overlay: styles.overlay || MODAL_STYLES.overlay,
    modal: styles.modal || MODAL_STYLES.modal,
    header: styles.header || MODAL_STYLES.header,
    closeButton: styles.closeButton || MODAL_STYLES.closeButton,
    closeIcon: styles.closeIcon || MODAL_STYLES.closeIcon,
    closeText: styles.closeText || MODAL_STYLES.closeText,
    content: styles.content || MODAL_STYLES.content,
  };

  return (
    <div
      className={mergedStyles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={finalAriaLabel}
    >
      <div
        ref={modalRef}
        className={mergedStyles.modal}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className={mergedStyles.header}>
          <button
            onClick={onClose}
            className={mergedStyles.closeButton}
            aria-label={finalCloseButtonAriaLabel}
            type="button"
          >
            <CloseIcon className={mergedStyles.closeIcon} />
            <span className={mergedStyles.closeText}>
              {finalCloseButtonAriaLabel}
            </span>
          </button>
        </div>
        <div className={mergedStyles.content}>{children}</div>
      </div>
    </div>
  );
};
