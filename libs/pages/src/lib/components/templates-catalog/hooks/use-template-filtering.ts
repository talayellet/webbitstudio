import { useState, useMemo } from 'react';
import {
  LandingPageTemplate,
  TEMPLATE_CATEGORY_IDS,
  TemplateCategoryId,
} from '../utils';

export interface UseTemplateFilteringParams {
  templates: LandingPageTemplate[];
  content: {
    templates: Record<
      string,
      {
        name: string;
        description: string;
        tags: string[];
      }
    >;
  };
}

export interface UseTemplateFilteringReturn {
  selectedCategory: TemplateCategoryId;
  setSelectedCategory: (category: TemplateCategoryId) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredTemplates: LandingPageTemplate[];
}

/**
 * Custom hook for managing template filtering logic
 * Handles localization, category filtering, and search functionality
 */
export const useTemplateFiltering = ({
  templates,
  content,
}: UseTemplateFilteringParams): UseTemplateFilteringReturn => {
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategoryId>(
    TEMPLATE_CATEGORY_IDS.ALL
  );
  const [searchQuery, setSearchQuery] = useState('');

  // Get localized template data
  const localizedTemplates = useMemo(
    () =>
      templates.map((template) => {
        const localizedTemplate =
          content.templates[template.id as keyof typeof content.templates];
        return {
          ...template,
          name: localizedTemplate?.name || template.name,
          description: localizedTemplate?.description || template.description,
          tags: localizedTemplate?.tags || template.tags,
        };
      }),
    [templates, content]
  );

  const filteredTemplates = useMemo(
    () =>
      localizedTemplates.filter((template) => {
        const matchesCategory =
          selectedCategory === TEMPLATE_CATEGORY_IDS.ALL ||
          template.category === selectedCategory;
        const matchesSearch =
          searchQuery === '' ||
          template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          template.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          template.tags.some((tag: string) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          );
        return matchesCategory && matchesSearch;
      }),
    [localizedTemplates, selectedCategory, searchQuery]
  );

  return {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredTemplates,
  };
};
