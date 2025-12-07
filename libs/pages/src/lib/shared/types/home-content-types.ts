export interface Package {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  startingPrice: string;
  typicalRange: string;
  highlight: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactFormData extends Record<string, string | undefined> {
  name: string;
  email: string;
  country?: string;
  package?: string;
  details?: string;
  consent?: string;
}

export interface ContactFormErrorMessages {
  serverError: string;
  rateLimitError: string;
  submissionFailed: string;
}
