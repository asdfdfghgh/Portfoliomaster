import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090a0e",
        paper: "#f4f2ee",
        acid: "#d5ff4f",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      keyframes: {
        "soft-pulse": { "0%, 100%": { opacity: "0.45" }, "50%": { opacity: "0.9" } },
      },
      animation: { "soft-pulse": "soft-pulse 4s ease-in-out infinite" },
    },
  },
  plugins: [],
};

export default config;
