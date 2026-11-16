"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, Mountain, MessageCircle, Compass, Eye } from "lucide-react";
import { Tour } from "@/types";
import { siteConfig } from "@/lib/site-config";
import { TourDetailModal } from "@/components/tours/TourDetailModal";

interface FeaturedTrekkingProps {
  tours: Tour[];
}

export function FeaturedTrekking({ tours }: FeaturedTrekkingProps) {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  // Filter only trekking category
  const trekkingPackages = tours.filter((t) => t.category === "trekking");

  const handleInquireNow = (packageName: string) => {
    // 1. Set the select value in the form
    const selectElem = document.getElementById("packagePreference") as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = packageName;
      // Trigger change event for react
      const event = new Event("change", { bubbles: true });
      selectElem.dispatchEvent(event);
    }
    // 2. Scroll smoothly to inquiry section
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getDifficultyBadgeColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      case "moderate":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "challenging":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "strenuous":
        return "bg-rose-100 text-rose-800 border-rose-300";
      default:
        return "bg-stone-100 text-stone-800 border-stone-300";
    }
  };

  return (
    <section id="trekking" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Dominant Stature */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-800 ring-1 ring-emerald-200/80 mb-4">
            <Mountain className="h-4 w-4 text-emerald-700" />
            <span>Signature Himalayan Expeditions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
            Featured <span className="text-emerald-800">Trekking Packages</span> in Nepal
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600">
            Handcrafted Himalayan itineraries led by experienced local Nepali guides. All packages prioritize safe acclimatization, unforgettable trail views, and authentic hospitality.
          </p>
        </div>

        {/* 8 Prominent Trekking Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {trekkingPackages.map((tour) => {
            const encodedWaMessage = encodeURIComponent(
              `Hello TrekWithAmrit! I am interested in the ${tour.title}. Could you please provide itinerary details and pricing?`
            );
            const cardWhatsAppUrl = `https://wa.me/${siteConfig.contact.whatsappFull}?text=${encodedWaMessage}`;

            return (
              <div
                key={tour.id}
                className="group flex flex-col rounded-3xl bg-white shadow-sm ring-1 ring-stone-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-emerald-700/40 hover:-translate-y-1.5"
              >
                {/* Large Photograph Container */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={tour.heroImage}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    {/* Duration Badge */}
                    <span className="inline-flex items-center rounded-xl bg-orange-600/95 backdrop-blur-sm px-3 py-1 text-xs font-black text-white shadow-md">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      {tour.duration}
                    </span>

                    {/* Difficulty Badge */}
                    <span
                      className={`inline-flex items-center rounded-xl border px-2.5 py-0.5 text-[11px] font-bold shadow-sm ${getDifficultyBadgeColor(
                        tour.difficulty
                      )}`}
                    >
                      {tour.difficulty}
                    </span>
                  </div>

                  {/* Bottom Image Overlay: Altitude & Region */}
                  {tour.maxAltitude && (
                    <div className="absolute bottom-3 left-3.5 flex items-center text-xs font-semibold text-stone-200">
                      <Mountain className="h-3.5 w-3.5 text-orange-400 mr-1.5" />
                      <span>Max: {tour.maxAltitude}</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  {/* Trek Title */}
                  <h3 className="text-lg font-extrabold text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-2 min-h-[3.25rem]">
                    {tour.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-stone-600 mt-2 line-clamp-3 leading-relaxed flex-1">
                    {tour.shortDescription}
                  </p>

                  {/* Pricing Display */}
                  <div className="mt-4 pt-3.5 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">Price</span>
                      <span className="text-sm font-black text-emerald-900">
                        {tour.priceDisplay || "Contact for Price"}
                      </span>
                    </div>

                    {/* Quick WhatsApp Inquiry Icon */}
                    <a
                      href={cardWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#25D366] hover:text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg transition-colors"
                      title="Quick inquiry on WhatsApp"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  {/* Action Buttons: View Details & Inquire Now */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <button
                      onClick={() => setSelectedTour(tour)}
                      className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-3 py-2 text-xs font-bold text-stone-700 hover:bg-stone-50 hover:text-emerald-800 transition-all cursor-pointer"
                    >
                      <Eye className="h-3.5 w-3.5 mr-1 text-stone-500" />
                      View Details
                    </button>

                    <button
                      onClick={() => handleInquireNow(tour.title)}
                      className="inline-flex items-center justify-center rounded-xl bg-orange-600 hover:bg-orange-500 px-3 py-2 text-xs font-bold text-white shadow-sm shadow-orange-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <Compass className="h-3.5 w-3.5 mr-1" />
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <TourDetailModal
        tour={selectedTour}
        isOpen={!!selectedTour}
        onClose={() => setSelectedTour(null)}
        onInquire={handleInquireNow}
      />
    </section>
  );
}
