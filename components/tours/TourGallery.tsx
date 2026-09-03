"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, Maximize2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

interface TourGalleryProps {
  images: string[];
  title: string;
}

export function TourGallery({ images, title }: TourGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
          <Camera className="w-5 h-5 text-emerald-700" />
          <span>Trail Photo Showcase</span>
        </h3>
        <span className="text-xs text-stone-500 font-medium">
          {images.length} Photos
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {images.map((imgUrl, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(imgUrl)}
            className="group relative aspect-4/3 rounded-xl overflow-hidden bg-stone-100 cursor-pointer border border-stone-200 shadow-xs"
          >
            <Image
              src={imgUrl}
              alt={`${title} photo ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/30 transition-colors flex items-center justify-center">
              <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          title={`${title} — Trail View`}
          size="xl"
        >
          <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden bg-stone-950">
            <Image
              src={selectedImage}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
