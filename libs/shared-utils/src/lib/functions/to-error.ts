/**
 * Convert unknown error to Error instance
 */
export const toError = (err: unknown): Error => {
  if (err instanceof Error) return err;
  return new Error(String(err));
};
