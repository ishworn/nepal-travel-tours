import React from "react";
import { getFeaturedTours, getDestinations, getTestimonials } from "@/services/tour-service";
import { Hero } from "@/components/home/Hero";
import { QuickSearch } from "@/components/home/QuickSearch";
import { FeaturedTours } from "@/components/home/FeaturedTours";
import { PopularDestinations } from "@/components/home/PopularDestinations";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AboutPreview } from "@/components/home/AboutPreview";
import { TravelHighlights } from "@/components/home/TravelHighlights";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export default async function HomePage() {
  const [featuredTours, destinations, testimonials] = await Promise.all([
    getFeaturedTours(),
    getDestinations(),
    getTestimonials(),
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Floating Quick Search */}
      <QuickSearch />

      {/* 3. Featured Tours */}
      <FeaturedTours tours={featuredTours} />

      {/* 4. Popular Destinations */}
      <PopularDestinations destinations={destinations} />

      {/* 5. Why Choose Us / Safety */}
      <WhyChooseUs />

      {/* 6. Guide / About Preview */}
      <AboutPreview />

      {/* 7. Travel Highlights & Signature Experiences */}
      <TravelHighlights />

      {/* 8. Customer Testimonials */}
      <Testimonials testimonials={testimonials} />

      {/* 9. High-Impact Call To Action */}
      <CTA />
    </div>
  );
}
