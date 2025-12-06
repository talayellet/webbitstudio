export const COOKIES_CONSENT_VALUE = {
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
} as const;

export type ConsentValue =
  | (typeof COOKIES_CONSENT_VALUE)[keyof typeof COOKIES_CONSENT_VALUE]
  | null;
