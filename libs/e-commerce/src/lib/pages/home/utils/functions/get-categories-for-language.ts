import { ShoppingCategory } from '../../../../shared';
import {
  ENGLISH_CATEGORIES,
  HEBREW_CATEGORIES,
  SPANISH_CATEGORIES,
} from '../../../../locale';

// Helper function to get categories based on language code
export const getCategoriesForLanguage = (
  languageCode: string
): ShoppingCategory[] => {
  switch (languageCode) {
    case 'es':
      return SPANISH_CATEGORIES;
    case 'he':
      return HEBREW_CATEGORIES;
    default:
      return ENGLISH_CATEGORIES;
  }
};
