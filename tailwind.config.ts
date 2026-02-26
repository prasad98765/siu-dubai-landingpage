import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf2f2",
          100: "#fde8e8",
          200: "#fbd5d5",
          300: "#f8b4b4",
          400: "#f28a8a",
          500: "#e85555",
          600: "#c81e1e",
          700: "#9b1c1c",
          800: "#771d1d",
          900: "#6b1717",
          DEFAULT: "#8B0000",
          dark: "#6d0000",
          light: "#b00000",
        },
        secondary: {
          DEFAULT: "#ffffff",
          grey: "#f8f8f8",
          lightgrey: "#f1f1f1",
          border: "#e5e5e5",
        },
        accent: {
          gold: "#C9A84C",
          dark: "#5a0000",
        },
        siu: {
          red: "#8B0000",
          maroon: "#6d0000",
          crimson: "#b00000",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.4s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.14)",
        hero: "0 20px 60px rgba(139, 0, 0, 0.15)",
        form: "0 4px 32px rgba(0,0,0,0.12)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #6d0000 0%, #8B0000 50%, #b00000 100%)",
        "card-gradient":
          "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
