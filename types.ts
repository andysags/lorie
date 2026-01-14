export interface Feature {
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
}

export interface Passion {
  icon: any; // Lucide icon
  title: string;
  description: string;
}

export interface Quality {
  title: string;
  description: string;
}

export interface Memory {
  image: string;
  caption: string;
}

export interface SiteContent {
  recipientName: string;
  heroSubtitle: string;
  heroImage: string;
  bioText: string;
  bioImage: string;
  features: Feature[];
  passionsImage: string;
  passions: Passion[];
  qualitiesImage: string;
  qualities: Quality[];
  memories: Memory[];
  impactText: string;
  impactImage: string;
  testimonials: Testimonial[];
  futureWishes: string[];
  footerText: string;
}

export interface Testimonial {
  name: string;
  message: string;
  relation?: string;
  image?: string;
}