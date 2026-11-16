import React from "react";
import { getTours, getDestinations } from "@/services/tour-service";
import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedTrekking } from "@/components/home/FeaturedTrekking";
import { PopularDestinations } from "@/components/home/PopularDestinations";
import { NepalTours } from "@/components/home/NepalTours";
import { AboutSection } from "@/components/home/AboutSection";
import { InquirySection } from "@/components/home/InquirySection";

export default async function HomePage() {
  const [tours, destinations] = await Promise.all([
    getTours(),
    getDestinations(),
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Large Himalayan Hero Section */}
      <Hero />

      {/* 2. Why Choose TrekWithAmrit */}
      <WhyChooseUs />

      {/* 3. Featured Trekking Packages (MOST IMPORTANT) */}
      <FeaturedTrekking tours={tours} />

      {/* 4. Popular Trekking Destinations in Nepal */}
      <PopularDestinations destinations={destinations} />

      {/* 5. Tours in Nepal */}
      <NepalTours tours={tours} />

      {/* 6. About TrekWithAmrit */}
      <AboutSection />

      {/* 7. Contact and Trip Inquiry Section (Form ends here, NO footer) */}
      <InquirySection />
    </div>
  );
}
