export type DifficultyLevel = "Easy" | "Moderate" | "Challenging" | "Strenuous";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  altitude?: string;
  duration?: string;
  accommodation?: string;
  meals?: string;
}

export interface TourFAQ {
  question: string;
  answer: string;
}

export interface CompetitorPrice {
  name: string;
  price: number;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  region: string;
  duration: string;
  durationDays: number;
  difficulty: DifficultyLevel;
  price: number;
  priceDisplay?: string;
  marketPrice?: number;
  savingsAmount?: number;
  competitorPrices?: CompetitorPrice[];
  discountPrice?: number;
  groupSize: string;
  maxAltitude?: string;
  category?: "trekking" | "tour";
  shortDescription: string;
  description: string;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  bestSeason: string[];
  fitnessLevel: string;
  featured?: boolean;
  rating?: number;
  reviewsCount?: number;
  faq: TourFAQ[];
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  image: string;
  tourCount: number;
  popularAttractions: string[];
  bestTimeToVisit: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone?: string;
  country?: string;
  packagePreference?: string;
  travellers?: string;
  travelDate?: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  tourInterestedIn?: string;
  preferredDate?: string;
  travelersCount?: number;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  avatar: string;
  tourTitle: string;
  rating: number;
  date: string;
  comment: string;
}

export type GalleryCategory =
  | "All"
  | "Mountains"
  | "Trekking"
  | "Culture"
  | "Nature"
  | "Adventure"
  | "Local Experiences";

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  imageUrl: string;
  location: string;
  alt: string;
}
