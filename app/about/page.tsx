import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Compass, HeartHandshake, Smile, CalendarCheck, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us | TrekWithAmrit",
  description:
    "Explore Nepal with a local guide. Learn more about TrekWithAmrit and our commitment to authentic, safe, and personalized Himalayan trekking adventures.",
};

const BENEFITS = [
  {
    icon: Compass,
    title: "Local Trekking Guide",
    description: "Led by native Nepali guides with deep roots and intimate trail knowledge.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Experiences",
    description: "Every journey is customized to your pace, preferences, and personal goals.",
  },
  {
    icon: Smile,
    title: "Nepali Hospitality",
    description: "Experience genuine mountain village warmth and authentic cultural hospitality.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Trip Planning",
    description: "Direct communication with Amrit and flexible scheduling for peace of mind.",
  },
];

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappFull}?text=${encodeURIComponent(
    siteConfig.contact.defaultWhatsAppMessage
  )}`;

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-stone-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-stone-900 text-white py-16 sm:py-24 mb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url('/images/hero/hero-himalayas-sunburst.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-transparent" />

        <Container className="relative z-10 text-center max-w-4xl">
          <span className="text-xs uppercase font-bold tracking-widest text-orange-400 bg-stone-800/80 px-3.5 py-1.5 rounded-full border border-orange-400/30">
            About TrekWithAmrit
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Explore Nepal with a Local Guide
          </h1>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Experience the Himalayas with authentic Nepali hospitality, tailored pacing, and heartfelt local care.
          </p>
        </Container>
      </div>

      <Container>
        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 -mt-24 sm:-mt-28 relative z-20">
          {BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-xl text-center flex flex-col items-center"
              >
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 ring-1 ring-emerald-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-stone-900">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Founder Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
              <Image
                src="/images/guide/amrit-clients-abc.jpg"
                alt="Guide Amrit with clients at Annapurna Base Camp (ABC 4,130m)"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold tracking-wider text-orange-400">
                  Founder &amp; Local Guide
                </span>
                <h3 className="text-2xl font-black mt-1">
                  Amrit
                </h3>
                <p className="text-xs text-stone-300 mt-0.5">
                  TrekWithAmrit • Nepal Only
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <span>Local Guide Philosophy</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              &ldquo;Travelling is more than visiting destinations. It is about experiencing nature and discovering local cultures.&rdquo;
            </h2>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                At <strong>TrekWithAmrit</strong>, we believe that travelling is more than visiting destinations. It is about experiencing nature, discovering local cultures, meeting people, and creating unforgettable memories.
              </p>
              <p>
                We offer trekking adventures and cultural tours across Nepal, helping travellers explore the Himalayas and experience the natural beauty and traditions of our country.
              </p>
              <p>
                Whether you dream of trekking to Everest Base Camp, exploring the Annapurna region, or discovering Nepal&apos;s cultural heritage, we are here to help you plan your journey.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl bg-orange-600 hover:bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-all"
              >
                Plan Your Trip With Amrit
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-5 py-3 text-sm font-bold text-stone-800 transition-all"
              >
                <MessageCircle className="h-4 w-4 mr-2 text-[#25D366]" />
                WhatsApp: {siteConfig.contact.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
