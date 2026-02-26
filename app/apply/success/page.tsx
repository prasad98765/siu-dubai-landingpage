import type { Metadata } from "next";
import SuccessMessage from "@/components/forms/SuccessMessage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Application Submitted | ${SITE.name}`,
  description: "Your MBA application has been successfully submitted to SIU Dubai.",
};

/**
 * /apply/success – Shown after form submission.
 */
export default function SuccessPage() {
  return <SuccessMessage />;
}
