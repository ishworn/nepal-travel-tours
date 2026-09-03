import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "amber" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

type ButtonAsButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  icon,
  iconPosition = "right",
  isLoading = false,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5 font-medium",
    md: "text-sm px-5 py-2.5 gap-2 font-semibold",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold shadow-sm",
  };

  const variantStyles = {
    primary:
      "bg-emerald-800 text-white hover:bg-emerald-700 shadow-md shadow-emerald-950/10 focus-visible:ring-emerald-700 border border-emerald-900/30",
    secondary:
      "bg-stone-900 text-white hover:bg-stone-800 shadow-sm focus-visible:ring-stone-800",
    amber:
      "bg-amber-600 text-white hover:bg-amber-500 shadow-md shadow-amber-900/20 focus-visible:ring-amber-500 border border-amber-500/30",
    outline:
      "bg-transparent text-stone-800 border border-stone-300 hover:bg-stone-100 hover:border-stone-400 focus-visible:ring-stone-400",
    ghost:
      "bg-transparent text-stone-700 hover:bg-stone-100 hover:text-stone-900 focus-visible:ring-stone-300",
    white:
      "bg-white text-stone-900 hover:bg-stone-100 shadow-lg hover:shadow-xl focus-visible:ring-white border border-stone-200/60",
  };

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      ) : icon && iconPosition === "left" ? (
        <span className="shrink-0">{icon}</span>
      ) : null}

      <span>{children}</span>

      {!isLoading && icon && iconPosition === "right" ? (
        <span className="shrink-0">{icon}</span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      disabled={isLoading || (props as React.ButtonHTMLAttributes<HTMLButtonElement>).disabled}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
