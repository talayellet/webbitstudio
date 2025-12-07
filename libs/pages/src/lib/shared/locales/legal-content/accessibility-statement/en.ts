import type { AccessibilityStatementContent } from '../../../types';
import { WEBBIT_STUDIO_EMAIL } from '../../../company-info';

export const accessibilityStatementEn: AccessibilityStatementContent = {
  title: 'Accessibility Statement',
  lastUpdated: 'Last updated: December 7, 2025',
  sections: {
    commitment: {
      title: 'Our Commitment to Accessibility',
      content: [
        'Webbit Studio is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.',
        'We believe that everyone should be able to access our website and services, regardless of ability or technology.',
      ],
    },
    conformance: {
      title: 'Conformance Status',
      content: [
        'The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities.',
      ],
      standard: 'WCAG 2.1',
      standardLabel: 'Standard:',
      level:
        'This website is partially conformant with WCAG 2.1 Level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard. Specific non-conformances are detailed in the "Known Non-Conformances" section below. As a small team with limited resources, we cannot provide specific remediation dates for all known issues. However, we are committed to continuous improvement and regularly review and prioritize accessibility enhancements based on user impact and feedback.',
    },
    features: {
      title: 'Accessibility Features',
      content: 'We have implemented the following accessibility features:',
      items: [
        'Keyboard navigation support - all interactive elements can be accessed using keyboard only',
        'Focus indicators - visible focus states for keyboard navigation',
        'Semantic HTML - proper heading structure and ARIA labels',
        'Alt text for images - descriptive alternative text for all meaningful images',
        'Color contrast - text and interactive elements meet WCAG AA contrast requirements (4.5:1)',
        'Responsive design - content adapts to different screen sizes and zoom levels',
        'Skip to main content link - allows keyboard users to bypass navigation',
        'Form labels and error messages - all form fields have descriptive labels',
        'Multi-language support - content available in multiple languages',
        'RTL (Right-to-Left) support - proper layout for Hebrew and other RTL languages',
      ],
    },
    knownIssues: {
      title: 'Known Non-Conformances',
      content:
        'We are transparent about accessibility issues we are aware of. The following non-conformances are known:',
      items: [
        'Animations and transitions do not respect prefers-reduced-motion settings (WCAG 2.3.3) - This affects users with vestibular disorders. Reason: Implementation requires CSS architecture updates. Workaround: Contact us for a static version of the site.',
        'Some form error messages are not programmatically associated with their fields (WCAG 3.3.1) - Screen reader users may not be immediately notified of errors. Reason: Legacy form component architecture. Workaround: Error messages appear directly below affected fields.',
        'Decorative SVG icons may be announced by some screen readers (WCAG 1.1.1) - May cause minor confusion but does not block functionality. Reason: Incremental icon library updates in progress.',
        'Modal dialogs do not trap keyboard focus (WCAG 2.4.3) - Keyboard users can tab to content behind modals. Reason: Focus management requires JavaScript refactoring. Workaround: Use ESC key or close button to dismiss modals.',
        'Some color combinations may not meet minimum contrast requirements (WCAG 1.4.3) - Primarily affects placeholder text. Reason: Design system is being updated.',
      ],
    },
    feedback: {
      title: 'Feedback',
      content: [
        'We welcome your feedback on the accessibility of Webbit Studio. Please let us know if you encounter accessibility barriers:',
        'We try to respond to accessibility feedback within 5 business days.',
      ],
      email: WEBBIT_STUDIO_EMAIL,
      emailLabel: 'Email:',
    },
    compatibility: {
      title: 'Technical Specifications',
      content:
        'Accessibility of Webbit Studio relies on the following technologies:',
      browsers: [
        'Chrome (latest version)',
        'Firefox (latest version)',
        'Safari (latest version)',
        'Edge (latest version)',
      ],
      browsersLabel: 'Supported Browsers',
      screenReaders: [
        'NVDA with Firefox on Windows',
        'JAWS with Chrome on Windows',
        'VoiceOver with Safari on macOS and iOS',
        'TalkBack with Chrome on Android',
      ],
      screenReadersLabel: 'Tested with Screen Readers',
    },
    limitations: {
      title: 'Limitations and Alternatives',
      content:
        'Despite our efforts, some content may not yet be fully accessible due to technical limitations or third-party integrations. If you encounter any issues, please contact us for alternative arrangements.',
    },
    improvements: {
      title: 'Assessment and Testing',
      content: [
        'We assess the accessibility of Webbit Studio through:',
        '• Regular automated accessibility testing using industry-standard tools',
        '• Manual testing with keyboard navigation and screen readers',
        '• User feedback and reports',
        '• Periodic third-party accessibility audits',
      ],
    },
  },
};
