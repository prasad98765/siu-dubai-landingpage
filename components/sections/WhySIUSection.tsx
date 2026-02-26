"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { WHY_SIU, ACCREDITATIONS } from "@/lib/constants";

/**
 * "The SIU Dubai Advantage" split section with image placeholder and bullet points.
 */
export default function WhySIUSection() {
  return (
    <section
      id="why-siu"
      className="py-16 lg:py-24 bg-white overflow-hidden"
      aria-label="SIU Dubai advantage"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
              {/* Placeholder representing campus image */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 to-slate-900/90 flex items-end p-6">
                <blockquote className="text-white font-semibold italic text-lg leading-snug">
                  "Excellence is not a destination. It's a journey."
                </blockquote>
              </div>
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 grid grid-cols-3 gap-1" aria-hidden="true">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#8B0000] mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              The SIU Dubai Advantage
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              At Symbiosis International University Dubai, we don't just teach
              management — we shape visionaries. Our programs are designed for
              working professionals who aspire to lead a global world.
            </p>

            {/* Bullet list */}
            <ul className="space-y-4 mb-8">
              {WHY_SIU.map((item, i) => (
                <li key={item.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#8B0000]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B0000]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-[#8B0000] text-white font-semibold text-sm px-6 py-3 rounded-md hover:bg-[#6d0000] transition-colors duration-200"
            >
              Request More Info
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Accreditations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 border-t border-gray-100 pt-10"
        >
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            Accreditations &amp; Recognitions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {ACCREDITATIONS.map((acc) => (
              <div
                key={acc}
                className="px-5 py-2.5 border border-gray-200 rounded-full text-sm font-semibold text-gray-600 hover:border-[#8B0000] hover:text-[#8B0000] transition-colors duration-200 cursor-default"
              >
                {acc}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
