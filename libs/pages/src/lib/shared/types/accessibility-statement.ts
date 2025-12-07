export interface AccessibilityStatementContent {
  title: string;
  lastUpdated: string;
  sections: {
    commitment: {
      title: string;
      content: string[];
    };
    conformance: {
      title: string;
      content: string[];
      standard: string;
      standardLabel: string;
      level: string;
    };
    features: {
      title: string;
      content: string;
      items: string[];
    };
    knownIssues: {
      title: string;
      content: string;
      items: string[];
    };
    feedback: {
      title: string;
      content: string[];
      email: string;
      emailLabel: string;
    };
    compatibility: {
      title: string;
      content: string;
      browsers: string[];
      browsersLabel: string;
      screenReaders: string[];
      screenReadersLabel: string;
    };
    limitations: {
      title: string;
      content: string;
    };
    improvements: {
      title: string;
      content: string[];
    };
  };
}
