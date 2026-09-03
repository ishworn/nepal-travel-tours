"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Clock, Utensils, Home } from "lucide-react";
import { ItineraryDay } from "@/types";

interface ItineraryProps {
  days: ItineraryDay[];
}

export function Itinerary({ days }: ItineraryProps) {
  // By default, open day 1 and 2
  const [openDays, setOpenDays] = useState<number[]>([1, 2]);

  const toggleDay = (dayNum: number) => {
    setOpenDays((prev) =>
      prev.includes(dayNum)
        ? prev.filter((d) => d !== dayNum)
        : [...prev, dayNum]
    );
  };

  const expandAll = () => setOpenDays(days.map((d) => d.day));
  const collapseAll = () => setOpenDays([]);

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
            Day-by-Day Itinerary
          </h3>
          <p className="text-sm text-stone-500 mt-0.5">
            Total {days.length} days detailed trekking and travel plan
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={expandAll}
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100/70 px-3 py-1.5 rounded-lg transition-colors"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="text-xs font-semibold text-stone-600 hover:text-stone-800 bg-stone-100 hover:bg-stone-200/70 px-3 py-1.5 rounded-lg transition-colors"
          >
            Collapse
          </button>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {days.map((item) => {
          const isOpen = openDays.includes(item.day);

          return (
            <div
              key={item.day}
              className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden transition-all duration-200"
            >
              {/* Day Header Bar */}
              <button
                type="button"
                onClick={() => toggleDay(item.day)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-stone-50/80 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-800 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                    {item.day}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      Day {item.day}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>

                <div className="p-1 rounded-lg text-stone-400 shrink-0">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-emerald-800" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Day Details Body */}
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-stone-700 text-sm border-t border-stone-100 animate-in fade-in">
                  <p className="leading-relaxed text-stone-600 sm:text-base">
                    {item.description}
                  </p>

                  {/* Day Metadata Pills */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center gap-3 text-xs text-stone-500">
                    {item.altitude && (
                      <div className="flex items-center gap-1.5 bg-stone-100 px-2.5 py-1 rounded-md">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        <span><strong>Max Alt:</strong> {item.altitude}</span>
                      </div>
                    )}
                    {item.duration && (
                      <div className="flex items-center gap-1.5 bg-stone-100 px-2.5 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5 text-emerald-700" />
                        <span><strong>Time:</strong> {item.duration}</span>
                      </div>
                    )}
                    {item.accommodation && (
                      <div className="flex items-center gap-1.5 bg-stone-100 px-2.5 py-1 rounded-md">
                        <Home className="w-3.5 h-3.5 text-stone-600" />
                        <span><strong>Lodging:</strong> {item.accommodation}</span>
                      </div>
                    )}
                    {item.meals && (
                      <div className="flex items-center gap-1.5 bg-stone-100 px-2.5 py-1 rounded-md">
                        <Utensils className="w-3.5 h-3.5 text-amber-600" />
                        <span><strong>Meals:</strong> {item.meals}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
