"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

type Variant = "primary" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  as?: "button" | "a";
  href?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#8B0000] text-white hover:bg-[#6d0000] active:bg-[#5a0000] focus-visible:ring-[#8B0000] border border-transparent",
  outline:
    "border-2 border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white active:bg-[#6d0000] focus-visible:ring-[#8B0000]",
  ghost:
    "text-[#8B0000] hover:bg-[#8B0000]/10 active:bg-[#8B0000]/20 border border-transparent focus-visible:ring-[#8B0000]",
  white:
    "bg-white text-[#8B0000] hover:bg-gray-100 active:bg-gray-200 border border-transparent focus-visible:ring-white",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-sm px-4 py-2 rounded-md",
  md: "text-sm px-6 py-3 rounded-md",
  lg: "text-base px-8 py-4 rounded-lg",
};

/**
 * Reusable animated button with variants, sizes, loading state, and icon support.
 */
export default function Button({
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const classes = [
    base,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const { onClick, type, name, id, form, value, tabIndex, autoFocus } = props;
  return (
    <motion.button
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      name={name}
      id={id}
      form={form}
      tabIndex={tabIndex}
      autoFocus={autoFocus}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        iconPosition === "left" && icon && <span>{icon}</span>
      )}
      {children}
      {!loading && iconPosition === "right" && icon && <span>{icon}</span>}
    </motion.button>
  );
}
