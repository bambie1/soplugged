module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./scenes/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4e3505",
        "primary-900": "#271a02",
        "primary-100": "#dcd7cd",
        secondary: "#cdb693",
        accent: "#93aacd",
        "accent-dark": "#5479B0",
        light: "#f3f2f2",
        black: "#100b01",
      },
      animation: {
        slide: "100s linear 0s infinite normal none slide",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translate3d(0px, 0px, 0px)" },
          "100%": { transform: "translate3d(-100%, 0px, 0px)" },
        },
      },
      backgroundImage: {
        "pro-gradient":
          "linear-gradient(180deg, rgba(147, 170, 205, 0.14) 0%, rgba(147, 170, 205, 0.28) 100%);",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("prettier-plugin-tailwindcss"),
    require("@tailwindcss/typography"),
  ],
};
