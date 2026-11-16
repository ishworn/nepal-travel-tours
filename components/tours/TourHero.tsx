import React from "react";
import NextLink from "next/link";
import { Clock, MapPin, Mountain, Users, ChevronRight } from "lucide-react";
import { Tour } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { formatPrice } from "@/lib/utils";

interface TourHeroProps {
  tour: Tour;
}

export function TourHero({ tour }: TourHeroProps) {
  return (
    <section className="relative min-h-[520px] lg:min-h-[580px] flex items-end pb-12 pt-28 sm:pt-36 bg-stone-950 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${tour.heroImage})` }}
      />
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/30" />
      <div className="absolute inset-0 bg-stone-950/20 backdrop-blur-[1px]" />

      <Container className="relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-stone-300 mb-4 flex-wrap">
          <NextLink href="/" className="hover:text-amber-400 transition-colors">
            Home
          </NextLink>
          <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
          <NextLink href="/tours" className="hover:text-amber-400 transition-colors">
            Tours
          </NextLink>
          <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
          <span className="text-amber-400 font-medium truncate max-w-[200px] sm:max-w-md">
            {tour.title}
          </span>
        </nav>

        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <Badge difficulty={tour.difficulty} className="text-xs px-3 py-1 font-bold">
            {tour.difficulty}
          </Badge>

          <div className="flex items-center gap-1.5 bg-stone-900/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 border border-stone-700/60">
            <Clock className="w-3.5 h-3.5 text-orange-400" />
            <span>{tour.duration}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-stone-900/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs text-stone-300 border border-stone-700/60">
            <MapPin className="w-3.5 h-3.5 text-orange-400" />
            <span>{tour.location}</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight drop-shadow-md">
            {tour.title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-stone-200 font-normal leading-relaxed max-w-2xl drop-shadow-sm">
            {tour.subtitle}
          </p>
        </div>

        {/* Quick Facts Pill Bar */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl pt-6 border-t border-white/10">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
            <div className="w-9 h-9 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-stone-300">Duration</p>
              <p className="text-sm font-extrabold text-white">{tour.duration}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
            <div className="w-9 h-9 rounded-lg bg-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <Mountain className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-stone-300">Max Altitude</p>
              <p className="text-sm font-extrabold text-white">{tour.maxAltitude ? tour.maxAltitude.split(" ")[0] : "1,400m"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
            <div className="w-9 h-9 rounded-lg bg-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-stone-300">Group Size</p>
              <p className="text-sm font-extrabold text-white">{tour.groupSize.split(" ")[0]}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/30 text-emerald-300 flex items-center justify-center shrink-0">
              <span className="text-xs font-black">$</span>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-stone-300">Starting From</p>
              <p className="text-sm font-extrabold text-white">{formatPrice(tour.discountPrice || tour.price)}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
