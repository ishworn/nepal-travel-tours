import React from "react";
import { Compass, HeartHandshake, Smile, CalendarCheck } from "lucide-react";

const BENEFITS = [
  {
    icon: Compass,
    title: "Local Trekking Guide",
    description:
      "Guided directly by native Nepali guides who know the mountain trails, local culture, altitude pacing, and hidden spots intimately.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Trekking Experiences",
    description:
      "Your journey is tailored to your pace, preferences, and personal goals—whether trekking solo, with family, or in a private group.",
  },
  {
    icon: Smile,
    title: "Authentic Nepali Hospitality",
    description:
      "Experience genuine warmth in traditional Sherpa and Gurung teahouses, sharing stories by the dining fire and savoring homecooked meals.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Trip Planning",
    description:
      "Adaptable dates, custom rest days, and direct communication with your guide from initial inquiry all the way through your adventure.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-stone-50 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full ring-1 ring-orange-200 mb-3">
            Your Himalayan Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Why Travel With <span className="text-emerald-800">TrekWithAmrit</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600">
            We focus on authentic, safe, and personalized adventures across Nepal without generic mass tours or third-party agencies.
          </p>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-stone-200/80 transition-all duration-300 hover:shadow-xl hover:ring-emerald-700/30 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200/60 transition-colors duration-300 group-hover:bg-emerald-800 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-emerald-900 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
