module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    extend: {
      colors: {
        primary: "#4e3505",
        "primary-900": "#271a02",
        "primary-100": "#dcd7cd",
        secondary: "#cdb693",
        light: "#F8F4EF",
        black: "#100b01",
        "pluggedin-black": "#140D01",
        "pluggedin-pink": "#F3B5B7",
      },
      listStyleType: {
        square: "square",
      },
      boxShadow: {
        "input-focus": "0 0 0 2px #4e350563",
        "error-focus": "0 0 0 3px #ff00002e",
        "bottom-nav": "0 4px 14px 0 rgb(78 56 10 / 39%)",
      },

      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("prettier-plugin-tailwindcss"),
    require("@tailwindcss/typography"),
  ],
};
