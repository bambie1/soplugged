module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./scenes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4e3505",
        secondary: "#cdb693",
        accent: "#93aacd",
        accent2: "#CD93C7",
      },
      animation: {
        slide: "slide 15s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-10%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
