import React from "react";
import { Compass, Star, ArrowRight, Mountain } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 bg-stone-950 text-white overflow-hidden">
      {/* Immersive Photography Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />

      {/* Cinematic Dark & Ambient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
      <div className="absolute inset-0 bg-stone-950/30 backdrop-blur-[1px]" />

      <Container className="relative z-10 text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-amber-400/40 text-xs sm:text-sm font-semibold text-amber-300 mb-6 shadow-lg animate-in fade-in slide-in-from-bottom-3 duration-500">
          <Mountain className="w-4 h-4 text-amber-400" />
          <span>Authentic Himalayan Journeys with Certified Local Guides</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.08] max-w-5xl mx-auto drop-shadow-lg">
          Explore Nepal. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-300">
            Experience More.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-stone-200 font-normal leading-relaxed max-w-3xl mx-auto drop-shadow-md">
          Discover the mountains, culture, nature, and hidden gems of Nepal with a
          local guide who knows every contour of the journey. From Everest Base Camp to tranquil Pokhara and wild Chitwan.
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/tours"
            variant="amber"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto px-8 py-4 text-base shadow-xl"
          >
            Explore Tours
          </Button>

          <Button
            href="/contact"
            variant="white"
            size="lg"
            icon={<Compass className="w-4 h-4 text-emerald-800" />}
            className="w-full sm:w-auto px-8 py-4 text-base"
          >
            Plan Your Journey
          </Button>
        </div>

        {/* Social Proof & Trust Badges */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-black text-white">12+</p>
            <p className="text-xs text-stone-300 uppercase tracking-wider font-semibold mt-1">
              Years Guiding
            </p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-black text-amber-400 flex items-center justify-center gap-1">
              <span>4.95</span>
              <Star className="w-5 h-5 fill-amber-400" />
            </p>
            <p className="text-xs text-stone-300 uppercase tracking-wider font-semibold mt-1">
              Traveler Rating
            </p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-black text-white">2,400+</p>
            <p className="text-xs text-stone-300 uppercase tracking-wider font-semibold mt-1">
              Happy Trekkers
            </p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-black text-emerald-400">99.8%</p>
            <p className="text-xs text-stone-300 uppercase tracking-wider font-semibold mt-1">
              Safety Record
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
