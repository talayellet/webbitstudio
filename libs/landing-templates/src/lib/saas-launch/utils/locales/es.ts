import { LocaleStrings } from './en';
import { saasLaunchImages } from '../../../../assets';

/**
 * Spanish locale strings for SaaS Launch template
 */
export const es: LocaleStrings = {
  // Contact Section
  contact: {
    title: 'Ponte en Contacto',
    subtitle:
      '¿Tienes una pregunta o quieres trabajar juntos? Nos encantaría saber de ti.',
    formTitle: 'Envíanos un mensaje',
    sectionTitle: 'Información de Contacto',
    labels: {
      address: 'Dirección',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      socialMedia: 'Redes Sociales',
    },
    form: {
      name: {
        label: 'Nombre',
        placeholder: 'Tu nombre',
      },
      email: {
        label: 'Correo Electrónico',
        placeholder: 'tu@email.com',
      },
      message: {
        label: 'Mensaje',
        placeholder: 'Cuéntanos sobre tu proyecto...',
      },
      submit: 'Enviar Mensaje',
      successMessage: '¡Gracias por tu mensaje! Te responderemos pronto.',
      errors: {
        nameRequired: 'El nombre es obligatorio',
        emailRequired: 'El correo electrónico es obligatorio',
        emailInvalid: 'Dirección de correo electrónico no válida',
        messageRequired: 'El mensaje es obligatorio',
        messageTooLong: 'El mensaje debe tener 1000 caracteres o menos',
      },
    },
  },

  // About Section
  about: {
    title: 'Sobre Nosotros',
    paragraph1:
      'Estamos en una misión para empoderar a creadores y empresas con herramientas que hacen que construir productos increíbles sea fácil. Nuestra plataforma combina tecnología de vanguardia con diseño intuitivo para ayudarte a dar vida a tu visión.',
    paragraph2:
      'Fundada por un equipo de desarrolladores y diseñadores apasionados, creemos que un gran software debe ser accesible para todos. Únete a nosotros para dar forma al futuro de la innovación digital.',
  },

  // Header/Navigation
  header: {
    nav: {
      home: 'Inicio',
      features: 'Características',
      about: 'Acerca de',
      contact: 'Contacto',
    },
  },

  // Hero Section
  hero: {
    launchBadge: 'Próximamente',
    title: 'Construye Algo Increíble',
    tagline: 'Tu Eslogan',
    description:
      'Transforma tus ideas en realidad con nuestra poderosa plataforma.',
    primaryCta: 'Comenzar',
    secondaryCta: 'Más Información',
  },

  // Features Section
  features: {
    title: 'Características',
    learnMore: 'Saber más →',
    items: [
      {
        icon: '⚡',
        title: 'Súper Rápido',
        description: 'Construido para velocidad y rendimiento desde cero.',
        routePath: '/features/lightning-fast',
        featureDetails: {
          price: '$29/mes',
          image: saasLaunchImages.lightningFast,
          altImage: 'Panel de rendimiento súper rápido',
          fullDescription:
            'Experimenta un rendimiento ultrarrápido con nuestra tecnología de vanguardia. Hemos optimizado cada capa de nuestra plataforma para ofrecer tiempos de respuesta inferiores a un segundo, asegurando que tus usuarios nunca tengan que esperar.',
          features: [
            'Tiempos de respuesta inferiores a un segundo en todas las operaciones',
            'Mecanismos avanzados de caché para recuperación instantánea de datos',
            'Entrega global por CDN para velocidad en todo el mundo',
            'Consultas e indexación de base de datos optimizadas',
            'Monitoreo y alertas de rendimiento en tiempo real',
          ],
        },
      },
      {
        icon: '🔒',
        title: 'Seguro por Defecto',
        description: 'Seguridad de nivel empresarial integrada en cada capa.',
        routePath: '/features/secure-by-default',
        featureDetails: {
          price: '$49/mes',
          image: saasLaunchImages.secureByDefault,
          altImage: 'Protección de seguridad y cifrado',
          fullDescription:
            'La seguridad no es una idea tardía: está integrada en todos los aspectos de nuestra plataforma. Desde el cifrado de extremo a extremo hasta auditorías de seguridad regulares, garantizamos que tus datos estén siempre protegidos.',
          features: [
            'Cifrado de extremo a extremo para todas las transferencias de datos',
            'Certificación de cumplimiento SOC 2 Type II',
            'Auditorías de seguridad regulares de terceros',
            'Detección y prevención avanzada de amenazas',
            'Parches y actualizaciones de seguridad automáticas',
          ],
        },
      },
      {
        icon: '🎨',
        title: 'Diseño Hermoso',
        description: 'Interfaces impresionantes que los usuarios aman usar.',
        routePath: '/features/beautiful-design',
        featureDetails: {
          price: '$39/mes',
          image: saasLaunchImages.beautifulDesign,
          altImage: 'Diseño de interfaz hermoso y moderno',
          fullDescription:
            'Cada píxel importa. Nuestro equipo de diseño ha creado interfaces hermosas e intuitivas que deleitan a los usuarios y hacen que las tareas complejas parezcan simples.',
          features: [
            'Diseño de interfaz moderno y limpio',
            'Totalmente responsive en todos los dispositivos',
            'Temas y marca personalizables',
            'Diseño accesible siguiendo las pautas WCAG 2.1',
            'Animaciones y transiciones suaves',
          ],
        },
      },
    ],
  },

  // Stats Section
  stats: {
    items: [
      { number: '10K+', label: 'Usuarios Activos' },
      { number: '99.9%', label: 'Tiempo Activo' },
      { number: '24/7', label: 'Soporte' },
      { number: '50+', label: 'Países' },
    ],
  },

  // Final CTA Section
  finalCta: {
    title: '¿Listo para comenzar?',
    description: 'Únete a miles de usuarios que ya usan nuestra plataforma.',
    button: 'Comenzar Prueba Gratuita',
  },

  // Feature Page
  featurePage: {
    backButton: 'Volver',
    overview: 'Resumen',
    keyFeatures: 'Características Principales',
    priceLabel: 'Precio',
  },

  // Footer
  footer: {
    copyright: '© {year} {companyName}. Todos los derechos reservados.',
    links: {
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      contact: 'Contacto',
    },
  },

  // Accessibility labels
  aria: {
    location: 'ubicación',
    email: 'correo electrónico',
    phone: 'teléfono',
    socialMedia: 'redes sociales',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    rocket: 'cohete',
  },
};
