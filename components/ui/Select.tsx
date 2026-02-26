"use client";

import React, { forwardRef } from "react";
import { ChevronDown, AlertCircle } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  hint?: string;
  required?: boolean;
}

/**
 * Accessible select dropdown with custom chevron icon, label, and error state.
 */
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, placeholder, error, hint, required, id, className = "", ...props }, ref) => {
    const selectId = id ?? `select-${label?.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={selectId}
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
          <select
            ref={ref}
            id={selectId}
            aria-invalid={!!error}
            aria-describedby={error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined}
            className={`w-full pl-4 pr-10 py-3 text-sm text-gray-900 bg-transparent outline-none appearance-none cursor-pointer
              ${!props.value ? "text-gray-400" : "text-gray-900"}
              ${className}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>

          {/* Custom chevron */}
          <ChevronDown
            className="absolute right-3 w-4 h-4 text-gray-500 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {error ? (
          <p id={`${selectId}-error`} className="flex items-center gap-1 text-xs text-red-600" role="alert">
            <AlertCircle className="w-3 h-3 shrink-0" />
            {error}
          </p>
        ) : hint ? (
          <p id={`${selectId}-hint`} className="text-xs text-gray-500">{hint}</p>
        ) : null}
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
