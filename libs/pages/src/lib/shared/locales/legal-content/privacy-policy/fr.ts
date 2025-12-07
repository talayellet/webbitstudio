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
    thirdPartyProcessors: {
      title: '6. Processeurs de Données Tiers',
      content: [
        'Nous travaillons avec les fournisseurs de services tiers suivants qui traitent des données personnelles en notre nom. Chaque processeur a été soigneusement sélectionné et est contractuellement tenu de traiter vos données conformément aux lois applicables sur la protection des données :',
      ],
      labels: {
        purpose: 'Objectif',
        dataProcessed: 'Données Traitées',
        location: 'Emplacement',
        safeguards: 'Garanties',
      },
      processors: [
        {
          name: 'Web3Forms',
          purpose:
            'Traitement des soumissions de formulaires de contact et livraison des e-mails',
          dataProcessed:
            'Nom, adresse e-mail, contenu du message et horodatage de soumission des formulaires de contact',
          location: 'États-Unis (Infrastructure cloud)',
          safeguards:
            'Accord de traitement des données conforme au RGPD, transmission sécurisée des données via HTTPS, stockage temporaire des données avec suppression automatique après livraison',
        },
        {
          name: 'Sentry',
          purpose:
            "Suivi des erreurs, surveillance des performances et diagnostic d'applications",
          dataProcessed:
            "Journaux d'erreurs, traces de pile, informations d'agent utilisateur, adresses IP (anonymisées automatiquement) et métriques de performance",
          location:
            "États-Unis (avec options de résidence des données dans l'UE disponibles)",
          safeguards:
            'Certifié par le Cadre de confidentialité des données UE-États-Unis, Clauses Contractuelles Types (CCT), contrôles de conservation des données, anonymisation IP activée par défaut',
        },
        {
          name: 'Umami Analytics',
          purpose:
            'Analyse web axée sur la confidentialité et statistiques de visiteurs',
          dataProcessed:
            "Pages vues, informations de référence, type de navigateur, type d'appareil, localisation au niveau du pays (aucune information personnellement identifiable)",
          location:
            "Auto-hébergé sur notre infrastructure ou fournisseurs cloud basés dans l'UE",
          safeguards:
            'Aucun cookie utilisé, aucune collecte de données personnelles, conforme au RGPD par conception, toutes les données anonymisées, les adresses IP ne sont pas stockées',
        },
        {
          name: 'Services de Géolocalisation IP (ipapi.co / geojs.io)',
          purpose:
            'Détermination du pays du visiteur pour la localisation et la diffusion de contenu régional',
          dataProcessed:
            'Adresses IP (traitées en temps réel, non stockées), informations sur le pays et la région',
          location:
            'Plusieurs emplacements mondiaux (points de terminaison API)',
          safeguards:
            'Traitement en temps réel uniquement sans conservation des données, les adresses IP ne sont pas enregistrées ni stockées, cryptage HTTPS pour toutes les requêtes, utilisé uniquement à des fins de localisation',
        },
      ],
    },
    yourRights: {
      title: '7. Vos Droits (RGPD)',
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
    dataRetention: {
      title: '8. Conservation des Données',
      content: [
        "Nous conservons vos informations personnelles uniquement aussi longtemps que nécessaire pour remplir les objectifs décrits dans cette Politique de Confidentialité, à moins qu'une période de conservation plus longue ne soit requise ou permise par la loi. Nos périodes de conservation sont les suivantes :",
      ],
      periods: [
        "Données de Formulaire de Contact : Nous conservons les soumissions de formulaires de contact (nom, e-mail, message) jusqu'à 2 ans à compter de la date de soumission pour nous permettre de répondre à votre demande et de conserver un enregistrement de notre communication",
        "Journaux de Serveur et Données Analytiques : Les données techniques telles que les adresses IP, les types de navigateurs et les heures d'accès sont conservées jusqu'à 12 mois à des fins de sécurité, de dépannage et d'amélioration du site web",
        "Données Financières et Transactionnelles : Si vous utilisez nos services, les enregistrements de paiement et les informations connexes sont conservés jusqu'à 7 ans pour se conformer aux réglementations fiscales et comptables",
        "Communications Marketing : Si vous consentez à recevoir des communications marketing, nous conserverons vos informations de contact jusqu'à ce que vous retiriez votre consentement ou vous désabonniez",
      ],
    },
    dataBreachNotification: {
      title: '9. Notification de Violation de Données',
      content: [
        'Conformément aux articles 33-34 du RGPD, nous avons établi des procédures pour répondre aux violations de données impliquant des informations personnelles :',
      ],
      procedures: [
        "Détection et Évaluation Internes : Nous maintenons des systèmes pour détecter et évaluer les violations potentielles de données. Lors de la découverte d'une violation, nous enquêterons immédiatement pour déterminer la nature, l'étendue et l'impact potentiel de l'incident",
        "Notification à l'Autorité de Surveillance : Si une violation est susceptible d'entraîner un risque pour vos droits et libertés, nous informerons l'autorité de surveillance compétente (Information Commissioner's Office pour le Royaume-Uni, ou votre autorité locale de protection des données) dans les 72 heures suivant la prise de connaissance de la violation",
        "Notification Individuelle : Si une violation est susceptible d'entraîner un risque élevé pour vos droits et libertés, nous vous informerons directement sans délai indu. Notre notification comprendra une description de la violation, les conséquences probables et les mesures que nous prenons pour y remédier",
        "Documentation : Nous conservons des enregistrements de toutes les violations de données, y compris leurs effets et les mesures correctives prises, même si la notification n'est pas requise",
        "Remédiation : Nous prendrons des mesures immédiates pour contenir et remédier à toute violation, y compris travailler avec des experts en cybersécurité, les forces de l'ordre et d'autres parties pertinentes si nécessaire",
      ],
    },
    dataSecurity: {
      title: '10. Sécurité de Vos Informations',
      content: [
        "Nous utilisons des mesures de sécurité administratives, techniques et physiques pour aider à protéger vos informations personnelles. Bien que nous ayons pris des mesures raisonnables pour sécuriser les informations personnelles que vous nous fournissez, veuillez noter que malgré nos efforts, aucune mesure de sécurité n'est parfaite ou impénétrable, et aucune méthode de transmission de données ne peut être garantie contre toute interception ou autre type d'utilisation abusive.",
      ],
    },
    contact: {
      title: '11. Nous Contacter',
      content: [
        'Si vous avez des questions ou des commentaires sur cette Politique de Confidentialité, veuillez nous contacter à :',
      ],
      email: WEBBIT_STUDIO_EMAIL,
    },
  },
};
