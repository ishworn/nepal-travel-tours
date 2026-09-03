import React from "react";
import { ArrowRight } from "lucide-react";
import { Tour } from "@/types";
import { TourCard } from "@/components/tours/TourCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

interface FeaturedToursProps {
  tours: Tour[];
}

export function FeaturedTours({ tours }: FeaturedToursProps) {
  return (
    <section className="py-20 lg:py-28 bg-stone-50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            tag="Curated Himalayan Expeditions"
            title="Featured Adventures in Nepal"
            subtitle="Hand-crafted trekking itineraries guided by certified local mountaineers. Designed for safety, cultural immersion, and awe-inspiring vistas."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Button
            href="/tours"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0 bg-white"
          >
            Explore All {tours.length}+ Tours
          </Button>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tours.slice(0, 6).map((tour, idx) => (
            <TourCard key={tour.id} tour={tour} priority={idx < 3} />
          ))}
        </div>
      </Container>
    </section>
  );
}
