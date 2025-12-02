import type { LocaleStrings } from './en';
import type { Package, FAQ } from '../types';

/**
 * German locale strings for Webbit Studio home page
 */
export const de: LocaleStrings = {
  // Header
  header: {
    logo: {
      title: 'Webbit Studio',
      subtitle: 'Websites für moderne Unternehmen',
    },
    nav: {
      packages: 'Pakete',
      process: 'Prozess',
      why: 'Warum Wir',
      pricing: 'Preise',
      faq: 'FAQ',
      contact: 'Kontakt',
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
    trust:
      'Vertraut von kleinen Unternehmen und Startups weltweit. Die meisten Projekte in unter 7 Tagen abgeschlossen.',
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
    badges: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Modernes Hosting'],
  },

  // Packages Section
  packagesSection: {
    title: 'Wählen Sie Ihr Paket',
    subtitle:
      'Von einfachen Landing Pages bis zu vollständigen Websites mit Content-Management haben wir für jedes Unternehmen etwas.',
    pricing: {
      startingFrom: 'Ab',
      typicalRange: 'Typische Spanne:',
      priceNote:
        'Endgültiges Angebot hängt von Region und Projektkomplexität ab.',
      cta: 'Individuelles Angebot erhalten',
    },
    packages: [
      {
        name: 'Landing Page Paket',
        tagline: 'Perfekt für Freelancer und kleine Unternehmen.',
        description:
          'Eine maßgeschneiderte Landing Page mit Fokus auf Klarheit und Conversions, vollständig responsive und schnell.',
        features: [
          'Maßgeschneiderte Landing Page',
          'Mobil-responsives Layout',
          'Grundlegende SEO-Einrichtung',
          'Schnelle Lieferung (2–4 Tage)',
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
          'Eine mehrseitige Unternehmenswebsite mit Hosting und Deployment, um das wir uns kümmern.',
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
        tagline: 'Bearbeiten Sie Ihre Website-Inhalte jederzeit.',
        description:
          'Alles von Pro, plus ein maßgeschneidertes Admin-Panel, damit Sie Ihre eigenen Inhalte verwalten können.',
        features: [
          'Alle Pro Business Website-Funktionen',
          'Maßgeschneidertes Content-Management (CMS)',
          'Selbstbedienung für Text- und Bildbearbeitung',
          'Unbegrenzte Inhaltsaktualisierungen (Sie bearbeiten)',
          'Laufender Support verfügbar',
        ],
        startingPrice: '$899',
        typicalRange: '$899–$1,599',
        highlight: 'Ideal für langfristiges Content-Management',
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
          'Füllen Sie unser Kontaktformular aus oder kontaktieren Sie uns per WhatsApp oder E-Mail. Erzählen Sie uns von Ihrem Unternehmen, den benötigten Seiten und Ihrem Zeitplan.',
      },
      {
        number: '02',
        title: 'Erhalten Sie Ihr Angebot',
        description:
          'Wir prüfen Ihre Anfrage und senden innerhalb von 24 Stunden ein maßgeschneidertes Angebot zusammen mit einem vorgeschlagenen Paket und Zeitplan.',
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
      'Wir konzentrieren uns auf moderne Technologie, klares Design und Zeitpläne, die für beschäftigte Geschäftsinhaber wirklich funktionieren.',
    benefits: [
      {
        title: 'Schnelle Lieferung',
        text: 'Die meisten Landing Pages sind in 2–4 Tagen fertig. Pro- und Premium-Websites werden typischerweise innerhalb einer Woche ausgeliefert.',
      },
      {
        title: 'Faire Preise',
        text: 'Wir passen endgültige Angebote basierend auf Projektkomplexität und Unternehmensgröße an, um unsere Dienstleistungen zugänglich zu halten.',
      },
      {
        title: 'Moderne Technologie',
        text: 'React, TypeScript, Tailwind und moderne Hosting-Plattformen halten Ihre Website schnell und zuverlässig.',
      },
      {
        title: 'Für Conversion entwickelt',
        text: 'Jede Seite ist so strukturiert, dass sie Besucher dazu führt, Sie zu kontaktieren oder Ihren Service zu nutzen.',
      },
      {
        title: 'Flexibles Content-Management',
        text: 'Wählen Sie einfache einmalige Build-Pakete oder entscheiden Sie sich für Premium und verwalten Sie Ihre eigenen Inhalte über ein maßgeschneidertes Admin-Panel.',
      },
      {
        title: 'Klare Kommunikation',
        text: 'Erreichen Sie uns per E-Mail, WhatsApp oder Videoanruf. Wir halten Sie vom Start bis zum Launch auf dem Laufenden.',
      },
    ],
  },

  // Pricing Section
  pricingSection: {
    title: 'Einfache, faire, globale Preise',
    intro:
      'Wir zeigen USD-Preise „ab", damit die Erwartungen klar sind, und passen dann endgültige Angebote basierend auf Ihrer Projektkomplexität an.',
    labels: {
      startingFrom: 'Ab',
      typicalRange: 'typische Spanne:',
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
          'Die meisten Landing Pages dauern etwa 2–4 Tage. Pro- und Premium-Pakete dauern typischerweise 5–7 Tage, abhängig vom Umfang und den Feedback-Runden.',
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
      'Landing Page, Business Website oder Premium CMS',
      'Die meisten Projekte innerhalb von 3–7 Tagen abgeschlossen',
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
      submit: 'Anfrage senden',
      note: 'Bevorzugen Sie WhatsApp oder einen kurzen Anruf? Wir können direkte Kontaktdaten in unserer Antwort teilen.',
    },
  },

  // Footer
  footer: {
    copyright: '© {year} {companyName}. Alle Rechte vorbehalten.',
    tagline: 'Moderne Websites für kleine Unternehmen weltweit.',
    companyName: 'Webbit Studio',
    website: 'webbitstudio.com',
    backToTop: 'Zurück nach oben',
    links: {
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
    },
  },
};
