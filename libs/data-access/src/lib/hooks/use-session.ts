import { useQuery } from '@tanstack/react-query';
import { fetchSession, type User } from '../services';
import {
  SESSION_GC_TIME,
  SESSION_RETRY_COUNT,
  SESSION_STALE_TIME,
} from '../utils';
/**
 * Hook to fetch and manage user session state
 *
 * Uses TanStack Query for automatic caching, error handling, and background updates.
 * The session is cached for 5 minutes and automatically refetched when the window regains focus.
 *
 * @returns Object containing user data, loading state, and error state
 *
 * @example
 * ```tsx
 * const { user, isLoading, error } = useSession();
 *
 * if (isLoading) return <div>Loading...</div>;
 * if (error) return <div>Error loading session</div>;
 * if (user) return <div>Welcome, {user.name}!</div>;
 * return <div>Not logged in</div>;
 * ```
 */
export const useSession = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<User | null, Error>({
    queryKey: ['session'],
    queryFn: fetchSession,
    staleTime: SESSION_STALE_TIME,
    gcTime: SESSION_GC_TIME,
    retry: SESSION_RETRY_COUNT,
    // Refetch on window focus to catch auth changes
    refetchOnWindowFocus: true,
    // Don't refetch on mount if we have cached data
    refetchOnMount: false,
  });

  return {
    user: user ?? null,
    isLoading,
    error,
    isAuthenticated: !!user,
  };
};
