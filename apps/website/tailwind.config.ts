import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#141414",
        light: "#F8F4EF",
        primary: "#4E3505",
        pink: "#FCC0E8",
      },
      keyframes: {
        slideDown: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out",
      },
      backgroundImage: {
        "tbm-gradient":
          "radial-gradient(29.77% 50% at 50% 50%, #5D1344 0%, #141414 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
export default config;
