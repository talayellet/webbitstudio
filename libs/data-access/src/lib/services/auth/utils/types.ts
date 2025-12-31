/**
 * User data structure
 */
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

/**
 * Session response from the auth API
 */
export interface SessionResponse {
  user: User | null;
}

/**
 * OAuth provider types
 */
export const OAUTH_PROVIDERS = {
  GOOGLE: 'google',
  FACEBOOK: 'facebook',
  APPLE: 'apple',
} as const;

export type OAuthProvider =
  (typeof OAUTH_PROVIDERS)[keyof typeof OAUTH_PROVIDERS];

/**
 * Login credentials
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Login response from the API
 */
export interface LoginResponse {
  success: boolean;
  user: User;
  message?: string;
}
