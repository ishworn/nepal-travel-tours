"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Calendar, Activity } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { destinations } from "@/data/destinations";

export function QuickSearch() {
  const router = useRouter();
  const [region, setRegion] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [duration, setDuration] = useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (region !== "all") params.set("region", region);
    if (difficulty !== "all") params.set("difficulty", difficulty);
    if (duration !== "all") params.set("duration", duration);

    router.push(`/tours?${params.toString()}`);
  };

  return (
    <div className="relative -mt-10 lg:-mt-14 z-20">
      <Container>
        <form
          onSubmit={handleSearch}
          className="bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-stone-200/80 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* Destination */}
            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-2xl border border-stone-200/60 focus-within:border-emerald-700 focus-within:bg-white transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">
                  Destination
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full bg-transparent text-sm font-bold text-stone-900 focus:outline-none truncate cursor-pointer"
                >
                  <option value="all">All of Nepal</option>
                  {destinations.map((d) => (
                    <option key={d.id} value={d.slug}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-2xl border border-stone-200/60 focus-within:border-emerald-700 focus-within:bg-white transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">
                  Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-transparent text-sm font-bold text-stone-900 focus:outline-none truncate cursor-pointer"
                >
                  <option value="all">Any Duration</option>
                  <option value="short">1 - 5 Days</option>
                  <option value="medium">6 - 11 Days</option>
                  <option value="long">12+ Days</option>
                </select>
              </div>
            </div>

            {/* Difficulty */}
            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-2xl border border-stone-200/60 focus-within:border-emerald-700 focus-within:bg-white transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-800 flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">
                  Difficulty
                </label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full bg-transparent text-sm font-bold text-stone-900 focus:outline-none truncate cursor-pointer"
                >
                  <option value="all">Any Fitness Level</option>
                  <option value="easy">Easy / Cultural</option>
                  <option value="moderate">Moderate Trek</option>
                  <option value="challenging">Challenging / High Pass</option>
                  <option value="strenuous">Strenuous Expedition</option>
                </select>
              </div>
            </div>

            {/* Find Adventures Button */}
            <div>
              <button
                type="submit"
                className="w-full h-[62px] bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/20 transition-all active:scale-[0.98] cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Find Adventures</span>
              </button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}
