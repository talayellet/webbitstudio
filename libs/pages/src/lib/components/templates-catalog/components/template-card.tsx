import clsx from 'clsx';
import {
  ImagePlaceholderIcon,
  ExternalLinkIcon,
} from '@webbitstudio/ui-components';
import { LandingPageTemplate, TEMPLATES_CATALOG_STYLES } from '../utils';

export interface TemplateCardProps {
  /**
   * Template data to display
   */
  template: LandingPageTemplate;
  /**
   * Callback when the card is clicked
   */
  onClick: (template: LandingPageTemplate) => void;
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
 * Individual template card displaying thumbnail, details, and tags
 */
export const TemplateCard = ({
  template,
  onClick,
  previewLabel,
  isRTL,
}: TemplateCardProps) => {
  return (
    <button
      onClick={() => onClick(template)}
      className={clsx(
        TEMPLATES_CATALOG_STYLES.card.button,
        isRTL ? 'text-right' : 'text-left'
      )}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Thumbnail */}
      <div className={TEMPLATES_CATALOG_STYLES.card.thumbnail.wrapper}>
        <div className={TEMPLATES_CATALOG_STYLES.card.thumbnail.gradient} />
        {/* Placeholder for actual thumbnail */}
        <div className={TEMPLATES_CATALOG_STYLES.card.thumbnail.placeholder}>
          <ImagePlaceholderIcon
            className={TEMPLATES_CATALOG_STYLES.card.thumbnail.icon}
          />
        </div>
        {/* Hover overlay */}
        <div className={TEMPLATES_CATALOG_STYLES.card.thumbnail.overlay}>
          <span
            className={clsx(
              TEMPLATES_CATALOG_STYLES.card.thumbnail.badge,
              isRTL && 'flex-row-reverse'
            )}
          >
            {previewLabel}
            <ExternalLinkIcon
              className={TEMPLATES_CATALOG_STYLES.card.thumbnail.badgeIcon}
            />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={TEMPLATES_CATALOG_STYLES.card.content.wrapper}>
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
              className={TEMPLATES_CATALOG_STYLES.card.content.tags.tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};
