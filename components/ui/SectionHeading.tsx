import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  theme?: "light" | "dark";
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  className,
  theme = "light",
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const isDark = theme === "dark";

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 lg:mb-16", alignClasses[align], className)}>
      {tag && (
        <span
          className={cn(
            "text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-3 inline-block",
            isDark
              ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
              : "bg-emerald-50 text-emerald-800 border border-emerald-200/60"
          )}
        >
          {tag}
        </span>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight",
          isDark ? "text-white" : "text-stone-900"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            isDark ? "text-stone-300" : "text-stone-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
