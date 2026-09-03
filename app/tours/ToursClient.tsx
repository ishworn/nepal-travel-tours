"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Tour } from "@/types";
import { TourFilters, FilterState } from "@/components/tours/TourFilters";
import { TourGrid } from "@/components/tours/TourGrid";

interface ToursClientProps {
  initialTours: Tour[];
}

export function ToursClient({ initialTours }: ToursClientProps) {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<FilterState>(() => ({
    search: searchParams.get("search") || "",
    region: searchParams.get("region") || "all",
    difficulty: searchParams.get("difficulty") || "all",
    duration: searchParams.get("duration") || "all",
    sortBy: "popular",
  }));

  const handleReset = () => {
    setFilters({
      search: "",
      region: "all",
      difficulty: "all",
      duration: "all",
      sortBy: "popular",
    });
  };

  const filteredTours = useMemo(() => {
    let result = [...initialTours];

    // Search query filter
    if (filters.search.trim()) {
      const q = filters.search.toLowerCase().trim();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.location.toLowerCase().includes(q) ||
          t.shortDescription.toLowerCase().includes(q)
      );
    }

    // Region / Destination filter
    if (filters.region !== "all") {
      result = result.filter((t) => t.region === filters.region);
    }

    // Difficulty filter
    if (filters.difficulty !== "all") {
      result = result.filter(
        (t) => t.difficulty.toLowerCase() === filters.difficulty.toLowerCase()
      );
    }

    // Duration filter
    if (filters.duration !== "all") {
      if (filters.duration === "short") {
        result = result.filter((t) => t.durationDays <= 5);
      } else if (filters.duration === "medium") {
        result = result.filter((t) => t.durationDays >= 6 && t.durationDays <= 11);
      } else if (filters.duration === "long") {
        result = result.filter((t) => t.durationDays >= 12);
      }
    }

    // Sorting
    if (filters.sortBy === "price-asc") {
      result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
    } else if (filters.sortBy === "price-desc") {
      result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
    } else if (filters.sortBy === "duration-asc") {
      result.sort((a, b) => a.durationDays - b.durationDays);
    } else if (filters.sortBy === "duration-desc") {
      result.sort((a, b) => b.durationDays - a.durationDays);
    } else if (filters.sortBy === "popular") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [initialTours, filters]);

  return (
    <div>
      <TourFilters
        filters={filters}
        onChange={setFilters}
        onReset={handleReset}
        totalCount={filteredTours.length}
      />

      <TourGrid
        tours={filteredTours}
        onResetFilters={handleReset}
      />
    </div>
  );
}
