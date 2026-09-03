"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mountain,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Tours", href: "/tours" },
  { name: "Destinations", href: "/#destinations" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200/60 py-3"
          : "bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-md",
                isScrolled
                  ? "bg-emerald-800 text-white"
                  : "bg-emerald-600 text-white backdrop-blur-sm"
              )}
            >
              <Mountain className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-black tracking-tight text-lg sm:text-xl leading-none transition-colors",
                  isScrolled ? "text-stone-900" : "text-white drop-shadow-sm"
                )}
              >
                Himalayan
                <span className="text-amber-500 ml-1">Footprints</span>
              </span>
              <span
                className={cn(
                  "text-[10px] tracking-wider uppercase font-semibold mt-0.5 transition-colors",
                  isScrolled ? "text-stone-500" : "text-stone-300"
                )}
              >
                Nepal Trekking & Tours
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && !link.href.includes("#");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200",
                    isScrolled
                      ? isActive
                        ? "text-emerald-800 bg-emerald-50"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                      : isActive
                      ? "text-amber-400 bg-white/10 backdrop-blur-xs"
                      : "text-stone-200 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[\s-]/g, "")}`}
              className={cn(
                "flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-colors",
                isScrolled
                  ? "text-stone-600 hover:text-stone-900"
                  : "text-stone-200 hover:text-white"
              )}
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            <Button
              href="/contact"
              variant={isScrolled ? "primary" : "amber"}
              size="sm"
              icon={<ChevronRight className="w-3.5 h-3.5" />}
            >
              Plan Your Trip
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              href="/contact"
              variant="amber"
              size="sm"
              className="text-xs px-3 py-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Plan Trip
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-xl transition-colors focus:outline-none",
                isScrolled
                  ? "text-stone-700 hover:bg-stone-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white/95 backdrop-blur-xl border-b border-stone-200 shadow-2xl p-6 transition-all animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && !link.href.includes("#");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between transition-colors",
                    isActive
                      ? "bg-emerald-50 text-emerald-800"
                      : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                  )}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-stone-100 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[\s-]/g, "")}`}
                className="flex items-center gap-2 text-sm text-stone-600 px-4 py-2 bg-stone-50 rounded-lg"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call/WhatsApp: {siteConfig.contact.phone}</span>
              </a>

              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Plan Your Himalayan Trip
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
