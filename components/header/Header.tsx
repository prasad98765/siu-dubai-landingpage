"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Shield } from "lucide-react";
import ProgramsDropdown from "./ProgramsDropdown";

// const NAV_ITEMS = [
//   { label: "Programs", href: "#programs", hasDropdown: true },
//   { label: "Why SIU", href: "#why-siu" },
//   { label: "Admissions", href: "#admissions" },
//   { label: "FAQ", href: "#faq" },
// ];

/**
 * Sticky top navigation bar with logo, nav links, programs dropdown, and Apply CTA.
 */
export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isApplyPage = pathname?.startsWith("/apply");

  // Shadow on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgramsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ─────────────────────────────────────────── */}
          <Link href="/" className="flex items-center shrink-0">
            {/* Full logo shown on sm+ screens */}
            <Image
              src="/images/siu-logo.png"
              alt="Symbiosis International University Dubai"
              width={200}
              height={56}
              className="hidden sm:block h-12 w-auto object-contain"
              priority
            />
            {/* Icon-only on mobile */}
            <Image
              src="/images/siu-logo.png"
              alt="SIU Dubai"
              width={44}
              height={44}
              className="sm:hidden h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* ── Desktop Nav ───────────────────────────────────── */}
          {/* <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) =>
              item.hasDropdown ? (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150
                      ${programsOpen
                        ? "text-[#8B0000] bg-[#8B0000]/5"
                        : "text-gray-700 hover:text-[#8B0000] hover:bg-[#8B0000]/5"
                      }`}
                    onClick={() => setProgramsOpen((v) => !v)}
                    aria-haspopup="true"
                    aria-expanded={programsOpen}
                    aria-controls="programs-dropdown"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${programsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div id="programs-dropdown">
                    <ProgramsDropdown isOpen={programsOpen} />
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={isApplyPage ? `/${item.href}` : item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#8B0000] hover:bg-[#8B0000]/5 rounded-md transition-colors duration-150"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav> */}

          {/* ── Right CTA ─────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            {isApplyPage && (
              <div className="hidden md:flex items-center gap-1.5 text-xs text-gray-500">
                <Shield className="w-3.5 h-3.5 text-[#8B0000]" />
                Application in Progress
              </div>
            )}
            {/* <Link
              href="/apply"
              className="hidden md:inline-flex items-center gap-1.5 bg-[#8B0000] text-white text-sm font-semibold px-5 py-2.5 rounded-md
                hover:bg-[#6d0000] active:bg-[#5a0000] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] focus-visible:ring-offset-2"
            >
              Apply Now
            </Link> */}

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#8B0000] hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-gray-100"
          >
            {/* <nav className="px-4 py-3 space-y-1" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#8B0000] hover:bg-[#8B0000]/5 rounded-md transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/apply"
                className="block mt-2 w-full text-center bg-[#8B0000] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#6d0000] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now
              </Link>
            </nav> */}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
