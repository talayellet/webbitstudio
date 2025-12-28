const BACKEND_URL =
  typeof import.meta !== 'undefined' && import.meta.env?.VITE_BACKEND_URL
    ? import.meta.env.VITE_BACKEND_URL
    : 'http://localhost:3000';

export const ENDPOINTS = {
  EXCHANGE: {
    API_BASE_URL: 'https://api.exchangerate-api.com/v4/latest',
  },
  AUTH: {
    SESSION: `${BACKEND_URL}/api/auth/session`,
    SIGNOUT: `${BACKEND_URL}/api/auth/signout`,
    LOGIN: `${BACKEND_URL}/api/auth/login`,
    OAUTH: {
      GOOGLE: `${BACKEND_URL}/auth/signin`,
      SIGNOUT_PAGE: `${BACKEND_URL}/auth/signout`,
    },
    CALLBACK: {
      DEVELOPMENT: 'http://localhost:4300',
      PRODUCTION: 'https://webbitstudio.com',
    },
  },
} as const;

export type Endpoint = (typeof ENDPOINTS)[keyof typeof ENDPOINTS];
