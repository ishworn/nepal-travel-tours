"use client";

import React, { useState } from "react";
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const ALL_PACKAGES = [
  "General Nepal Trekking / Tour Inquiry",
  // 8 Trekking Packages
  "Everest Base Camp Trek – 14 Days",
  "Annapurna Base Camp Trek – 10–14 Days",
  "Mardi Himal Trek – 5–7 Days",
  "Langtang Valley Trek – 7–10 Days",
  "Manaslu Circuit Trek – 14–18 Days",
  "Ghorepani Poon Hill Trek – 4–5 Days",
  "Gokyo Lakes Trek – 12–14 Days",
  "Upper Mustang Trek – 10–14 Days",
  // 6 Tour Packages
  "Kathmandu Valley Cultural Tour",
  "Kathmandu – Pokhara Tour",
  "Pokhara Sightseeing Tour",
  "Chitwan Jungle Safari",
  "Lumbini Buddhist Heritage Tour",
  "Nepal Cultural and Heritage Tour",
  // Custom
  "Custom Tailored Nepal Itinerary",
];

export function InquirySection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    packagePreference: "General Nepal Trekking / Tour Inquiry",
    travellers: "2 Travellers",
    travelDate: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    // Client-side quick check
    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      setLoading(false);
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email address.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address (e.g. name@example.com).");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send inquiry. Please try WhatsApp directly.");
      }

      setSuccessMessage(
        result.message ||
          "Thank you! Your trip inquiry has been received. Amrit will review your journey details and reply within 24 hours."
      );

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        packagePreference: "General Nepal Trekking / Tour Inquiry",
        travellers: "2 Travellers",
        travelDate: "",
        message: "",
      });
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : "Failed to submit your inquiry. Please try again or message via WhatsApp directly.";
      setErrorMessage(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const encodedDefaultWhatsApp = encodeURIComponent(
    `Hello TrekWithAmrit! I would like to inquire about planning a trip to Nepal.`
  );
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappFull}?text=${encodedDefaultWhatsApp}`;

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-stone-900 to-stone-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-600/20 px-4 py-1.5 text-xs font-bold text-orange-400 ring-1 ring-orange-500/30 mb-4">
            <Mail className="h-4 w-4" />
            <span>Direct Inquiry to Amrit</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Plan Your <span className="text-orange-500">Nepal Adventure</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300">
            Tell us about your dream trek or tour. Every inquiry is personally reviewed by lead guide Amrit and delivered directly to{" "}
            <span className="text-white font-semibold underline decoration-orange-500">{siteConfig.contact.email}</span>.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact & Perks */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Box */}
            <div className="rounded-3xl bg-stone-800/80 p-7 sm:p-8 ring-1 ring-white/10 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-orange-400" />
                <span>Contact TrekWithAmrit</span>
              </h3>

              <div className="space-y-5 text-sm sm:text-base">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-900/60 text-emerald-300 ring-1 ring-emerald-500/30">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-bold text-white hover:text-orange-400 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#25D366]/20 text-[#25D366] ring-1 ring-[#25D366]/40">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block">
                      WhatsApp & Mobile
                    </span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#25D366] hover:underline"
                    >
                      {siteConfig.contact.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-orange-600/20 text-orange-400 ring-1 ring-orange-500/30">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block">
                      Operational Bases
                    </span>
                    <span className="font-semibold text-stone-200">
                      Kathmandu & Pokhara, Nepal
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] px-6 py-4 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat on WhatsApp Instantly</span>
                </a>
              </div>
            </div>

            {/* Why Book Direct Card */}
            <div className="rounded-3xl bg-emerald-950/40 p-6 sm:p-7 ring-1 ring-emerald-500/20 space-y-3">
              <h4 className="text-base font-bold text-emerald-300 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <span>Our Booking Commitment</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>Zero booking commission to international agents</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>Personal reply from Amrit within 24 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>100% customizable itinerary based on your fitness</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Complete Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white text-stone-900 p-7 sm:p-10 shadow-2xl ring-1 ring-stone-200">
              <h3 className="text-2xl font-black text-stone-900 mb-2">
                Send a Trip Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Fill in the details below and we will send you a tailored itinerary and honest quote.
              </p>

              {/* Success Notification Banner */}
              {successMessage && (
                <div className="mb-6 rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-300 text-emerald-900 flex items-start gap-3 animate-fade-in">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Inquiry Successfully Sent!</h4>
                    <p className="text-xs sm:text-sm mt-1 text-emerald-800 leading-relaxed">
                      {successMessage}
                    </p>
                  </div>
                </div>
              )}

              {/* Error Notification Banner */}
              {errorMessage && (
                <div className="mb-6 rounded-2xl bg-rose-50 p-5 ring-1 ring-rose-300 text-rose-900 flex items-start gap-3 animate-fade-in">
                  <AlertCircle className="h-6 w-6 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Unable to Submit</h4>
                    <p className="text-xs sm:text-sm mt-1 text-rose-800 leading-relaxed">
                      {errorMessage}
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs font-bold text-emerald-700 underline"
                    >
                      Click here to contact Amrit directly on WhatsApp instead →
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Full Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: WhatsApp / Phone & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Your Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. United Kingdom, USA, Australia"
                      className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Preferred Package Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Preferred Trekking or Tour Package
                  </label>
                  <select
                    id="packagePreference"
                    name="packagePreference"
                    value={formData.packagePreference}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                  >
                    {ALL_PACKAGES.map((pkg, idx) => (
                      <option key={idx} value={pkg}>
                        {pkg}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4: Number of Travellers & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Number of Travellers
                    </label>
                    <select
                      name="travellers"
                      value={formData.travellers}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                    >
                      <option value="Solo Traveller (1 person)">Solo Traveller (1 person)</option>
                      <option value="2 Travellers (Couple / Friends)">2 Travellers (Couple / Friends)</option>
                      <option value="Small Group (3-5 Travellers)">Small Group (3-5 Travellers)</option>
                      <option value="Group (6-10 Travellers)">Group (6-10 Travellers)</option>
                      <option value="Large Group (10+ Travellers)">Large Group (10+ Travellers)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Preferred Travel Date / Month
                    </label>
                    <input
                      type="text"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      placeholder="e.g. October 2026 or Spring 2027"
                      className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Row 5: Message / Special Requirements */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Message / Special Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your fitness level, previous trekking experience, customized duration requests, or any questions for Amrit..."
                    className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all resize-y"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center rounded-2xl bg-orange-600 hover:bg-orange-500 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-orange-600/30 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      <span>Sending Your Inquiry to Amrit...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-stone-500">
                  🔒 We respect your privacy. No spam. Delivered directly to guideamrit2057@gmail.com.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Clean, minimalist terminal signature (strictly NO footer section!) */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-xs text-stone-400">
          <p>© {new Date().getFullYear()} <strong>TrekWithAmrit</strong> • Nepal Trekking and Tour Services • All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
