import React from "react";
import { Metadata } from "next";
import { getGalleryItems } from "@/services/tour-service";
import { GalleryClient } from "./GalleryClient";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Nepal Photo Gallery | Himalayan Footprints",
  description:
    "Explore stunning photography of Nepal's towering Himalayan peaks, ancient monasteries, trekking trails, diverse wildlife, and cultural festivals.",
};

export default async function GalleryPage() {
  const items = await getGalleryItems();

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-stone-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-stone-900 text-white py-14 sm:py-20 mb-10 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />

        <Container className="relative z-10 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400 bg-stone-800/80 px-3.5 py-1.5 rounded-full border border-amber-400/30">
            Himalayan Visuals
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight">
            Nepal Through the Lens
          </h1>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            A visual chronicle of jagged eight-thousand-meter summits, holy shrines, sacred alpine lakes, and life along the highest trails on earth.
          </p>
        </Container>
      </div>

      <Container>
        <GalleryClient initialItems={items} />
      </Container>
    </div>
  );
}
