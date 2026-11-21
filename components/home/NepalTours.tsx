"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, Landmark, MessageCircle, Compass } from "lucide-react";
import { Tour } from "@/types";
import { siteConfig } from "@/lib/site-config";
import { TourDetailModal } from "@/components/tours/TourDetailModal";

interface NepalToursProps {
  tours: Tour[];
}

export function NepalTours({ tours }: NepalToursProps) {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  // Filter tour category
  const tourPackages = tours.filter((t) => t.category === "tour");

  const handleInquireNow = (tourName: string) => {
    const selectElem = document.getElementById("packagePreference") as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = tourName;
      const event = new Event("change", { bubbles: true });
      selectElem.dispatchEvent(event);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="tours" className="py-20 bg-stone-100/70 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Subordinate to trekking */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold text-orange-700 ring-1 ring-orange-200 mb-3">
            <Landmark className="h-3.5 w-3.5 text-orange-600" />
            <span>Cultural & Wildlife Journeys</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Tours in <span className="text-emerald-800">Nepal</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Beyond the high passes: immerse yourself in medieval palaces, holy Buddhist shrines, tranquil lake sunrises, and jungle safaris.
          </p>
        </div>

        {/* 6 Tour Cards Grid (compact & clean) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {tourPackages.map((tour) => {
            const encodedWaMessage = encodeURIComponent(
              `Hello TrekWithAmrit! I am interested in the ${tour.title}. Could you please provide tour details and pricing?`
            );
            const cardWhatsAppUrl = `https://wa.me/${siteConfig.contact.whatsappFull}?text=${encodedWaMessage}`;

            return (
              <div
                key={tour.id}
                className="group flex flex-col rounded-2xl bg-white shadow-sm ring-1 ring-stone-200/90 overflow-hidden transition-all duration-300 hover:shadow-lg hover:ring-emerald-700/30 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-stone-200">
                  <Image
                    src={tour.heroImage}
                    alt={`${tour.title} - ${tour.location}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/10" />

                  {/* Duration Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center rounded-lg bg-emerald-800/95 backdrop-blur-sm px-2.5 py-1 text-xs font-bold text-white shadow">
                      <Clock className="h-3 w-3 mr-1" />
                      {tour.duration}
                    </span>
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-stone-200">
                    {tour.location}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-base font-bold text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
                    {tour.title}
                  </h3>

                  <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed flex-1">
                    {tour.shortDescription}
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-4 pt-3.5 border-t border-stone-100 flex items-center justify-between gap-2">
                    <a
                      href={cardWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#25D366] hover:text-emerald-800 transition-colors py-1.5"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </a>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedTour(tour)}
                        className="rounded-lg border border-stone-300 px-2.5 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 cursor-pointer"
                      >
                        Details
                      </button>

                      <button
                        onClick={() => handleInquireNow(tour.title)}
                        className="inline-flex items-center rounded-lg bg-orange-600 hover:bg-orange-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                      >
                        <Compass className="h-3 w-3 mr-1" />
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tour Detail Modal */}
      <TourDetailModal
        tour={selectedTour}
        isOpen={!!selectedTour}
        onClose={() => setSelectedTour(null)}
        onInquire={handleInquireNow}
      />
    </section>
  );
}
