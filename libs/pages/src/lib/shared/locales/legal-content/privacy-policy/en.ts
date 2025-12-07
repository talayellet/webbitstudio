import type { PrivacyPolicyContent } from '../../../types';
import { WEBBIT_STUDIO_EMAIL } from '../../../company-info';

export const privacyPolicyEn: PrivacyPolicyContent = {
  title: 'Privacy Policy',
  lastUpdated: 'Last updated: December 6, 2025',
  sections: {
    introduction: {
      title: '1. Introduction',
      content: [
        'Webbit Studio ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.',
        'Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.',
      ],
    },
    dataCollection: {
      title: '2. Information We Collect',
      content: [
        'We may collect information about you in a variety of ways. The information we may collect on the Site includes:',
      ],
      items: [
        'Personal Data: Name, email address, and contact information you voluntarily provide through our contact forms',
        'Derivative Data: Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you viewed',
        'Financial Data: Payment information if you engage our services (processed securely through third-party payment processors)',
      ],
    },
    dataUsage: {
      title: '3. How We Use Your Information',
      content: [
        'We use the information we collect in the following ways:',
        'To respond to your inquiries and provide customer service',
        'To send you administrative information, such as updates to our terms and policies',
        'To improve our website and services',
        'To analyze usage trends and preferences',
        'To prevent fraudulent transactions and protect against criminal activity',
      ],
    },
    cookies: {
      title: '4. Cookies and Tracking Technologies',
      content: [
        'We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience.',
        'When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but this may affect certain features or services of our Site.',
      ],
    },
    dataSharing: {
      title: '5. Disclosure of Your Information',
      content: [
        'We may share information we have collected about you in certain situations. Your information may be disclosed as follows:',
        "By Law or to Protect Rights: If we believe the release of information is necessary to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.",
        'Third-Party Service Providers: We may share your information with third parties that perform services for us or on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.',
      ],
    },
    yourRights: {
      title: '6. Your Rights (GDPR)',
      content: [
        'If you are a resident of the European Economic Area (EEA), you have certain data protection rights:',
      ],
      rights: [
        'The right to access – You have the right to request copies of your personal data',
        'The right to rectification – You have the right to request that we correct any information you believe is inaccurate',
        'The right to erasure – You have the right to request that we erase your personal data, under certain conditions',
        'The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions',
        'The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions',
        'The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions',
      ],
    },
    dataRetention: {
      title: '7. Data Retention',
      content: [
        'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Our retention periods are as follows:',
      ],
      periods: [
        'Contact Form Data: We retain contact form submissions (name, email, message) for up to 2 years from the date of submission to allow us to respond to your inquiry and maintain a record of our communication',
        'Server Logs and Analytics Data: Technical data such as IP addresses, browser types, and access times are retained for up to 12 months for security, troubleshooting, and website improvement purposes',
        'Financial and Transaction Data: If you engage our services, payment records and related information are retained for up to 7 years to comply with tax and accounting regulations',
        'Marketing Communications: If you consent to receive marketing communications, we will retain your contact information until you withdraw your consent or unsubscribe',
      ],
    },
    dataBreachNotification: {
      title: '8. Data Breach Notification',
      content: [
        'In accordance with GDPR Articles 33-34, we have established procedures to respond to data breaches involving personal information:',
      ],
      procedures: [
        'Internal Detection and Assessment: We maintain systems to detect and assess potential data breaches. Upon discovering a breach, we will immediately investigate to determine the nature, scope, and potential impact of the incident',
        "Supervisory Authority Notification: If a breach is likely to result in a risk to your rights and freedoms, we will notify the relevant supervisory authority (Information Commissioner's Office for UK, or your local data protection authority) within 72 hours of becoming aware of the breach",
        'Individual Notification: If a breach is likely to result in a high risk to your rights and freedoms, we will notify you directly without undue delay. Our notification will include a description of the breach, the likely consequences, and the measures we are taking to address it',
        'Documentation: We maintain records of all data breaches, including their effects and the remedial action taken, even if notification is not required',
        'Remediation: We will take immediate steps to contain and remediate any breach, including working with cybersecurity experts, law enforcement, and other relevant parties as necessary',
      ],
    },
    dataSecurity: {
      title: '9. Security of Your Information',
      content: [
        'We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.',
      ],
    },
    contact: {
      title: '10. Contact Us',
      content: [
        'If you have questions or comments about this Privacy Policy, please contact us at:',
      ],
      email: WEBBIT_STUDIO_EMAIL,
    },
  },
};
