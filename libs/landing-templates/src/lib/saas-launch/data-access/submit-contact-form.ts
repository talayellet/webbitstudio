import {
  API_ENDPOINTS,
  HTTP_METHODS,
  HTTP_HEADERS,
  CONTENT_TYPES,
} from '@webbitstudio/shared';
import { ContactFormData, ContactFormErrorMessages } from '../utils';

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
  let response: Response;

  // Use Web3Forms if access key is provided
  if (web3formsAccessKey) {
    const formData = new FormData();
    formData.append('access_key', web3formsAccessKey);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);

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
      body: JSON.stringify(data),
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
