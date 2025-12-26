/**
 * Validates password format
 *
 * @param password - The password string to validate
 * @param minLength - Minimum required password length (default: 8)
 * @returns True if the password is valid, false otherwise
 */
export interface ValidatePasswordParams {
  password: string;
  minLength?: number;
}

export const validatePassword = ({
  password,
  minLength = 8,
}: ValidatePasswordParams): boolean => {
  if (!password) {
    return false;
  }
  return password.length >= minLength;
};
