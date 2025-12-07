import type { PrivacyPolicyContent } from '../../../types';
import { WEBBIT_STUDIO_EMAIL } from '../../../company-info';

export const privacyPolicyEs: PrivacyPolicyContent = {
  title: 'Política de Privacidad',
  lastUpdated: 'Última actualización: 6 de diciembre de 2025',
  sections: {
    introduction: {
      title: '1. Introducción',
      content: [
        'Webbit Studio ("nosotros", "nuestro" o "nos") se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web.',
        'Por favor, lea esta política de privacidad cuidadosamente. Si no está de acuerdo con los términos de esta política de privacidad, por favor no acceda al sitio.',
      ],
    },
    dataCollection: {
      title: '2. Información que Recopilamos',
      content: [
        'Podemos recopilar información sobre usted de diversas maneras. La información que podemos recopilar en el Sitio incluye:',
      ],
      items: [
        'Datos Personales: Nombre, dirección de correo electrónico e información de contacto que proporciona voluntariamente a través de nuestros formularios de contacto',
        'Datos Derivados: Información que nuestros servidores recopilan automáticamente cuando accede al Sitio, como su dirección IP, tipo de navegador, sistema operativo, tiempos de acceso y las páginas que visualizó',
        'Datos Financieros: Información de pago si contrata nuestros servicios (procesada de forma segura a través de procesadores de pago de terceros)',
      ],
    },
    dataUsage: {
      title: '3. Cómo Usamos Su Información',
      content: [
        'Usamos la información que recopilamos de las siguientes maneras:',
        'Para responder a sus consultas y proporcionar servicio al cliente',
        'Para enviarle información administrativa, como actualizaciones de nuestros términos y políticas',
        'Para mejorar nuestro sitio web y servicios',
        'Para analizar tendencias y preferencias de uso',
        'Para prevenir transacciones fraudulentas y proteger contra actividades delictivas',
      ],
    },
    cookies: {
      title: '4. Cookies y Tecnologías de Seguimiento',
      content: [
        'Podemos usar cookies, balizas web, píxeles de seguimiento y otras tecnologías de seguimiento en el Sitio para ayudar a personalizar el Sitio y mejorar su experiencia.',
        'Cuando accede al Sitio, su información personal no se recopila a través del uso de tecnología de seguimiento. La mayoría de los navegadores están configurados para aceptar cookies de forma predeterminada. Puede eliminar o rechazar las cookies, pero esto puede afectar ciertas funciones o servicios de nuestro Sitio.',
      ],
    },
    dataSharing: {
      title: '5. Divulgación de Su Información',
      content: [
        'Podemos compartir información que hemos recopilado sobre usted en ciertas situaciones. Su información puede divulgarse de la siguiente manera:',
        'Por Ley o para Proteger Derechos: Si creemos que la divulgación de información es necesaria para cumplir con la ley, hacer cumplir nuestras políticas del sitio o proteger nuestros derechos o los de otros, propiedad o seguridad.',
        'Proveedores de Servicios de Terceros: Podemos compartir su información con terceros que realizan servicios para nosotros o en nuestro nombre, como procesamiento de pagos, análisis de datos, entrega de correo electrónico, servicios de alojamiento y servicio al cliente.',
      ],
    },
    yourRights: {
      title: '6. Sus Derechos (RGPD)',
      content: [
        'Si es residente del Espacio Económico Europeo (EEE), tiene ciertos derechos de protección de datos:',
      ],
      rights: [
        'El derecho de acceso: tiene derecho a solicitar copias de sus datos personales',
        'El derecho de rectificación: tiene derecho a solicitar que corrijamos cualquier información que considere inexacta',
        'El derecho de supresión: tiene derecho a solicitar que eliminemos sus datos personales, bajo ciertas condiciones',
        'El derecho de restringir el procesamiento: tiene derecho a solicitar que restrinjamos el procesamiento de sus datos personales, bajo ciertas condiciones',
        'El derecho de oposición al procesamiento: tiene derecho a oponerse a nuestro procesamiento de sus datos personales, bajo ciertas condiciones',
        'El derecho a la portabilidad de datos: tiene derecho a solicitar que transfiramos los datos que hemos recopilado a otra organización, o directamente a usted, bajo ciertas condiciones',
      ],
    },
    dataSecurity: {
      title: '8. Seguridad de Su Información',
      content: [
        'Usamos medidas de seguridad administrativas, técnicas y físicas para ayudar a proteger su información personal. Si bien hemos tomado medidas razonables para asegurar la información personal que nos proporciona, tenga en cuenta que, a pesar de nuestros esfuerzos, ninguna medida de seguridad es perfecta o impenetrable, y ningún método de transmisión de datos puede garantizarse contra cualquier intercepción u otro tipo de uso indebido.',
      ],
    },
    contact: {
      title: '9. Contáctenos',
      content: [
        'Si tiene preguntas o comentarios sobre esta Política de Privacidad, contáctenos en:',
      ],
      email: WEBBIT_STUDIO_EMAIL,
    },
  },
};
