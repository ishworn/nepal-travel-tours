import React, { Suspense } from "react";
import { Metadata } from "next";
import { getTours } from "@/services/tour-service";
import { ToursClient } from "./ToursClient";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Trekking & Tours in Nepal | TrekWithAmrit",
  description:
    "Explore our complete catalog of authentic Himalayan treks, cultural heritage tours, and wildlife safaris in Nepal with local guide Amrit.",
};

export default async function ToursPage() {
  const allTours = await getTours();

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-stone-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-stone-900 text-white py-14 sm:py-20 mb-10 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url('/images/hero/hero-himalayas-sunburst.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />

        <Container className="relative z-10 text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400 bg-stone-800/80 px-3.5 py-1.5 rounded-full border border-amber-400/30">
            Nepal Expeditions &amp; Treks
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight">
            Discover Your Next Adventure
          </h1>
          <p className="mt-3 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Browse our hand-crafted selection of Nepal trekking routes and tours.
            All itineraries can be tailored to your private schedule.
          </p>
        </Container>
      </div>

      <Container>
        <Suspense fallback={<div className="py-20 text-center text-stone-500">Loading tours...</div>}>
          <ToursClient initialTours={allTours} />
        </Suspense>
      </Container>
    </div>
  );
}
