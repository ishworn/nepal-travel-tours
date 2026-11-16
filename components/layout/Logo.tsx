import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
  lightOnly?: boolean;
}

export function Logo({ className = "", lightOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="TrekWithAmrit Homepage"
    >
      {/* Mountain-inspired SVG Mark */}
      <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-2 text-white shadow-md shadow-emerald-950/20 ring-1 ring-white/20 transition-all duration-300 group-hover:from-emerald-700 group-hover:to-emerald-900 group-hover:shadow-emerald-900/30">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Himalayan Sun */}
          <circle cx="21" cy="9" r="3.5" fill="#f97316" />
          
          {/* Back Mountain Peak */}
          <path
            d="M13 10L25 26H17L13 19L10 24H5L13 10Z"
            fill="#94a3b8"
            fillOpacity="0.45"
          />
          
          {/* Forefront Main Himalayan Peak */}
          <path
            d="M11 7L21 26H1L11 7Z"
            fill="currentColor"
          />
          
          {/* Snowcap on Forefront Peak */}
          <path
            d="M11 7L14.5 13.5L12.5 15L11 14L9.5 15L7.5 13.5L11 7Z"
            fill="#ffffff"
          />
          
          {/* Trail / Path Curve */}
          <path
            d="M7 26C10 23 12 25 15 22C17 20 18 21 21 19"
            stroke="#ea580c"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center leading-none">
          <span
            className={`text-xl sm:text-2xl font-black tracking-tight ${
              lightOnly ? "text-white" : "text-emerald-950 group-hover:text-emerald-800"
            }`}
          >
            TrekWith<span className="text-orange-600">Amrit</span>
          </span>
        </div>
        <span
          className={`text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mt-0.5 ${
            lightOnly ? "text-emerald-200" : "text-stone-500"
          }`}
        >
          Nepal Trekking & Tours
        </span>
      </div>
    </Link>
  );
}
