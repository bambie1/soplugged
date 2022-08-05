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
        light: "#f3f2f2"
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
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("prettier-plugin-tailwindcss"),
  ],
};
