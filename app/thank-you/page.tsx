import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, FileText, Users, Award } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Application Submitted | ${SITE.name}`,
  description:
    "Thank you for your interest in SIU Dubai's MBA program. Our admissions team has received your details.",
};

const NEXT_STEPS = [
  {
    icon: FileText,
    step: "1. Profile Review",
    desc: "Evaluating credentials",
  },
  {
    icon: Users,
    step: "2. Interaction",
    desc: "Personal interview",
  },
  {
    icon: Award,
    step: "3. Admission Offer",
    desc: "Receive official letter",
  },
];

/**
 * /thank-you – Shown after a successful application submission.
 */
export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 max-w-lg w-full overflow-hidden text-center" style={{maxWidth:"45%"}}>

        {/* ── Content area ─────────────────────────────────────── */}
        <div className="px-8 pt-10 pb-8">

          {/* Checkmark icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#8B0000]/10 mx-auto mb-6">
            <CheckCircle2 className="w-9 h-9 text-[#8B0000]" strokeWidth={2.5} />
          </div>

          {/* Heading */}
          <h1 className="text-[22px] sm:text-2xl font-extrabold text-gray-900 mb-3 tracking-tight leading-snug">
            Application Submitted Successfully!
          </h1>

          {/* Sub-text */}
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            Thank you for your interest in SIU Dubai&apos;s MBA program. Our admissions
            team has received your details and will contact you shortly to guide
            you through the next steps.
          </p>

          {/* ── Next steps ─────────────────────────────────────── */}
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#8B0000] mb-5">
            Next Steps
          </p>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {NEXT_STEPS.map(({ icon: Icon, step, desc }) => (
              <div
                key={step}
                className="flex flex-col items-center gap-2 bg-gray-50 rounded-xl p-3.5"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#8B0000]/10">
                  <Icon className="w-5 h-5 text-[#8B0000]" strokeWidth={1.8} />
                </div>
                <span className="text-[12px] font-bold text-gray-800 leading-tight">
                  {step}
                </span>
                <span className="text-[11px] text-gray-400 leading-tight">
                  {desc}
                </span>
              </div>
            ))}
          </div>

          {/* ── CTA buttons ────────────────────────────────────── */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#8B0000] hover:bg-[#6b0000] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors duration-150"
            >
              Go to Homepage
            </Link>
          </div>
        </div>

        {/* ── Campus image ─────────────────────────────────────── */}
        <div className="relative w-full h-44">
          <Image
            src="/images/hero-bg.jpg"
            alt="SIU Dubai campus"
            fill
            className="object-cover grayscale"
            sizes="(max-width: 512px) 100vw, 512px"
          />
        </div>

      </div>
    </div>
  );
}
