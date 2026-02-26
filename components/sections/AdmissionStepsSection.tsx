"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ADMISSION_STEPS } from "@/lib/constants";

/**
 * "Your Path to SIU Dubai" numbered steps section.
 */
export default function AdmissionStepsSection() {
  return (
    <section
      id="admissions"
      className="py-16 lg:py-24 bg-white"
      aria-label="Admission process"
    >
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
            Your Path to SIU Dubai
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A simple, transparent process — from application to enrollment.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gray-200 z-0"
            aria-hidden="true"
          />

          {ADMISSION_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 font-bold text-xl border-2
                  ${i === 2
                    ? "bg-[#8B0000] text-white border-[#8B0000] shadow-lg"
                    : "bg-white text-gray-600 border-gray-200"
                  }`}
              >
                {step.step}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[180px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-[#8B0000] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#6d0000] transition-colors duration-200 text-sm"
          >
            Start Your Application
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
