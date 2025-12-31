import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useECommerceRouter } from '../../hooks';
import { E_COMMERCE_DEFAULT_LANGUAGES } from '../../shared';

// Create a QueryClient instance for TanStack Query
const queryClient = new QueryClient();

/**
 * Complete Example: eCommerce App with Routing
 *
 * This example demonstrates how to compose reusable components:
 * - useECommerceRouter hook for router configuration
 * - Container components (HomePageContainer, LoginPageContainer)
 * - React Router and TanStack Query integration
 */

// Main App with Routing
export const ECommerceExample = () => {
  const [currentLanguage, setCurrentLanguage] = useState(
    E_COMMERCE_DEFAULT_LANGUAGES[0]
  );

  const handleLanguageChange = (languageCode: string) => {
    const newLanguage = E_COMMERCE_DEFAULT_LANGUAGES.find(
      (lang) => lang.code === languageCode
    );
    if (newLanguage) {
      setCurrentLanguage(newLanguage);
    }
  };

  const router = useECommerceRouter({
    currentLanguage,
    onLanguageChange: handleLanguageChange,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider
        key={currentLanguage.code}
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </QueryClientProvider>
  );
};
