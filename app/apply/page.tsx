import type { Metadata } from "next";
import { Suspense } from "react";
import ApplicationForm from "@/components/forms/ApplicationForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Apply Now | ${SITE.name}`,
  description: "Complete your MBA application for SIU Dubai 2026 intake.",
};

/**
 * /apply – Multi-step extended application form page.
 * Wrapped in Suspense because ApplicationForm uses useSearchParams.
 */
export default function ApplyPage() {
  return (
    <Suspense fallback={null}>
      <ApplicationForm />
    </Suspense>
  );
}
