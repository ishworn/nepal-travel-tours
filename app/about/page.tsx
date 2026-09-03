import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us & Lead Mountain Guide | Himalayan Footprints",
  description:
    "Meet lead mountain guide Ishwor Nepal and learn the story, mission, and sustainable mountaineering values behind Himalayan Footprints.",
};

const VALUES = [
  {
    title: "Safety is Sacred",
    description:
      "We never race the mountains. Conservative acclimatization, twice-daily biometric checks, and certified wilderness medicine training ensure you return home safe and sound.",
  },
  {
    title: "Respect for Local Sherpas & Porters",
    description:
      "Our porters and assistant guides are the true backbone of Himalayan expeditions. We provide fair living wages, comprehensive insurance, warm alpine gear, and strict load limits.",
  },
  {
    title: "Leave No Trace Mountain Stewardship",
    description:
      "The fragile alpine ecology of the Himalayas demands utmost protection. We carry out all non-biodegradable waste and educate our clients on zero-waste trekking practices.",
  },
  {
    title: "Authentic Cultural Bridges",
    description:
      "We believe in intimate, respectful encounters—sharing monastery kitchens, celebrating local festivals, and introducing you to our friends across the mountain valleys.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-stone-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-stone-900 text-white py-16 sm:py-24 mb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />

        <Container className="relative z-10 text-center max-w-4xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400 bg-stone-800/80 px-3.5 py-1.5 rounded-full border border-amber-400/30">
            About Our Company &amp; Founder
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Born in the Shadow of the Himalayas
          </h1>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            From humble beginnings in the mountain foothills to leading international expeditions across Nepal&apos;s greatest high-altitude sanctuaries.
          </p>
        </Container>
      </div>

      <Container>
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 -mt-24 sm:-mt-28 relative z-20">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-lg text-center"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800 mt-2">
                {stat.label}
              </p>
              <p className="text-xs text-stone-500 mt-1 hidden sm:block">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Founder Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
              <Image
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop"
                alt={siteConfig.guide.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                  {/* [PLACEHOLDER_INFO: Founder Role] */}
                  {siteConfig.guide.role}
                </span>
                <h3 className="text-2xl font-black mt-1">
                  {/* [PLACEHOLDER_INFO: Founder Name] */}
                  {siteConfig.guide.name}
                </h3>
                <p className="text-xs text-stone-300 font-mono mt-0.5">
                  {/* [PLACEHOLDER_INFO: License Number] */}
                  {siteConfig.guide.licenseNumber}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founder&apos;s Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              &ldquo;I started as a young porter carrying packs through the Khumbu, learning that mountains demand respect and give clarity in return.&rdquo;
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                {/* [PLACEHOLDER_INFO: Personal Story - Replace with your own story] */}
                Growing up near the foot of the Ganesh Himal range, the mountains were my playground before they became my life calling. At 18, I carried my first bag as an assistant porter on the Annapurna Circuit. Over the next twelve years, through thousands of mountain hours and formal certifications with the Nepal Mountaineering Association, I became a licensed lead guide.
              </p>
              <p>
                I established <strong>Himalayan Footprints</strong> to offer a more personal, ethical alternative to commercialized mass-tourism agencies. When you trek with us, you aren&apos;t just a booking number on a spreadsheet—you become part of our extended mountain family.
              </p>
              <p>
                Every trail, teahouse, and acclimatization rest day is personally vetted by me to guarantee your safety, comfort, and cultural immersion.
              </p>
            </div>

            {/* Languages and Certifications */}
            <div className="pt-4 border-t border-stone-200 space-y-3">
              <div>
                <span className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Languages Spoken:{" "}
                </span>
                <span className="text-xs sm:text-sm text-stone-600">
                  {/* [PLACEHOLDER_INFO: Languages] */}
                  {siteConfig.guide.languages.join(", ")}
                </span>
              </div>

              <div>
                <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block mb-2">
                  Official Accreditations &amp; Wilderness Credentials:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* [PLACEHOLDER_INFO: Certifications list] */}
                  {siteConfig.guide.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Core Values */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm mb-20">
          <SectionHeading
            tag="Our Guiding Principles"
            title="Our Mission &amp; Values"
            subtitle="The core values that shape every trekking permit we issue, every trail we select, and every guest we welcome."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((val, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0 font-black text-sm">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-1">
                    {val.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community & Sustainability Callout */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-300">
              Community Impact &amp; Eco-Tourism
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Giving Back to Himalayan Mountain Villages
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              We pledge 5% of all expedition profits directly to rural schools and trail preservation initiatives in the Solukhumbu and Manang districts. When you travel with us, your journey directly benefits the families whose homeland welcomes you.
            </p>
            <div className="pt-4">
              <Button
                href="/contact"
                variant="amber"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Plan Your Journey With Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
