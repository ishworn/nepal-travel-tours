import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Compass, MapPin } from "lucide-react";
import { Destination } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface PopularDestinationsProps {
  destinations: Destination[];
}

export function PopularDestinations({ destinations }: PopularDestinationsProps) {
  return (
    <section id="destinations" className="py-20 lg:py-28 bg-white border-y border-stone-200/70">
      <Container>
        <SectionHeading
          tag="Explore By Region"
          title="Popular Nepal Destinations"
          subtitle="From the glaciated 8,000-meter sentinels of the high Himalayas to medieval cultural kingdoms and subtropical wildlife sanctuaries."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              href={`/tours?region=${dest.slug}`}
              className="group relative h-[360px] sm:h-[400px] rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-6 sm:p-8"
            >
              {/* Background Image */}
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Tour Count Badge */}
              <div className="absolute top-5 right-5 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{dest.tourCount} {dest.tourCount === 1 ? "Tour" : "Tours"}</span>
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 transform transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{dest.region}</span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                    {dest.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="mt-2 text-xs sm:text-sm text-stone-300 line-clamp-2 leading-relaxed">
                  {dest.description}
                </p>

                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-stone-300 font-medium">
                  <span>Best season:</span>
                  <span className="text-white font-semibold">{dest.bestTimeToVisit.split(" &")[0]}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
