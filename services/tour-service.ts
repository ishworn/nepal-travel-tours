import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { galleryItems } from "@/data/gallery";
import { Tour, Destination, GalleryItem } from "@/types";

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
  return tours.filter((t) => t.category === "trekking");
}

export async function getFeaturedTrekking(): Promise<Tour[]> {
  return tours.filter((t) => t.category === "trekking");
}

export async function getNepalTours(): Promise<Tour[]> {
  return tours.filter((t) => t.category === "tour");
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

export async function getGalleryItems(category?: string): Promise<GalleryItem[]> {
  if (!category || category === "All") {
    return galleryItems;
  }
  return galleryItems.filter((item) => item.category === category);
}

export async function submitContactInquiry(data: Record<string, unknown>): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch("/api/inquire", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!res.ok) {
      throw new Error(result.error || "Failed to submit inquiry. Please try again.");
    }
    return {
      success: true,
      message: result.message || "Thank you for reaching out! Amrit will reply to you within 24 hours.",
    };
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "There was a problem submitting your inquiry. Please try WhatsApp directly.";
    return {
      success: false,
      message: errMsg,
    };
  }
}
