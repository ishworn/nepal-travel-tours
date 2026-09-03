"use client";

import React from "react";
import { Search, Filter, SlidersHorizontal, RotateCcw } from "lucide-react";
import { destinations } from "@/data/destinations";

export interface FilterState {
  search: string;
  region: string;
  difficulty: string;
  duration: string;
  sortBy: string;
}

interface TourFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  totalCount: number;
}

export function TourFilters({
  filters,
  onChange,
  onReset,
  totalCount,
}: TourFiltersProps) {
  const handleFilterChange = (key: keyof FilterState, value: string) => {
    onChange({
      ...filters,
      [key]: value,
    });
  };

  const hasActiveFilters =
    filters.region !== "all" ||
    filters.difficulty !== "all" ||
    filters.duration !== "all" ||
    filters.search !== "";

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5 sm:p-6 mb-8">
      {/* Top row: Search input & Total count */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-5 border-b border-stone-100">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search trek by name, peak, or region..."
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-700 focus:bg-white transition-colors"
          />
        </div>

        <div className="flex items-center justify-between md:justify-end gap-3 text-sm text-stone-500">
          <span>
            Showing <strong className="text-stone-900 font-bold">{totalCount}</strong> adventures
          </span>
          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100/80 px-2.5 py-1.5 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Selectors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
        {/* Destination Filter */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-emerald-700" />
            <span>Destination</span>
          </label>
          <select
            value={filters.region}
            onChange={(e) => handleFilterChange("region", e.target.value)}
            className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-sm text-stone-800 focus:outline-none focus:border-emerald-700 focus:bg-white transition-colors"
          >
            <option value="all">All Regions</option>
            {destinations.map((d) => (
              <option key={d.id} value={d.slug}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty Filter */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-700" />
            <span>Difficulty</span>
          </label>
          <select
            value={filters.difficulty}
            onChange={(e) => handleFilterChange("difficulty", e.target.value)}
            className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-sm text-stone-800 focus:outline-none focus:border-emerald-700 focus:bg-white transition-colors"
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Easy (Cultural / Leisure)</option>
            <option value="moderate">Moderate (Teahouse Trek)</option>
            <option value="challenging">Challenging (High Passes)</option>
            <option value="strenuous">Strenuous (Endurance)</option>
          </select>
        </div>

        {/* Duration Filter */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-emerald-700" />
            <span>Duration</span>
          </label>
          <select
            value={filters.duration}
            onChange={(e) => handleFilterChange("duration", e.target.value)}
            className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-sm text-stone-800 focus:outline-none focus:border-emerald-700 focus:bg-white transition-colors"
          >
            <option value="all">All Durations</option>
            <option value="short">Short (1 - 5 Days)</option>
            <option value="medium">Medium (6 - 11 Days)</option>
            <option value="long">Long (12+ Days)</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-700" />
            <span>Sort By</span>
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => handleFilterChange("sortBy", e.target.value)}
            className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-sm text-stone-800 focus:outline-none focus:border-emerald-700 focus:bg-white transition-colors"
          >
            <option value="popular">Popularity & Rating</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="duration-asc">Duration: Shortest First</option>
            <option value="duration-desc">Duration: Longest First</option>
          </select>
        </div>
      </div>
    </div>
  );
}
