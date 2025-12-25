import { useCallback, memo } from 'react';
import { KEYBOARD_KEYS } from '@webbitstudio/shared-utils';
import { HOME_PAGE_STYLES, ShoppingCategory } from '../../utils';

/**
 * Category Card Component
 *
 * Displays a clickable category card with image, name, and description.
 * Supports both mouse and keyboard interactions for accessibility.
 */
export interface CategoryCardProps {
  /** Category data to display */
  category: ShoppingCategory;
  /** Callback when category is clicked */
  onCategoryClick?: (categoryId: string) => void;
}

const CategoryCardComponent = ({
  category,
  onCategoryClick,
}: CategoryCardProps) => {
  const handleClick = useCallback(() => {
    onCategoryClick?.(category.id);
  }, [onCategoryClick, category.id]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === KEYBOARD_KEYS.ENTER || e.key === KEYBOARD_KEYS.SPACE) {
        e.preventDefault();
        onCategoryClick?.(category.id);
      }
    },
    [onCategoryClick, category.id]
  );

  return (
    <div
      className={HOME_PAGE_STYLES.CATEGORY_CARD}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className={HOME_PAGE_STYLES.CATEGORY_IMAGE_CONTAINER}>
        <img
          src={category.imageUrl}
          alt={category.name}
          className={HOME_PAGE_STYLES.CATEGORY_IMAGE}
        />
      </div>
      <div className={HOME_PAGE_STYLES.CATEGORY_CONTENT}>
        <h2 className={HOME_PAGE_STYLES.CATEGORY_NAME}>{category.name}</h2>
        <p className={HOME_PAGE_STYLES.CATEGORY_DESCRIPTION}>
          {category.description}
        </p>
      </div>
    </div>
  );
};

export const CategoryCard = memo(CategoryCardComponent);
