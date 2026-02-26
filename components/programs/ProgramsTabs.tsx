"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgramCard from "./ProgramCard";
import { PROGRAM_TABS, getProgramsByCategory, type ProgramCategory } from "@/lib/programs";

/**
 * Programs showcase section with pill tabs and animated card grid.
 */
export default function ProgramsTabs() {
  const [activeTab, setActiveTab] = useState<ProgramCategory>("undergraduate");

  const programs = getProgramsByCategory(activeTab);

  return (
    <section
      id="programs"
      className="py-16 lg:py-24 bg-white"
      aria-label="Programs showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Dive into Our Diverse Range of Courses
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Explore world-class academic programmes designed to accelerate your career
            across industry verticals.
          </p>
        </motion.div>

        {/* ── Pill Tabs ───────────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="Program categories">
          {PROGRAM_TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] focus-visible:ring-offset-2
                ${activeTab === tab.id
                  ? "bg-[#8B0000] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Cards Grid ──────────────────────────────────────── */}
        <div
          id={`tabpanel-${activeTab}`}
          role="tabpanel"
          aria-label={`${activeTab} programmes`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
            >
              {programs.length > 0 ? (
                programs.map((program, idx) => (
                  <ProgramCard key={program.id} program={program} index={idx} />
                ))
              ) : (
                <div className="col-span-full text-center py-16 text-gray-400">
                  <p className="text-lg font-medium">Coming Soon</p>
                  <p className="text-sm mt-1">Programs in this category will be announced shortly.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
