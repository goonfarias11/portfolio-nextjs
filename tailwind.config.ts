import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5e2bff",
          light: "#7c3aed",
          dark: "#4a1fd9",
        },
        background: {
          dark: "#0f172a",
          light: "#f5f7fa",
        },
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        primary: "0 0 20px rgba(94, 43, 255, 0.3)",
        "primary-lg": "0 0 40px rgba(94, 43, 255, 0.5)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        slideshow: "slideshow 20s linear infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideshow: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.6, -0.05, 0.01, 0.99)",
      },
    },
  },
  plugins: [],
} satisfies Config;