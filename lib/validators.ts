import { z } from "zod";

// ─── Lead Form Schema ─────────────────────────────────────────────────────────
export const leadFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be under 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Full name may only contain letters, spaces, hyphens, and apostrophes"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email is too long"),

  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .max(20, "Phone number must be under 20 characters")
    .regex(/^\+?[\d\s\-()]+$/, "Please enter a valid phone number"),

  program: z.string().optional(),

  experience: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

// ─── Step 1 – Contact Info ────────────────────────────────────────────────────
export const contactInfoSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be under 100 characters"),

  email: z
    .string()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .max(20, "Phone must be under 20 characters")
    .regex(/^\+?[\d\s\-()]+$/, "Please enter a valid phone number"),

  dateOfBirth: z
    .string()
    .min(1, "Date of birth is required")
    .refine((dob) => {
      const date = new Date(dob);
      const today = new Date();
      const age = today.getFullYear() - date.getFullYear();
      return age >= 17 && age <= 70;
    }, "You must be between 17 and 70 years old to apply"),
});

export type ContactInfoData = z.infer<typeof contactInfoSchema>;

// ─── Step 2 – Academic Info ───────────────────────────────────────────────────
export const academicInfoSchema = z.object({
  qualification: z.string().min(1, "Please select your highest qualification"),

  yearsExperience: z.string().min(1, "Please select your years of experience"),

  program: z.string().min(1, "Please select your preferred MBA specialisation"),

  cityCountry: z
    .string()
    .min(2, "Please enter your current city / country")
    .max(100, "City / country is too long"),
});

export type AcademicInfoData = z.infer<typeof academicInfoSchema>;

// ─── Full Application Schema (all steps merged) ────────────────────────────────
export const applicationSchema = contactInfoSchema.merge(academicInfoSchema).extend({
  consent: z
    .boolean()
    .refine((val) => val === true, "You must accept the declaration to proceed"),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;

// ─── Utility: map field errors to step ───────────────────────────────────────
export const STEP_FIELDS: Record<number, (keyof ApplicationFormData)[]> = {
  1: ["fullName", "email", "phone", "dateOfBirth"],
  2: ["qualification", "yearsExperience", "program", "cityCountry"],
  3: ["consent"],
};

// ─── UAE Admissions Form Schema ───────────────────────────────────────────────
export const uaeAdmissionsSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(60, "First name is too long")
      .regex(/^[a-zA-Z\s'-]+$/, "First name may only contain letters"),

    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(60, "Last name is too long")
      .regex(/^[a-zA-Z\s'-]+$/, "Last name may only contain letters"),

    email: z.string().email("Please enter a valid email address"),

    phone: z
      .string()
      .min(7, "Please enter a valid phone number")
      .max(20, "Phone number is too long"),

    grade: z.enum(["10th", "11th", "12th", "Graduate"], {
      error: "Please select your current grade",
    }),

    program: z.string().min(1, "Please select a program"),

    // appliedViaAgent: z.enum(["yes", "no"], {
    //   error: "Please select an option",
    // }),

    // referralCode: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // if (data.appliedViaAgent === "yes") {
    //   if (!data.referralCode || data.referralCode.trim().length < 4) {
    //     ctx.addIssue({
    //       code: z.ZodIssueCode.custom,
    //       path: ["referralCode"],
    //       message: "Referral code must be at least 4 characters",
    //     });
    //   }
    // }
  });

export type UaeAdmissionsData = z.infer<typeof uaeAdmissionsSchema>;
