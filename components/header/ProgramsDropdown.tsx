"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, GraduationCap, BookOpen, Award, Globe } from "lucide-react";

interface ProgramsDropdownProps {
  isOpen: boolean;
}

const UG_PROGRAMS = [
  { label: "BBA (Hons.)", href: "#programs" },
  { label: "B.Tech 2026", href: "#programs" },
  { label: "B.Des. 2026", href: "#programs" },
  { label: "BFA – Applied Arts (Hons.)", href: "#programs" },
];

const PG_PROGRAMS = [
  { label: "MBA – Finance", href: "/apply" },
  { label: "MBA – Marketing", href: "/apply" },
  { label: "MBA – Operations", href: "/apply" },
  { label: "MBA – Business Analytics", href: "/apply" },
];

/**
 * Mega dropdown for Programs nav item.
 */
export default function ProgramsDropdown({ isOpen }: ProgramsDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18 }}
          className="absolute top-full left-0 mt-2 w-[480px] bg-white rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-gray-100 z-50 overflow-hidden"
          role="menu"
          aria-label="Programs menu"
        >
          <div className="grid grid-cols-2 gap-0">
            {/* Undergraduate */}
            <div className="p-5 border-r border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-[#8B0000]/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-[#8B0000]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8B0000]">
                  Undergraduate
                </span>
              </div>
              <ul className="space-y-1">
                {UG_PROGRAMS.map((p) => (
                  <li key={p.label}>
                    <Link
                      href={p.href}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#8B0000] hover:bg-[#8B0000]/5 rounded-md px-2 py-1.5 transition-all duration-150"
                      role="menuitem"
                    >
                      <ChevronRight className="w-3 h-3 shrink-0" />
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Postgraduate */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-[#8B0000]/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-[#8B0000]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8B0000]">
                  MBA Programs
                </span>
              </div>
              <ul className="space-y-1">
                {PG_PROGRAMS.map((p) => (
                  <li key={p.label}>
                    <Link
                      href={p.href}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#8B0000] hover:bg-[#8B0000]/5 rounded-md px-2 py-1.5 transition-all duration-150"
                      role="menuitem"
                    >
                      <ChevronRight className="w-3 h-3 shrink-0" />
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer row */}
          <div className="bg-[#8B0000]/5 px-5 py-3 flex items-center justify-between border-t border-gray-100">
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Award className="w-3 h-3" />
                UGC Recognised
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3" />
                47+ Accreditors
              </span>
            </div>
            <Link
              href="/apply"
              className="text-xs font-semibold text-[#8B0000] hover:underline"
            >
              Apply Now →
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
