/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        secondary: {
          300: "#10b981",
          400: "#059669",
          500: "#047857",
          600: "#065f46",
          700: "#064e3b",
        },
        background: "rgb(var(--color-background, 255 255 255))",
        foreground: "rgb(var(--color-foreground, 17 24 39))",
        muted: "#f3f4f6",
        accent: "#3b82f6",
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
        display: ['"Special Gothic Expanded One"', "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Courier New'", "monospace"],
      },
    },
  },
  safelist: [
    "from-primary-600",
    "to-primary-900",
    "dark:from-primary-500",
    "dark:to-primary-800",
    "from-secondary-400",
    "to-secondary-700",
    "dark:from-secondary-300",
    "dark:to-secondary-600",
    "bg-gradient-to-r",
  ],
  plugins: [],
};
