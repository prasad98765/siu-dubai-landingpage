// ─── Program Types ────────────────────────────────────────────────────────────
export type ProgramCategory =
  | "undergraduate"
  | "graduate";

export interface Program {
  id: string;
  title: string;
  subtitle?: string;
  year?: string;
  category: ProgramCategory;
  /** Actual photo URL (Unsplash CDN or local /images/programs/*.jpg) */
  image?: string;
  /** Fallback gradient when no image is available */
  gradient?: string;
  duration: string;
  seats?: number;
  description: string;
  highlights: string[];
  url?: string;
}

// ─── Tab Definitions ──────────────────────────────────────────────────────────
export const PROGRAM_TABS: { id: ProgramCategory; label: string }[] = [
  { id: "undergraduate", label: "Undergraduate Programmes" },
  { id: "graduate", label: "Postgraduate Programmes" }
];

// ─── Programs Data ────────────────────────────────────────────────────────────
export const PROGRAMS: Program[] = [
  // ── Undergraduate ─────────────────────────────────────────────
  {
    id: "bba",
    title: "BBA",
    category: "undergraduate",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    duration: "3 Years",
    description: "Bachelor of Business Administration focusing on management fundamentals and business leadership.",
    highlights: ["Industry exposure", "Business foundations", "Career-oriented curriculum"],
    url: "https://siu-dubai.ac.ae/bba",
  },
  {
    id: "bba-dual-degree",
    title: "BBA Dual Degree",
    category: "undergraduate",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80",
    duration: "3 Years",
    description: "Dual degree BBA programme offering international academic exposure.",
    highlights: ["International degree", "Global exposure", "Credit transfer"],
    url: "https://siu-dubai.ac.ae/bba-dual-degree",
  },
  {
    id: "bca",
    title: "BCA",
    category: "undergraduate",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    duration: "3 Years",
    description: "Bachelor of Computer Applications focused on software development and IT fundamentals.",
    highlights: ["Programming focus", "IT foundations", "Industry-ready skills"],
    url: "https://siu-dubai.ac.ae/bca",
  },
  {
    id: "bamc",
    title: "BAMC",
    category: "undergraduate",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
    duration: "3 Years",
    description: "Bachelor of Arts in Mass Communication covering media, journalism, and digital communication.",
    highlights: ["Media training", "Practical exposure", "Industry projects"],
    url: "https://siu-dubai.ac.ae/mass-communication",
  },
  {
    id: "bcom-acca",
    title: "B.Com. with ACCA Preparation",
    category: "undergraduate",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    duration: "3 Years",
    description: "Commerce degree integrated with ACCA professional exam preparation.",
    highlights: ["ACCA aligned", "Global accounting standards", "Professional readiness"],
    url: "https://siu-dubai.ac.ae/bcom",
  },
  {
    id: "bcom-honors-acca",
    title: "B.Com. (Honors) with ACCA Preparation",
    category: "undergraduate",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    duration: "3 Years",
    description: "Honours commerce programme with advanced ACCA preparation.",
    highlights: ["Honours curriculum", "ACCA exemptions", "Global recognition"],
    url: "https://siu-dubai.ac.ae/bcom-honors",
  },
  {
    id: "bsc-psychology",
    title: "BSc Psychology (Honors)",
    category: "undergraduate",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    duration: "3 Years",
    description: "Undergraduate psychology programme focusing on human behaviour and mental processes.",
    highlights: ["Research driven", "Practical exposure", "Honours track"],
    url: "https://siu-dubai.ac.ae/bsc-psychology",
  },
  {
    id: "btech-computer-engineering",
    title: "B.Tech in Computer Engineering",
    category: "undergraduate",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    duration: "4 Years",
    description: "Engineering programme specialising in computer systems and software technologies.",
    highlights: ["Engineering core", "Industry labs", "Technology driven"],
    url: "https://siu-dubai.ac.ae/btech",
  },

  // ── Graduate ──────────────────────────────────────────────────
  {
    id: "mba",
    title: "MBA",
    category: "graduate",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    duration: "2 Years",
    description: "Master of Business Administration designed for leadership, strategy, and global business.",
    highlights: ["Leadership focus", "Industry exposure", "Career advancement"],
    url: "https://siu-dubai.ac.ae/mba-program",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
export function getProgramsByCategory(category: ProgramCategory): Program[] {
  return PROGRAMS.filter((p) => p.category === category);
}

// ─── UAE Admissions: Grade options ───────────────────────────────────────────
export type GradeOption = "10th" | "11th" | "12th" | "Graduate";

export const GRADE_OPTIONS: { value: GradeOption; label: string }[] = [
  { value: "10th",      label: "10th Grade" },
  { value: "11th",      label: "11th Grade" },
  { value: "12th",      label: "12th Grade" },
  { value: "Graduate",  label: "Graduate" },
];

/** Undergraduate programs shown for 10th / 11th / 12th */
const UG_PROGRAMS = [
  "BACHELOR OF ARTS IN MEDIA AND COMMUNICATION – DIGITAL MARKETING AND ADVERTISING",
  "BACHELOR OF ARTS IN MEDIA AND COMMUNICATION – PUBLIC RELATIONS AND CORPORATE COMMUNICATION",
  "BACHELOR OF BUSINESS ADMINISTRATION",
  "BACHELOR OF BUSINESS ADMINISTRATION (DUAL DEGREE)",
  "BACHELOR OF BUSINESS ADMINISTRATION (HONORS) – FINANCE",
  "BACHELOR OF BUSINESS ADMINISTRATION (HONORS) – HUMAN RESOURCE MANAGEMENT",
  "BACHELOR OF BUSINESS ADMINISTRATION (HONORS) – LOGISTICS AND SUPPLY CHAIN MANAGEMENT",
  "BACHELOR OF BUSINESS ADMINISTRATION (HONORS) – MARKETING",
  "BACHELOR OF BUSINESS ADMINISTRATION – ACCOUNTING AND FINANCE",
  "BACHELOR OF BUSINESS ADMINISTRATION – FINANCE",
  "BACHELOR OF BUSINESS ADMINISTRATION – HUMAN RESOURCE MANAGEMENT",
  "BACHELOR OF BUSINESS ADMINISTRATION – LOGISTICS AND SUPPLY CHAIN MANAGEMENT",
  "BACHELOR OF BUSINESS ADMINISTRATION – MARKETING",
  "BACHELOR OF COMMERCE + ACCA Prep",
  "BACHELOR OF COMMERCE (HONORS) + ACCA Prep",
  "BACHELOR OF COMPUTER APPLICATIONS – ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
  "BACHELOR OF COMPUTER APPLICATIONS – CLOUD COMPUTING",
  "BACHELOR OF COMPUTER APPLICATIONS – DATA SCIENCE AND DATA ANALYTICS",
  "BACHELOR OF SCIENCE IN PSYCHOLOGY",
  "BACHELOR OF SCIENCE IN PSYCHOLOGY (HONORS)",
  "BACHELOR OF TECHNOLOGY IN COMPUTER ENGINEERING",
] as const;

/** Programs shown for Graduate */
const PG_PROGRAMS = [
  "MASTER OF BUSINESS ADMINISTRATION",
] as const;

export const PROGRAMS_BY_GRADE: Record<GradeOption, readonly string[]> = {
  "10th":     UG_PROGRAMS,
  "11th":     UG_PROGRAMS,
  "12th":     UG_PROGRAMS,
  "Graduate": PG_PROGRAMS,
};

// Options for dropdowns
export const PROGRAM_OPTIONS = [
  { value: "mba-finance", label: "MBA in Finance" },
  { value: "mba-marketing", label: "MBA in Marketing" },
  { value: "mba-operations", label: "MBA in Operations" },
  { value: "mba-analytics", label: "MBA in Business Analytics" },
  { value: "mba-hr", label: "MBA in Human Resources" },
  { value: "mba-digital", label: "MBA in Digital Marketing" },
];

export const QUALIFICATION_OPTIONS = [
  { value: "bachelor", label: "Bachelor's Degree" },
  { value: "master", label: "Master's Degree" },
  { value: "diploma", label: "Diploma" },
  { value: "phd", label: "Ph.D." },
  { value: "other", label: "Other" },
];

export const EXPERIENCE_OPTIONS = [
  { value: "0-1", label: "0–1 Years" },
  { value: "1-3", label: "1–3 Years" },
  { value: "3-5", label: "3–5 Years" },
  { value: "5-10", label: "5–10 Years" },
  { value: "10+", label: "10+ Years" },
];
