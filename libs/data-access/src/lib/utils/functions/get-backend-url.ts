declare const __BACKEND_URL__: string;

/**
 * Gets the backend URL from environment variables
 * Falls back to localhost for development
 */
export const getBackendUrl = (): string => {
  // Vite environment (frontend)
  if (typeof __BACKEND_URL__ !== 'undefined') {
    return __BACKEND_URL__;
  }
  
  // Next.js/Node environment (backend/SSR)
  // The backend doesn't need to call itself
  return 'http://localhost:3000';
};
