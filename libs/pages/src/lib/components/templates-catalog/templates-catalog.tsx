import { useTemplatesCatalogLocale } from '../../shared';
import {
  LandingPageTemplate,
  TEMPLATES_CATALOG_STYLES,
  DEFAULT_TEMPLATES,
  TEMPLATE_CATEGORY_IDS,
  CategoryOption,
} from './utils';
import { useTemplateFiltering } from './hooks';
import {
  TemplatesCatalogHeader,
  TemplatesSearchBar,
  TemplatesCategoryFilters,
  TemplatesGrid,
  TemplatesCatalogCta,
} from './components';

export interface TemplatesCatalogProps {
  /**
   * Optional custom templates array
   */
  templates?: LandingPageTemplate[];
  /**
   * Optional callback when a template is clicked
   */
  onTemplateClick?: (templateId: string) => void;
}

export const TemplatesCatalog = ({
  templates = DEFAULT_TEMPLATES,
  onTemplateClick,
}: TemplatesCatalogProps) => {
  const { content, isRTL, locale } = useTemplatesCatalogLocale();
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredTemplates,
  } = useTemplateFiltering({ templates, content });

  const categories: readonly CategoryOption[] = [
    { id: TEMPLATE_CATEGORY_IDS.ALL, label: content.categories.all },
    { id: TEMPLATE_CATEGORY_IDS.SAAS, label: content.categories.saas },
    {
      id: TEMPLATE_CATEGORY_IDS.PORTFOLIO,
      label: content.categories.portfolio,
    },
    { id: TEMPLATE_CATEGORY_IDS.BUSINESS, label: content.categories.business },
    {
      id: TEMPLATE_CATEGORY_IDS.ECOMMERCE,
      label: content.categories.ecommerce,
    },
  ];

  const handleTemplateClick = (template: LandingPageTemplate) => {
    if (onTemplateClick) {
      onTemplateClick(template.id);
    }

    // Open template in new tab with current locale
    const url = new URL(template.previewUrl, window.location.origin);
    url.searchParams.set('locale', locale);
    window.open(url.toString(), '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={TEMPLATES_CATALOG_STYLES.container}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <TemplatesCatalogHeader
        title={content.title}
        subtitle={content.subtitle}
        isRTL={isRTL}
      />

      <div
        className={TEMPLATES_CATALOG_STYLES.header.container}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <TemplatesSearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder={content.searchPlaceholder}
          ariaLabel={content.searchAriaLabel}
          clearAriaLabel={content.clearAriaLabel}
        />

        <TemplatesCategoryFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <TemplatesGrid
        templates={filteredTemplates}
        onTemplateClick={handleTemplateClick}
        emptyStateText={content.emptyState}
        previewLabel={content.preview}
        isRTL={isRTL}
      />

      <TemplatesCatalogCta
        title={content.cta.title}
        description={content.cta.description}
        buttonText={content.cta.button}
        buttonHref="/#contact"
      />
    </div>
  );
};
