import type { AccessibilityStatementContent } from '../../../types';
import { WEBBIT_STUDIO_EMAIL } from '../../../company-info';

export const accessibilityStatementEs: AccessibilityStatementContent = {
  title: 'Declaración de Accesibilidad',
  lastUpdated: 'Última actualización: 7 de diciembre de 2025',
  sections: {
    commitment: {
      title: 'Nuestro Compromiso con la Accesibilidad',
      content: [
        'Webbit Studio se compromete a garantizar la accesibilidad digital para personas con discapacidades. Mejoramos continuamente la experiencia del usuario para todos y aplicamos los estándares de accesibilidad relevantes.',
        'Creemos que todos deben poder acceder a nuestro sitio web y servicios, independientemente de su capacidad o tecnología.',
      ],
    },
    conformance: {
      title: 'Estado de Conformidad',
      content: [
        'Las Pautas de Accesibilidad para el Contenido Web (WCAG) definen requisitos para que diseñadores y desarrolladores mejoren la accesibilidad para personas con discapacidades.',
      ],
      standard: 'WCAG 2.1',
      standardLabel: 'Estándar:',
      level:
        'Este sitio web es parcialmente conforme con WCAG 2.1 Nivel AA. Parcialmente conforme significa que algunas partes del contenido no cumplen completamente con el estándar de accesibilidad.',
    },
    features: {
      title: 'Características de Accesibilidad',
      content:
        'Hemos implementado las siguientes características de accesibilidad:',
      items: [
        'Soporte de navegación por teclado - todos los elementos interactivos son accesibles usando solo el teclado',
        'Indicadores de foco - estados de foco visibles para la navegación por teclado',
        'HTML semántico - estructura de encabezados apropiada y etiquetas ARIA',
        'Texto alternativo para imágenes - texto alternativo descriptivo para todas las imágenes significativas',
        'Contraste de color - el texto y los elementos interactivos cumplen con los requisitos de contraste WCAG AA (4.5:1)',
        'Diseño responsivo - el contenido se adapta a diferentes tamaños de pantalla y niveles de zoom',
        'Enlace para saltar al contenido principal - permite a los usuarios de teclado omitir la navegación',
        'Etiquetas de formularios y mensajes de error - todos los campos de formulario tienen etiquetas descriptivas',
        'Soporte multiidioma - contenido disponible en varios idiomas',
        'Soporte RTL (derecha a izquierda) - diseño apropiado para hebreo y otros idiomas RTL',
      ],
    },
    knownIssues: {
      title: 'Limitaciones Conocidas',
      content:
        'A pesar de nuestros mejores esfuerzos, pueden existir algunas limitaciones. Los problemas conocidos incluyen:',
      items: [
        'Algún contenido integrado de terceros puede no ser completamente accesible',
        'Las visualizaciones de datos complejas pueden requerir descripciones adicionales para lectores de pantalla',
        'Algunas animaciones no se pueden deshabilitar (trabajando en soporte para prefers-reduced-motion)',
      ],
    },
    feedback: {
      title: 'Comentarios',
      content: [
        'Agradecemos sus comentarios sobre la accesibilidad de Webbit Studio. Por favor, háganos saber si encuentra barreras de accesibilidad:',
        'Intentamos responder a los comentarios sobre accesibilidad dentro de los 5 días hábiles.',
      ],
      email: WEBBIT_STUDIO_EMAIL,
      emailLabel: 'Correo electrónico:',
    },
    compatibility: {
      title: 'Especificaciones Técnicas',
      content:
        'La accesibilidad de Webbit Studio se basa en las siguientes tecnologías:',
      browsers: [
        'Chrome (última versión)',
        'Firefox (última versión)',
        'Safari (última versión)',
        'Edge (última versión)',
      ],
      browsersLabel: 'Navegadores Compatibles',
      screenReaders: [
        'NVDA con Firefox en Windows',
        'JAWS con Chrome en Windows',
        'VoiceOver con Safari en macOS e iOS',
        'TalkBack con Chrome en Android',
      ],
      screenReadersLabel: 'Probado con Lectores de Pantalla',
    },
    limitations: {
      title: 'Limitaciones y Alternativas',
      content:
        'A pesar de nuestros esfuerzos, es posible que parte del contenido aún no sea completamente accesible debido a limitaciones técnicas o integraciones de terceros. Si encuentra algún problema, contáctenos para hacer arreglos alternativos.',
    },
    improvements: {
      title: 'Evaluación y Pruebas',
      content: [
        'Evaluamos la accesibilidad de Webbit Studio a través de:',
        '• Pruebas automatizadas de accesibilidad regulares usando herramientas estándar de la industria',
        '• Pruebas manuales con navegación por teclado y lectores de pantalla',
        '• Comentarios e informes de usuarios',
        '• Auditorías periódicas de accesibilidad de terceros',
      ],
    },
  },
};
