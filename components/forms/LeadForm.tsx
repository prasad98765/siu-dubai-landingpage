"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Lock, CheckCircle2, AlertCircle } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { leadFormSchema, type LeadFormData } from "@/lib/validators";
import { submitToGeta } from "@/lib/geta";
import { useSearchParams } from "next/navigation";

/** Shared input class — matches height & border of PhoneInput and Select */
const inputClass =
  "w-full h-10 px-3 text-sm text-gray-900 placeholder-gray-400 " +
  "border border-gray-300 rounded-md bg-white " +
  "focus:outline-none focus:ring-2 focus:ring-[#8B0000]/25 focus:border-[#8B0000] " +
  "transition-colors duration-150";

/** Consistent field wrapper with label + optional error */
function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700 leading-none">
        {label}
        {required && <span className="text-[#8B0000] ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-600 leading-none" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}



/**
 * Lead capture form shown in the hero section.
 * Uses react-phone-input-2 — all 240+ country codes with flags & search.
 * On success, calls geta.ai API and redirects to /apply with lead data in query params.
 */
export default function LeadForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiStatus, setApiStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: { program: "", experience: "", phone: "" },
  });

  // Debug: log validation errors so they're never silent
  const onInvalid = (errs: typeof errors) => {
    console.error("[LeadForm] Validation failed:", errs);
  };

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setApiStatus("idle");

    // Extract UTM params from URL
    const utm_source = searchParams.get("utm_source") || undefined;
    const utm_medium = searchParams.get("utm_medium") || undefined;
    const utm_campaign = searchParams.get("utm_campaign") || undefined;

    const result = await submitToGeta({
      name: data.fullName,
      mobile_phone_number: data.phone.replace(/\D/g, ""),
      email: data.email,
      utm_source,
      utm_medium,
      utm_campaign,
    });

    // Build query string so ApplicationForm can pre-fill without sessionStorage
    const params = new URLSearchParams({
      name:  data.fullName,
      email: data.email,
      phone: data.phone,
      ...(utm_source ? { utm_source } : {}),
      ...(utm_medium ? { utm_medium } : {}),
      ...(utm_campaign ? { utm_campaign } : {}),
    });
    const applyUrl = `/apply?${params.toString()}`;

    if (result.ok) {
      setApiStatus("success");
      setTimeout(() => router.push(applyUrl), 1200);
    } else {
      setApiStatus("error");
      setTimeout(() => router.push(applyUrl), 2500);
    }
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.18)] p-6 w-full max-w-md ml-auto"
    >
      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="mb-5">
        <h3 className="text-lg font-bold text-gray-900">Get Program Brochure</h3>
        <p className="text-sm text-gray-500 mt-0.5">
          Fill in your details to receive the brochure instantly
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate className="space-y-4">

        {/* ── API status banner ──────────────── */}
        <AnimatePresence>
          {apiStatus !== "idle" && (
            <motion.div
              key={apiStatus}
              initial={{ opacity: 0, y: -6, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -6, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-medium overflow-hidden ${
                apiStatus === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-amber-50 text-amber-700 border border-amber-200"
              }`}
            >
              {apiStatus === "success" ? (
                <><CheckCircle2 className="w-4 h-4 shrink-0" /> Details received! Redirecting…</>
              ) : (
                <><AlertCircle className="w-4 h-4 shrink-0" /> Could not reach server — continuing anyway…</>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full Name */}
        <Field label="Full Name" required error={errors.fullName?.message}>
          <input
            className={inputClass}
            placeholder="John Doe"
            {...register("fullName")}
          />
        </Field>

        {/* Email */}
        <Field label="Email Address" required error={errors.email?.message}>
          <input
            type="email"
            className={inputClass}
            placeholder="john@example.com"
            {...register("email")}
          />
        </Field>

        {/* Phone — react-phone-input-2 (240+ countries, flag, search) */}
        <Field label="Phone Number" required error={errors.phone?.message}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                country="ae"
                preferredCountries={["ae", "in", "us", "gb", "sa", "qa", "kw", "om", "bh", "sg"]}
                enableSearch
                searchPlaceholder="Search country…"
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  fontSize: "14px",
                  paddingLeft: "52px",
                  border: errors.phone ? "1px solid #dc2626" : "1px solid #d1d5db",
                  borderRadius: "6px",
                  color: "#111827",
                }}
                buttonStyle={{
                  border: errors.phone ? "1px solid #dc2626" : "1px solid #d1d5db",
                  borderRight: "none",
                  borderRadius: "6px 0 0 6px",
                  backgroundColor: "#f9fafb",
                }}
                dropdownStyle={{ width: "300px", maxHeight: "220px", fontSize: "13px" }}
                containerStyle={{ width: "100%" }}
                value={field.value}
                onChange={(val) => field.onChange("+" + val)}
              />
            )}
          />
        </Field>
{/* 
        <Field label="Program of Interest" required error={errors.program?.message}>
          <Select
            options={PROGRAM_OPTIONS}
            placeholder="Select a program"
            error={errors.program?.message}
            {...register("program")}
          />
        </Field>

        <Field label="Work Experience" error={errors.experience?.message}>
          <Select
            options={EXPERIENCE_OPTIONS}
            placeholder="Select experience"
            error={errors.experience?.message}
            {...register("experience")}
          />
        </Field> */}

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          className="w-full flex items-center justify-center gap-2 bg-[#8B0000] text-white
            font-bold text-sm px-6 py-3.5 rounded-md hover:bg-[#6d0000]
            transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Submitting…
            </span>
          ) : apiStatus === "success" ? (
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Submitted!
            </span>
          ) : (
            <>
              Submit
              <ChevronRight className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </form>

      {/* Trust signal */}
      <div className="flex items-center justify-center gap-1.5 mt-4 text-[11px] text-gray-400">
        <Lock className="w-3 h-3" />
        Secure 256-bit SSL Encrypted Application Portal
      </div>
    </motion.div>
  );
}