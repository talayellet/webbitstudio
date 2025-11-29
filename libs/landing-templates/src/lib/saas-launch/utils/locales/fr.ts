import { LocaleStrings } from './en';
import { saasLaunchImages } from '../../../../assets';

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
      submitting: 'Envoi en cours...',
      successMessage:
        'Merci pour votre message ! Nous vous répondrons bientôt.',
      errors: {
        nameRequired: 'Le nom est requis',
        emailRequired: "L'email est requis",
        emailInvalid: 'Adresse email invalide',
        messageRequired: 'Le message est requis',
        messageTooLong: 'Le message doit contenir 1000 caractères ou moins',
        serverError: 'Erreur du serveur. Veuillez réessayer plus tard.',
        rateLimitError: 'Trop de requêtes. Veuillez réessayer plus tard.',
        submissionFailed: "Échec de l'envoi du message. Veuillez réessayer.",
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
    title: 'Fonctionnalités',
    learnMore: 'En savoir plus →',
    items: [
      {
        icon: '⚡',
        title: 'Ultra Rapide',
        description: 'Conçu pour la vitesse et la performance dès le départ.',
        routePath: '/features/lightning-fast',
        featureDetails: {
          price: '29€/mois',
          image: saasLaunchImages.lightningFast,
          altImage: 'Tableau de bord de performances ultra rapides',
          fullDescription:
            "Profitez de performances ultra-rapides avec notre pile technologique de pointe. Nous avons optimisé chaque couche de notre plateforme pour offrir des temps de réponse inférieurs à une seconde, garantissant que vos utilisateurs n'ont jamais à attendre.",
          features: [
            'Temps de réponse inférieurs à une seconde sur toutes les opérations',
            'Mécanismes de cache avancés pour une récupération instantanée des données',
            'Diffusion CDN mondiale pour une vitesse partout dans le monde',
            'Requêtes et indexation de base de données optimisées',
            'Surveillance des performances et alertes en temps réel',
          ],
        },
      },
      {
        icon: '🔒',
        title: 'Sécurisé par Défaut',
        description: 'Sécurité de niveau entreprise intégrée à chaque niveau.',
        routePath: '/features/secure-by-default',
        featureDetails: {
          price: '49€/mois',
          image: saasLaunchImages.secureByDefault,
          altImage: 'Protection de sécurité et chiffrement',
          fullDescription:
            "La sécurité n'est pas une réflexion après coup - elle est intégrée dans chaque aspect de notre plateforme. Du chiffrement de bout en bout aux audits de sécurité réguliers, nous garantissons que vos données sont toujours protégées.",
          features: [
            'Chiffrement de bout en bout pour tous les transferts de données',
            'Certification de conformité SOC 2 Type II',
            'Audits de sécurité réguliers par des tiers',
            'Détection et prévention avancées des menaces',
            'Correctifs et mises à jour de sécurité automatiques',
          ],
        },
      },
      {
        icon: '🎨',
        title: 'Design Magnifique',
        description: 'Des interfaces superbes que les utilisateurs adorent.',
        routePath: '/features/beautiful-design',
        featureDetails: {
          price: '39€/mois',
          image: saasLaunchImages.beautifulDesign,
          altImage: "Design d'interface magnifique et moderne",
          fullDescription:
            'Chaque pixel compte. Notre équipe de conception a créé de superbes interfaces intuitives qui ravissent les utilisateurs et rendent les tâches complexes simples.',
          features: [
            "Design d'interface moderne et épuré",
            'Entièrement responsive sur tous les appareils',
            'Thèmes et branding personnalisables',
            'Design accessible suivant les directives WCAG 2.1',
            'Animations et transitions fluides',
          ],
        },
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

  // Feature Page
  featurePage: {
    backButton: 'Retour',
    overview: 'Aperçu',
    keyFeatures: 'Caractéristiques Principales',
    priceLabel: 'Prix',
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

  // Page Under Construction
  pageUnderConstruction: {
    title: 'En Construction',
    message:
      'Nous travaillons dur pour vous apporter cette page. Revenez bientôt !',
    backButton: "← Retour à l'Accueil",
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
