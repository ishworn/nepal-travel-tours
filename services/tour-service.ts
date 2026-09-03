import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { testimonials } from "@/data/testimonials";
import { galleryItems } from "@/data/gallery";
import { Tour, Destination, Testimonial, GalleryItem, ContactFormData } from "@/types";

/**
 * Service abstraction layer.
 * All UI components consume data through these service methods.
 * In Phase 2/3, these functions can be seamlessly updated to query PostgreSQL / Supabase / CMS
 * without requiring changes in UI components.
 */

export async function getTours(): Promise<Tour[]> {
  return tours;
}

export async function getFeaturedTours(): Promise<Tour[]> {
  return tours.filter((t) => t.featured);
}

export async function getTourBySlug(slug: string): Promise<Tour | undefined> {
  return tours.find((t) => t.slug === slug);
}

export async function getToursByRegion(regionSlug: string): Promise<Tour[]> {
  return tours.filter((t) => t.region === regionSlug);
}

export async function filterTours(params: {
  region?: string;
  difficulty?: string;
  duration?: string;
  search?: string;
}): Promise<Tour[]> {
  let filtered = [...tours];

  if (params.region && params.region !== "all") {
    filtered = filtered.filter((t) => t.region === params.region);
  }

  if (params.difficulty && params.difficulty !== "all") {
    filtered = filtered.filter((t) => t.difficulty.toLowerCase() === params.difficulty?.toLowerCase());
  }

  if (params.duration && params.duration !== "all") {
    if (params.duration === "short") {
      filtered = filtered.filter((t) => t.durationDays <= 5);
    } else if (params.duration === "medium") {
      filtered = filtered.filter((t) => t.durationDays >= 6 && t.durationDays <= 11);
    } else if (params.duration === "long") {
      filtered = filtered.filter((t) => t.durationDays >= 12);
    }
  }

  if (params.search && params.search.trim()) {
    const query = params.search.toLowerCase().trim();
    filtered = filtered.filter(
      (t) =>
        t.title.toLowerCase().includes(query) ||
        t.location.toLowerCase().includes(query) ||
        t.shortDescription.toLowerCase().includes(query)
    );
  }

  return filtered;
}

export async function getDestinations(): Promise<Destination[]> {
  return destinations;
}

export async function getDestinationBySlug(slug: string): Promise<Destination | undefined> {
  return destinations.find((d) => d.slug === slug);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}

export async function getGalleryItems(category?: string): Promise<GalleryItem[]> {
  if (!category || category === "All") {
    return galleryItems;
  }
  return galleryItems.filter((item) => item.category === category);
}

export async function submitContactInquiry(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  // Phase 1: Local simulation with simulated delay
  // Future Phase: Connect to Next.js API route, database, or n8n webhook
  await new Promise((resolve) => setTimeout(resolve, 800));
  console.log("Tour inquiry submitted successfully:", data);
  return {
    success: true,
    message: "Thank you for reaching out! Our lead guide Ishwor will review your journey details and reply within 24 hours.",
  };
}
