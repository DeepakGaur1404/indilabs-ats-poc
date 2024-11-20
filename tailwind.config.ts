/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#6750A4",
        "black-rgba": "rgb(90, 216, 166)",
      },
      spacing: {
        164: "164px",
      },
    },
    fontFamily: {
      sans: ["DM Sans"],
    },
    screens: {
      xl: "1200px",
      lg: "992px",
      md: "768px",
      sm: "576px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
