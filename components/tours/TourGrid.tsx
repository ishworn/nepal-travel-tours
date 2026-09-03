import React from "react";
import { Tour } from "@/types";
import { TourCard } from "@/components/tours/TourCard";
import { Compass, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface TourGridProps {
  tours: Tour[];
  onResetFilters?: () => void;
}

export function TourGrid({ tours, onResetFilters }: TourGridProps) {
  if (tours.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white rounded-2xl border border-stone-200 shadow-sm max-w-lg mx-auto">
        <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
          <Compass className="w-7 h-7 animate-pulse" />
        </div>
        <h3 className="text-xl font-bold text-stone-900">No matching tours found</h3>
        <p className="mt-2 text-sm text-stone-600 leading-relaxed">
          We couldn&apos;t find any adventures matching your filter criteria. Try adjusting your destination, duration, or difficulty settings.
        </p>
        {onResetFilters && (
          <div className="mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={onResetFilters}
              icon={<RotateCcw className="w-3.5 h-3.5" />}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {tours.map((tour, idx) => (
        <TourCard key={tour.id} tour={tour} priority={idx < 3} />
      ))}
    </div>
  );
}
