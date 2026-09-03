"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { TourFAQ as TourFAQType } from "@/types";

interface TourFAQProps {
  faqs: TourFAQType[];
}

export function TourFAQ({ faqs }: TourFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <HelpCircle className="w-5 h-5 text-emerald-700" />
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-sm sm:text-base text-stone-900">
                  {faq.question}
                </span>
                <span className="p-1 text-stone-400 shrink-0">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-emerald-800" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-stone-100 animate-in fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
