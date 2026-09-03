import React from "react";
import { Compass, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function CTA() {
  return (
    <section className="py-20 lg:py-28 relative bg-stone-950 text-white overflow-hidden">
      {/* Mountain Texture Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-stone-950/90 to-stone-950/95" />

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-xs font-bold text-amber-300 uppercase tracking-widest">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Your Himalayan Journey Awaits</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Ready to Walk Among the Giants?
          </h2>

          <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Whether you want to join an existing departure or design a bespoke private trek for your family or friends, we are here to plan every step with care.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="amber"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto px-8 py-4 text-base shadow-xl"
            >
              Start Planning Your Journey
            </Button>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20Ishwor,%20I%20would%20like%20to%20plan%20a%20trek%20in%20Nepal`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-md border border-white/20 transition-all active:scale-[0.98]"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>Instant Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Local Guides</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Free Itinerary Consultation</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>No Hidden Charges</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
