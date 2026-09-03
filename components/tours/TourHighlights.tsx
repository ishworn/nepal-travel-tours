import React from "react";
import { Sparkles, Calendar, Activity } from "lucide-react";

interface TourHighlightsProps {
  highlights: string[];
  bestSeason: string[];
  fitnessLevel: string;
}

export function TourHighlights({
  highlights,
  bestSeason,
  fitnessLevel,
}: TourHighlightsProps) {
  return (
    <div className="space-y-6">
      {/* Route Highlights List */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>Tour Highlights</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200/80"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                ✓
              </div>
              <p className="text-sm text-stone-800 leading-snug">{highlight}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Season & Fitness Quick Box */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-800 flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
              Best Seasons to Visit
            </h4>
            <p className="text-sm font-semibold text-stone-800 mt-1">
              {bestSeason.join(" & ")}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-800 flex items-center justify-center shrink-0">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Required Fitness Level
            </h4>
            <p className="text-sm text-stone-700 mt-1 leading-snug">
              {fitnessLevel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
