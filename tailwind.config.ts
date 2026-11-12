import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#09070D",
          50: "#181420",
          100: "#130F1A",
          200: "#0F0B14",
          300: "#0C0911",
          900: "#09070D",
          950: "#050407",
        },
        grape: {
          light: "#3b1a4d",
          DEFAULT: "#24102F",
          dark: "#170a1e",
        },
        purple: {
          rich: "#7136A8",
          electric: "#A970F5",
          accent: "#C084FC",
        },
        soft: {
          white: "#F8F6FA",
        },
        muted: {
          grey: "#A9A2B0",
          light: "#D4CFD9",
          dark: "#6C6575",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grape-glow": "radial-gradient(circle at 50% 30%, rgba(169, 112, 245, 0.15), transparent 70%)",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(113, 54, 168, 0.3), transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 5s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

