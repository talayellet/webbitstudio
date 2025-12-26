import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '@webbitstudio/data-access';
import { E_COMMERCE_ROUTES } from '../shared';

/**
 * Return type for useECommerceNavigation hook
 */
export interface UseECommerceNavigationResponse {
  handleLogin: () => void;
  handleSignup: () => void;
  handleCartClick: () => void;
  handleCategoryClick: (categoryId: string) => void;
  handleLogout: () => void;
}

/**
 * Hook for e-commerce navigation actions
 *
 * Provides navigation handlers for common e-commerce routes and actions.
 * Uses React Router's useNavigate hook for client-side navigation and
 * handles external redirects for auth endpoints.
 *
 * @returns Object containing navigation handler functions
 *
 * @example
 * ```tsx
 * const { handleLogin, handleLogout, handleCartClick } = useECommerceNavigation();
 *
 * <button onClick={handleLogin}>Login</button>
 * <button onClick={handleLogout}>Logout</button>
 * <button onClick={handleCartClick}>Cart</button>
 * ```
 */
export const useECommerceNavigation = (): UseECommerceNavigationResponse => {
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    navigate(E_COMMERCE_ROUTES.LOGIN);
  }, [navigate]);

  const handleSignup = useCallback(() => {
    navigate(E_COMMERCE_ROUTES.SIGNUP);
  }, [navigate]);

  const handleCartClick = useCallback(() => {
    navigate(E_COMMERCE_ROUTES.CART);
  }, [navigate]);

  const handleCategoryClick = useCallback(
    (categoryId: string) => {
      navigate(`${E_COMMERCE_ROUTES.CATEGORY}/${categoryId}`);
    },
    [navigate]
  );

  const handleLogout = useCallback(() => {
    // Redirect to NextAuth signout endpoint with callback to frontend
    const callbackUrl = encodeURIComponent(window.location.origin);
    window.location.href = `${ENDPOINTS.AUTH.OAUTH.SIGNOUT_PAGE}?callbackUrl=${callbackUrl}`;
  }, []);

  return {
    handleLogin,
    handleSignup,
    handleCartClick,
    handleCategoryClick,
    handleLogout,
  };
};
