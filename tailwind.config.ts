import type { Config } from "tailwindcss";

const config: Config = {
  safelist: [
    "border-l-amber-500",
    "border-l-emerald-500",
    "border-l-sky-400",
    "border-l-rose-400",
    "border-l-orange-400",
    "bg-amber-500",
    "bg-emerald-500",
    "bg-sky-400",
    "bg-rose-400",
    "bg-orange-400",
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#1a1a1a",
          deeper: "#0f0f0f",
          card: "#242424",
          border: "#333333",
        },
        gold: {
          DEFAULT: "#c4a24d",
          light: "#d4a853",
          dark: "#a88a3d",
        },
        cream: {
          DEFAULT: "#f5f0e8",
          dark: "#e0d8cc",
          muted: "#b8b0a4",
        },
        warm: {
          gray: "#8a8278",
          light: "#a89f94",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "Georgia", "serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-delay": "fadeIn 0.6s ease-out 0.2s forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
