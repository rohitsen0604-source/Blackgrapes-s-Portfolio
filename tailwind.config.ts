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
        offwhite: {
          DEFAULT: "#F7F5F0",
          light: "#FCFAF7",
          dark: "#EFECE5",
        },
        navy: {
          DEFAULT: "#14243A",
          dark: "#0D1827",
          light: "#1F3552",
          subtle: "#2A4569",
        },
        coral: {
          DEFAULT: "#F07860",
          hover: "#E0634A",
          light: "#F79986",
          subtle: "rgba(240, 120, 96, 0.12)",
        },
        stone: {
          DEFAULT: "#E8E5DF",
          light: "#F0EDE8",
          dark: "#D8D4CC",
        },
        slateText: {
          DEFAULT: "#777D87",
          light: "#959BA5",
          dark: "#525760",
        },
        editorialBorder: {
          DEFAULT: "#E2DED7",
          subtle: "#ECE8E2",
          dark: "#C9C4BB",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
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
