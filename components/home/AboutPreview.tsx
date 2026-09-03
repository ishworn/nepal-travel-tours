import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Award, Mountain } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-stone-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Guide Image with Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
              <Image
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop"
                alt={siteConfig.guide.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                  Lead Mountain Guide & Founder
                </span>
                <h3 className="text-2xl font-black mt-1">{siteConfig.guide.name}</h3>
                <p className="text-xs text-stone-300 font-mono mt-0.5">
                  {siteConfig.guide.licenseNumber}
                </p>
              </div>
            </div>

            {/* Experience Floating Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-stone-900 text-white p-5 rounded-2xl shadow-xl border border-stone-800 max-w-[220px]">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Award className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Accredited
                </span>
              </div>
              <p className="text-2xl font-black text-white">
                {siteConfig.guide.experienceYears}+ Years
              </p>
              <p className="text-xs text-stone-300">
                Guiding High Passes & Sacred Trails
              </p>
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <Mountain className="w-3.5 h-3.5" />
              <span>Meet Your Himalayan Guide</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
              &ldquo;The mountains are not just our workplace; they are our heritage and home.&rdquo;
            </h2>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Hello and Namaste! I am <strong>{siteConfig.guide.name}</strong>, founder of Himalayan Footprints. For over a decade, I have led travelers from across the world through Nepal&apos;s most remote valleys and highest mountain passes.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Whether your dream is standing beneath the south face of Everest, sharing hot butter tea with Sherpa monks, or gliding above Phewa Lake, our mission is simple: to keep you safe, introduce you to authentic culture, and create memories that stay with you forever.
            </p>

            {/* Key credentials check */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {siteConfig.guide.certifications.slice(0, 4).map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-stone-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                href="/about"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Read My Full Story &amp; Philosophy
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="md"
              >
                Schedule a Direct Call
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
