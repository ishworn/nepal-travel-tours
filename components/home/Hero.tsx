"use client";

import React from "react";
import Image from "next/image";
import { Mountain, Compass, MapPin } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with optimized loading */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-himalayas-sunburst.jpg"
          alt="Majestic Himalayan snow trail expedition in Nepal with TrekWithAmrit"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-subtle-zoom"
        />
        {/* Subtle dark gradient overlay for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
        <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-300 ring-1 ring-white/20 mb-6 shadow-lg">
          <MapPin className="h-4 w-4 text-orange-400" />
          <span>Authentic Nepal Trekking & Tour Specialist</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 drop-shadow-md">
          Discover the Himalayas with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-amber-200">
            TrekWithAmrit
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl md:text-2xl font-normal text-stone-200 leading-relaxed mb-10 drop-shadow">
          Experience unforgettable trekking adventures and cultural journeys across the beautiful landscapes of Nepal.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          {/* Button 1: Explore Trekking */}
          <button
            onClick={() => scrollTo("trekking")}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-emerald-700 hover:bg-emerald-600 px-8 py-4 text-base sm:text-lg font-bold text-white shadow-xl shadow-emerald-950/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Mountain className="mr-2.5 h-5 w-5" />
            Explore Trekking
          </button>

          {/* Button 2: Plan Your Trip */}
          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-orange-600 hover:bg-orange-500 px-8 py-4 text-base sm:text-lg font-bold text-white shadow-xl shadow-orange-600/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Compass className="mr-2.5 h-5 w-5" />
            Plan Your Trip
          </button>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black text-white">Nepal Only</span>
            <span className="text-xs sm:text-sm text-stone-300">100% Local Expertise</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black text-white">Direct Guide</span>
            <span className="text-xs sm:text-sm text-stone-300">No Middlemen Markup</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black text-white">Tailored Trails</span>
            <span className="text-xs sm:text-sm text-stone-300">Flexible Itineraries</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black text-white">Safe & Caring</span>
            <span className="text-xs sm:text-sm text-stone-300">Acclimatization First</span>
          </div>
        </div>
      </div>
    </section>
  );
}
