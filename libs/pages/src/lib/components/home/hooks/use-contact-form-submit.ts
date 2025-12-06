import { useMutation } from '@tanstack/react-query';
import { API_ENDPOINTS } from '@webbitstudio/shared';
import type {
  ContactFormData,
  ContactFormErrorMessages,
} from '../../../shared';
import { submitContactFormDataAccess } from '../data-access';

export interface UseContactFormSubmitProps {
  /**
   * Web3Forms access key (get free key at https://web3forms.com)
   * If not provided, falls back to apiEndpoint for custom backend
   */
  web3formsAccessKey?: string;
  /**
   * Custom API endpoint (only used if web3formsAccessKey is not provided)
   * @default API_ENDPOINTS.CONTACT
   */
  apiEndpoint?: string;
  /**
   * Custom submit handler that bypasses the default submission logic
   */
  onSubmit?: (data: ContactFormData) => void;
  /**
   * Callback to show success toast after successful submission
   */
  onShowToast?: () => void;
  /**
   * Callback to reset the form after successful submission
   */
  onSuccess?: () => void;
  /**
   * Localized error messages for form submission
   */
  errorMessages: ContactFormErrorMessages;
}

export interface UseContactFormSubmitResponse {
  /**
   * Function to trigger form submission
   */
  mutate: (data: ContactFormData) => void;
  /**
   * Whether the form is currently being submitted
   */
  isSubmitting: boolean;
  /**
   * Error message from submission failure, or null if no error
   */
  submitError: string | null;
  /**
   * Full error object from submission failure
   */
  error: Error | null;
}

export const useContactFormSubmit = ({
  web3formsAccessKey,
  apiEndpoint = API_ENDPOINTS.CONTACT,
  onSubmit,
  onShowToast,
  onSuccess,
  errorMessages,
}: UseContactFormSubmitProps): UseContactFormSubmitResponse => {
  const mutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      if (onSubmit) {
        onSubmit(data);
        return Promise.resolve();
      }
      return submitContactFormDataAccess({
        data,
        errorMessages,
        web3formsAccessKey,
        apiEndpoint,
      });
    },
    onSuccess: () => {
      onShowToast?.();
      onSuccess?.();
    },
  });

  return {
    mutate: mutation.mutate,
    isSubmitting: mutation.isPending,
    submitError: mutation.error?.message || null,
    error: mutation.error,
  };
};
