/**
 * Spanish (ES) locale strings for Restaurant Cafe template
 */
export const es = {
  // Default Restaurant Name
  defaultRestaurantName: 'Nombre del Restaurante',

  // Header/Navigation
  header: {
    nav: {
      about: 'Nosotros',
      menu: 'Menú',
      contact: 'Contacto',
    },
  },

  // Hero Section
  hero: {
    subtitle: 'Experiencia Gastronómica Refinada',
    title: 'Saborea Cada Momento',
    description:
      'Experimenta la excelencia culinaria en un ambiente de elegancia atemporal. Donde la tradición se encuentra con la innovación.',
    cta: 'Hacer una Reserva',
  },

  // About Section
  about: {
    title: 'Nuestra Historia',
    paragraph1:
      'Durante más de dos décadas, hemos estado creando experiencias gastronómicas inolvidables que celebran el arte de la cocina. Nuestra pasión radica en obtener los mejores ingredientes locales y transformarlos en platos extraordinarios que deleitan los sentidos.',
    paragraph2:
      'Dirigido por chefs galardonados, nuestro equipo culinario reúne técnicas tradicionales e innovación moderna para crear un menú que honra tanto el patrimonio como la creatividad.',
  },

  // Menu Section
  menu: {
    title: 'Platos Insignia',
    description:
      'Una selección curada de nuestras creaciones más queridas, cada plato un testimonio de nuestro compromiso con la excelencia.',
    items: [
      {
        icon: '🥩',
        name: 'Chuletón Premium',
        description:
          'Madurado 30 días, servido con verduras asadas y mantequilla de trufa',
        price: '$48',
      },
      {
        icon: '🦞',
        name: 'Langosta de Maine',
        description:
          'Pochada en mantequilla con risotto de azafrán y verduras de temporada',
        price: '$62',
      },
      {
        icon: '🍰',
        name: 'Soufflé de Chocolate',
        description:
          'Chocolate negro con helado de vainilla y frutos del bosque',
        price: '$18',
      },
    ],
  },

  // Info Section
  info: {
    hoursTitle: 'Horario',
    hours: {
      line1: 'Lunes - Viernes: 17:00 - 22:00',
      line2: 'Sábado - Domingo: 12:00 - 23:00',
      line3: 'Cerrado en días festivos',
    },
    locationTitle: 'Ubicación',
    location: {
      line1: 'Avenida Culinaria 123',
      line2: 'Distrito Centro',
      line3: 'Nueva York, NY 10001',
    },
    contactTitle: 'Contacto',
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'reservas@restaurant.com',
    },
  },

  // Reservation Section
  reservation: {
    title: 'Reserve Su Mesa',
    description:
      'Únase a nosotros para una experiencia gastronómica excepcional. Reserve su mesa hoy y descubra por qué somos el destino para paladares exigentes.',
    button: 'Reservar Ahora',
  },

  // Footer
  footer: {
    tagline: 'Donde cada comida es una celebración del sabor y la tradición',
    quickLinks: 'Enlaces Rápidos',
    followUs: 'Síguenos',
    copyright: 'Todos los derechos reservados.',
    links: {
      about: 'Nosotros',
      menu: 'Menú',
      contact: 'Contacto',
      instagram: 'Instagram',
      facebook: 'Facebook',
      twitter: 'Twitter',
    },
  },

  // Page Under Construction
  pageUnderConstruction: {
    title: 'Próximamente',
    message: 'Esta página está en construcción. Por favor, vuelva más tarde.',
    backButton: 'Volver al Inicio',
  },
} as const;
