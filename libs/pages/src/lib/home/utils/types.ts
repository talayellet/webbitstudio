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
