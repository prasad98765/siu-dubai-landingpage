import Image from "next/image";
import HeroSection from "@/components/hero/HeroSection";
import ProgramsTabs from "@/components/programs/ProgramsTabs";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WhySIUSection from "@/components/sections/WhySIUSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AdmissionStepsSection from "@/components/sections/AdmissionStepsSection";
import FAQSection from "@/components/sections/FAQSection";
import TrustBadges from "@/components/sections/TrustBadges";

/**
 * Landing page – renders all marketing sections in sequence.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <FeaturesSection />
      <ProgramsTabs />
      <WhySIUSection />
      <TestimonialsSection />
      <AdmissionStepsSection />
      <FAQSection />
    </>
  );
}
