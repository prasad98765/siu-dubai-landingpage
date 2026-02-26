"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface StepperProps {
  steps: string[];
  currentStep: number; // 1-based
}

/**
 * Horizontal step indicator used by the multi-step application form.
 * Shows completed, active, and upcoming steps with connecting lines.
 */
export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <nav aria-label="Application progress" className="flex items-center justify-center gap-0">
      {steps.map((label, idx) => {
        const stepNum = idx + 1;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        return (
          <React.Fragment key={label}>
            {/* Step circle */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: isCompleted
                    ? "#8B0000"
                    : isActive
                    ? "#8B0000"
                    : "#e5e7eb",
                  borderColor: isCompleted || isActive ? "#8B0000" : "#e5e7eb",
                }}
                transition={{ duration: 0.3 }}
                className={`w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold text-sm
                  ${isCompleted || isActive ? "border-[#8B0000] text-white" : "border-gray-200 text-gray-400"}`}
                aria-current={isActive ? "step" : undefined}
                aria-label={`Step ${stepNum}: ${label}${isCompleted ? " (completed)" : isActive ? " (current)" : ""}`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4 text-white" aria-hidden="true" />
                ) : (
                  <span>{stepNum}</span>
                )}
              </motion.div>
              <span
                className={`mt-1.5 text-[11px] font-medium whitespace-nowrap
                  ${isActive ? "text-[#8B0000]" : isCompleted ? "text-gray-600" : "text-gray-400"}`}
              >
                {label}
              </span>
            </div>

            {/* Connector line (not after last step) */}
            {idx < steps.length - 1 && (
              <div
                className="w-16 sm:w-24 h-px mx-1 mb-5 shrink-0"
                style={{
                  background:
                    stepNum < currentStep
                      ? "#8B0000"
                      : "#e5e7eb",
                }}
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
