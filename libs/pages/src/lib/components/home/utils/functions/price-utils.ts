import type { ConvertedPrice } from '../../../../shared';

/**
 * Converts a price range string (e.g., "$249–$399") to the target currency
 * @param range - The price range string with an en dash separator
 * @param convertPrice - The price conversion function
 * @returns Converted price range string
 */
export const convertPriceRange = (
  range: string,
  convertPrice: (price: string) => ConvertedPrice
): string => {
  return range
    .split('–')
    .map((price) => convertPrice(price.trim()).converted)
    .join('–');
};
