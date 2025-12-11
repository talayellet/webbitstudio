import clsx from 'clsx';
import {
  ImagePlaceholderIcon,
  ExternalLinkIcon,
} from '@webbitstudio/ui-components';
import { useTemplatesCatalogLocale } from '../../shared';
import {
  LandingPageTemplate,
  TEMPLATES_CATALOG_STYLES,
  PLACEHOLDER_TEMPLATES,
  TEMPLATE_CATEGORY_IDS,
} from './utils';
import { useTemplateFiltering } from './hooks';

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
  templates = PLACEHOLDER_TEMPLATES,
  onTemplateClick,
}: TemplatesCatalogProps) => {
  const { content, isRTL } = useTemplatesCatalogLocale();
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredTemplates,
  } = useTemplateFiltering({ templates, content });

  const categories = [
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
  ] as const;

  const handleTemplateClick = (template: LandingPageTemplate) => {
    if (onTemplateClick) {
      onTemplateClick(template.id);
    }
    window.open(template.previewUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={TEMPLATES_CATALOG_STYLES.container}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header Section */}
      <div className={TEMPLATES_CATALOG_STYLES.header.wrapper}>
        <div className={TEMPLATES_CATALOG_STYLES.header.container}>
          <div className={TEMPLATES_CATALOG_STYLES.header.content}>
            <h1 className={TEMPLATES_CATALOG_STYLES.header.title}>
              {content.title}
            </h1>
            <p className={TEMPLATES_CATALOG_STYLES.header.subtitle}>
              {content.subtitle}
            </p>
          </div>

          {/* Search Bar */}
          <div className={TEMPLATES_CATALOG_STYLES.search.wrapper}>
            <div className={TEMPLATES_CATALOG_STYLES.search.container}>
              <input
                type="text"
                placeholder={content.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={TEMPLATES_CATALOG_STYLES.search.input}
                aria-label={content.searchAriaLabel}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className={TEMPLATES_CATALOG_STYLES.categories.wrapper}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={clsx(
                  TEMPLATES_CATALOG_STYLES.categories.button.base,
                  selectedCategory === category.id
                    ? TEMPLATES_CATALOG_STYLES.categories.button.active
                    : TEMPLATES_CATALOG_STYLES.categories.button.inactive
                )}
                aria-pressed={selectedCategory === category.id}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className={TEMPLATES_CATALOG_STYLES.templates.container}>
        {filteredTemplates.length === 0 ? (
          <div className={TEMPLATES_CATALOG_STYLES.templates.emptyState}>
            <p className={TEMPLATES_CATALOG_STYLES.templates.emptyText}>
              {content.emptyState}
            </p>
          </div>
        ) : (
          <div className={TEMPLATES_CATALOG_STYLES.templates.grid}>
            {filteredTemplates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleTemplateClick(template)}
                className={TEMPLATES_CATALOG_STYLES.card.button}
              >
                {/* Thumbnail */}
                <div
                  className={TEMPLATES_CATALOG_STYLES.card.thumbnail.wrapper}
                >
                  <div
                    className={TEMPLATES_CATALOG_STYLES.card.thumbnail.gradient}
                  />
                  {/* Placeholder for actual thumbnail */}
                  <div
                    className={
                      TEMPLATES_CATALOG_STYLES.card.thumbnail.placeholder
                    }
                  >
                    <ImagePlaceholderIcon
                      className={TEMPLATES_CATALOG_STYLES.card.thumbnail.icon}
                    />
                  </div>
                  {/* Hover overlay */}
                  <div
                    className={TEMPLATES_CATALOG_STYLES.card.thumbnail.overlay}
                  >
                    <span
                      className={TEMPLATES_CATALOG_STYLES.card.thumbnail.badge}
                    >
                      {content.preview}
                      <ExternalLinkIcon
                        className={
                          TEMPLATES_CATALOG_STYLES.card.thumbnail.badgeIcon
                        }
                      />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={TEMPLATES_CATALOG_STYLES.card.content.wrapper}
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  <h3
                    className={clsx(
                      TEMPLATES_CATALOG_STYLES.card.content.title,
                      isRTL ? 'text-right' : 'text-left'
                    )}
                  >
                    {template.name}
                  </h3>
                  <p
                    className={clsx(
                      TEMPLATES_CATALOG_STYLES.card.content.description,
                      isRTL ? 'text-right' : 'text-left'
                    )}
                  >
                    {template.description}
                  </p>

                  {/* Tags */}
                  <div
                    className={clsx(
                      TEMPLATES_CATALOG_STYLES.card.content.tags.wrapper,
                      isRTL ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {template.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className={
                          TEMPLATES_CATALOG_STYLES.card.content.tags.tag
                        }
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className={TEMPLATES_CATALOG_STYLES.cta.wrapper}>
        <div className={TEMPLATES_CATALOG_STYLES.cta.container}>
          <h2 className={TEMPLATES_CATALOG_STYLES.cta.title}>
            {content.cta.title}
          </h2>
          <p className={TEMPLATES_CATALOG_STYLES.cta.description}>
            {content.cta.description}
          </p>
          <a href="/#contact" className={TEMPLATES_CATALOG_STYLES.cta.button}>
            {content.cta.button}
          </a>
        </div>
      </div>
    </div>
  );
};
