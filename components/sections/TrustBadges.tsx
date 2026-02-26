"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Globe, Star, Users } from "lucide-react";
import { TRUST_BADGES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Shield,
  Globe,
  Star,
  Users,
};

/**
 * Stats/trust badge strip displayed below the hero section.
 * Uses the primary red background for visual continuity.
 */
export default function TrustBadges() {
  return (
    <section
      className="bg-[#6d0000] py-4"
      aria-label="Trust credentials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-16">
          {TRUST_BADGES.map((badge, i) => {
            const Icon = ICON_MAP[badge.icon] ?? Shield;
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-2 text-white/90"
              >
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {badge.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
