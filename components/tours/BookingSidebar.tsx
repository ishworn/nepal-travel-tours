"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Tour } from "@/types";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { formatPrice } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { submitContactInquiry } from "@/services/tour-service";

interface BookingSidebarProps {
  tour: Tour;
}

export function BookingSidebar({ tour }: BookingSidebarProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    travelersCount: 2,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactInquiry({
        ...formData,
        tourInterestedIn: tour.title,
      });
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-lg p-6 lg:p-7 sticky top-24">
      {/* Price Header */}
      <div className="pb-6 border-b border-stone-100">
        <span className="text-xs uppercase font-bold tracking-wider text-stone-500">
          Trip Price
        </span>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-3xl sm:text-4xl font-black text-stone-950">
            {formatPrice(tour.discountPrice || tour.price)}
          </span>
          {tour.discountPrice && (
            <span className="text-base text-stone-400 line-through font-medium">
              {formatPrice(tour.price)}
            </span>
          )}
          <span className="text-xs text-stone-500 font-medium">/ person</span>
        </div>
        {tour.discountPrice && (
          <p className="mt-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg inline-block">
            Special Offer: Save {formatPrice(tour.price - tour.discountPrice)}
          </p>
        )}
      </div>

      {/* Quick Specs */}
      <div className="py-5 space-y-3 text-xs text-stone-700 border-b border-stone-100">
        <div className="flex items-center justify-between">
          <span className="text-stone-500">Duration:</span>
          <span className="font-bold text-stone-900">{tour.duration}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-stone-500">Difficulty:</span>
          <span className="font-bold text-stone-900">{tour.difficulty}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-stone-500">Group Size:</span>
          <span className="font-bold text-stone-900">{tour.groupSize}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-stone-500">Best Months:</span>
          <span className="font-bold text-stone-900">{tour.bestSeason[0]?.split(" ")[0]}</span>
        </div>
      </div>

      {/* CTAs */}
      <div className="py-6 space-y-3">
        <Button
          variant="amber"
          size="lg"
          className="w-full justify-center text-sm shadow-md"
          onClick={() => setModalOpen(true)}
          icon={<Sparkles className="w-4 h-4" />}
        >
          Enquire About This Tour
        </Button>

        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20Ishwor,%20I%20am%20interested%20in%20the%20${encodeURIComponent(tour.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-stone-300 text-stone-800 hover:bg-stone-50 text-xs font-bold transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* Trust & Guarantee Badges */}
      <div className="space-y-2.5 pt-2 border-t border-stone-100 text-xs text-stone-600">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>100% Tailor-made &amp; Flexible Dates</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Direct booking with licensed local guide</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>No hidden fees &amp; guaranteed departures</span>
        </div>
      </div>

      {/* Inquiry Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setIsSuccess(false);
        }}
        title={`Inquire: ${tour.title}`}
        size="lg"
      >
        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-stone-900">
              Inquiry Sent Successfully!
            </h4>
            <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
              Namaste! Lead guide <strong>{siteConfig.guide.name}</strong> has received your inquiry for <em>{tour.title}</em>. We will respond with personalized dates, gear checklist, and pricing within 24 hours.
            </p>
            <div className="pt-4">
              <Button
                variant="primary"
                onClick={() => {
                  setModalOpen(false);
                  setIsSuccess(false);
                }}
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-stone-500">
              Fill in your details below and we will customize this itinerary to your schedule, fitness, and travel preferences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Connor"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-700 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-700 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-700 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Number of Travelers
                </label>
                <input
                  type="number"
                  min="1"
                  max="25"
                  value={formData.travelersCount}
                  onChange={(e) => setFormData({ ...formData, travelersCount: parseInt(e.target.value) || 1 })}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-700 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                Estimated Travel Date / Month
              </label>
              <input
                type="text"
                placeholder="e.g. October 2026 or Spring 2027"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-700 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                Special Requests or Questions
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your fitness level, dietary requirements, or any questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:border-emerald-700 focus:bg-white resize-none"
              />
            </div>

            <div className="pt-2">
              <Button
                variant="amber"
                size="md"
                className="w-full justify-center"
                isLoading={isSubmitting}
              >
                Send Inquiry to Lead Guide
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
