import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, ArrowRight, Mountain, Users } from "lucide-react";
import { Tour } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";

interface TourCardProps {
  tour: Tour;
  priority?: boolean;
}

export function TourCard({ tour, priority = false }: TourCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl hover:border-stone-300 transition-all duration-300 transform hover:-translate-y-1">
      {/* Tour Image with Badge Overlays */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
        <Image
          src={tour.heroImage}
          alt={tour.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <Badge difficulty={tour.difficulty} className="shadow-sm backdrop-blur-xs">
            {tour.difficulty}
          </Badge>

          {tour.discountPrice && (
            <span className="text-[11px] font-bold bg-amber-500 text-stone-950 px-2 py-0.5 rounded-full shadow-sm">
              Save {formatPrice(tour.price - tour.discountPrice)}
            </span>
          )}
        </div>

        {/* Bottom image metadata */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs pointer-events-none">
          <div className="flex items-center gap-1 font-medium drop-shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-orange-400" />
            <span className="truncate max-w-[180px]">{tour.location}</span>
          </div>

          <div className="flex items-center gap-1 bg-emerald-950/80 backdrop-blur-xs px-2.5 py-0.5 rounded-md font-bold text-white text-[11px]">
            <span>{tour.duration}</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Quick specs row */}
        <div className="flex items-center gap-3 text-xs text-stone-500 font-medium mb-2.5 pb-2.5 border-b border-stone-100">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            <span>{tour.duration}</span>
          </div>
          <span>•</span>
          {tour.maxAltitude && (
            <>
              <div className="flex items-center gap-1">
                <Mountain className="w-3.5 h-3.5 text-stone-400" />
                <span className="truncate">{tour.maxAltitude.split(" ")[0]}</span>
              </div>
              <span>•</span>
            </>
          )}
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-stone-400" />
            <span>{tour.groupSize.split(" ")[0]}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-stone-900 line-clamp-2 group-hover:text-emerald-800 transition-colors">
          <Link href={`/tours/${tour.slug}`}>{tour.title}</Link>
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-stone-600 text-sm line-clamp-2 leading-relaxed flex-1">
          {tour.shortDescription}
        </p>

        {/* Price & CTA Footer */}
        <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
              Price
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm sm:text-base font-black text-emerald-950">
                {tour.priceDisplay || "Contact for Price"}
              </span>
            </div>
          </div>

          <Link
            href={`/tours/${tour.slug}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all duration-200"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
