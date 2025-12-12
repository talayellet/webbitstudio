/**
 * English (US) locale strings for Restaurant Cafe template
 */
export const en = {
  // Default Restaurant Name
  defaultRestaurantName: 'Restaurant Name',

  // Header/Navigation
  header: {
    nav: {
      about: 'About',
      menu: 'Menu',
      contact: 'Contact',
    },
  },

  // Hero Section
  hero: {
    subtitle: 'Fine Dining Experience',
    title: 'Savor Every Moment',
    description:
      'Experience culinary excellence in an atmosphere of timeless elegance. Where tradition meets innovation.',
    cta: 'Make a Reservation',
  },

  // About Section
  about: {
    title: 'Our Story',
    paragraph1:
      'For over two decades, we have been crafting unforgettable dining experiences that celebrate the art of cuisine. Our passion lies in sourcing the finest local ingredients and transforming them into extraordinary dishes that delight the senses.',
    paragraph2:
      'Led by award-winning chefs, our culinary team brings together traditional techniques and modern innovation to create a menu that honors both heritage and creativity.',
  },

  // Menu Section
  menu: {
    title: 'Signature Dishes',
    description:
      'A curated selection of our most beloved creations, each dish a testament to our commitment to excellence.',
    items: [
      {
        icon: '🥩',
        name: 'Prime Ribeye',
        description:
          'Aged 30 days, served with roasted vegetables and truffle butter',
        price: '$48',
      },
      {
        icon: '🦞',
        name: 'Maine Lobster',
        description: 'Butter-poached with saffron risotto and seasonal greens',
        price: '$62',
      },
      {
        icon: '🍰',
        name: 'Chocolate Soufflé',
        description: 'Dark chocolate with vanilla bean ice cream and berries',
        price: '$18',
      },
    ],
  },

  // Info Section
  info: {
    hoursTitle: 'Hours',
    hours: {
      line1: 'Monday - Friday: 5:00 PM - 10:00 PM',
      line2: 'Saturday - Sunday: 12:00 PM - 11:00 PM',
      line3: 'Closed on major holidays',
    },
    locationTitle: 'Location',
    location: {
      line1: '123 Culinary Avenue',
      line2: 'Downtown District',
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
    title: 'Reserve Your Table',
    description:
      'Join us for an exceptional dining experience. Book your table today and discover why we are the destination for discerning palates.',
    button: 'Book Now',
  },

  // Footer
  footer: {
    tagline: 'Where every meal is a celebration of flavor and tradition',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    copyright: 'All rights reserved.',
    links: {
      about: 'About',
      menu: 'Menu',
      contact: 'Contact',
      instagram: 'Instagram',
      facebook: 'Facebook',
      twitter: 'Twitter',
    },
  },

  // Page Under Construction
  pageUnderConstruction: {
    title: 'Coming Soon',
    message: 'This page is under construction. Please check back later.',
    backButton: 'Back to Home',
  },

  // Theme Names
  themes: {
    warm: 'Warm',
    elegant: 'Elegant',
    modern: 'Modern',
    rustic: 'Rustic',
    coastal: 'Coastal',
  },
} as const;
