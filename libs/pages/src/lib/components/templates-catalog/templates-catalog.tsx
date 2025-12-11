import { useState } from 'react';

/**
 * Template catalog data structure
 */
interface Template {
  id: string;
  name: string;
  description: string;
  category: 'saas' | 'portfolio' | 'business' | 'ecommerce';
  thumbnailUrl: string;
  previewUrl: string;
  tags: string[];
}

/**
 * Mock template data - replace with actual templates
 */
const TEMPLATES: Template[] = [
  {
    id: 'saas-launch',
    name: 'SaaS Launch',
    description:
      'Modern SaaS landing page with pricing tables and feature showcases',
    category: 'saas',
    thumbnailUrl: '/templates/saas-launch-thumb.jpg',
    previewUrl: '/templates/saas-launch',
    tags: ['Modern', 'Pricing', 'Features'],
  },
  {
    id: 'portfolio-creative',
    name: 'Creative Portfolio',
    description:
      'Showcase your work with elegant galleries and smooth animations',
    category: 'portfolio',
    thumbnailUrl: '/templates/portfolio-creative-thumb.jpg',
    previewUrl: '/templates/portfolio-creative',
    tags: ['Creative', 'Gallery', 'Minimal'],
  },
  {
    id: 'business-pro',
    name: 'Business Pro',
    description:
      'Professional business website with services and contact sections',
    category: 'business',
    thumbnailUrl: '/templates/business-pro-thumb.jpg',
    previewUrl: '/templates/business-pro',
    tags: ['Professional', 'Services', 'Contact'],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Templates' },
  { id: 'saas', label: 'SaaS' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'business', label: 'Business' },
  { id: 'ecommerce', label: 'E-commerce' },
] as const;

export interface TemplatesCatalogProps {
  /**
   * Optional custom templates array
   */
  templates?: Template[];
  /**
   * Optional callback when a template is clicked
   */
  onTemplateClick?: (templateId: string) => void;
}

export const TemplatesCatalog = ({
  templates = TEMPLATES,
  onTemplateClick,
}: TemplatesCatalogProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory =
      selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const handleTemplateClick = (template: Template) => {
    if (onTemplateClick) {
      onTemplateClick(template.id);
    }
    window.open(template.previewUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header Section */}
      <div className="border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
              Landing Page Templates
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Choose from our collection of professionally designed templates.
              Click any template to preview it in a new tab.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-md">
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                aria-label="Search templates"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  selectedCategory === category.id
                    ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/40'
                    : 'border border-slate-700 text-slate-300 hover:border-sky-500/70 hover:text-sky-200'
                }`}
                aria-pressed={selectedCategory === category.id}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {filteredTemplates.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-lg text-slate-400">
              No templates found. Try adjusting your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTemplates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleTemplateClick(template)}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-0 text-left transition-all hover:border-sky-500/70 hover:bg-slate-900 hover:shadow-xl hover:shadow-sky-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-violet-500/10 to-emerald-400/10" />
                  {/* Placeholder for actual thumbnail */}
                  <div className="flex h-full items-center justify-center">
                    <svg
                      className="h-16 w-16 text-slate-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg">
                      Preview
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-50 group-hover:text-sky-400 transition-colors">
                    {template.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {template.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-sky-500/10 px-2.5 py-1 text-xs font-medium text-sky-300"
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
      <div className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-50">
            Need a custom template?
          </h2>
          <p className="mt-2 text-slate-300">
            We can create a fully customized landing page tailored to your
            business needs.
          </p>
          <a
            href="/#contact"
            className="mt-6 inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-all"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};
