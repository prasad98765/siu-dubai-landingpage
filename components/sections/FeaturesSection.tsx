"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Briefcase, Users, MapPin } from "lucide-react";
import { PROGRAM_FEATURES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Briefcase,
  Users,
  MapPin,
};

/**
 * "Built for the Leaders of Tomorrow" features grid.
 */
export default function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" aria-label="Program features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-widest text-[#8B0000] mb-3"
        >
          Program Features
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-3"
        >
          Built for the Leaders of Tomorrow
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-gray-500 text-center max-w-xl mx-auto mb-12"
        >
          Our MBA curriculum is methodically crafted to bridge the gap between academic
          theory and real-world business challenges.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAM_FEATURES.map((feat, i) => {
            const Icon = ICON_MAP[feat.icon] ?? Globe;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 bg-[#8B0000]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#8B0000]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
