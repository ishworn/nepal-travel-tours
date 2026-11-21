"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Mountain, Clock, CheckCircle2, XCircle, MessageCircle, Compass } from "lucide-react";
import { Tour } from "@/types";
import { siteConfig } from "@/lib/site-config";

interface TourDetailModalProps {
  tour: Tour | null;
  isOpen: boolean;
  onClose: () => void;
  onInquire: (tourName: string) => void;
}

export function TourDetailModal({ tour, isOpen, onClose, onInquire }: TourDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !tour) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello TrekWithAmrit! I am interested in the ${tour.title}. Could you please share more details and pricing?`
  );
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappFull}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-950/75 backdrop-blur-sm animate-fade-in">
      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-80 w-full flex-shrink-0">
          <Image
            src={tour.heroImage}
            alt={`${tour.title} - ${tour.location}`}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-stone-900/70 text-white hover:bg-stone-900 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Title and Badges overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="rounded-lg bg-orange-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                {tour.duration}
              </span>
              <span className="rounded-lg bg-emerald-800/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-emerald-100">
                Difficulty: {tour.difficulty}
              </span>
              {tour.maxAltitude && (
                <span className="rounded-lg bg-stone-800/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-stone-200">
                  Altitude: {tour.maxAltitude}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white drop-shadow">
              {tour.title}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Overview Section */}
          <div>
            <h3 className="text-lg font-bold text-stone-900 mb-2">Overview</h3>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              {tour.description}
            </p>
          </div>

          {/* Key Highlights */}
          {tour.highlights && tour.highlights.length > 0 && (
            <div className="rounded-2xl bg-emerald-50/70 p-5 ring-1 ring-emerald-200/60">
              <h3 className="text-base font-bold text-emerald-950 mb-3 flex items-center">
                <Mountain className="h-5 w-5 text-emerald-700 mr-2" />
                Trip Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tour.highlights.map((h, i) => (
                  <li key={i} className="flex items-start text-xs sm:text-sm text-stone-800">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Day by Day Itinerary */}
          {tour.itinerary && tour.itinerary.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 text-orange-600 mr-2" />
                Day-by-Day Itinerary
              </h3>
              <div className="space-y-3.5 border-l-2 border-emerald-700/20 pl-4 ml-2">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="relative group">
                    {/* Circle marker */}
                    <div className="absolute -left-[23px] top-1 h-3.5 w-3.5 rounded-full border-2 border-emerald-700 bg-white group-hover:bg-emerald-700 transition-colors" />
                    <h4 className="text-sm font-bold text-stone-900">
                      Day {day.day}: {day.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                      {day.description}
                    </p>
                    {day.altitude && (
                      <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                        Max: {day.altitude} {day.duration ? `• ${day.duration}` : ""}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inclusions and Exclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200">
              <h4 className="text-sm font-bold text-stone-900 mb-3 flex items-center">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2" />
                What&apos;s Included
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                {tour.included.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-emerald-600 mr-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200">
              <h4 className="text-sm font-bold text-stone-900 mb-3 flex items-center">
                <XCircle className="h-4 w-4 text-stone-400 mr-2" />
                What&apos;s Excluded
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                {tour.excluded.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-stone-400 mr-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer CTA */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Pricing</span>
            <div className="text-lg font-black text-emerald-900">Contact for Price</div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-emerald-700 hover:bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp Inquiry
            </a>

            {/* Inquire Form CTA */}
            <button
              onClick={() => {
                onClose();
                onInquire(tour.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-orange-600 hover:bg-orange-500 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-600/30 transition-all cursor-pointer"
            >
              <Compass className="h-4 w-4 mr-2" />
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
