import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login, type LoginCredentials } from '@webbitstudio/data-access';

export interface UseLoginOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

/**
 * Hook for handling login with email and password
 *
 * Uses Tanstack Query's useMutation for proper loading/error states
 * and automatic session cache invalidation on successful login.
 *
 * @param options - Callbacks for success and error handling
 * @returns Mutation object with login function and state
 *
 * @example
 * ```tsx
 * const { mutate: loginUser, isPending, error } = useLogin({
 *   onSuccess: () => navigate('/dashboard'),
 *   onError: (error) => showToast(error.message)
 * });
 *
 * const handleSubmit = (email: string, password: string) => {
 *   loginUser({ email, password });
 * };
 * ```
 */
export const useLogin = ({ onSuccess, onError }: UseLoginOptions = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => login(credentials),
    onSuccess: (data) => {
      // Invalidate and refetch session to update auth state
      queryClient.invalidateQueries({ queryKey: ['session'] });
      onSuccess?.();
    },
    onError: (error: Error) => {
      onError?.(error);
    },
  });
};
