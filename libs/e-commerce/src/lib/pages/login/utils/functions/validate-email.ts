/**
 * Validates email format
 *
 * @param email - The email string to validate
 * @returns True if the email is valid, false otherwise
 */
export interface ValidateEmailParams {
  email: string;
}

export const validateEmail = ({ email }: ValidateEmailParams): boolean => {
  if (!email) {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
