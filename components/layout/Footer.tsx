"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mountain,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <Container>
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-stone-800/80">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                <Mountain className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-white tracking-tight leading-none">
                  Himalayan<span className="text-amber-500 ml-1">Footprints</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-stone-400 mt-0.5">
                  Treks & Mountain Expeditions
                </span>
              </div>
            </Link>

            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              A boutique local Himalayan trekking and cultural tour agency founded
              by certified mountain guide Ishwor Nepal. We deliver authentic,
              safe, and sustainable high-altitude adventures across Nepal.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-stone-300">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>
                  {siteConfig.contact.address.street},{" "}
                  {siteConfig.contact.address.city}, Nepal
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{siteConfig.contact.phone} (WhatsApp Available)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-300">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tours"
                  className="hover:text-amber-400 transition-colors"
                >
                  All Nepal Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-400 transition-colors"
                >
                  About the Lead Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-amber-400 transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Custom Itinerary Inquiry
                </Link>
              </li>
              <li>
                <Link
                  href="/#why-us"
                  className="hover:text-amber-400 transition-colors"
                >
                  Safety & Why Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Treks */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Top Adventures
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tours/everest-base-camp-trek"
                  className="hover:text-amber-400 transition-colors"
                >
                  Everest Base Camp Trek
                </Link>
              </li>
              <li>
                <Link
                  href="/tours/annapurna-base-camp-trek"
                  className="hover:text-amber-400 transition-colors"
                >
                  Annapurna Base Camp
                </Link>
              </li>
              <li>
                <Link
                  href="/tours/annapurna-circuit-trek"
                  className="hover:text-amber-400 transition-colors"
                >
                  Annapurna Circuit
                </Link>
              </li>
              <li>
                <Link
                  href="/tours/pokhara-adventure-tour"
                  className="hover:text-amber-400 transition-colors"
                >
                  Pokhara Adventure
                </Link>
              </li>
              <li>
                <Link
                  href="/tours/chitwan-jungle-safari"
                  className="hover:text-amber-400 transition-colors"
                >
                  Chitwan Wildlife Safari
                </Link>
              </li>
              <li>
                <Link
                  href="/tours/upper-mustang-trek"
                  className="hover:text-amber-400 transition-colors"
                >
                  Upper Mustang
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Trust */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Himalayan Dispatch
            </h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              Subscribe for season opening dates, trekking permit updates, and
              hidden mountain trail guides.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Namaste! You are subscribed to our dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 text-stone-200 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold py-2 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Government Registered & Licensed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations & Badges */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400 border-b border-stone-800/80">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-stone-300">Accreditations:</span>
            {siteConfig.affiliations.map((item) => (
              <span
                key={item}
                className="bg-stone-900 px-2.5 py-1 rounded-md border border-stone-800 text-[11px]"
              >
                {item}
              </span>
            ))}
          </div>
          <div>
            <span>Guide License: </span>
            <span className="text-amber-400 font-mono font-medium">
              {siteConfig.guide.licenseNumber}
            </span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-stone-300">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-stone-300">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-stone-300">
              Trek Safety Protocols
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
