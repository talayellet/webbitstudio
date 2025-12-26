import { HOME_PAGE_STYLES } from '../../utils';
import { CategoryCard } from './category-card';
import { HomePageLocale, ShoppingCategory } from '../../../../shared';

/**
 * Main content section for the eCommerce home page
 *
 * Displays the shopping categories grid with clickable category cards
 */
export interface MainProps {
  /** Available shopping categories */
  categories: ShoppingCategory[];
  /** Localized text content */
  locale: Pick<HomePageLocale, 'SHOP_BY_CATEGORY'>;
  /** Callback when category is clicked */
  onCategoryClick?: (categoryId: string) => void;
}

export const Main = ({ categories, locale, onCategoryClick }: MainProps) => {
  return (
    <main className={HOME_PAGE_STYLES.MAIN_CONTENT}>
      {/* Categories Section */}
      <section className={HOME_PAGE_STYLES.CATEGORIES_SECTION}>
        <h1 className={HOME_PAGE_STYLES.CATEGORIES_TITLE}>
          {locale.SHOP_BY_CATEGORY}
        </h1>
        <div className={HOME_PAGE_STYLES.CATEGORIES_GRID}>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onCategoryClick={onCategoryClick}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
