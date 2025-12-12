/**
 * French (FR) locale strings for Restaurant Cafe template
 */
export const fr = {
  // Default Restaurant Name
  defaultRestaurantName: 'Nom du Restaurant',

  // Header/Navigation
  header: {
    nav: {
      about: 'À Propos',
      menu: 'Menu',
      contact: 'Contact',
    },
  },

  // Hero Section
  hero: {
    subtitle: 'Expérience Gastronomique Raffinée',
    title: 'Savourez Chaque Instant',
    description:
      "Découvrez l'excellence culinaire dans une atmosphère d'élégance intemporelle. Où la tradition rencontre l'innovation.",
    cta: 'Réserver une Table',
  },

  // About Section
  about: {
    title: 'Notre Histoire',
    paragraph1:
      "Depuis plus de deux décennies, nous créons des expériences gastronomiques inoubliables qui célèbrent l'art de la cuisine. Notre passion réside dans l'approvisionnement des meilleurs ingrédients locaux et leur transformation en plats extraordinaires qui ravissent les sens.",
    paragraph2:
      "Dirigée par des chefs primés, notre équipe culinaire associe techniques traditionnelles et innovation moderne pour créer un menu qui honore à la fois l'héritage et la créativité.",
  },

  // Menu Section
  menu: {
    title: 'Plats Signature',
    description:
      "Une sélection soignée de nos créations les plus appréciées, chaque plat témoignant de notre engagement envers l'excellence.",
    items: [
      {
        icon: '🥩',
        name: 'Côte de Bœuf Premium',
        description:
          'Maturée 30 jours, servie avec légumes rôtis et beurre à la truffe',
        price: '$48',
      },
      {
        icon: '🦞',
        name: 'Homard du Maine',
        description:
          'Poché au beurre avec risotto au safran et légumes de saison',
        price: '$62',
      },
      {
        icon: '🍰',
        name: 'Soufflé au Chocolat',
        description: 'Chocolat noir avec glace à la vanille et fruits rouges',
        price: '$18',
      },
    ],
  },

  // Info Section
  info: {
    hoursTitle: 'Horaires',
    hours: {
      line1: 'Lundi - Vendredi: 17h00 - 22h00',
      line2: 'Samedi - Dimanche: 12h00 - 23h00',
      line3: 'Fermé les jours fériés',
    },
    locationTitle: 'Emplacement',
    location: {
      line1: '123 Avenue Culinaire',
      line2: 'Quartier Centre-Ville',
      line3: 'New York, NY 10001',
    },
    contactTitle: 'Contact',
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'reservations@restaurant.com',
    },
  },

  // Reservation Section
  reservation: {
    title: 'Réservez Votre Table',
    description:
      "Rejoignez-nous pour une expérience gastronomique exceptionnelle. Réservez votre table dès aujourd'hui et découvrez pourquoi nous sommes la destination des palais exigeants.",
    button: 'Réserver Maintenant',
  },

  // Footer
  footer: {
    tagline:
      'Où chaque repas est une célébration de la saveur et de la tradition',
    quickLinks: 'Liens Rapides',
    followUs: 'Suivez-Nous',
    copyright: 'Tous droits réservés.',
    links: {
      about: 'À Propos',
      menu: 'Menu',
      contact: 'Contact',
      instagram: 'Instagram',
      facebook: 'Facebook',
      twitter: 'Twitter',
    },
  },

  // Page Under Construction
  pageUnderConstruction: {
    title: 'Bientôt disponible',
    message: 'Cette page est en construction. Veuillez revenir plus tard.',
    backButton: "Retour à l'accueil",
  },

  // Theme Names
  themes: {
    warm: 'Chaleureux',
    elegant: 'Élégant',
    modern: 'Moderne',
    rustic: 'Rustique',
    coastal: 'Côtier',
  },
} as const;
