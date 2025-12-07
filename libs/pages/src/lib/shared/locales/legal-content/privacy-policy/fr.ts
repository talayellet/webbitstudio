import type { PrivacyPolicyContent } from '../../../types';
import { WEBBIT_STUDIO_EMAIL } from '../../../company-info';

export const privacyPolicyFr: PrivacyPolicyContent = {
  title: 'Politique de Confidentialité',
  lastUpdated: 'Dernière mise à jour : 6 décembre 2025',
  sections: {
    introduction: {
      title: '1. Introduction',
      content: [
        "Webbit Studio (« nous », « notre » ou « nos ») s'engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web.",
        "Veuillez lire attentivement cette politique de confidentialité. Si vous n'acceptez pas les termes de cette politique de confidentialité, veuillez ne pas accéder au site.",
      ],
    },
    dataCollection: {
      title: '2. Informations que Nous Collectons',
      content: [
        'Nous pouvons collecter des informations vous concernant de diverses manières. Les informations que nous pouvons collecter sur le Site comprennent :',
      ],
      items: [
        'Données Personnelles : Nom, adresse e-mail et informations de contact que vous fournissez volontairement via nos formulaires de contact',
        "Données Dérivées : Informations que nos serveurs collectent automatiquement lorsque vous accédez au Site, telles que votre adresse IP, type de navigateur, système d'exploitation, heures d'accès et les pages que vous avez consultées",
        'Données Financières : Informations de paiement si vous utilisez nos services (traitées de manière sécurisée via des processeurs de paiement tiers)',
      ],
    },
    dataUsage: {
      title: '3. Comment Nous Utilisons Vos Informations',
      content: [
        'Nous utilisons les informations que nous collectons de la manière suivante :',
        'Pour répondre à vos demandes et fournir un service client',
        'Pour vous envoyer des informations administratives, telles que des mises à jour de nos conditions générales et politiques',
        'Pour améliorer notre site web et nos services',
        "Pour analyser les tendances et préférences d'utilisation",
        'Pour prévenir les transactions frauduleuses et protéger contre les activités criminelles',
      ],
    },
    cookies: {
      title: '4. Cookies et Technologies de Suivi',
      content: [
        "Nous pouvons utiliser des cookies, des balises web, des pixels de suivi et d'autres technologies de suivi sur le Site pour aider à personnaliser le Site et améliorer votre expérience.",
        "Lorsque vous accédez au Site, vos informations personnelles ne sont pas collectées via l'utilisation de technologies de suivi. La plupart des navigateurs sont configurés pour accepter les cookies par défaut. Vous pouvez supprimer ou rejeter les cookies, mais cela peut affecter certaines fonctionnalités ou services de notre Site.",
      ],
    },
    dataSharing: {
      title: '5. Divulgation de Vos Informations',
      content: [
        'Nous pouvons partager les informations que nous avons collectées à votre sujet dans certaines situations. Vos informations peuvent être divulguées comme suit :',
        "Par la Loi ou pour Protéger les Droits : Si nous pensons que la divulgation d'informations est nécessaire pour se conformer à la loi, appliquer nos politiques du site ou protéger nos droits ou ceux d'autrui, la propriété ou la sécurité.",
        "Fournisseurs de Services Tiers : Nous pouvons partager vos informations avec des tiers qui fournissent des services pour nous ou en notre nom, tels que le traitement des paiements, l'analyse des données, la livraison de courrier électronique, les services d'hébergement et le service client.",
      ],
    },
    yourRights: {
      title: '6. Vos Droits (RGPD)',
      content: [
        "Si vous êtes résident de l'Espace économique européen (EEE), vous disposez de certains droits en matière de protection des données :",
      ],
      rights: [
        "Le droit d'accès : vous avez le droit de demander des copies de vos données personnelles",
        'Le droit de rectification : vous avez le droit de demander que nous corrigions toute information que vous jugez inexacte',
        "Le droit à l'effacement : vous avez le droit de demander que nous effacions vos données personnelles, sous certaines conditions",
        'Le droit de restreindre le traitement : vous avez le droit de demander que nous restreignions le traitement de vos données personnelles, sous certaines conditions',
        "Le droit d'opposition au traitement : vous avez le droit de vous opposer à notre traitement de vos données personnelles, sous certaines conditions",
        'Le droit à la portabilité des données : vous avez le droit de demander que nous transférions les données que nous avons collectées à une autre organisation, ou directement à vous, sous certaines conditions',
      ],
    },
    dataSecurity: {
      title: '8. Sécurité de Vos Informations',
      content: [
        "Nous utilisons des mesures de sécurité administratives, techniques et physiques pour aider à protéger vos informations personnelles. Bien que nous ayons pris des mesures raisonnables pour sécuriser les informations personnelles que vous nous fournissez, veuillez noter que malgré nos efforts, aucune mesure de sécurité n'est parfaite ou impénétrable, et aucune méthode de transmission de données ne peut être garantie contre toute interception ou autre type d'utilisation abusive.",
      ],
    },
    contact: {
      title: '9. Nous Contacter',
      content: [
        'Si vous avez des questions ou des commentaires sur cette Politique de Confidentialité, veuillez nous contacter à :',
      ],
      email: WEBBIT_STUDIO_EMAIL,
    },
  },
};
