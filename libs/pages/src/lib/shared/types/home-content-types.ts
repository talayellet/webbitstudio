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

export interface ConvertedPrice {
  original: string;
  converted: string;
  isConverted: boolean;
  isLoading: boolean;
  error: Error | null;
}

export interface ContactFormData {
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
