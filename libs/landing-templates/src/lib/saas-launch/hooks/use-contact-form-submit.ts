import { useMutation } from '@tanstack/react-query';
import { API_ENDPOINTS } from '@webbitstudio/shared';
import { ContactFormData, ContactFormErrorMessages } from '../utils';
import { submitContactFormDataAccess } from '../data-access/submit-contact-form';

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
   * Success message to display after successful submission
   */
  successMessage: string;
  /**
   * Callback to reset the form after successful submission
   */
  onSuccess?: () => void;
  /**
   * Localized error messages for form submission
   */
  errorMessages: ContactFormErrorMessages;
}

export const useContactFormSubmit = ({
  web3formsAccessKey,
  apiEndpoint = API_ENDPOINTS.CONTACT,
  onSubmit,
  successMessage,
  onSuccess,
  errorMessages,
}: UseContactFormSubmitProps) => {
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
      alert(successMessage);
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
