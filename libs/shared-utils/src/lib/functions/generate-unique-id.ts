/**
 * Generates a unique ID for accessibility attributes
 * @param prefix - Optional prefix for the generated ID (default: 'component')
 * @returns A unique ID string
 */
export const generateUniqueId = (prefix = 'component'): string => {
  return `${prefix}-${Math.random().toString(36).substring(2, 11)}`;
};
