export const ENDPOINTS = {
  EXCHANGE: {
    API_BASE_URL: 'https://api.exchangerate-api.com/v4/latest',
  },
  AUTH: {
    SESSION: 'http://localhost:3000/api/auth/session',
    SIGNOUT: 'http://localhost:3000/api/auth/signout',
    LOGIN: 'http://localhost:3000/api/auth/login',
    OAUTH: {
      GOOGLE: 'http://localhost:3000/auth/signin',
      SIGNOUT_PAGE: 'http://localhost:3000/auth/signout',
    },
    CALLBACK: {
      DEVELOPMENT: 'http://localhost:4300/',
      PRODUCTION: 'https://your-production-url.com/',
    },
  },
} as const;

export type Endpoint = (typeof ENDPOINTS)[keyof typeof ENDPOINTS];
