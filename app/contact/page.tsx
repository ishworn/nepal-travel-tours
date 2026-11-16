import React, { Suspense } from "react";
import { Metadata } from "next";
import {
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact & Trip Planning Inquiry | TrekWithAmrit",
  description:
    "Get in touch with local mountain guide Amrit to plan your customized Nepal trek or tour. Inquiries delivered directly to guideamrit2057@gmail.com and WhatsApp +977 9840781708.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappFull}?text=${encodeURIComponent(
    siteConfig.contact.defaultWhatsAppMessage
  )}`;

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-stone-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-stone-900 text-white py-14 sm:py-20 mb-12 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/images/tours/thorong-la-pass-annapurna.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />

        <Container className="relative z-10 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-orange-400 bg-stone-800/80 px-3.5 py-1.5 rounded-full border border-orange-400/30">
            Get In Touch
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight">
            Plan Your Nepal Journey with Amrit
          </h1>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Have questions about mountain trails, weather windows, or customized private itineraries? Reach out directly to guide Amrit.
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

              <div className="space-y-5">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-stone-900 font-semibold hover:text-orange-600 transition-colors text-sm sm:text-base"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0 border border-[#25D366]/20">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      WhatsApp / Mobile
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-bold hover:underline text-sm sm:text-base"
                    >
                      {siteConfig.contact.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Country / Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 border border-orange-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      Country
                    </p>
                    <p className="text-stone-900 font-medium text-sm sm:text-base">
                      Nepal Only (Kathmandu &amp; Pokhara)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Inquiry Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center text-stone-500">Loading inquiry form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Container>
    </div>
  );
}
