import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#07040D",
          soft: "#0D0818",
          deep: "#040209",
        },
        nebula: {
          DEFAULT: "#2D1B4E",
          light: "#4A2E7A",
          deep: "#1A0F2E",
          pink: "#6B2D6B",
        },
        gold: {
          DEFAULT: "#D4AF37",
          soft: "#F4E5C3",
          deep: "#9C7A22",
          glow: "#FFDF8C",
        },
        moon: {
          DEFAULT: "#FDF6E3",
          glow: "#FFF9E8",
        },
      },
      fontFamily: {
        display: ["var(--font-serif-bengali)", "serif"],
        body: ["var(--font-hind-siliguri)", "sans-serif"],
        utility: ["var(--font-noto-bengali)", "sans-serif"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, rgba(7,4,13,0) 70%)",
        "gold-gradient": "linear-gradient(135deg, #F4E5C3 0%, #D4AF37 50%, #9C7A22 100%)",
        "purple-gradient": "linear-gradient(180deg, #1A0F2E 0%, #07040D 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(212,175,55,0.35)",
        "gold-glow-lg": "0 0 60px rgba(212,175,55,0.25)",
        "moon-glow": "0 0 80px 20px rgba(253,246,227,0.35)",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-slower": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", filter: "brightness(1)" },
          "50%": { opacity: "1", filter: "brightness(1.3)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 90s linear infinite",
        "spin-slower": "spin-slower 140s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
