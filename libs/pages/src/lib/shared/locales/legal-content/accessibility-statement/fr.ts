import type { AccessibilityStatementContent } from '../../../types';
import { WEBBIT_STUDIO_EMAIL } from '../../../company-info';

export const accessibilityStatementFr: AccessibilityStatementContent = {
  title: "Déclaration d'Accessibilité",
  lastUpdated: 'Dernière mise à jour : 7 décembre 2025',
  sections: {
    commitment: {
      title: "Notre Engagement envers l'Accessibilité",
      content: [
        "Webbit Studio s'engage à garantir l'accessibilité numérique pour les personnes handicapées. Nous améliorons continuellement l'expérience utilisateur pour tous et appliquons les normes d'accessibilité pertinentes.",
        'Nous croyons que chacun devrait pouvoir accéder à notre site Web et à nos services, quelles que soient ses capacités ou sa technologie.',
      ],
    },
    conformance: {
      title: 'Statut de Conformité',
      content: [
        "Les Règles pour l'accessibilité des contenus Web (WCAG) définissent des exigences pour que les concepteurs et les développeurs améliorent l'accessibilité pour les personnes handicapées.",
      ],
      standard: 'WCAG 2.1',
      standardLabel: 'Norme :',
      level:
        "Ce site Web est partiellement conforme au WCAG 2.1 Niveau AA. Partiellement conforme signifie que certaines parties du contenu ne sont pas entièrement conformes à la norme d'accessibilité.",
    },
    features: {
      title: "Fonctionnalités d'Accessibilité",
      content:
        "Nous avons mis en œuvre les fonctionnalités d'accessibilité suivantes :",
      items: [
        'Support de navigation au clavier - tous les éléments interactifs sont accessibles en utilisant uniquement le clavier',
        'Indicateurs de focus - états de focus visibles pour la navigation au clavier',
        'HTML sémantique - structure de titres appropriée et étiquettes ARIA',
        'Texte alternatif pour les images - texte alternatif descriptif pour toutes les images significatives',
        'Contraste des couleurs - le texte et les éléments interactifs respectent les exigences de contraste WCAG AA (4,5:1)',
        "Conception réactive - le contenu s'adapte à différentes tailles d'écran et niveaux de zoom",
        'Lien pour passer au contenu principal - permet aux utilisateurs du clavier de contourner la navigation',
        "Étiquettes de formulaire et messages d'erreur - tous les champs de formulaire ont des étiquettes descriptives",
        'Support multilingue - contenu disponible en plusieurs langues',
        "Support RTL (droite à gauche) - mise en page appropriée pour l'hébreu et autres langues RTL",
      ],
    },
    knownIssues: {
      title: 'Limitations Connues',
      content:
        'Malgré nos meilleurs efforts, certaines limitations peuvent exister. Les problèmes connus incluent :',
      items: [
        'Certains contenus intégrés de tiers peuvent ne pas être entièrement accessibles',
        "Les visualisations de données complexes peuvent nécessiter des descriptions supplémentaires pour les lecteurs d'écran",
        'Certaines animations ne peuvent pas être désactivées (travail en cours sur le support de prefers-reduced-motion)',
      ],
    },
    feedback: {
      title: 'Commentaires',
      content: [
        "Nous accueillons vos commentaires sur l'accessibilité de Webbit Studio. Veuillez nous informer si vous rencontrez des obstacles à l'accessibilité :",
        "Nous essayons de répondre aux commentaires sur l'accessibilité dans les 5 jours ouvrables.",
      ],
      email: WEBBIT_STUDIO_EMAIL,
      emailLabel: 'E-mail :',
    },
    compatibility: {
      title: 'Spécifications Techniques',
      content:
        "L'accessibilité de Webbit Studio repose sur les technologies suivantes :",
      browsers: [
        'Chrome (dernière version)',
        'Firefox (dernière version)',
        'Safari (dernière version)',
        'Edge (dernière version)',
      ],
      browsersLabel: 'Navigateurs Pris en Charge',
      screenReaders: [
        'NVDA avec Firefox sur Windows',
        'JAWS avec Chrome sur Windows',
        'VoiceOver avec Safari sur macOS et iOS',
        'TalkBack avec Chrome sur Android',
      ],
      screenReadersLabel: "Testé avec des Lecteurs d'Écran",
    },
    limitations: {
      title: 'Limitations et Alternatives',
      content:
        "Malgré nos efforts, certains contenus peuvent ne pas encore être entièrement accessibles en raison de limitations techniques ou d'intégrations tierces. Si vous rencontrez des problèmes, veuillez nous contacter pour des arrangements alternatifs.",
    },
    improvements: {
      title: 'Évaluation et Tests',
      content: [
        "Nous évaluons l'accessibilité de Webbit Studio à travers :",
        "• Des tests automatisés réguliers d'accessibilité utilisant des outils standards de l'industrie",
        "• Des tests manuels avec navigation au clavier et lecteurs d'écran",
        '• Les commentaires et rapports des utilisateurs',
        "• Des audits périodiques d'accessibilité par des tiers",
      ],
    },
  },
};
