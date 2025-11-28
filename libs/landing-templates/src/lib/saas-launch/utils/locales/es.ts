import { LocaleStrings } from './en';

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
    items: [
      {
        icon: '⚡',
        title: 'Súper Rápido',
        description: 'Construido para velocidad y rendimiento desde cero.',
      },
      {
        icon: '🔒',
        title: 'Seguro por Defecto',
        description: 'Seguridad de nivel empresarial integrada en cada capa.',
      },
      {
        icon: '🎨',
        title: 'Diseño Hermoso',
        description: 'Interfaces impresionantes que los usuarios aman usar.',
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
