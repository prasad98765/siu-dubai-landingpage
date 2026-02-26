"use client";

import React, { forwardRef } from "react";
import { AlertCircle } from "lucide-react";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'suffix'> {
  label?: string;
  error?: string;
  hint?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  required?: boolean;
}

/**
 * Accessible input field with label, error message, prefix/suffix support.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, prefix, suffix, required, id, className = "", ...props }, ref) => {
    const inputId = id ?? `input-${label?.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="text-[#8B0000] ml-1" aria-hidden="true">*</span>}
          </label>
        )}

        <div
          className={`relative flex items-center border rounded-md transition-all duration-200 bg-white
            ${error
              ? "border-red-500 focus-within:ring-2 focus-within:ring-red-500/30"
              : "border-gray-300 focus-within:border-[#8B0000] focus-within:ring-2 focus-within:ring-[#8B0000]/20"
            }`}
        >
          {prefix && (
            <span className="flex items-center pl-3 text-gray-500 text-sm shrink-0">
              {prefix}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            className={`w-full px-4 py-3 text-sm text-gray-900 bg-transparent outline-none placeholder:text-gray-400
              ${prefix ? "pl-2" : ""}
              ${suffix ? "pr-2" : ""}
              ${className}`}
            {...props}
          />
          {suffix && (
            <span className="flex items-center pr-3 text-gray-500 text-sm shrink-0">
              {suffix}
            </span>
          )}
        </div>

        {error ? (
          <p id={`${inputId}-error`} className="flex items-center gap-1 text-xs text-red-600" role="alert">
            <AlertCircle className="w-3 h-3 shrink-0" />
            {error}
          </p>
        ) : hint ? (
          <p id={`${inputId}-hint`} className="text-xs text-gray-500">{hint}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
