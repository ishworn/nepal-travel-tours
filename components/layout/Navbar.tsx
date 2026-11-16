"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Compass, MessageCircle } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Trekking in Nepal", href: "/#trekking" },
  { name: "Tours in Nepal", href: "/#tours" },
  { name: "Destinations", href: "/#destinations" },
  { name: "About Us", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      const elementId = href.replace("/#", "");
      const elem = document.getElementById(elementId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isLightNav = !isScrolled && pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3"
          : "bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo & Name */}
          <div className="flex-shrink-0">
            <Logo lightOnly={isLightNav} />
          </div>

          {/* Center / Right: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#") && pathname === "/") {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
                  isLightNav
                    ? "text-stone-100 hover:text-white hover:bg-white/10"
                    : "text-stone-700 hover:text-emerald-800 hover:bg-stone-100/80"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/#contact"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  handleNavClick("/#contact");
                }
              }}
              className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-600/30 transition-all duration-200 hover:bg-orange-500 hover:shadow-orange-600/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Compass className="mr-2 h-4 w-4" />
              Plan Your Trip
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/#contact"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  handleNavClick("/#contact");
                }
              }}
              className="rounded-lg bg-orange-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-orange-500"
            >
              Plan Trip
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500",
                isLightNav
                  ? "text-white hover:bg-white/15"
                  : "text-stone-800 hover:bg-stone-100"
              )}
              aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-50 bg-stone-900/40 backdrop-blur-sm lg:hidden animate-fade-in">
          <div className="flex flex-col h-full w-full max-w-sm bg-white shadow-2xl p-6 overflow-y-auto">
            {/* Header info */}
            <div className="flex items-center justify-between pb-5 border-b border-stone-200">
              <Logo />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-stone-500 hover:bg-stone-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("/#") && pathname === "/") {
                      e.preventDefault();
                    }
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-stone-800 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Action buttons inside drawer */}
            <div className="mt-auto pt-6 border-t border-stone-200 space-y-3">
              <Link
                href="/#contact"
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                  }
                  handleNavClick("/#contact");
                }}
                className="w-full flex items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-orange-500"
              >
                <Compass className="mr-2 h-4 w-4" />
                Plan Your Trip
              </Link>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappFull}?text=${encodeURIComponent(
                  siteConfig.contact.defaultWhatsAppMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-600"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp: {siteConfig.contact.whatsapp}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
