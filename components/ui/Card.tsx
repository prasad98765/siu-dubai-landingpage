"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Animate on hover */
  hoverable?: boolean;
  /** Apply padding */
  padded?: boolean;
  /** Elevation style */
  elevation?: "none" | "sm" | "md" | "lg";
  onClick?: () => void;
}

const elevationClasses: Record<string, string> = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-card",
  lg: "shadow-card-hover",
};

/**
 * Reusable card container with optional Framer Motion hover animation.
 */
export default function Card({
  children,
  className = "",
  hoverable = false,
  padded = true,
  elevation = "md",
  onClick,
}: CardProps) {
  const base = `bg-white rounded-xl transition-all duration-300 ${elevationClasses[elevation]}`;
  const padding = padded ? "p-6" : "";
  const cursor = onClick ? "cursor-pointer" : "";

  const classes = [base, padding, cursor, className].filter(Boolean).join(" ");

  if (hoverable) {
    return (
      <motion.div
        whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.15)" }}
        transition={{ duration: 0.2 }}
        className={classes}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}
