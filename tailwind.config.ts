import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        jet: {
          DEFAULT: "#111111",
          light: "#1A1A1A",
          dark: "#080808",
        },
        tangerine: {
          DEFAULT: "#FF6B35",
          hover: "#E55A27",
          light: "#FF8757",
          subtle: "rgba(255, 107, 53, 0.12)",
        },
        warmGrey: {
          DEFAULT: "#F1F0EC",
          light: "#F7F6F3",
          dark: "#E3E1DA",
        },
        secondaryGrey: {
          DEFAULT: "#777777",
          light: "#999999",
          dark: "#555555",
        },
        borderGrey: {
          DEFAULT: "#E5E5E5",
          dark: "#2A2A2A",
          light: "#EEEEEE",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        editorial: "-0.03em",
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;
