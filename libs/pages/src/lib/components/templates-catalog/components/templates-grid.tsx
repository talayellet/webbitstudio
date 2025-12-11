import { LandingPageTemplate, TEMPLATES_CATALOG_STYLES } from '../utils';
import { TemplateCard } from './template-card';

export interface TemplatesGridProps {
  /**
   * Array of templates to display
   */
  templates: LandingPageTemplate[];
  /**
   * Callback when a template is clicked
   */
  onTemplateClick: (template: LandingPageTemplate) => void;
  /**
   * Text to display when no templates are found
   */
  emptyStateText: string;
  /**
   * Preview button label text
   */
  previewLabel: string;
  /**
   * Whether the content should be displayed right-to-left
   */
  isRTL: boolean;
}

/**
 * Grid layout for displaying template cards with empty state
 */
export const TemplatesGrid = ({
  templates,
  onTemplateClick,
  emptyStateText,
  previewLabel,
  isRTL,
}: TemplatesGridProps) => {
  return (
    <div
      className={TEMPLATES_CATALOG_STYLES.templates.container}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {templates.length === 0 ? (
        <div className={TEMPLATES_CATALOG_STYLES.templates.emptyState}>
          <p className={TEMPLATES_CATALOG_STYLES.templates.emptyText}>
            {emptyStateText}
          </p>
        </div>
      ) : (
        <div className={TEMPLATES_CATALOG_STYLES.templates.grid}>
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onClick={onTemplateClick}
              previewLabel={previewLabel}
              isRTL={isRTL}
            />
          ))}
        </div>
      )}
    </div>
  );
};
