import { createBrowserRouter } from 'react-router-dom';
import { Language } from '../pages/home/utils';
import { HomePageContainer } from '../pages/home/home-page-container';
import { LoginPageContainer } from '../pages/login/login-page-container';
import { E_COMMERCE_ROUTES, getLocaleForLanguage } from '../shared';

export interface UseECommerceRouterOptions {
  currentLanguage: Language;
  onLanguageChange: (languageCode: string) => void;
}

/**
 * Custom hook for creating eCommerce router with all routes configured.
 *
 * This hook manages the router configuration for the eCommerce app,
 * including all routes and their respective containers.
 * The router is memoized and only recreates when the current language changes.
 *
 * @example
 * ```tsx
 * const router = useECommerceRouter({
 *   currentLanguage,
 *   onLanguageChange: handleLanguageChange
 * });
 *
 * return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
 * ```
 */
export const useECommerceRouter = ({
  currentLanguage,
  onLanguageChange,
}: UseECommerceRouterOptions) => {
  const locale = getLocaleForLanguage(currentLanguage.code);

  return createBrowserRouter(
    [
      {
        path: E_COMMERCE_ROUTES.HOME,
        element: (
          <HomePageContainer
            key={currentLanguage.code}
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />
        ),
        errorElement: <div>{locale.ROUTER.ERROR_LOADING_HOME}</div>,
      },
      {
        path: E_COMMERCE_ROUTES.LOGIN,
        element: (
          <LoginPageContainer
            key={currentLanguage.code}
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />
        ),
        errorElement: <div>{locale.ROUTER.ERROR_LOADING_LOGIN}</div>,
      },
      {
        path: E_COMMERCE_ROUTES.SIGNUP,
        element: <div>{locale.ROUTER.SIGNUP_PAGE_PLACEHOLDER}</div>,
      },
      {
        path: E_COMMERCE_ROUTES.CART,
        element: <div>{locale.ROUTER.CART_PAGE_PLACEHOLDER}</div>,
      },
      {
        path: E_COMMERCE_ROUTES.FORGOT_PASSWORD,
        element: <div>{locale.ROUTER.FORGOT_PASSWORD_PAGE_PLACEHOLDER}</div>,
      },
      {
        path: `${E_COMMERCE_ROUTES.CATEGORY}/:id`,
        element: <div>{locale.ROUTER.CATEGORY_PAGE_PLACEHOLDER}</div>,
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_fetcherPersist: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );
};
