import React from "react";
import Image from "next/image";
import { MapPin, Mountain } from "lucide-react";
import { Destination } from "@/types";

interface PopularDestinationsProps {
  destinations: Destination[];
}

export function PopularDestinations({ destinations }: PopularDestinationsProps) {
  return (
    <section id="destinations" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-orange-400 ring-1 ring-white/20 mb-4">
            <MapPin className="h-4 w-4" />
            <span>Iconic Himalayan Landscapes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Popular Trekking <span className="text-emerald-400">Destinations</span> in Nepal
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300">
            From world-renowned base camps to ancient forbidden kingdoms and sacred turquoise lakes, explore the breathtaking trekking territories of Nepal.
          </p>
        </div>

        {/* 6 Image-based Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group relative flex flex-col rounded-3xl overflow-hidden bg-stone-800/80 ring-1 ring-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:ring-emerald-500/50 hover:-translate-y-1.5"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />

                {/* Region Tag badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-xl bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-white/20">
                    <Mountain className="h-3.5 w-3.5 mr-1 text-orange-400" />
                    {dest.region}
                  </span>
                </div>

                {/* Destination Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black text-white group-hover:text-emerald-300 transition-colors">
                    {dest.name}
                  </h3>
                  {dest.tagline && (
                    <p className="text-xs text-orange-300 font-medium mt-0.5">
                      {dest.tagline}
                    </p>
                  )}
                </div>
              </div>

              {/* Description Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-sm text-stone-300 leading-relaxed">
                  {dest.description}
                </p>

                {/* Highlights List */}
                {dest.popularAttractions && dest.popularAttractions.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                      Highlights:
                    </span>
                    <ul className="space-y-1 text-xs text-stone-300">
                      {dest.popularAttractions.slice(0, 3).map((attraction, i) => (
                        <li key={i} className="flex items-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mr-2 flex-shrink-0" />
                          <span>{attraction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
