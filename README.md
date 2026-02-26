# SIU Dubai – MBA Application Platform

Production-ready lead capture and multi-step application platform for Symbiosis International University Dubai, built with **Next.js 16, TypeScript, Tailwind CSS v4, React Hook Form, Zod, and Framer Motion**.

---

## 🚀 Quick Start

```bash
# Install and run (one command)
./scripts/run.sh

# Or manually:
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
siu-dubai-app/
├── app/
│   ├── layout.tsx              # Root layout (Header + Footer)
│   ├── globals.css             # Tailwind v4 + custom tokens
│   ├── page.tsx                # Landing page
│   ├── apply/
│   │   ├── page.tsx            # Multi-step application form
│   │   └── success/
│   │       └── page.tsx        # Success confirmation screen
│   └── api/
│       └── submit/
│           └── route.ts        # Mock POST endpoint (replace with CRM)
│
├── components/
│   ├── header/
│   │   ├── Header.tsx          # Sticky navbar with mobile menu
│   │   └── ProgramsDropdown.tsx # Mega-menu for Programs nav item
│   ├── footer/
│   │   └── Footer.tsx
│   ├── hero/
│   │   └── HeroSection.tsx     # Full-bleed hero + stats
│   ├── programs/
│   │   ├── ProgramsTabs.tsx    # Tabbed program showcase
│   │   └── ProgramCard.tsx     # Image-style program card
│   ├── forms/
│   │   ├── LeadForm.tsx        # Hero lead capture form
│   │   ├── Stepper.tsx         # Step indicator
│   │   ├── ApplicationForm.tsx # 3-step application flow
│   │   └── SuccessMessage.tsx  # Post-submission success page
│   ├── sections/
│   │   ├── FeaturesSection.tsx
│   │   ├── WhySIUSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── AdmissionStepsSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── TrustBadges.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       └── Card.tsx
│
├── lib/
│   ├── constants.ts            # Site-wide constants (stats, FAQs, etc.)
│   ├── programs.ts             # Program data + types
│   └── validators.ts           # Zod schemas for all forms
│
└── scripts/
    └── run.sh                  # One-click setup + run script
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| React Hook Form + Zod | Form validation |
| Framer Motion | Animations |
| Lucide React | Icons |

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Marketing landing page |
| `/apply` | 3-step application form |
| `/apply/success` | Submission confirmation |
| `/api/submit` | Mock POST endpoint |

---

## 🔌 Connecting a Real Backend

Replace the mock in `app/api/submit/route.ts`:

```typescript
// Example: HubSpot CRM
await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
  method: 'POST',
  headers: { Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}` },
  body: JSON.stringify({ properties: { email: data.email, ... } }),
});
```

Store secrets in `.env.local` (never commit to version control).

---

## 🚀 Production Deployment

```bash
npm run build
npm run start

# Or deploy to Vercel (recommended):
npx vercel --prod
```

---

© 2026 Symbiosis School for Online and Digital Learning. A constituent of Symbiosis International (Deemed University).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
