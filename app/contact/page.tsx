import React, { Suspense } from "react";
import { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact & Trip Planning Inquiry | Himalayan Footprints",
  description:
    "Get in touch with certified lead mountain guide Ishwor Nepal to plan your customized trek, ask questions, or verify high-altitude route conditions.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-stone-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-stone-900 text-white py-14 sm:py-20 mb-12 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />

        <Container className="relative z-10 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400 bg-stone-800/80 px-3.5 py-1.5 rounded-full border border-amber-400/30">
            Get In Touch
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight">
            Plan Your Nepal Journey
          </h1>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Have questions about high-altitude acclimatization, season dates, or custom route extensions? Reach out directly to lead guide Ishwor Nepal.
          </p>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 5 Cols: Direct Contact Details & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-stone-900">
                  Direct Contact Details
                </h3>
                <p className="text-stone-500 text-sm mt-1">
                  We respond to all inquiries within 24 hours.
                </p>
              </div>

              <div className="space-y-4 text-sm text-stone-700">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/60">
                  <Phone className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase font-bold text-stone-400 block">
                      Phone &amp; WhatsApp
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[\s-]/g, "")}`}
                      className="font-bold text-stone-900 hover:text-emerald-800 transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/60">
                  <Mail className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase font-bold text-stone-400 block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-bold text-stone-900 hover:text-emerald-800 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/60">
                  <MapPin className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase font-bold text-stone-400 block">
                      Kathmandu Office
                    </span>
                    <span className="font-semibold text-stone-800">
                      {siteConfig.contact.address.street},{" "}
                      {siteConfig.contact.address.city}, Nepal
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/60">
                  <Clock className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase font-bold text-stone-400 block">
                      Office Hours
                    </span>
                    <span className="text-stone-700">
                      {siteConfig.contact.officeHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 space-y-3">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>Prefer Quick Instant Chat?</span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Message lead guide Ishwor on WhatsApp for fast answers regarding packing, trail permits, or real-time mountain weather.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Namaste%20Ishwor,%20I%20have%20a%20question%20about%20trekking%20in%20Nepal`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Conversation</span>
                </a>
              </div>
            </div>

            {/* Accreditations Trust Box */}
            <div className="bg-stone-900 text-white rounded-3xl p-6 border border-stone-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Legally Registered &amp; Insured</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                Registered under the Government of Nepal Ministry of Culture, Tourism &amp; Civil Aviation. Member of TAAN, NTB, and NMA.
              </p>
            </div>
          </div>

          {/* Right 7 Cols: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center text-stone-500">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Container>
    </div>
  );
}
