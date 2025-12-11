import type { LocaleStrings } from './en';
import type { Package, FAQ } from '../../types';

/**
 * French locale strings for Webbit Studio home page
 */
export const fr: LocaleStrings = {
  // Header
  header: {
    logo: {
      title: 'Webbit Studio',
      subtitle: 'Sites web pour entreprises modernes',
    },
    nav: {
      packages: 'Forfaits',
      process: 'Processus',
      why: 'Pourquoi',
      pricing: 'Tarifs',
      faq: 'Questions',
      contact: 'Contact',
    },
    ariaLabels: {
      toggleMenu: 'Basculer le menu',
      closeMenu: 'Fermer le menu',
      scrollToTop: 'Retour en haut',
      mobileMenu: 'Menu de navigation mobile',
    },
  },

  // Hero Section
  hero: {
    title: 'Des sites web qui valorisent votre entreprise - livrés rapidement.',
    description:
      "Webbit Studio crée des pages de destination, des sites Web d'entreprise, des configurations d'hébergement, des déploiements et des panneaux d'administration personnalisés afin que vous puissiez gérer votre contenu facilement. Conçu pour les petites entreprises du monde entier.",
    primaryCta: 'Commencez votre projet',
    secondaryCta: 'Voir les forfaits',
    tertiaryCta: 'Parcourir les modèles',
    tertiaryCtaHref: '/templates',
    visual: {
      mockCards: [
        {
          title: 'Landing',
          subtitle: 'Rapide, simple, efficace.',
        },
        {
          title: 'Site Pro',
          subtitle: 'Multi-pages et hébergé.',
        },
        {
          title: 'CMS Premium',
          subtitle: 'Éditez le contenu vous-même.',
        },
      ],
    },
  },

  // Tech Strip
  techStrip: {
    title: 'Construit avec une technologie moderne',
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
    title: 'Choisissez votre forfait',
    subtitle:
      "Des simples pages d'atterrissage aux sites web complets avec gestion de contenu, nous avons quelque chose pour chaque entreprise.",
    pricing: {
      startingFrom: 'À partir de',
      typicalRange: 'Fourchette typique :',
      plusTax: '+ taxes',
      priceNote:
        'Le devis final dépend de la portée et de la complexité du projet.',
      cta: 'Obtenir un devis',
    },
    packages: [
      {
        name: "Forfait Page d'Atterrissage",
        tagline: 'Parfait pour les freelancers et les petites entreprises.',
        description:
          "Une page d'atterrissage efficace qui fait une excellente première impression et encourage les clients potentiels à prendre contact.",
        features: [
          "Page d'atterrissage conçue sur mesure",
          'Mise en page responsive pour mobiles',
          'Configuration SEO de base',
          'Livraison rapide (5–7 jours ouvrables)',
          'Modifications optionnelles facturées par demande',
        ],
        startingPrice: '$249',
        typicalRange: '$249–$399',
        highlight: 'Idéal pour une présence en ligne rapide',
      },
      {
        name: 'Site Web d’Entreprise Pro',
        tagline:
          'Pour les entreprises en croissance qui ont besoin de plus de pages.',
        description:
          "Un site Web d'entreprise comprenant jusqu'à 5 pages, avec hébergement et déploiement.",
        features: [
          "Jusqu'à 5 pages (Accueil, À propos, Services, Contact, Personnalisé)",
          'Configuration hébergement et déploiement',
          'Connexion de domaine personnalisé sécurisé',
          'Optimisation SEO et performance de base',
          'Abonnement mensuel hébergement + domaine',
        ],
        startingPrice: '$499',
        typicalRange: '$499–$899',
        highlight: 'Le plus populaire pour les petites entreprises',
      },
      {
        name: "Site Web Premium + Panneau d'Administration (CMS)",
        tagline: 'Contrôle total sur le contenu de votre site web.',
        description:
          "Site web d'entreprise complet avec système de gestion de contenu personnalisé. Mettez à jour textes, images et pages vous-même à tout moment, sans compétences techniques ni développeur. Gagnez du temps et réduisez les coûts.",
        features: [
          "Toutes les fonctionnalités du Site Web d'Entreprise Pro",
          'Gestion de contenu personnalisée (CMS)',
          'Formation et intégration incluses',
          "\u00c9dition de texte et d'images en libre-service",
          'Mises à jour de contenu illimitées',
        ],
        startingPrice: '$899',
        typicalRange: '$899–$1,599',
        highlight:
          'Idéal pour les entreprises qui veulent indépendance et flexibilité',
      },
    ] as Package[],
  },

  // Process Section
  processSection: {
    title: 'Comment nous travaillons',
    subtitle:
      "Nous avons conçu un processus simple et efficace pour faire passer votre site web de l'idée au lancement le plus rapidement possible.",
    steps: [
      {
        number: '01',
        title: 'Partagez vos besoins',
        description:
          'Remplissez notre formulaire de contact ou contactez-nous par téléphone ou email. Parlez-nous de votre entreprise, des pages dont vous avez besoin et de votre calendrier.',
      },
      {
        number: '02',
        title: 'Obtenez votre devis',
        description:
          "Nous examinerons votre demande et enverrons un devis personnalisé dans les 3 jours ouvrables, ainsi qu'un forfait suggéré et un calendrier.",
      },
      {
        number: '03',
        title: 'Nous construisons votre site',
        description:
          'Une fois approuvé, nous nous mettons au travail. Vous recevrez des mises à jour de progression et pourrez demander des modifications tout au long du processus.',
      },
      {
        number: '04',
        title: 'Lancement et support',
        description:
          "Nous gérons l'hébergement, le déploiement et la configuration du domaine. Après le lancement, vous pouvez demander des mises à jour ou gérer le contenu vous-même (Premium).",
      },
    ],
  },

  // Why Section
  whySection: {
    title: 'Pourquoi Webbit Studio ?',
    subtitle:
      "Nous nous concentrons sur les technologies modernes, un design épuré et des délais qui fonctionnent réellement pour les propriétaires d'entreprises occupés.",
    benefits: [
      {
        title: 'Livraison rapide',
        text: 'La plupart des pages de destination sont terminées en 5–7 jours ouvrables. Les sites Web Pro et Premium sont généralement achevés en 2–3 semaines.',
      },
      {
        title: 'Tarifs équitables',
        text: "Nous ajustons les devis finaux en fonction de la complexité du projet et de la taille de l'entreprise pour garder nos services accessibles.",
      },
      {
        title: 'Technologies modernes',
        text: "React, TypeScript, Tailwind et des plateformes d'hébergement modernes maintiennent votre site rapide et fiable.",
      },
      {
        title: 'Design efficace',
        text: 'Chaque page est structurée pour guider les visiteurs vers vous contacter ou utiliser votre service.',
      },
      {
        title: 'Gestion de contenu flexible',
        text: "Choisissez des forfaits de construction unique simples, ou optez pour Premium et gérez votre propre contenu via un panneau d'administration personnalisé.",
      },
      {
        title: 'Communication claire',
        text: 'Contactez-nous par email, téléphone ou appel vidéo. Nous vous tenons informé du début au lancement.',
      },
    ],
  },

  // Pricing Section
  pricingSection: {
    title: 'Tarifs simples, équitables et globaux',
    intro:
      'Nous affichons des prix "à partir de" pour que les attentes soient claires, puis ajustons les devis finaux en fonction de la complexité de votre projet.',
    labels: {
      startingFrom: 'À partir de',
      typicalRange: 'fourchette typique pour modèles de catalogue :',
      plusTax: '+ taxes',
    },
    packages: [
      {
        name: "Forfait Page d'Atterrissage",
        startingPrice: '$249',
        typicalRange: '$249–$399',
        note: 'Le devis final dépend de la complexité du projet.',
      },
      {
        name: "Site Web d'Entreprise Pro",
        startingPrice: '$499',
        typicalRange: '$499–$899',
        note: "L'abonnement pour l'hébergement et le domaine s'applique.",
      },
      {
        name: "Site Web Premium + Panneau d'Administration (CMS)",
        startingPrice: '$899',
        typicalRange: '$899–$1,599',
        note: "L'abonnement pour l'hébergement et le domaine s'applique.",
      },
    ],
  },

  // FAQ Section
  faqSection: {
    title: 'Questions fréquemment posées',
    subtitle:
      "Vous avez d'autres questions ? Nous serons heureux d'y répondre—contactez-nous simplement via le formulaire de contact ci-dessous.",
    faqs: [
      {
        question: 'À quelle vitesse puis-je obtenir mon site web ?',
        answer:
          "La plupart des pages d'atterrissage prennent environ 5–7 jours ouvrables. Les forfaits Pro et Premium prennent généralement 2–3 semaines, selon la portée et les cycles de retours.",
      },
      {
        question: 'Proposez-vous des modifications après la livraison ?',
        answer:
          "Oui. Pour les forfaits Landing et Pro, les mises à jour de contenu peuvent être demandées à tout moment et sont facturées par mise à jour. Premium inclut un panneau d'administration en libre-service, vous pouvez donc modifier votre contenu quand vous le souhaitez.",
      },
      {
        question: 'Supportez-vous plusieurs langues ?',
        answer:
          'Oui. Les sites web multilingues sont disponibles sur demande. Nous pouvons discuter de vos marchés cibles et suggérer une structure qui fonctionne le mieux.',
      },
      {
        question: 'Suis-je propriétaire de mon site web ?',
        answer:
          "Oui. Vous êtes toujours propriétaire de votre site web. Nous vous aiderons également à configurer et gérer votre domaine pour qu'il reste sous votre contrôle.",
      },
      {
        question: 'Comment fonctionnent les tarifs ?',
        answer:
          "Les devis finaux sont ajustés en fonction de la complexité du projet et de la taille de l'entreprise pour garder les tarifs équitables et accessibles.",
      },
    ] as FAQ[],
  },

  // Contact Section
  contactSection: {
    title: 'Prêt à démarrer votre site web ?',
    intro:
      'Parlez-nous un peu de votre entreprise, de votre emplacement et du type de site Web dont vous avez besoin. Nous reviendrons vers vous avec un devis personnalisé et un forfait suggéré.',
    contactPoints: [
      "Page d'atterrissage, site Web d'entreprise ou CMS Premium",
      "La plupart des pages d'atterrissage terminées en 5–7 jours ouvrables. Les sites Web Pro et Premium sont généralement achevés en 2–3 semaines.",
    ],
    form: {
      name: {
        label: 'Nom',
        placeholder: 'Votre nom',
      },
      email: {
        label: 'Email',
        placeholder: 'vous@exemple.com',
      },
      country: {
        label: 'Pays / Région',
        placeholder: 'Votre pays ou région',
      },
      package: {
        label: 'Que recherchez-vous ?',
        placeholder: 'Sélectionnez un forfait',
        options: [
          "Forfait Page d'Atterrissage",
          "Site Web d'Entreprise Pro",
          "Site Web Premium + Panneau d'Administration (CMS)",
          "Pas encore sûr / besoin d'aide pour décider",
        ],
      },
      details: {
        label: 'Détails du projet',
        placeholder:
          'Parlez-nous de votre entreprise, des pages dont vous avez besoin et de tout délai ou exigence spéciale.',
      },
      consent: {
        label:
          "J'accepte le traitement de mes données personnelles conformément à la",
        privacyPolicy: 'Politique de Confidentialité',
      },
      modal: {
        ariaLabel: 'Politique de Confidentialité',
        closeButtonAriaLabel: 'Fermer la politique de confidentialité',
      },
      privacyNotice:
        "Nous collectons votre nom, email et tous les détails que vous fournissez pour répondre à votre demande. Vos données seront traitées conformément à notre Politique de Confidentialité et conservées jusqu'à 2 ans. Vous avez le droit d'accéder, corriger ou supprimer vos données à tout moment.",
      submit: 'Envoyer la demande',
      submitting: 'Envoi en cours...',
      note: 'Vous préférez un appel rapide ? Nous pouvons partager nos coordonnées directes dans notre réponse.',
      emailFallback: 'Ou envoyez-nous un e-mail directement à',
      phoneFallback: 'ou appelez',
      whatsappFallback: undefined,
      errors: {
        nameRequired: 'Le nom est requis',
        emailRequired: 'L’email est requis',
        emailInvalid: 'Veuillez saisir une adresse email valide',
        consentRequired:
          'Vous devez accepter la politique de confidentialité pour continuer',
        serverError: 'Erreur du serveur. Veuillez réessayer plus tard.',
        rateLimitError: 'Trop de requêtes. Veuillez réessayer plus tard.',
        submissionFailed: "Échec de l'envoi du formulaire. Veuillez réessayer.",
      },
      successMessage:
        'Merci pour votre demande ! Nous vous répondrons bientôt.',
    },
  },

  // Footer
  footer: {
    copyright: '© {year} {companyName}. Tous droits réservés.',
    tagline:
      'Sites web modernes pour petites entreprises dans le monde entier.',
    companyName: 'Webbit Studio',
    website: 'webbitstudio.com',
    backToTop: 'Retour en haut',
    linksTitle: 'Liens',
    links: {
      privacy: 'Politique de Confidentialité',
      terms: "Conditions d'Utilisation",
      cookies: 'Politique des Cookies',
      accessibility: 'Accessibilité',
    },
  },

  // Price Conversion Notice
  priceConversionNotice: {
    error: 'Conversion de devise indisponible. Prix affichés en USD.',
    loading: 'Conversion des prix en {currency}...',
    ariaLabels: {
      warning: 'Avertissement',
    },
  },

  // Accessibility
  accessibility: {
    skipToContent: 'Passer au contenu principal',
    languageSwitcher: 'Sélectionner la langue. Langue actuelle:',
    currencySwitcher: 'Sélectionner la devise. Devise actuelle:',
  },

  // Cookie Consent
  cookieConsent: {
    message:
      'Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic du site. Vous pouvez personnaliser vos préférences ou accepter/refuser tous les cookies.',
    acceptButton: 'Accepter',
    rejectButton: 'Refuser',
    customizeButton: 'Personnaliser',
    savePreferencesButton: 'Enregistrer',
    closeButton: 'Fermer',
    preferencesTitle: 'Préférences des cookies',
    categoriesGroupLabel: 'Catégories de cookies',
    privacyPolicyLink: 'En savoir plus',
    categories: {
      essential: {
        label: 'Cookies essentiels',
        description:
          'Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.',
      },
      analytics: {
        label: 'Cookies analytiques',
        description:
          'Nous aident à comprendre comment les visiteurs interagissent avec notre site.',
      },
      marketing: {
        label: 'Cookies marketing',
        description:
          'Utilisés pour diffuser des publicités personnalisées pertinentes pour vous.',
      },
    },
  },
};
