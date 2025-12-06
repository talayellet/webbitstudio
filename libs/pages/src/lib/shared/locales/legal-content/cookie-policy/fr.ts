import type { CookiePolicyContent } from '../../../types';

export const cookiePolicyFr: CookiePolicyContent = {
  title: 'Politique en matière de Cookies',
  lastUpdated: 'Dernière mise à jour : 6 décembre 2025',
  sections: {
    introduction: {
      title: '1. Introduction',
      content: [
        'Cette Politique en matière de Cookies explique comment Webbit Studio utilise les cookies et technologies similaires pour vous reconnaître lorsque vous visitez notre site web. Elle explique ce que sont ces technologies et pourquoi nous les utilisons, ainsi que vos droits pour contrôler notre utilisation de celles-ci.',
      ],
    },
    whatAreCookies: {
      title: '2. Que sont les Cookies ?',
      content: [
        'Les cookies sont de petits fichiers de données qui sont placés sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Les cookies sont largement utilisés par les propriétaires de sites web pour faire fonctionner leurs sites, ou pour les faire fonctionner plus efficacement, ainsi que pour fournir des informations de rapport.',
        'Les cookies définis par le propriétaire du site web (dans ce cas, Webbit Studio) sont appelés "cookies propriétaires". Les cookies définis par des parties autres que le propriétaire du site web sont appelés "cookies tiers".',
      ],
    },
    howWeUseCookies: {
      title: '3. Comment nous utilisons les Cookies',
      content: [
        'Nous utilisons des cookies propriétaires et tiers pour plusieurs raisons. Certains cookies sont nécessaires pour des raisons techniques afin que notre site web fonctionne, et nous les appelons cookies "essentiels" ou "strictement nécessaires".',
        "D'autres cookies nous permettent de suivre et de cibler les intérêts de nos utilisateurs pour améliorer l'expérience sur notre site web. Des tiers servent des cookies via notre site web à des fins d'analyse et d'autres objectifs.",
      ],
    },
    typesOfCookies: {
      title: '4. Types de Cookies que nous utilisons',
      essential: {
        title: 'Cookies Essentiels',
        description:
          'Ces cookies sont strictement nécessaires pour vous fournir les services disponibles sur notre site web et pour utiliser certaines de ses fonctionnalités.',
        examples: [
          'Préférences de consentement aux cookies',
          'Préférences de langue',
          'Sélection de devise',
        ],
      },
      analytics: {
        title: "Cookies d'Analyse",
        description:
          'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site web en collectant et en rapportant des informations de manière anonyme.',
        examples: [
          'Google Analytics (si mis en œuvre)',
          'Suivi des pages vues',
          'Modèles de comportement des utilisateurs',
        ],
      },
      functional: {
        title: 'Cookies Fonctionnels',
        description:
          'Ces cookies permettent au site web de fournir des fonctionnalités améliorées et une personnalisation.',
        examples: [
          'Mémoriser vos préférences',
          'Contenu personnalisé',
          "Personnalisation de l'interface utilisateur",
        ],
      },
    },
    managingCookies: {
      title: '5. Comment gérer les Cookies',
      content: [
        'Vous pouvez configurer ou modifier les contrôles de votre navigateur web pour accepter ou refuser les cookies. Si vous choisissez de rejeter les cookies, vous pouvez toujours utiliser notre site web, bien que votre accès à certaines fonctionnalités et zones puisse être restreint.',
        'La plupart des navigateurs web permettent un certain contrôle des cookies via les paramètres du navigateur. Pour en savoir plus sur les cookies, y compris comment voir quels cookies ont été définis et comment les gérer et les supprimer, visitez :',
      ],
      browsers: [
        'Chrome: https://support.google.com/chrome/answer/95647',
        'Firefox: https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer',
        'Safari: https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac',
        'Edge: https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09',
      ],
    },
    thirdPartyCookies: {
      title: '6. Cookies Tiers',
      content: [
        "En plus de nos propres cookies, nous pouvons également utiliser divers cookies tiers pour rapporter les statistiques d'utilisation du site web et diffuser des publicités sur et via le site web.",
        "Nous n'avons pas de contrôle sur ces cookies tiers. Vous pouvez en savoir plus sur la façon de refuser ces cookies en visitant la page de désabonnement de la Network Advertising Initiative.",
      ],
    },
    updates: {
      title: '7. Mises à jour de cette Politique en matière de Cookies',
      content: [
        "Nous pouvons mettre à jour cette Politique en matière de Cookies de temps à autre pour refléter les changements dans les cookies que nous utilisons ou pour d'autres raisons opérationnelles, légales ou réglementaires. Veuillez consulter régulièrement cette Politique en matière de Cookies pour rester informé de notre utilisation des cookies.",
        'La date en haut de cette Politique en matière de Cookies indique quand elle a été mise à jour pour la dernière fois.',
      ],
    },
    contact: {
      title: '8. Nous Contacter',
      content: [
        'Si vous avez des questions sur notre utilisation des cookies ou cette Politique de Cookies, veuillez nous contacter à :',
      ],
      email: '',
      emailLabel: 'Email :',
    },
  },
};
