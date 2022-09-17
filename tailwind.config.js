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
        "ping-slow": "ping 3s linear infinite",
        "bounce-slow": "bounce 3s linear infinite",
        "pulse-slow": "pulse 3s linear infinite",
        blob: "blob 7s infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translate3d(0px, 0px, 0px)" },
          "100%": { transform: "translate3d(-100%, 0px, 0px)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      backgroundImage: {
        "pro-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(147, 170, 205, 0.3) 22.4%, rgba(147, 170, 205, 0.3) 75.52%, rgba(147, 170, 205, 0) 100%);",
        "radial-pro":
          "radial-gradient(50% 50% at 50% 50%, rgba(147, 170, 205, 0.8) 0%, rgba(147, 170, 205, 0) 100%);",
      },
      fontFamily: {
        handwriting: ["Gloria Hallelujah", "cursive"],
      },
      listStyleType: {
        square: "square",
      },
      boxShadow: {
        "input-focus": "0 0 0 2px #4e350563",
        "error-focus": "0 0 0 3px #ff00002e",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("prettier-plugin-tailwindcss"),
    require("@tailwindcss/typography"),
  ],
};
