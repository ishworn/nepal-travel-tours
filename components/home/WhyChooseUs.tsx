import React from "react";
import { ShieldCheck, Mountain, HeartHandshake, Leaf, Award, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PILLARS = [
  {
    icon: <Mountain className="w-6 h-6 text-emerald-800" />,
    title: "100% Local Sherpa & Guide Expertise",
    description:
      "We were born and raised in these Himalayan foothills. Our guides possess intimate trail knowledge, weather instincts, and deep ties with local teahouse families.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-800" />,
    title: "Rigorous Safety & Acclimatization",
    description:
      "Safety is never compromised. We conduct twice-daily pulse oximeter oxygen checks, enforce conservative acclimatization schedules, and carry wilderness first aid kits on every high-altitude route.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-emerald-800" />,
    title: "Direct Pricing, Zero Middlemen",
    description:
      "When you travel with us, you book directly with the local operational guide team in Nepal. Fair wages for porters, transparent pricing, and zero markups from international travel agencies.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-emerald-800" />,
    title: "Responsible Eco-Trekking",
    description:
      "We practice strict 'Leave No Trace' mountain ethics. We carry out all non-biodegradable waste, support community-owned lodges, and contribute to local village schools.",
  },
  {
    icon: <Award className="w-6 h-6 text-emerald-800" />,
    title: "Licensed & Government Accredited",
    description:
      "Officially recognized by the Nepal Tourism Board (NTB), Trekking Agencies' Association of Nepal (TAAN), and Nepal Mountaineering Association (NMA).",
  },
  {
    icon: <Clock className="w-6 h-6 text-emerald-800" />,
    title: "Flexible Custom Itineraries",
    description:
      "No rigid group itineraries. We customize trekking duration, rest days, side excursions, and comfort levels to match your exact fitness, timeline, and travel style.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-stone-50">
      <Container>
        <SectionHeading
          tag="Why Himalayan Footprints"
          title="Why Travel in Nepal With Us?"
          subtitle="More than just guides—we are your mountain mentors, cultural storytellers, and dedicated companions on every step of your Himalayan journey."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:border-emerald-700/30 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-300 shadow-xs">
                {pillar.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2.5 leading-snug">
                {pillar.title}
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
