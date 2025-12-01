import type { LocaleStrings } from './en';
import type { Package, FAQ } from '../types';

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
      why: 'Pourquoi Nous',
      pricing: 'Tarifs',
      faq: 'FAQ',
      contact: 'Contact',
    },
  },

  // Hero Section
  hero: {
    title: 'Des sites web qui valorisent votre entreprise - livrés rapidement.',
    description:
      "Webbit Studio crée des pages d'atterrissage, des sites web d'entreprise, des configurations d'hébergement, des déploiements et des panneaux d'administration personnalisés pour que vous puissiez gérer votre contenu facilement. Conçu pour les petites entreprises du monde entier.",
    primaryCta: 'Démarrer votre projet',
    secondaryCta: 'Voir les forfaits',
    trust:
      'Approuvé par des petites entreprises et des startups du monde entier. La plupart des projets terminés en moins de 7 jours.',
  },

  // Tech Strip
  techStrip: {
    title: 'Construit avec une technologie moderne',
  },

  // Packages Section
  packagesSection: {
    title: 'Choisissez votre forfait',
    subtitle:
      "Des simples pages d'atterrissage aux sites web complets avec gestion de contenu, nous avons quelque chose pour chaque entreprise.",
    packages: [
      {
        name: "Forfait Page d'Atterrissage",
        tagline: 'Parfait pour les freelancers et les petites entreprises.',
        description:
          "Une page d'atterrissage conçue sur mesure, axée sur la clarté et les conversions, entièrement responsive et rapide.",
        features: [
          "Page d'atterrissage conçue sur mesure",
          'Mise en page responsive pour mobiles',
          'Configuration SEO de base',
          'Livraison rapide (2–4 jours)',
          'Modifications optionnelles facturées par demande',
        ],
        startingPrice: '$249',
        typicalRange: '$249–$399',
        highlight: 'Idéal pour une présence en ligne rapide',
      },
      {
        name: "Site Web d'Entreprise Pro",
        tagline:
          'Pour les entreprises en croissance qui ont besoin de plus de pages.',
        description:
          "Un site web d'entreprise multi-pages avec hébergement et déploiement gérés pour vous.",
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
        tagline: 'Modifiez le contenu de votre site web à tout moment.',
        description:
          "Tout ce qui est inclus dans Pro, plus un panneau d'administration personnalisé pour que vous puissiez gérer votre propre contenu.",
        features: [
          "Toutes les fonctionnalités du Site Web d'Entreprise Pro",
          'Gestion de contenu personnalisée (CMS)',
          "Édition de texte et d'images en libre-service",
          'Mises à jour de contenu illimitées (vous éditez)',
          'Support continu disponible',
        ],
        startingPrice: '$899',
        typicalRange: '$899–$1,599',
        highlight: 'Idéal pour la gestion de contenu à long terme',
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
          'Remplissez notre formulaire de contact ou contactez-nous via WhatsApp ou email. Parlez-nous de votre entreprise, des pages dont vous avez besoin et de votre calendrier.',
      },
      {
        number: '02',
        title: 'Obtenez votre devis',
        description:
          "Nous examinerons votre demande et enverrons un devis personnalisé dans les 24 heures, ainsi qu'un forfait suggéré et un calendrier.",
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
      "Nous nous concentrons sur la technologie moderne, un design épuré et des délais qui fonctionnent réellement pour les propriétaires d'entreprises occupés.",
    benefits: [
      {
        title: 'Livraison rapide',
        text: "La plupart des pages d'atterrissage sont terminées en 2–4 jours. Les sites web Pro et Premium sont généralement livrés en une semaine.",
      },
      {
        title: 'Tarifs équitables',
        text: "Nous ajustons les devis finaux en fonction de la complexité du projet et de la taille de l'entreprise pour garder nos services accessibles.",
      },
      {
        title: 'Technologie moderne',
        text: "React, TypeScript, Tailwind et des plateformes d'hébergement modernes maintiennent votre site rapide et fiable.",
      },
      {
        title: 'Conçu pour la conversion',
        text: 'Chaque page est structurée pour guider les visiteurs vers vous contacter ou utiliser votre service.',
      },
      {
        title: 'Gestion de contenu flexible',
        text: "Choisissez des forfaits de construction unique simples, ou optez pour Premium et gérez votre propre contenu via un panneau d'administration personnalisé.",
      },
      {
        title: 'Communication claire',
        text: 'Contactez-nous par email, WhatsApp ou appel vidéo. Nous vous tenons informé du début au lancement.',
      },
    ],
  },

  // Pricing Section
  pricingSection: {
    title: 'Tarifs simples, équitables et globaux',
    intro:
      'Nous affichons des prix en USD "à partir de" pour que les attentes soient claires, puis ajustons les devis finaux en fonction de la complexité de votre projet.',
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
          "La plupart des pages d'atterrissage prennent environ 2–4 jours. Les forfaits Pro et Premium prennent généralement 5–7 jours, selon la portée et les cycles de retours.",
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
      'Parlez-nous un peu de votre entreprise, de votre emplacement et du type de site web dont vous avez besoin. Nous vous répondrons avec un devis personnalisé et un forfait suggéré.',
    contactPoints: [
      "Page d'atterrissage, site web d'entreprise ou CMS Premium",
      'La plupart des projets terminés en 3–7 jours',
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
          'Parlez-nous de votre entreprise, des pages dont vous avez besoin et de toute échéance ou exigence particulière.',
      },
      submit: 'Envoyer la demande',
      note: 'Vous préférez WhatsApp ou un appel rapide ? Nous pouvons partager les coordonnées directes dans notre réponse.',
    },
  },

  // Footer
  footer: {
    copyright: '© {year} {companyName}. Tous droits réservés.',
    tagline: 'Sites web modernes pour petites entreprises du monde entier.',
    companyName: 'Webbit Studio',
    website: 'webbitstudio.com',
    backToTop: 'Retour en haut',
    links: {
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions de Service',
    },
  },
};
