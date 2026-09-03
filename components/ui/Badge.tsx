import React from "react";
import { cn } from "@/lib/utils";
import { DifficultyLevel } from "@/types";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "amber" | "outline" | "difficulty";
  difficulty?: DifficultyLevel;
  className?: string;
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "default",
  difficulty,
  className,
  size = "md",
}: BadgeProps) {
  let colorClasses = "bg-stone-100 text-stone-700 border-stone-200";

  if (difficulty) {
    switch (difficulty) {
      case "Easy":
        colorClasses = "bg-emerald-50 text-emerald-700 border-emerald-200/80";
        break;
      case "Moderate":
        colorClasses = "bg-blue-50 text-blue-700 border-blue-200/80";
        break;
      case "Challenging":
        colorClasses = "bg-amber-50 text-amber-800 border-amber-200/80";
        break;
      case "Strenuous":
        colorClasses = "bg-rose-50 text-rose-700 border-rose-200/80";
        break;
    }
  } else {
    switch (variant) {
      case "success":
        colorClasses = "bg-emerald-100/80 text-emerald-800 border-emerald-300";
        break;
      case "warning":
        colorClasses = "bg-amber-100/80 text-amber-800 border-amber-300";
        break;
      case "danger":
        colorClasses = "bg-rose-100 text-rose-800 border-rose-300";
        break;
      case "amber":
        colorClasses = "bg-amber-500/10 text-amber-700 border-amber-500/30";
        break;
      case "outline":
        colorClasses = "bg-transparent text-stone-600 border-stone-300";
        break;
      case "default":
      default:
        colorClasses = "bg-stone-100 text-stone-700 border-stone-200";
    }
  }

  const sizeClasses = size === "sm" ? "text-xs px-2 py-0.5" : "text-xs px-2.5 py-1";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-semibold rounded-full border",
        sizeClasses,
        colorClasses,
        className
      )}
    >
      {children}
    </span>
  );
}
