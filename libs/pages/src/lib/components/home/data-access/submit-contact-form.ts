import {
  API_ENDPOINTS,
  HTTP_METHODS,
  HTTP_HEADERS,
  CONTENT_TYPES,
} from '@webbitstudio/shared';
import { sanitizeFormData } from '@webbitstudio/shared-utils';
import type {
  ContactFormData,
  ContactFormErrorMessages,
} from '../../../shared';

export interface SubmitContactFormDataAccessProps {
  data: ContactFormData;
  errorMessages: ContactFormErrorMessages;
  web3formsAccessKey?: string;
  apiEndpoint?: string;
}

export const submitContactFormDataAccess = async ({
  data,
  errorMessages,
  web3formsAccessKey,
  apiEndpoint,
}: SubmitContactFormDataAccessProps): Promise<void> => {
  // Sanitize inputs before submission to prevent XSS attacks
  const sanitizedData = sanitizeFormData({
    data,
    emailFields: ['email'],
    textAreaFields: ['details'],
  });

  let response: Response;

  // Use Web3Forms if access key is provided
  if (web3formsAccessKey) {
    const formData = new FormData();
    formData.append('access_key', web3formsAccessKey);
    formData.append('name', sanitizedData.name);
    formData.append('email', sanitizedData.email);
    if (sanitizedData.country)
      formData.append('country', sanitizedData.country);
    if (sanitizedData.package)
      formData.append('package', sanitizedData.package);
    if (sanitizedData.details)
      formData.append('details', sanitizedData.details);

    response = await fetch(API_ENDPOINTS.WEB3FORMS, {
      method: HTTP_METHODS.POST,
      body: formData,
    });
  } else {
    // Fall back to custom backend API
    response = await fetch(apiEndpoint || API_ENDPOINTS.CONTACT, {
      method: HTTP_METHODS.POST,
      headers: {
        [HTTP_HEADERS.CONTENT_TYPE]: CONTENT_TYPES.JSON,
      },
      body: JSON.stringify(sanitizedData),
    });
  }

  let result;
  try {
    result = await response.json();
  } catch {
    // Handle non-JSON responses (e.g., HTML error pages)
    result = { error: errorMessages.serverError };
  }

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error(errorMessages.rateLimitError);
    } else {
      throw new Error(
        result.error || result.message || errorMessages.submissionFailed
      );
    }
  }
};
