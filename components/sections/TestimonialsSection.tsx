"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

/**
 * Student testimonials section with a 3-column card grid.
 * The center card is visually highlighted (featured).
 */
export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50" aria-label="Student testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Student Success Stories
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Hear from our alumni who are leading global brands today.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-2xl p-6 flex flex-col justify-between
                ${t.featured
                  ? "bg-[#8B0000] text-white shadow-[0_8px_40px_rgba(139,0,0,0.3)] scale-[1.03] z-10"
                  : "bg-white text-gray-900 shadow-card"
                }`}
            >
              {/* Quote icon */}
              <Quote
                className={`w-8 h-8 mb-4 ${t.featured ? "text-white/30" : "text-[#8B0000]/20"}`}
              />

              {/* Quote text */}
              <p className={`text-sm leading-relaxed flex-1 mb-5 ${t.featured ? "text-white/90" : "text-gray-600"}`}>
                {t.quote}
              </p>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-3.5 h-3.5 fill-current ${t.featured ? "text-yellow-300" : "text-yellow-400"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm
                    ${t.featured ? "bg-white text-[#8B0000]" : "bg-[#8B0000] text-white"}`}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className={`font-semibold text-sm ${t.featured ? "text-white" : "text-gray-900"}`}>
                    {t.name}
                  </p>
                  <p className={`text-xs ${t.featured ? "text-white/70" : "text-gray-500"}`}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
