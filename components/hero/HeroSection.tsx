"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, Users } from "lucide-react";
import LeadForm from "@/components/forms/LeadForm";
import { STATS } from "@/lib/constants";

const HERO_HIGHLIGHTS = [
  "SIU Recognized",
  "Global Exposure",
  "Top Placement Partners",
];

/**
 * Full-bleed hero section with headline, stats, trust badges, and lead capture form.
 */
export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="Hero section"
    >
      {/* Dubai skyline background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Dubai skyline"
        fill
        priority
        quality={90}
        className="object-cover object-center"
        aria-hidden="true"
      />

      {/* Dark maroon overlay so text stays legible over the photo */}
      <div
        className="absolute inset-0 bg-[#6d0000]/75"
        aria-hidden="true"
      />

      {/* Subtle vignette at the bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

          {/* ── Left: Copy ─────────────────────────────────────── */}
          <div className="flex-1 text-white">
            {/* Intake badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              ADMISSIONS OPEN 2026 BATCH
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-5 tracking-tight"
            >
              Global MBA
              <br />
              Programs at{" "}
              <span className="text-[#ffcc70]">SIU Dubai</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 max-w-lg"
            >
              Accelerate your career with a world-class MBA in the heart of global
              commerce. Industry-aligned curriculum designed for future business leaders.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              {HERO_HIGHLIGHTS.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-xs font-medium text-white/90 bg-white/10 border border-white/20 rounded-full px-3 py-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* ── Stats row ─── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-3 sm:grid-cols-5 gap-4"
            >
              {STATS.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl sm:text-2xl font-extrabold text-white leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/60 mt-1 uppercase tracking-wide leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* WhatsApp CTA (mobile) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 sm:hidden"
            >
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#8B0000] font-bold text-sm px-6 py-3 rounded-md w-full"
              >
                Apply for 2026 Batch →
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Lead Form ───────────────────────────────── */}
          <div className="w-full lg:w-auto lg:min-w-[400px]">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
