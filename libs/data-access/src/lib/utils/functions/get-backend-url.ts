/**
 * Gets the backend URL from environment variables
 * Falls back to localhost for development
 */
export const getBackendUrl = (): string => {
  if (typeof import.meta === 'undefined') {
    return 'http://localhost:3000';
  }

  const meta = import.meta as unknown as {
    env?: { VITE_BACKEND_URL?: string };
  };
  return meta.env?.VITE_BACKEND_URL ?? 'http://localhost:3000';
};
