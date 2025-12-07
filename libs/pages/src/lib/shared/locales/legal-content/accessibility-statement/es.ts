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
        'Este sitio web es parcialmente conforme con WCAG 2.1 Nivel AA. Parcialmente conforme significa que algunas partes del contenido no cumplen completamente con el estándar de accesibilidad. Las no conformidades específicas se detallan en la sección "No Conformidades Conocidas" a continuación. Como un equipo pequeño con recursos limitados, no podemos proporcionar fechas específicas de remediación para todos los problemas conocidos. Sin embargo, estamos comprometidos con la mejora continua y revisamos y priorizamos regularmente las mejoras de accesibilidad en función del impacto y los comentarios de los usuarios.',
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
      title: 'No Conformidades Conocidas',
      content:
        'Somos transparentes sobre los problemas de accesibilidad que conocemos. Se conocen las siguientes no conformidades:',
      items: [
        'Las animaciones y transiciones no respetan la configuración prefers-reduced-motion (WCAG 2.3.3) - Afecta a usuarios con trastornos vestibulares. Motivo: Requiere actualizaciones de arquitectura CSS. Solución: Contáctenos para obtener una versión estática del sitio.',
        'Algunos mensajes de error de formularios no están asociados programáticamente con sus campos (WCAG 3.3.1) - Los usuarios de lectores de pantalla pueden no ser notificados inmediatamente de errores. Motivo: Arquitectura de componentes de formulario heredada. Solución: Los mensajes de error aparecen directamente debajo de los campos afectados.',
        'Los iconos SVG decorativos pueden ser anunciados por algunos lectores de pantalla (WCAG 1.1.1) - Puede causar confusión menor pero no bloquea la funcionalidad. Motivo: Actualizaciones incrementales de la biblioteca de iconos en progreso.',
        'Los cuadros de diálogo modales no atrapan el foco del teclado (WCAG 2.4.3) - Los usuarios de teclado pueden tabular al contenido detrás de los modales. Motivo: La gestión del foco requiere refactorización de JavaScript. Solución: Use la tecla ESC o el botón de cerrar.',
        'Algunas combinaciones de colores pueden no cumplir con los requisitos mínimos de contraste (WCAG 1.4.3) - Afecta principalmente al texto de marcador de posición. Motivo: El sistema de diseño se está actualizando.',
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
