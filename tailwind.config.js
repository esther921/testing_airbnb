/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "arial"],
      },
      colors: {
        primary: "#ff385c",
      },
      screens: {
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "940px" },
        sm: { max: "640px" },
      },
    },
  },
  plugins: [],
};
