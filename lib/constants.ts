// ─── Site Metadata ───────────────────────────────────────────────────────────
export const SITE = {
  name: "SIU Dubai",
  fullName: "Symbiosis International University – Dubai Campus",
  tagline: "Excellence in Global Higher Education",
  description:
    "Accelerate your career with a world-class MBA in the heart of global commerce. Industry-aligned curriculum designed for future business leaders.",
  email: "admissions@siudubai.edu",
  phone: "+971 4 XXX XXXX",
  address: "Dubai International Academic City, UAE",
  copyright: "© 2026 Symbiosis School for Online and Digital Learning.",
  constituent: "A constituent of Symbiosis International (Deemed University).",
  currentYear: 2026,
} as const;

// ─── Navigation Links ─────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Programs", href: "#programs", hasDropdown: true },
  { label: "Why SIU", href: "#why-siu" },
  { label: "Admissions", href: "#admissions" },
  { label: "FAQ", href: "#faq" },
] as const;

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: "80,000+", label: "Active Students" },
  { value: "20+", label: "Faculty Experts" },
  { value: "1,600+", label: "Global Partners" },
  { value: "120,000+", label: "Alumni Network" },
  { value: "47+", label: "Global Accreditors" },
] as const;

// ─── Program Features ─────────────────────────────────────────────────────────
export const PROGRAM_FEATURES = [
  {
    icon: "Globe",
    title: "Global Curriculum",
    description:
      "International perspectives integrated throughout the MBA program specializations.",
  },
  {
    icon: "Briefcase",
    title: "Industry Aligned",
    description:
      "Regular interaction with leaders from Fortune 500 companies and MNC program champions.",
  },
  {
    icon: "Users",
    title: "Expert Faculty",
    description:
      "Learn from top-tier renowned faculty members with extensive corporate experience.",
  },
  {
    icon: "MapPin",
    title: "Dubai Advantage",
    description:
      "Strategic location inside the world's most dynamic business hub.",
  },
] as const;

// ─── Accreditations ───────────────────────────────────────────────────────────
export const ACCREDITATIONS = ["AACSB", "EQUIS", "AMBA", "UGC", "NAAC A++"] as const;

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS: {
  quote: string;
  name: string;
  role: string;
  location: string;
  featured?: boolean;
}[] = [
  {
    quote:
      "The exposure at SIU Dubai was transformative. The faculty integrated academic insight with real-world challenges and helped me transition to a leadership role in finance.",
    name: "Sarah Al-Makhani",
    role: "MBA '23 · Finance",
    location: "Dubai, UAE",
  },
  {
    quote:
      "Dual accreditation and the SIU Dubai location gave me a massive edge. I was able to secure an internship at a top MNC and that summer internship that semester ended.",
    name: "Rahul Pinto",
    role: "MBA · Operations",
    location: "Mumbai, India",
    featured: true,
  },
  {
    quote:
      "The networking opportunities here are unmatched. The alumni community is incredibly supportive. Along with peer transitions across the GCC region.",
    name: "James Chen",
    role: "MBA '24 · Strategy",
    location: "Singapore",
  },
];

// ─── Why SIU ──────────────────────────────────────────────────────────────────
export const WHY_SIU = [
  {
    title: "Triple Crown Accreditations",
    description: "Recognised globally through top accreditation bodies.",
  },
  {
    title: "Strategic Industry Partnerships",
    description: "Collaborative programs with KPMG, Deloitte, and more.",
  },
  {
    title: "State-of-the-Art Dubai Campus",
    description: "Modern facilities, dynamic student campus experience.",
  },
] as const;

// ─── Admission Steps ──────────────────────────────────────────────────────────
export const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Application",
    description: "Fill out the complete online application with your details.",
  },
  {
    step: "02",
    title: "Assessment",
    description: "Personal interview and document verification for evaluation.",
  },
  {
    step: "03",
    title: "Offer Letter",
    description: "Receive your conditional offer letter.",
  },
  {
    step: "04",
    title: "Enrollment",
    description: "Complete enrollment and begin your MBA journey.",
  },
] as const;

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    question: "Is the degree recognised globally?",
    answer:
      "Yes. SIU Dubai degrees are UGC-recognised and accepted worldwide. Symbiosis International University holds NAAC A++ accreditation and is consistently QS-ranked.",
  },
  {
    question: "What are the specialisations offered?",
    answer:
      "We offer MBA specialisations in Finance, Marketing, Operations, Digital Marketing, Human Resources, and Business Analytics.",
  },
  {
    question: "Can I work while studying?",
    answer:
      "Dubai allows student visa holders to work part-time (up to 15 hours per week). Many students leverage the vibrant Dubai ecosystem for internships and placements.",
  },
  {
    question: "Are there placement support services?",
    answer:
      "Yes. Our dedicated Career Services team assists with resume building, mock interviews, job fairs, and industry connects through our 120,000+ alumni network.",
  },
  {
    question: "What is the intake period for 2026?",
    answer:
      "The 2026 intake applications are open now. Early applicants receive priority consideration and scholarship opportunities.",
  },
] as const;

// ─── Footer Links ─────────────────────────────────────────────────────────────
// export const FOOTER_LINKS = {
//   quickLinks: [
//     { label: "About SIU Dubai", href: "#" },
//     { label: "MBA Programs", href: "#programs" },
//     { label: "Academic Calendar", href: "#" },
//     { label: "Placement Partners", href: "#" },
//     { label: "Alumni Hub", href: "#" },
//   ],
//   programs: [
//     { label: "Global MBA", href: "#" },
//     { label: "Executive MBA", href: "#" },
//     { label: "Business MBA", href: "#" },
//     { label: "Digital Marketing MBA", href: "#" },
//     { label: "Finance Certificate", href: "#" },
//   ],
// } as const;

// ─── Success Page Steps ───────────────────────────────────────────────────────
export const SUCCESS_STEPS = [
  { icon: "FileText", title: "Profile Review", description: "Evaluating credentials" },
  { icon: "Users", title: "Interaction", description: "Personal interview" },
  { icon: "Award", title: "Admission Offer", description: "Receive official letter" },
] as const;

// ─── Badges ───────────────────────────────────────────────────────────────────
export const TRUST_BADGES = [
  { icon: "Shield", label: "Internationally Accredited" },
  { icon: "Globe", label: "Global Acceptance" },
  { icon: "Star", label: "QS World Rankings" },
  { icon: "Users", label: "100K+ Global Alumni" },
] as const;
