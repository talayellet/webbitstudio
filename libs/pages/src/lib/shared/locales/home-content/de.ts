import type { LocaleStrings } from './en';
import type { Package, FAQ } from '../../types';

/**
 * German locale strings for Webbit Studio home page
 */
export const de: LocaleStrings = {
  // Header
  header: {
    logo: {
      title: 'Webbit Studio',
      subtitle: 'Webseiten für moderne Unternehmen',
    },
    nav: {
      packages: 'Pakete',
      process: 'Prozess',
      why: 'Warum wir',
      pricing: 'Preise',
      faq: 'FAQ',
      contact: 'Kontakt',
    },
    ariaLabels: {
      toggleMenu: 'Menü umschalten',
      closeMenu: 'Menü schließen',
      scrollToTop: 'Nach oben scrollen',
      mobileMenu: 'Mobile Navigationsmenü',
    },
  },

  // Hero Section
  hero: {
    title:
      'Websites, die Ihr Unternehmen großartig aussehen lassen - schnell geliefert.',
    description:
      'Webbit Studio erstellt Landing Pages, Unternehmenswebsites, Hosting-Setups, Deployments und maßgeschneiderte Admin-Panels, damit Sie Ihre Inhalte einfach verwalten können. Entwickelt für kleine Unternehmen weltweit.',
    primaryCta: 'Projekt starten',
    secondaryCta: 'Pakete ansehen',
    visual: {
      mockCards: [
        {
          title: 'Landing',
          subtitle: 'Schnell, einfach, effektiv.',
        },
        {
          title: 'Pro-Website',
          subtitle: 'Mehrseitig und gehostet.',
        },
        {
          title: 'Premium CMS',
          subtitle: 'Inhalte selbst bearbeiten.',
        },
      ],
    },
  },

  // Tech Strip
  techStrip: {
    title: 'Mit moderner Technologie gebaut',
    badges: [
      'React',
      'TypeScript',
      'Tailwind',
      'Prisma',
      'TanStack Query',
      'Zod',
      'Zustand',
    ],
  },

  // Packages Section
  packagesSection: {
    title: 'Wählen Sie Ihr Paket',
    subtitle:
      'Von einfachen Landing Pages bis zu vollständigen Websites mit Content-Management haben wir für jedes Unternehmen etwas.',
    pricing: {
      startingFrom: 'Ab',
      typicalRange: 'Typische Spanne:',
      plusTax: '+ MwSt.',
      priceNote:
        'Endgültiges Angebot hängt vom Projektumfang und der Komplexität ab.',
      cta: 'Angebot erhalten',
    },
    packages: [
      {
        name: 'Landing Page Paket',
        tagline: 'Perfekt für Freelancer und kleine Unternehmen.',
        description:
          'Eine effektive Landing Page, die einen hervorragenden ersten Eindruck macht und potenzielle Kunden ermutigt, Kontakt aufzunehmen.',
        features: [
          'Maßgeschneiderte Landing Page',
          'Mobil-responsives Layout',
          'Grundlegende SEO-Einrichtung',
          'Schnelle Lieferung (5–7 Werktage)',
          'Optionale Änderungen werden pro Anfrage berechnet',
        ],
        startingPrice: '$249',
        typicalRange: '$249–$399',
        highlight: 'Ideal für schnelle Online-Präsenz',
      },
      {
        name: 'Pro Business Website',
        tagline: 'Für wachsende Unternehmen, die mehr Seiten benötigen.',
        description:
          'Eine Business-Website mit bis zu 5 Seiten, einschließlich Hosting und Deployment.',
        features: [
          'Bis zu 5 Seiten (Startseite, Über uns, Dienstleistungen, Kontakt, Individuell)',
          'Hosting & Deployment-Einrichtung',
          'Sichere benutzerdefinierte Domain-Verbindung',
          'Grundlegende SEO & Performance-Optimierung',
          'Monatliches Hosting + Domain-Abonnement',
        ],
        startingPrice: '$499',
        typicalRange: '$499–$899',
        highlight: 'Am beliebtesten bei kleinen Unternehmen',
      },
      {
        name: 'Premium Website + Admin-Panel (CMS)',
        tagline: 'Vollständige Kontrolle über Ihre Website-Inhalte.',
        description:
          'Vollständige Business-Website mit maßgeschneidertem Content-Management-System. Aktualisieren Sie Texte, Bilder und Seiten selbst jederzeit, ohne technische Kenntnisse oder Entwickler. Sparen Sie Zeit und reduzieren Sie Kosten.',
        features: [
          'Alle Funktionen der Pro Business Website',
          'Maßgeschneidertes Content-Management (CMS)',
          'Schulung und Onboarding inbegriffen',
          'Selbstbedienung für Text- und Bildbearbeitung',
          'Unbegrenzte Inhaltsaktualisierungen',
        ],
        startingPrice: '$899',
        typicalRange: '$899–$1,599',
        highlight:
          'Ideal für Unternehmen, die Unabhängigkeit und Flexibilität wünschen',
      },
    ] as Package[],
  },

  // Process Section
  processSection: {
    title: 'Wie wir arbeiten',
    subtitle:
      'Wir haben einen einfachen, effizienten Prozess entwickelt, um Ihre Website so schnell wie möglich von der Idee zum Launch zu bringen.',
    steps: [
      {
        number: '01',
        title: 'Teilen Sie Ihre Anforderungen',
        description:
          'Füllen Sie unser Kontaktformular aus oder kontaktieren Sie uns per Telefon oder E-Mail. Erzählen Sie uns von Ihrem Unternehmen, den benötigten Seiten und Ihrem Zeitplan.',
      },
      {
        number: '02',
        title: 'Erhalten Sie Ihr Angebot',
        description:
          'Wir prüfen Ihre Anfrage und senden innerhalb von 3 Werktagen ein maßgeschneidertes Angebot zusammen mit einem vorgeschlagenen Paket und Zeitplan.',
      },
      {
        number: '03',
        title: 'Wir erstellen Ihre Website',
        description:
          'Nach Genehmigung legen wir los. Sie erhalten Fortschritts-Updates und können während des gesamten Prozesses Änderungen anfordern.',
      },
      {
        number: '04',
        title: 'Launch & Support',
        description:
          'Wir kümmern uns um Hosting, Deployment und Domain-Einrichtung. Nach dem Launch können Sie Updates anfordern oder Inhalte selbst verwalten (Premium).',
      },
    ],
  },

  // Why Section
  whySection: {
    title: 'Warum Webbit Studio?',
    subtitle:
      'Wir konzentrieren uns auf moderne Technologien, klares Design und Zeitpläne, die für beschäftigte Geschäftsinhaber wirklich funktionieren.',
    benefits: [
      {
        title: 'Schnelle Lieferung',
        text: 'Die meisten Landing Pages sind in 5–7 Werktagen fertig. Pro- und Premium-Websites werden in der Regel innerhalb von 2–3 Wochen fertiggestellt.',
      },
      {
        title: 'Faire Preise',
        text: 'Wir passen endgültige Angebote basierend auf Projektkomplexität und Unternehmensgröße an, um unsere Dienstleistungen zugänglich zu halten.',
      },
      {
        title: 'Moderne Technologien',
        text: 'React, TypeScript, Tailwind und moderne Hosting-Plattformen halten Ihre Website schnell und zuverlässig.',
      },
      {
        title: 'Effektives Design',
        text: 'Jede Seite ist so strukturiert, dass sie Besucher dazu führt, Sie zu kontaktieren oder Ihren Service zu nutzen.',
      },
      {
        title: 'Flexibles Content-Management',
        text: 'Wählen Sie einfache einmalige Build-Pakete oder entscheiden Sie sich für Premium und verwalten Sie Ihre eigenen Inhalte über ein maßgeschneidertes Admin-Panel.',
      },
      {
        title: 'Klare Kommunikation',
        text: 'Erreichen Sie uns per E-Mail, Telefon oder Videoanruf. Wir halten Sie vom Start bis zum Launch auf dem Laufenden.',
      },
    ],
  },

  // Pricing Section
  pricingSection: {
    title: 'Einfache, faire, globale Preise',
    intro:
      'Wir zeigen Preise „ab“, damit die Erwartungen klar sind, und passen dann endgültige Angebote basierend auf Ihrer Projektkomplexität an.',
    labels: {
      startingFrom: 'Ab',
      typicalRange: 'typische Spanne für Katalogvorlagen:',
      plusTax: '+ MwSt.',
    },
    packages: [
      {
        name: 'Landing Page Paket',
        startingPrice: '$249',
        typicalRange: '$249–$399',
        note: 'Endgültiges Angebot hängt von der Projektkomplexität ab.',
      },
      {
        name: 'Pro Business Website',
        startingPrice: '$499',
        typicalRange: '$499–$899',
        note: 'Abonnement für Hosting & Domain erforderlich.',
      },
      {
        name: 'Premium Website + Admin-Panel (CMS)',
        startingPrice: '$899',
        typicalRange: '$899–$1,599',
        note: 'Abonnement für Hosting & Domain erforderlich.',
      },
    ],
  },

  // FAQ Section
  faqSection: {
    title: 'Häufig gestellte Fragen',
    subtitle:
      'Haben Sie weitere Fragen? Wir beantworten sie gerne—kontaktieren Sie uns einfach über das Kontaktformular unten.',
    faqs: [
      {
        question: 'Wie schnell kann ich meine Website bekommen?',
        answer:
          'Die meisten Landing Pages dauern etwa 5–7 Werktage. Pro- und Premium-Pakete dauern typischerweise 2–3 Wochen, abhängig vom Umfang und den Feedback-Runden.',
      },
      {
        question: 'Bieten Sie Änderungen nach der Lieferung an?',
        answer:
          'Ja. Für Landing- und Pro-Pakete können Inhaltsaktualisierungen jederzeit angefordert werden und werden pro Update berechnet. Premium enthält ein selbstverwaltetes Admin-Panel, sodass Sie Ihre Inhalte bearbeiten können, wann immer Sie möchten.',
      },
      {
        question: 'Unterstützen Sie mehrere Sprachen?',
        answer:
          'Ja. Mehrsprachige Websites sind auf Anfrage verfügbar. Wir können Ihre Zielmärkte besprechen und eine Struktur vorschlagen, die am besten funktioniert.',
      },
      {
        question: 'Besitze ich meine Website?',
        answer:
          'Ja. Sie besitzen immer Ihre Website. Wir helfen Ihnen auch beim Einrichten und Verwalten Ihrer Domain, damit sie unter Ihrer Kontrolle bleibt.',
      },
      {
        question: 'Wie funktioniert die Preisgestaltung?',
        answer:
          'Endgültige Angebote werden basierend auf Projektkomplexität und Unternehmensgröße angepasst, um die Preise fair und zugänglich zu halten.',
      },
    ] as FAQ[],
  },

  // Contact Section
  contactSection: {
    title: 'Bereit, Ihre Website zu starten?',
    intro:
      'Erzählen Sie uns ein wenig über Ihr Unternehmen, Ihren Standort und welche Art von Website Sie benötigen. Wir melden uns mit einem maßgeschneiderten Angebot und einem vorgeschlagenen Paket zurück.',
    contactPoints: [
      'Landing Page, Unternehmenswebsite oder Premium CMS',
      'Die meisten Landing Pages innerhalb von 5–7 Werktagen fertig. Pro- und Premium-Websites werden in der Regel innerhalb von 2–3 Wochen fertiggestellt.',
    ],
    form: {
      name: {
        label: 'Name',
        placeholder: 'Ihr Name',
      },
      email: {
        label: 'E-Mail',
        placeholder: 'sie@beispiel.de',
      },
      country: {
        label: 'Land / Region',
        placeholder: 'Ihr Land oder Region',
      },
      package: {
        label: 'Wonach suchen Sie?',
        placeholder: 'Wählen Sie ein Paket',
        options: [
          'Landing Page Paket',
          'Pro Business Website',
          'Premium Website + Admin-Panel (CMS)',
          'Noch unsicher / benötige Hilfe bei der Entscheidung',
        ],
      },
      details: {
        label: 'Projektdetails',
        placeholder:
          'Erzählen Sie uns von Ihrem Unternehmen, den benötigten Seiten und etwaigen Fristen oder besonderen Anforderungen.',
      },
      consent: {
        label:
          'Ich stimme der Verarbeitung meiner persönlichen Daten gemäß der',
        privacyPolicy: 'Datenschutzerklärung',
      },
      modal: {
        ariaLabel: 'Datenschutzerklärung',
        closeButtonAriaLabel: 'Datenschutzerklärung schließen',
      },
      privacyNotice:
        'Wir erfassen Ihren Namen, Ihre E-Mail-Adresse und alle von Ihnen angegebenen Details, um auf Ihre Anfrage zu antworten. Ihre Daten werden gemäß unserer Datenschutzerklärung verarbeitet und bis zu 2 Jahre lang gespeichert. Sie haben jederzeit das Recht, auf Ihre Daten zuzugreifen, sie zu korrigieren oder zu löschen.',
      submit: 'Anfrage senden',
      submitting: 'Wird gesendet...',
      note: 'Bevorzugen Sie einen kurzen Anruf? Wir können direkte Kontaktdaten in unserer Antwort mitteilen.',
      emailFallback: 'Oder senden Sie uns direkt eine E-Mail an',
      phoneFallback: 'oder rufen Sie an',
      whatsappFallback: undefined,
      errors: {
        nameRequired: 'Name ist erforderlich',
        emailRequired: 'E-Mail ist erforderlich',
        emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
        consentRequired:
          'Sie müssen der Datenschutzerklärung zustimmen, um fortzufahren',
        serverError: 'Serverfehler. Bitte versuchen Sie es später erneut.',
        rateLimitError:
          'Zu viele Anfragen. Bitte versuchen Sie es später erneut.',
        submissionFailed:
          'Fehler beim Absenden des Formulars. Bitte versuchen Sie es erneut.',
      },
      successMessage:
        'Vielen Dank für Ihre Anfrage! Wir werden uns bald bei Ihnen melden.',
    },
  },

  // Footer
  footer: {
    copyright: '© {year} {companyName}. Alle Rechte vorbehalten.',
    tagline: 'Moderne Websites für kleine Unternehmen weltweit.',
    companyName: 'Webbit Studio',
    website: 'webbitstudio.com',
    backToTop: 'Nach oben',
    linksTitle: 'Links',
    links: {
      privacy: 'Datenschutzerklärung',
      terms: 'Nutzungsbedingungen',
      cookies: 'Cookie-Richtlinie',
      accessibility: 'Barrierefreiheit',
    },
  },

  // Price Conversion Notice
  priceConversionNotice: {
    error: 'Währungsumrechnung nicht verfügbar. Preise in USD angezeigt.',
    loading: 'Preise werden in {currency} umgerechnet...',
    ariaLabels: {
      warning: 'Warnung',
    },
  },

  // Accessibility
  accessibility: {
    skipToContent: 'Zum Hauptinhalt springen',
    languageSwitcher: 'Sprache auswählen. Aktuelle Sprache:',
    currencySwitcher: 'Währung auswählen. Aktuelle Währung:',
  },

  // Cookie Consent
  cookieConsent: {
    message:
      'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und den Website-Verkehr zu analysieren. Sie können Ihre Einstellungen anpassen oder alle Cookies akzeptieren/ablehnen.',
    acceptButton: 'Akzeptieren',
    rejectButton: 'Ablehnen',
    customizeButton: 'Anpassen',
    savePreferencesButton: 'Speichern',
    closeButton: 'Schließen',
    preferencesTitle: 'Cookie-Einstellungen',
    categoriesGroupLabel: 'Cookie-Kategorien',
    privacyPolicyLink: 'Mehr erfahren',
    categories: {
      essential: {
        label: 'Notwendige Cookies',
        description:
          'Erforderlich für die Funktion der Website. Diese können nicht deaktiviert werden.',
      },
      analytics: {
        label: 'Analyse-Cookies',
        description:
          'Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.',
      },
      marketing: {
        label: 'Marketing-Cookies',
        description:
          'Werden verwendet, um personalisierte Werbung anzuzeigen, die für Sie relevant ist.',
      },
    },
  },
};
