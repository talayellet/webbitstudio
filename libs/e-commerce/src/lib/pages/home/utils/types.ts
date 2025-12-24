/**
 * Type definitions for the eCommerce home page
 */

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ShoppingCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  subCategories?: string[];
}

export interface Location {
  code: string;
  name: string;
  flag?: string;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}
