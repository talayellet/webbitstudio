export const HTTP_HEADERS = {
  CONTENT_TYPE: 'Content-Type',
} as const;

export const CONTENT_TYPES = {
  JSON: 'application/json',
  FORM_DATA: 'multipart/form-data',
  FORM_URLENCODED: 'application/x-www-form-urlencoded',
} as const;

export type HttpHeader = (typeof HTTP_HEADERS)[keyof typeof HTTP_HEADERS];
export type ContentType = (typeof CONTENT_TYPES)[keyof typeof CONTENT_TYPES];
