"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Users, Award, Download, Home } from "lucide-react";

const NEXT_STEPS = [
  {
    icon: FileText,
    title: "Profile Review",
    description: "Evaluating credentials",
  },
  {
    icon: Users,
    title: "Interaction",
    description: "Personal interview",
  },
  {
    icon: Award,
    title: "Admission Offer",
    description: "Receive official letter",
  },
];

/**
 * Post-submission success screen shown at /apply/success.
 */
export default function SuccessMessage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.12)] max-w-lg w-full overflow-hidden"
      >
        {/* Main content */}
        <div className="p-8 text-center">
          {/* Check icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-[#8B0000]/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-[#8B0000]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3"
          >
            Application Submitted Successfully!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-sm mx-auto"
          >
            Thank you for your interest in SIU Dubai's MBA program. Our admissions team
            has received your details and will contact you shortly to guide you through
            the next steps.
          </motion.p>

          {/* Next steps */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mb-8"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#8B0000] mb-5">
              Next Steps
            </p>
            <div className="flex items-start justify-center gap-6 sm:gap-10">
              {NEXT_STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.12 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 bg-[#8B0000]/8 border border-[#8B0000]/15 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#8B0000]" />
                    </div>
                    <p className="text-xs font-semibold text-gray-800">{`${i + 1}. ${s.title}`}</p>
                    <p className="text-[11px] text-gray-500">{s.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              href="/"
              className="flex items-center gap-2 bg-[#8B0000] text-white font-semibold text-sm px-6 py-3 rounded-md
                hover:bg-[#6d0000] transition-colors duration-200 w-full sm:w-auto justify-center"
            >
              <Home className="w-4 h-4" />
              Go to Homepage
            </Link>
            <button
              type="button"
              className="flex items-center gap-2 border-2 border-[#8B0000] text-[#8B0000] font-semibold text-sm px-6 py-3 rounded-md
                hover:bg-[#8B0000] hover:text-white transition-all duration-200 w-full sm:w-auto justify-center"
              onClick={() => alert("Brochure PDF download will be available shortly.")}
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </button>
          </motion.div>
        </div>

        {/* Campus image placeholder at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-br from-gray-200 to-gray-300 h-40 flex items-center justify-center"
        >
          <div className="text-center text-gray-400">
            <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <span className="text-2xl">🏛️</span>
            </div>
            <p className="text-xs font-medium">SIU Dubai Campus</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <p className="absolute bottom-6 text-xs text-gray-400 text-center w-full">
        © {new Date().getFullYear()} Symbiosis International University – Dubai Campus. All rights reserved.
      </p>
    </div>
  );
}
