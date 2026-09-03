"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, MapPin } from "lucide-react";
import { GalleryItem, GalleryCategory } from "@/types";
import { Modal } from "@/components/ui/Modal";
import { cn } from "@/lib/utils";

const CATEGORIES: GalleryCategory[] = [
  "All",
  "Mountains",
  "Trekking",
  "Culture",
  "Nature",
  "Adventure",
  "Local Experiences",
];

interface GalleryClientProps {
  initialItems: GalleryItem[];
}

export function GalleryClient({ initialItems }: GalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? initialItems
      : initialItems.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer",
              activeCategory === cat
                ? "bg-emerald-800 text-white shadow-md shadow-emerald-950/20"
                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative aspect-4/3 rounded-3xl overflow-hidden bg-stone-100 cursor-pointer border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={item.imageUrl}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
              <div className="self-end p-2 rounded-xl bg-white/20 backdrop-blur-xs text-white">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-stone-900/80 px-2 py-0.5 rounded-md">
                  {item.category}
                </span>
                <h3 className="text-base font-bold mt-1 leading-snug">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 text-xs text-stone-300 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <Modal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          size="full"
        >
          <div className="space-y-4">
            <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden bg-stone-950">
              <Image
                src={selectedItem.imageUrl}
                alt={selectedItem.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-stone-700 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span className="font-semibold text-stone-900">
                  {selectedItem.location}
                </span>
              </div>
              <span className="text-xs text-stone-500 font-bold uppercase tracking-wider bg-stone-100 px-2.5 py-1 rounded-md">
                {selectedItem.category}
              </span>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
