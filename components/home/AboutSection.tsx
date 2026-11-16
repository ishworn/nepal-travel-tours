import React from "react";
import Image from "next/image";
import { Mountain, Compass, CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function AboutSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappFull}?text=${encodeURIComponent(
    siteConfig.contact.defaultWhatsAppMessage
  )}`;

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with frame & badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Guide & Mountain Image */}
              <div className="relative h-[440px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-stone-900/10">
                <Image
                  src="/images/guide/amrit-guide-kang-la.jpg"
                  alt="Guide Amrit leading high altitude trek at Kang La Pass 5,320m in Nepal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

                {/* Overlaid Guide Card Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg ring-1 ring-stone-200">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-800 text-white font-black text-lg">
                      A
                    </div>
                    <div>
                      <div className="font-extrabold text-stone-900 text-base">Amrit</div>
                      <div className="text-xs font-semibold text-emerald-800">
                        Local Mountain Guide & Founder
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Background Box */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-emerald-800/10 hidden sm:block" />
            </div>
          </div>

          {/* Right Column: Text & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-800 ring-1 ring-emerald-200 w-fit mb-4">
              <Mountain className="h-4 w-4 text-emerald-700" />
              <span>About TrekWithAmrit</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              Explore Nepal with a <span className="text-emerald-800">Local Guide</span>
            </h2>

            {/* Prescribed Exact Content */}
            <div className="mt-6 space-y-4 text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
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

            {/* Key Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-stone-200">
              <div className="flex items-start text-sm text-stone-800">
                <CheckCircle2 className="h-5 w-5 text-emerald-700 mr-2.5 flex-shrink-0 mt-0.5" />
                <span>100% Nepali-owned & operated</span>
              </div>
              <div className="flex items-start text-sm text-stone-800">
                <CheckCircle2 className="h-5 w-5 text-emerald-700 mr-2.5 flex-shrink-0 mt-0.5" />
                <span>High-altitude acclimatization safety</span>
              </div>
              <div className="flex items-start text-sm text-stone-800">
                <CheckCircle2 className="h-5 w-5 text-emerald-700 mr-2.5 flex-shrink-0 mt-0.5" />
                <span>Tailored pacing for every hiker</span>
              </div>
              <div className="flex items-start text-sm text-stone-800">
                <CheckCircle2 className="h-5 w-5 text-emerald-700 mr-2.5 flex-shrink-0 mt-0.5" />
                <span>Transparent pricing with no hidden fees</span>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-orange-600 hover:bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-orange-600/30 transition-all hover:scale-[1.02]"
              >
                <Compass className="h-4 w-4 mr-2" />
                Start Planning With Amrit
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white hover:bg-stone-50 px-5 py-3.5 text-sm font-bold text-stone-800 transition-all"
              >
                <MessageCircle className="h-4 w-4 mr-2 text-[#25D366]" />
                WhatsApp: {siteConfig.contact.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
