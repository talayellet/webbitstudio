import type { CookiePolicyContent } from '../../../types';

export const cookiePolicyEn: CookiePolicyContent = {
  title: 'Cookie Policy',
  lastUpdated: 'Last updated: December 6, 2025',
  sections: {
    introduction: {
      title: '1. Introduction',
      content: [
        'This Cookie Policy explains how Webbit Studio uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.',
      ],
    },
    whatAreCookies: {
      title: '2. What Are Cookies?',
      content: [
        'Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.',
        'Cookies set by the website owner (in this case, Webbit Studio) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies."',
      ],
    },
    howWeUseCookies: {
      title: '3. How We Use Cookies',
      content: [
        'We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies.',
        'Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for analytics and other purposes.',
      ],
    },
    typesOfCookies: {
      title: '4. Types of Cookies We Use',
      essential: {
        title: 'Essential Cookies',
        description:
          'These cookies are strictly necessary to provide you with services available through our website and to use some of its features. We also use your approximate location (country-level only) to automatically suggest the most appropriate language and currency for you.',
        examples: [
          'Cookie consent preferences',
          'Language preferences',
          'Currency selection',
          'Country detection for localization (IP-based, no tracking)',
        ],
      },
      analytics: {
        title: 'Analytics Cookies',
        description:
          'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
        examples: [
          'Google Analytics (if implemented)',
          'Page view tracking',
          'User behavior patterns',
        ],
      },
      functional: {
        title: 'Functional Cookies',
        description:
          'These cookies enable the website to provide enhanced functionality and personalization.',
        examples: [
          'Remember your preferences',
          'Personalized content',
          'User interface customization',
        ],
      },
    },
    managingCookies: {
      title: '5. How to Manage Cookies',
      content: [
        'You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas may be restricted.',
        'Most web browsers allow some control of cookies through browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit:',
      ],
      browsers: [
        'Chrome: https://support.google.com/chrome/answer/95647',
        'Firefox: https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer',
        'Safari: https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac',
        'Edge: https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09',
      ],
    },
    thirdPartyCookies: {
      title: '6. Third-Party Cookies',
      content: [
        'In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website.',
        'We do not have control over these third-party cookies. You can learn more about opting out of these cookies by visiting the Network Advertising Initiative opt-out page.',
      ],
    },
    updates: {
      title: '7. Updates to This Cookie Policy',
      content: [
        'We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies.',
        'The date at the top of this Cookie Policy indicates when it was last updated.',
      ],
    },
    contact: {
      title: '8. Contact Us',
      content: [
        'If you have any questions about our use of cookies or this Cookie Policy, please contact us at:',
      ],
      email: '',
      emailLabel: 'Email:',
    },
  },
};
