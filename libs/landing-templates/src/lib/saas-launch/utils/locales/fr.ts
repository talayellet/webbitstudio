import { LocaleStrings } from './en';

/**
 * French locale strings for SaaS Launch template
 * This is an example showing how to add a new language
 */
export const fr: LocaleStrings = {
  // Contact Section
  contact: {
    title: 'Contactez-Nous',
    subtitle:
      'Vous avez une question ou souhaitez travailler ensemble ? Nous serions ravis de vous entendre.',
    formTitle: 'Envoyez-nous un message',
    sectionTitle: 'Informations de Contact',
    labels: {
      address: 'Adresse',
      email: 'Email',
      phone: 'Téléphone',
      socialMedia: 'Réseaux Sociaux',
    },
    form: {
      name: {
        label: 'Nom',
        placeholder: 'Votre nom',
      },
      email: {
        label: 'Email',
        placeholder: 'votre@email.com',
      },
      message: {
        label: 'Message',
        placeholder: 'Parlez-nous de votre projet...',
      },
      submit: 'Envoyer le Message',
      successMessage:
        'Merci pour votre message ! Nous vous répondrons bientôt.',
      errors: {
        nameRequired: 'Le nom est requis',
        emailRequired: "L'email est requis",
        emailInvalid: 'Adresse email invalide',
        messageRequired: 'Le message est requis',
        messageTooLong: 'Le message doit contenir 1000 caractères ou moins',
      },
    },
  },

  // About Section
  about: {
    title: 'À Propos de Nous',
    paragraph1:
      "Nous avons pour mission d'autonomiser les créateurs et les entreprises avec des outils qui rendent la création de produits incroyables sans effort. Notre plateforme combine une technologie de pointe avec un design intuitif pour vous aider à donner vie à votre vision.",
    paragraph2:
      "Fondée par une équipe de développeurs et designers passionnés, nous croyons qu'un excellent logiciel devrait être accessible à tous. Rejoignez-nous pour façonner l'avenir de l'innovation numérique.",
  },

  // Header/Navigation
  header: {
    nav: {
      home: 'Accueil',
      features: 'Fonctionnalités',
      about: 'À Propos',
      contact: 'Contact',
    },
  },

  // Hero Section
  hero: {
    launchBadge: 'Bientôt Disponible',
    title: "Construisez Quelque Chose d'Incroyable",
    tagline: 'Votre Slogan',
    description:
      'Transformez vos idées en réalité avec notre plateforme puissante.',
    primaryCta: 'Commencer',
    secondaryCta: 'En Savoir Plus',
  },

  // Features Section
  features: {
    items: [
      {
        icon: '⚡',
        title: 'Ultra Rapide',
        description: 'Conçu pour la vitesse et la performance dès le départ.',
      },
      {
        icon: '🔒',
        title: 'Sécurisé par Défaut',
        description: 'Sécurité de niveau entreprise intégrée à chaque niveau.',
      },
      {
        icon: '🎨',
        title: 'Design Magnifique',
        description: 'Des interfaces superbes que les utilisateurs adorent.',
      },
    ],
  },

  // Stats Section
  stats: {
    items: [
      { number: '10K+', label: 'Utilisateurs Actifs' },
      { number: '99.9%', label: 'Disponibilité' },
      { number: '24/7', label: 'Support' },
      { number: '50+', label: 'Pays' },
    ],
  },

  // Final CTA Section
  finalCta: {
    title: 'Prêt à commencer ?',
    description:
      "Rejoignez des milliers d'utilisateurs utilisant déjà notre plateforme.",
    button: "Commencer l'Essai Gratuit",
  },

  // Footer
  footer: {
    copyright: '© {year} {companyName}. Tous droits réservés.',
    links: {
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions de Service',
      contact: 'Contact',
    },
  },

  // Accessibility labels
  aria: {
    location: 'emplacement',
    email: 'email',
    phone: 'téléphone',
    socialMedia: 'réseaux sociaux',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    rocket: 'fusée',
  },
};
