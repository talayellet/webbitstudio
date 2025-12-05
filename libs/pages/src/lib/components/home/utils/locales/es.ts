import type { LocaleStrings } from './en';
import type { Package, FAQ } from '../types';

/**
 * Spanish locale strings for Webbit Studio home page
 */
export const es: LocaleStrings = {
  // Header
  header: {
    logo: {
      title: 'Webbit Studio',
      subtitle: 'Sitios web para empresas modernas',
    },
    nav: {
      packages: 'Paquetes',
      process: 'Proceso',
      why: 'Por qué',
      pricing: 'Precios',
      faq: 'Preguntas',
      contact: 'Contacto',
    },
    ariaLabels: {
      toggleMenu: 'Alternar menú',
      closeMenu: 'Cerrar menú',
      scrollToTop: 'Volver arriba',
      mobileMenu: 'Menú de navegación móvil',
    },
  },

  // Hero Section
  hero: {
    title:
      'Sitios web que hacen que tu negocio luzca genial - entregados rápido.',
    description:
      'Webbit Studio crea páginas de aterrizaje, sitios web empresariales, configuración de hosting, implementaciones y paneles de administración personalizados para que puedas gestionar tu contenido con facilidad. Diseñado para pequeñas empresas en todo el mundo.',
    primaryCta: 'Comienza tu proyecto',
    secondaryCta: 'Ver paquetes',
    trust:
      'Confiado por pequeñas empresas y startups en todo el mundo. La mayoría de los proyectos completados en menos de 7 días.',
    visual: {
      mockCards: [
        {
          title: 'Landing',
          subtitle: 'Rápido, simple, efectivo.',
        },
        {
          title: 'Sitio Pro',
          subtitle: 'Multi-página y alojado.',
        },
        {
          title: 'CMS Premium',
          subtitle: 'Edita el contenido tú mismo.',
        },
      ],
    },
  },

  // Tech Strip
  techStrip: {
    title: 'Construido con tecnología moderna',
    badges: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Hosting moderno'],
  },

  // Packages Section
  packagesSection: {
    title: 'Elige tu paquete',
    subtitle:
      'Desde simples páginas de aterrizaje hasta sitios web completos con gestión de contenido, tenemos algo para cada negocio.',
    pricing: {
      startingFrom: 'Desde',
      typicalRange: 'Rango típico:',
      priceNote:
        'La cotización final depende de la región y la complejidad del proyecto.',
      cta: 'Obtener una cotización personalizada',
    },
    packages: [
      {
        name: 'Paquete Página de Aterrizaje',
        tagline: 'Perfecto para freelancers y pequeñas empresas.',
        description:
          'Una página de aterrizaje diseñada a medida enfocada en claridad y conversiones, totalmente responsive y rápida.',
        features: [
          'Página de aterrizaje diseñada a medida',
          'Diseño responsive para móviles',
          'Configuración básica de SEO',
          'Entrega rápida (2–4 días)',
          'Cambios opcionales facturados por solicitud',
        ],
        startingPrice: '$249',
        typicalRange: '$249–$399',
        highlight: 'Mejor para presencia online rápida',
      },
      {
        name: 'Sitio Web Empresarial Pro',
        tagline: 'Para empresas en crecimiento que necesitan más páginas.',
        description:
          'Un sitio web empresarial de varias páginas con hosting e implementación gestionados por nosotros.',
        features: [
          'Hasta 5 páginas (Inicio, Acerca de, Servicios, Contacto, Personalizado)',
          'Configuración de hosting e implementación',
          'Conexión de dominio personalizado seguro',
          'Optimización básica de SEO y rendimiento',
          'Suscripción mensual de hosting + dominio',
        ],
        startingPrice: '$499',
        typicalRange: '$499–$899',
        highlight: 'Más popular para pequeñas empresas',
      },
      {
        name: 'Sitio Web Premium + Panel de Administración (CMS)',
        tagline: 'Edita el contenido de tu sitio web en cualquier momento.',
        description:
          'Todo lo de Pro, más un panel de administración personalizado para que puedas gestionar tu propio contenido.',
        features: [
          'Todas las características del Sitio Web Empresarial Pro',
          'Gestión de contenido personalizada (CMS)',
          'Edición de texto e imágenes de autoservicio',
          'Actualizaciones de contenido ilimitadas (tú editas)',
          'Soporte continuo disponible',
        ],
        startingPrice: '$899',
        typicalRange: '$899–$1,599',
        highlight: 'Ideal para gestión de contenido a largo plazo',
      },
    ] as Package[],
  },

  // Process Section
  processSection: {
    title: 'Cómo trabajamos',
    subtitle:
      'Hemos diseñado un proceso simple y eficiente para llevar tu sitio web de la idea al lanzamiento lo más rápido posible.',
    steps: [
      {
        number: '01',
        title: 'Comparte tus requisitos',
        description:
          'Completa nuestro formulario de contacto o comunícate vía WhatsApp o email. Cuéntanos sobre tu negocio, las páginas que necesitas y tu cronograma.',
      },
      {
        number: '02',
        title: 'Obtén tu cotización',
        description:
          'Revisaremos tu solicitud y enviaremos una cotización personalizada dentro de 24 horas, junto con un paquete sugerido y cronograma.',
      },
      {
        number: '03',
        title: 'Construimos tu sitio',
        description:
          'Una vez aprobado, nos ponemos a trabajar. Recibirás actualizaciones de progreso y podrás solicitar cambios durante todo el proceso.',
      },
      {
        number: '04',
        title: 'Lanzamiento y soporte',
        description:
          'Nos encargamos del hosting, la implementación y la configuración del dominio. Después del lanzamiento, puedes solicitar actualizaciones o gestionar el contenido tú mismo (Premium).',
      },
    ],
  },

  // Why Section
  whySection: {
    title: '¿Por qué Webbit Studio?',
    subtitle:
      'Nos enfocamos en tecnología moderna, diseño limpio y cronogramas que realmente funcionan para dueños de negocios ocupados.',
    benefits: [
      {
        title: 'Entrega rápida',
        text: 'La mayoría de las páginas de aterrizaje se terminan en 2–4 días. Los sitios web Pro y Premium normalmente se entregan en una semana.',
      },
      {
        title: 'Precios justos',
        text: 'Ajustamos las cotizaciones finales según la complejidad del proyecto y el tamaño del negocio para mantener nuestros servicios accesibles.',
      },
      {
        title: 'Tecnología moderna',
        text: 'React, TypeScript, Tailwind y plataformas de hosting modernas mantienen tu sitio rápido y confiable.',
      },
      {
        title: 'Diseñado para conversión',
        text: 'Cada página está estructurada para guiar a los visitantes hacia contactarte o usar tu servicio.',
      },
      {
        title: 'Gestión de contenido flexible',
        text: 'Elige paquetes de construcción única simples, o elige Premium y gestiona tu propio contenido a través de un panel de administración personalizado.',
      },
      {
        title: 'Comunicación clara',
        text: 'Contáctanos por email, WhatsApp o videollamada. Te mantenemos actualizado desde el inicio hasta el lanzamiento.',
      },
    ],
  },

  // Pricing Section
  pricingSection: {
    title: 'Precios simples, justos y globales',
    intro:
      'Mostramos precios en USD "desde" para que las expectativas sean claras, luego ajustamos las cotizaciones finales según la complejidad de tu proyecto.',
    labels: {
      startingFrom: 'Desde',
      typicalRange: 'rango típico:',
    },
    packages: [
      {
        name: 'Paquete Página de Aterrizaje',
        startingPrice: '$249',
        typicalRange: '$249–$399',
        note: 'La cotización final depende de la complejidad del proyecto.',
      },
      {
        name: 'Sitio Web Empresarial Pro',
        startingPrice: '$499',
        typicalRange: '$499–$899',
        note: 'Se aplica suscripción para hosting y dominio.',
      },
      {
        name: 'Sitio Web Premium + Panel de Administración (CMS)',
        startingPrice: '$899',
        typicalRange: '$899–$1,599',
        note: 'Se aplica suscripción para hosting y dominio.',
      },
    ],
  },

  // FAQ Section
  faqSection: {
    title: 'Preguntas frecuentes',
    subtitle:
      '¿Tienes otras preguntas? Estaremos encantados de responderlas—solo contáctanos a través del formulario de contacto a continuación.',
    faqs: [
      {
        question: '¿Qué tan rápido puedo obtener mi sitio web?',
        answer:
          'La mayoría de las páginas de aterrizaje toman alrededor de 2–4 días. Los paquetes Pro y Premium normalmente toman 5–7 días, dependiendo del alcance y rondas de retroalimentación.',
      },
      {
        question: '¿Ofrecen cambios después de la entrega?',
        answer:
          'Sí. Para los paquetes Landing y Pro, las actualizaciones de contenido se pueden solicitar en cualquier momento y se facturan por actualización. Premium incluye un panel de administración autoservicio, para que puedas editar tu contenido cuando quieras.',
      },
      {
        question: '¿Soportan múltiples idiomas?',
        answer:
          'Sí. Los sitios web multiidioma están disponibles bajo solicitud. Podemos discutir tus mercados objetivo y sugerir una estructura que funcione mejor.',
      },
      {
        question: '¿Soy dueño de mi sitio web?',
        answer:
          'Sí. Siempre eres dueño de tu sitio web. También te ayudaremos a configurar y gestionar tu dominio para que permanezca bajo tu control.',
      },
      {
        question: '¿Cómo funcionan los precios?',
        answer:
          'Las cotizaciones finales se ajustan según la complejidad del proyecto y el tamaño del negocio para mantener los precios justos y accesibles.',
      },
    ] as FAQ[],
  },

  // Contact Section
  contactSection: {
    title: '¿Listo para comenzar tu sitio web?',
    intro:
      'Cuéntanos un poco sobre tu negocio, tu ubicación y qué tipo de sitio web necesitas. Te responderemos con una cotización personalizada y un paquete sugerido.',
    contactPoints: [
      'Página de aterrizaje, sitio web empresarial o CMS Premium',
      'La mayoría de los proyectos completados en 3–7 días',
    ],
    form: {
      name: {
        label: 'Nombre',
        placeholder: 'Tu nombre',
      },
      email: {
        label: 'Correo Electrónico',
        placeholder: 'tu@ejemplo.com',
      },
      country: {
        label: 'País / Región',
        placeholder: 'Tu país o región',
      },
      package: {
        label: '¿Qué estás buscando?',
        placeholder: 'Selecciona un paquete',
        options: [
          'Paquete Página de Aterrizaje',
          'Sitio Web Empresarial Pro',
          'Sitio Web Premium + Panel de Administración (CMS)',
          'Aún no estoy seguro / necesito ayuda para decidir',
        ],
      },
      details: {
        label: 'Detalles del proyecto',
        placeholder:
          'Cuéntanos sobre tu negocio, las páginas que necesitas y cualquier plazo o requisito especial.',
      },
      submit: 'Enviar consulta',
      note: '¿Prefieres WhatsApp o una llamada rápida? Podemos compartir detalles de contacto directos en nuestra respuesta.',
    },
  },

  // Footer
  footer: {
    copyright: '© {year} {companyName}. Todos los derechos reservados.',
    tagline: 'Sitios web modernos para pequeñas empresas en todo el mundo.',
    companyName: 'Webbit Studio',
    website: 'webbitstudio.com',
    backToTop: 'Volver arriba',
    links: {
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
    },
  },

  // Price Conversion Notice
  priceConversionNotice: {
    error: 'Conversión de moneda no disponible. Precios mostrados en USD.',
    loading: 'Convirtiendo precios a {currency}...',
    ariaLabels: {
      warning: 'Advertencia',
    },
  },
};
