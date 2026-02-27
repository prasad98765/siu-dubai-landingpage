"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ChevronRight, Send } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  uaeAdmissionsSchema,
  type UaeAdmissionsData,
} from "@/lib/validators";
import {
  GRADE_OPTIONS,
  PROGRAMS_BY_GRADE,
  type GradeOption,
} from "@/lib/programs";
import { updateContactInGeta } from "@/lib/geta";

// ─── Reusable field wrapper ────────────────────────────────────────────────────
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
      <label className="text-sm font-semibold text-gray-700 leading-none">
        {label}
        {required && <span className="text-[#8B0000] ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-500 leading-none mt-0.5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Shared input classes ──────────────────────────────────────────────────────
const inputCls =
  "w-full h-11 px-3.5 text-sm text-gray-900 placeholder-gray-400 " +
  "border border-gray-200 rounded-lg bg-white " +
  "focus:outline-none focus:ring-2 focus:ring-[#8B0000]/20 focus:border-[#8B0000] " +
  "transition-colors duration-150";

const selectCls =
  "w-full h-11 px-3.5 text-sm text-gray-900 " +
  "border border-gray-200 rounded-lg bg-white appearance-none " +
  "focus:outline-none focus:ring-2 focus:ring-[#8B0000]/20 focus:border-[#8B0000] " +
  "transition-colors duration-150 cursor-pointer " +
  "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 20 20%22%3E%3Cpath stroke=%22%236b7280%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%221.5%22 d=%22m6 8 4 4 4-4%22/%3E%3C/svg%3E')] " +
  "bg-[length:20px_20px] bg-[right_12px_center] bg-no-repeat pr-10";

const errorSelectCls = selectCls.replace("border-gray-200", "border-red-400");
const errorInputCls  = inputCls.replace("border-gray-200",  "border-red-400");

/**
 * UAE Admissions Form – single-page, full-width.
 * Handles grade → program mapping and agent → referral code visibility.
 */
export default function ApplicationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [prefilled, setPrefilled] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<UaeAdmissionsData>({
    resolver: zodResolver(uaeAdmissionsSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      grade: undefined,
      program: "",
      appliedViaAgent: undefined,
      referralCode: "",
    },
  });

  // Pre-fill Personal Info from LeadForm query params (only when navigated from brochure form)
  useEffect(() => {
    const name  = searchParams.get("name");
    const email = searchParams.get("email");
    const phone = searchParams.get("phone");

    if (!name && !email && !phone) return;

    if (name) {
      const parts = name.trim().split(" ");
      setValue("firstName", parts[0] ?? "");
      setValue("lastName", parts.slice(1).join(" ") ?? "");
    }
    if (email) setValue("email", email);
    // phone comes as "+971501234567" — PhoneInput auto-detects country flag
    if (phone) setValue("phone", phone);

    setPrefilled(true);
    // Clean the URL — replace so back-button doesn't re-apply the params
    router.replace("/apply", { scroll: false });
  }, [searchParams, setValue, router]);

  // Watch grade to rebuild program list; watch agent choice for conditional
  const selectedGrade        = useWatch({ control, name: "grade" });
  const appliedViaAgent      = useWatch({ control, name: "appliedViaAgent" });

  // Reset program when grade changes
  useEffect(() => {
    setValue("program", "");
  }, [selectedGrade, setValue]);

  // Clear referral code when agent = no
  useEffect(() => {
    if (appliedViaAgent === "no") setValue("referralCode", "");
  }, [appliedViaAgent, setValue]);

  const programOptions = selectedGrade
    ? PROGRAMS_BY_GRADE[selectedGrade as GradeOption]
    : [];

  const onSubmit = async (data: UaeAdmissionsData) => {
    try {
      // Call geta.ai contact-update (PUT) with full admissions data
      await updateContactInGeta({
        name: `${data.firstName} ${data.lastName}`,
        mobile_phone_number: data.phone.replace(/\D/g, ""),
        email: data.email,
        // referral_code: data.referralCode ?? "",
        // have_you_applied_through_an_agent_: data.appliedViaAgent,
        program_of_interest: data.program,
        which_grade_are_you_currently_in_: data.grade,
      });

      router.push("/thank-you");
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-10 px-4 sm:px-6 lg:px-10">
      <div className="w-full max-w-5xl mx-auto">

        {/* ── Page header ─────────────────────────────────────── */}
        <div className="text-center mb-8">
          <span className="inline-block bg-[#8B0000]/10 text-[#8B0000] text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
            UAE Admissions 2026
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Apply to SIU Dubai
          </h1>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Complete the form below and our admissions team will get in touch within 24 hours.
          </p>
        </div>

        {/* ── Form card ─────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100">

          {/* Top accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-[#8B0000] via-[#C9A84C] to-[#8B0000]" />

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="p-6 sm:p-8 lg:p-10">

            {/* ── Section 1: Personal Information ─────────────── */}
            <SectionHeading number={1} title="Personal Information" />

            {/* Pre-filled notice */}
            {prefilled && (
              <div className="mt-3 flex items-center gap-2 text-xs text-blue-700 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
                <Lock className="w-3.5 h-3.5 shrink-0" />
                Pre-filled from your brochure request. Contact our team to update these details.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">

              {/* First Name */}
              <Field label="First Name" required error={errors.firstName?.message}>
                <input
                  className={`${
                    prefilled
                      ? inputCls.replace("border-gray-200", "border-gray-200") + " bg-gray-50 text-gray-500 cursor-not-allowed"
                      : errors.firstName ? errorInputCls : inputCls
                  }`}
                  placeholder="John"
                  autoComplete="given-name"
                  disabled={prefilled}
                  {...register("firstName")}
                />
              </Field>

              {/* Last Name */}
              <Field label="Last Name" required error={errors.lastName?.message}>
                <input
                  className={`${
                    prefilled
                      ? inputCls.replace("border-gray-200", "border-gray-200") + " bg-gray-50 text-gray-500 cursor-not-allowed"
                      : errors.lastName ? errorInputCls : inputCls
                  }`}
                  placeholder="Doe"
                  autoComplete="family-name"
                  disabled={prefilled}
                  {...register("lastName")}
                />
              </Field>

              {/* Email */}
              <Field label="Email Address" required error={errors.email?.message}>
                <input
                  type="email"
                  className={`${
                    prefilled
                      ? inputCls.replace("border-gray-200", "border-gray-200") + " bg-gray-50 text-gray-500 cursor-not-allowed"
                      : errors.email ? errorInputCls : inputCls
                  }`}
                  placeholder="john.doe@example.com"
                  autoComplete="email"
                  disabled={prefilled}
                  {...register("email")}
                />
              </Field>

              {/* Phone – all countries via react-phone-input-2 */}
              <Field label="Phone Number" required error={errors.phone?.message}>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      country="ae"
                      preferredCountries={["ae", "in", "us", "gb", "sa", "qa", "kw", "om", "bh", "sg"]}
                      enableSearch={!prefilled}
                      searchPlaceholder="Search country…"
                      disabled={prefilled}
                      inputStyle={{
                        width: "100%",
                        height: "44px",
                        fontSize: "14px",
                        paddingLeft: "52px",
                        border: errors.phone ? "1px solid #f87171" : "1px solid #e5e7eb",
                        borderRadius: "8px",
                        color: prefilled ? "#6b7280" : "#111827",
                        backgroundColor: prefilled ? "#f9fafb" : "#fff",
                        cursor: prefilled ? "not-allowed" : "text",
                      }}
                      buttonStyle={{
                        border: errors.phone ? "1px solid #f87171" : "1px solid #e5e7eb",
                        borderRight: "none",
                        borderRadius: "8px 0 0 8px",
                        backgroundColor: prefilled ? "#f3f4f6" : "#f9fafb",
                        cursor: prefilled ? "not-allowed" : "pointer",
                        pointerEvents: prefilled ? "none" : "auto",
                      }}
                      dropdownStyle={{ width: "300px", maxHeight: "220px", fontSize: "13px" }}
                      containerStyle={{ width: "100%", opacity: prefilled ? 0.75 : 1 }}
                      value={field.value}
                      onChange={(val) => {
                        if (!prefilled) field.onChange("+" + val);
                      }}
                    />
                  )}
                />
              </Field>
            </div>

            {/* ── Section 2: Academic Status ───────────────────── */}
            <SectionHeading number={2} title="Academic Status" className="mt-8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">

              {/* Grade */}
              <Field label="Which grade are you currently in?" required error={errors.grade?.message}>
                <select
                  className={errors.grade ? errorSelectCls : selectCls}
                  {...register("grade")}
                >
                  <option value="">Select your grade</option>
                  {GRADE_OPTIONS.map((g) => (
                    <option key={g.value} value={g.value}>
                      {g.label}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Program – disabled until grade is chosen */}
              <Field label="Program of Interest" required error={errors.program?.message}>
                <select
                  className={
                    (!selectedGrade ? selectCls + " opacity-50 cursor-not-allowed" :
                      errors.program ? errorSelectCls : selectCls)
                  }
                  disabled={!selectedGrade}
                  {...register("program")}
                >
                  <option value="">
                    {selectedGrade ? "Select a program" : "Select grade first"}
                  </option>
                  {programOptions.map((prog) => (
                    <option key={prog} value={prog}>
                      {prog}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            {/* ── Section 3: Agent / Referral ──────────────────── */}
            {/* <SectionHeading number={3} title="Agent &amp; Referral" className="mt-8" /> */}

            {/* <div className="mt-5 space-y-5">

              <Field label="Have you applied through an Agent?" required error={errors.appliedViaAgent?.message}>
                <div className="flex items-center gap-6 h-11">
                  {(["yes", "no"] as const).map((val) => (
                    <label
                      key={val}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        value={val}
                        className="w-4 h-4 accent-[#8B0000] cursor-pointer"
                        {...register("appliedViaAgent")}
                      />
                      <span className="text-sm text-gray-700 font-medium capitalize group-hover:text-[#8B0000] transition-colors">
                        {val === "yes" ? "Yes" : "No"}
                      </span>
                    </label>
                  ))}
                </div>
              </Field>

              <AnimatePresence>
                {appliedViaAgent === "yes" && (
                  <motion.div
                    key="referral"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <Field label="Referral Code" required error={errors.referralCode?.message}>
                      <div className="sm:max-w-xs">
                        <input
                          className={errors.referralCode ? errorInputCls : inputCls}
                          placeholder="Enter your agent's referral code"
                          {...register("referralCode")}
                        />
                      </div>
                    </Field>
                  </motion.div>
                )}
              </AnimatePresence>
            </div> */}

            {/* ── Submit ───────────────────────────────────────── */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5
                  bg-[#8B0000] hover:bg-[#6d0000] text-white font-bold text-sm
                  px-10 py-3.5 rounded-lg transition-colors duration-200
                  disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting…
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              <p className="flex items-center gap-1.5 text-[11px] text-gray-400">
                <Lock className="w-3 h-3 shrink-0" />
                Secure 256-bit SSL Encrypted Portal
              </p>
            </div>

          </form>
        </div>

        {/* ── Disclaimer ──────────────────────────────────────── */}
        <p className="text-center text-xs text-gray-400 mt-5 max-w-xl mx-auto">
          By submitting this form you authorize SIU Dubai to contact you via email,
          WhatsApp and phone regarding your application and academic programs.
        </p>
      </div>
    </div>
  );
}

// ─── Section heading sub-component ────────────────────────────────────────────
function SectionHeading({
  number,
  title,
  className = "",
}: {
  number: number;
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#8B0000] text-white text-xs font-bold shrink-0">
        {number}
      </span>
      <h2
        className="text-base font-bold text-gray-800"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="flex-1 h-px bg-gray-100" />
    </div>
  );
}
