"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { tours } from "@/data/tours";
import { submitContactInquiry } from "@/services/tour-service";

export function ContactForm() {
  const searchParams = useSearchParams();
  const preSelectedTour = searchParams.get("tour") || "";

  const [formData, setFormData] = useState(() => {
    let initialTour = "";
    if (preSelectedTour) {
      const found = tours.find(
        (t) =>
          t.slug === preSelectedTour ||
          t.title.toLowerCase().includes(preSelectedTour.toLowerCase())
      );
      if (found) initialTour = found.title;
    }

    return {
      name: "",
      email: "",
      phone: "",
      tourInterestedIn: initialTour,
      preferredDate: "",
      travelersCount: 2,
      message: "",
    };
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await submitContactInquiry(formData);
      if (response.success) {
        setIsSuccess(true);
      }
    } catch {
      setErrorMessage("Something went wrong while submitting your inquiry. Please try again or chat via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      tourInterestedIn: "",
      preferredDate: "",
      travelersCount: 2,
      message: "",
    });
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm text-center space-y-5 animate-in fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="text-xs uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80 inline-block">
          Inquiry Successfully Received
        </span>

        <h3 className="text-2xl sm:text-3xl font-black text-stone-900">
          Namaste, {formData.name}!
        </h3>

        <p className="text-stone-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. Lead guide <strong>Ishwor Nepal</strong> will review your travel details and send you a customized itinerary, price quote, and packing checklist within 24 hours.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="outline" size="md" onClick={handleReset}>
            Send Another Inquiry
          </Button>

          <Button href="/tours" variant="primary" size="md">
            Browse More Tours
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-7 sm:p-10 border border-stone-200 shadow-sm">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-stone-900">
          Trip Inquiry &amp; Custom Itinerary
        </h3>
        <p className="text-stone-500 text-sm mt-1">
          Tell us about your dream trip and we will customize everything to your schedule.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-700 focus:bg-white transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-700 focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Phone */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+1 555 123 4567"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-700 focus:bg-white transition-colors"
            />
          </div>

          {/* Number of Travelers */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Number of Travelers
            </label>
            <input
              type="number"
              name="travelersCount"
              min="1"
              max="30"
              value={formData.travelersCount}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-700 focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Tour of Interest */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Tour Interested In
            </label>
            <select
              name="tourInterestedIn"
              value={formData.tourInterestedIn}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-700 focus:bg-white transition-colors cursor-pointer"
            >
              <option value="">-- Select an adventure or Custom --</option>
              {tours.map((t) => (
                <option key={t.id} value={t.title}>
                  {t.title} ({t.duration})
                </option>
              ))}
              <option value="Custom Bespoke Itinerary">
                Custom Bespoke Itinerary (Tailor-made)
              </option>
            </select>
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Estimated Travel Dates / Season
            </label>
            <input
              type="text"
              name="preferredDate"
              placeholder="e.g. October 2026 or Spring 2027"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-700 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
            Your Message or Questions
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your travel plans, previous hiking experience, special requirements, or questions..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-700 focus:bg-white transition-colors resize-none"
          />
        </div>

        {/* Submit CTA */}
        <div className="pt-2">
          <Button
            variant="amber"
            size="lg"
            className="w-full justify-center text-sm shadow-md"
            isLoading={isSubmitting}
            icon={<Send className="w-4 h-4" />}
          >
            Submit Travel Inquiry
          </Button>
          <p className="text-[11px] text-stone-400 text-center mt-3">
            🔒 We respect your privacy. No spam. Direct communication with certified local guides.
          </p>
        </div>
      </form>
    </div>
  );
}
