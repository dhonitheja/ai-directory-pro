export enum Category {
  ALL = 'All',
  TEXT = 'Text & Writing',
  IMAGE = 'Image Generation',
  VIDEO = 'Video Creation',
  AUDIO = 'Audio & Voice',
  CODING = 'Coding Assistant',
  PRODUCTIVITY = 'Productivity',
  MARKETING = 'Marketing',
  DESIGN = 'Design & UI',
  DATA = 'Data & Analytics',
  THREE_D = '3D & Gaming',
  BUSINESS = 'Business & Finance'
}

export enum PricingModel {
  FREE = 'Free',
  FREEMIUM = 'Freemium',
  PAID = 'Paid',
  TRIAL = 'Free Trial'
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: Category;
  rating: number;
  reviewCount: number;
  pricing: PricingModel;
  website: string;
  tags: string[];
  imageUrl: string;
}

export type SortOption = 'rating' | 'reviews' | 'name' | 'newest';
