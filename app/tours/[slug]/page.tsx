import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTourBySlug, getTours } from "@/services/tour-service";
import { TourHero } from "@/components/tours/TourHero";
import { TourHighlights } from "@/components/tours/TourHighlights";
import { Itinerary } from "@/components/tours/Itinerary";
import { InclusionsExclusions } from "@/components/tours/InclusionsExclusions";
import { TourFAQ } from "@/components/tours/TourFAQ";
import { TourGallery } from "@/components/tours/TourGallery";
import { BookingSidebar } from "@/components/tours/BookingSidebar";
import { Container } from "@/components/ui/Container";

interface TourPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tours = await getTours();
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);

  if (!tour) {
    return {
      title: "Tour Not Found",
    };
  }

  return {
    title: `${tour.title} (${tour.duration})`,
    description: tour.shortDescription,
    openGraph: {
      title: `${tour.title} | TrekWithAmrit`,
      description: tour.shortDescription,
      images: [{ url: tour.heroImage }],
    },
  };
}

export default async function TourDetailsPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* 1. Large Hero Header with Breadcrumbs & Key Stats */}
      <TourHero tour={tour} />

      {/* Main Content Layout with Sticky Booking Sidebar */}
      <div className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 8 Columns: Tour Story, Itinerary, Details */}
            <div className="lg:col-span-8 space-y-12">
              {/* Tour Overview Section */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Trek Overview
                </h2>
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                  {tour.description}
                </p>
              </section>

              {/* Highlights & Season/Fitness Box */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                <TourHighlights
                  highlights={tour.highlights}
                  bestSeason={tour.bestSeason}
                  fitnessLevel={tour.fitnessLevel}
                />
              </section>

              {/* Day-by-Day Interactive Itinerary */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                <Itinerary days={tour.itinerary} />
              </section>

              {/* What's Included & Excluded */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                <InclusionsExclusions
                  included={tour.included}
                  excluded={tour.excluded}
                />
              </section>

              {/* Photo Showcase */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                <TourGallery images={tour.gallery} title={tour.title} />
              </section>

              {/* FAQs */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                <TourFAQ faqs={tour.faq} />
              </section>
            </div>

            {/* Right 4 Columns: Sticky Booking & Inquiry Card */}
            <aside className="lg:col-span-4">
              <BookingSidebar tour={tour} />
            </aside>
          </div>
        </Container>
      </div>
    </div>
  );
}
