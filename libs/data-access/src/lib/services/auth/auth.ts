import { ENDPOINTS, HTTP_HEADERS, CONTENT_TYPES } from '../../utils';
import {
  LoginCredentials,
  LoginResponse,
  OAuthProvider,
  SessionResponse,
  User,
} from './utils';

/**
 * Fetch current user session from the backend
 *
 * @returns Promise resolving to user data or null if not authenticated
 * @throws Error if the API request fails
 */
export const fetchSession = async (): Promise<User | null> => {
  const response = await fetch(ENDPOINTS.AUTH.SESSION, {
    credentials: 'include', // Important: send cookies for session
  });

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  const data = (await response.json()) as SessionResponse;

  if (!data.user) {
    return null;
  }

  return {
    id: data.user.id,
    name: data.user.name,
    email: data.user.email,
    avatar: data.user.avatar,
  };
};

/**
 * Login with email and password
 *
 * @param credentials - Email and password
 * @returns Promise resolving to login response with user data
 * @throws Error if login fails
 */
export const login = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  const response = await fetch(ENDPOINTS.AUTH.LOGIN, {
    method: 'POST',
    headers: {
      [HTTP_HEADERS.CONTENT_TYPE]: CONTENT_TYPES.JSON,
    },
    credentials: 'include',
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  return response.json() as Promise<LoginResponse>;
};

/**
 * Initiate OAuth login flow
 *
 * @param provider - OAuth provider (google, facebook, apple)
 * @param callbackUrl - URL to redirect after successful authentication
 */
export const initiateOAuthLogin = (
  provider: OAuthProvider,
  callbackUrl: string
): void => {
  const encodedCallback = encodeURIComponent(callbackUrl);
  const authUrl = `${ENDPOINTS.AUTH.OAUTH.GOOGLE}?callbackUrl=${encodedCallback}`;
  window.location.href = authUrl;
};
