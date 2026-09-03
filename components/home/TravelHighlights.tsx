import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const HIGHLIGHTS = [
  {
    title: "Golden Sunrise Over Everest",
    location: "Kala Patthar (5,545m)",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
    description:
      "Watch the morning sun illuminate the apex of the planet in warm amber while the Khumbu glacier stirs below.",
    link: "/tours/everest-base-camp-trek",
  },
  {
    title: "Sacred Chants & Butter Lamps",
    location: "Tengboche Monastery",
    image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?q=80&w=800&auto=format&fit=crop",
    description:
      "Receive blessings from high Tibetan Buddhist Lamas surrounded by the dramatic silhouette of Ama Dablam.",
    link: "/tours/everest-base-camp-trek",
  },
  {
    title: "Gliding Above Phewa Lake",
    location: "Sarangkot, Pokhara",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    description:
      "Soar tandem on thermal winds with Fishtail peak mirrored on turquoise water beneath your feet.",
    link: "/tours/pokhara-adventure-tour",
  },
  {
    title: "Wild Rhino Tracking Safari",
    location: "Chitwan National Park",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=800&auto=format&fit=crop",
    description:
      "Glide in a wooden dugout canoe past basking crocodiles and track armored one-horned rhinos in the jungle.",
    link: "/tours/chitwan-jungle-safari",
  },
];

export function TravelHighlights() {
  return (
    <section className="py-20 lg:py-28 bg-stone-900 text-white">
      <Container>
        <SectionHeading
          tag="Unforgettable Moments"
          title="Signature Himalayan Experiences"
          subtitle="We believe in creating visceral moments that transcend ordinary sightseeing—connecting you with the people, mountains, and spirit of Nepal."
          align="center"
          theme="dark"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="group relative h-[380px] rounded-3xl overflow-hidden border border-stone-800 shadow-md flex flex-col justify-end p-6 hover:border-amber-400/50 transition-all duration-300"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent" />

              {/* Content */}
              <div className="relative z-10 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  {item.location}
                </span>

                <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-300 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Experience</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
