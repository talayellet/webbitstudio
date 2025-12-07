import type { AccessibilityStatementContent } from '../../../types';
import { WEBBIT_STUDIO_EMAIL } from '../../../company-info';

export const accessibilityStatementDe: AccessibilityStatementContent = {
  title: 'Barrierefreiheitserklärung',
  lastUpdated: 'Zuletzt aktualisiert: 7. Dezember 2025',
  sections: {
    commitment: {
      title: 'Unser Engagement für Barrierefreiheit',
      content: [
        'Webbit Studio verpflichtet sich, die digitale Barrierefreiheit für Menschen mit Behinderungen zu gewährleisten. Wir verbessern kontinuierlich die Benutzererfahrung für alle und wenden die relevanten Barrierefreiheitsstandards an.',
        'Wir glauben, dass jeder auf unsere Website und Dienstleistungen zugreifen können sollte, unabhängig von Fähigkeiten oder Technologie.',
      ],
    },
    conformance: {
      title: 'Konformitätsstatus',
      content: [
        'Die Web Content Accessibility Guidelines (WCAG) definieren Anforderungen für Designer und Entwickler, um die Barrierefreiheit für Menschen mit Behinderungen zu verbessern.',
      ],
      standard: 'WCAG 2.1',
      standardLabel: 'Standard:',
      level:
        'Diese Website ist teilweise konform mit WCAG 2.1 Level AA. Teilweise konform bedeutet, dass einige Teile des Inhalts nicht vollständig dem Barrierefreiheitsstandard entsprechen.',
    },
    features: {
      title: 'Barrierefreiheitsfunktionen',
      content:
        'Wir haben die folgenden Barrierefreiheitsfunktionen implementiert:',
      items: [
        'Tastaturnavigationsunterstützung - alle interaktiven Elemente sind nur mit der Tastatur zugänglich',
        'Fokusindikatoren - sichtbare Fokuszustände für Tastaturnavigation',
        'Semantisches HTML - korrekte Überschriftenstruktur und ARIA-Labels',
        'Alt-Text für Bilder - beschreibender Alternativtext für alle bedeutsamen Bilder',
        'Farbkontrast - Text und interaktive Elemente erfüllen WCAG AA Kontrastanforderungen (4,5:1)',
        'Responsives Design - Inhalte passen sich verschiedenen Bildschirmgrößen und Zoomstufen an',
        'Zum Hauptinhalt springen Link - ermöglicht Tastaturbenutzern, die Navigation zu überspringen',
        'Formularbeschriftungen und Fehlermeldungen - alle Formularfelder haben beschreibende Labels',
        'Mehrsprachige Unterstützung - Inhalte in mehreren Sprachen verfügbar',
        'RTL (Rechts-nach-Links) Unterstützung - korrektes Layout für Hebräisch und andere RTL-Sprachen',
      ],
    },
    knownIssues: {
      title: 'Bekannte Einschränkungen',
      content:
        'Trotz unserer besten Bemühungen können einige Einschränkungen bestehen. Bekannte Probleme umfassen:',
      items: [
        'Einige eingebettete Inhalte von Drittanbietern sind möglicherweise nicht vollständig barrierefrei',
        'Komplexe Datenvisualisierungen erfordern möglicherweise zusätzliche Screenreader-Beschreibungen',
        'Einige Animationen können nicht deaktiviert werden (Arbeit an prefers-reduced-motion Unterstützung)',
      ],
    },
    feedback: {
      title: 'Feedback',
      content: [
        'Wir begrüßen Ihr Feedback zur Barrierefreiheit von Webbit Studio. Bitte teilen Sie uns mit, wenn Sie auf Barrierefreiheitshindernisse stoßen:',
        'Wir versuchen, auf Barrierefreiheits-Feedback innerhalb von 5 Werktagen zu antworten.',
      ],
      email: WEBBIT_STUDIO_EMAIL,
      emailLabel: 'E-Mail:',
    },
    compatibility: {
      title: 'Technische Spezifikationen',
      content:
        'Die Barrierefreiheit von Webbit Studio basiert auf den folgenden Technologien:',
      browsers: [
        'Chrome (neueste Version)',
        'Firefox (neueste Version)',
        'Safari (neueste Version)',
        'Edge (neueste Version)',
      ],
      browsersLabel: 'Unterstützte Browser',
      screenReaders: [
        'NVDA mit Firefox unter Windows',
        'JAWS mit Chrome unter Windows',
        'VoiceOver mit Safari unter macOS und iOS',
        'TalkBack mit Chrome unter Android',
      ],
      screenReadersLabel: 'Getestet mit Screenreadern',
    },
    limitations: {
      title: 'Einschränkungen und Alternativen',
      content:
        'Trotz unserer Bemühungen sind einige Inhalte möglicherweise noch nicht vollständig barrierefrei aufgrund technischer Einschränkungen oder Drittanbieter-Integrationen. Wenn Sie auf Probleme stoßen, kontaktieren Sie uns bitte für alternative Vereinbarungen.',
    },
    improvements: {
      title: 'Bewertung und Tests',
      content: [
        'Wir bewerten die Barrierefreiheit von Webbit Studio durch:',
        '• Regelmäßige automatisierte Barrierefreiheitstests mit branchenüblichen Tools',
        '• Manuelle Tests mit Tastaturnavigation und Screenreadern',
        '• Benutzerfeedback und Berichte',
        '• Periodische Barrierefreiheitsaudits durch Dritte',
      ],
    },
  },
};
