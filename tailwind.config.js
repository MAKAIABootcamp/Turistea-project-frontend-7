/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      "primary-color": "#2196f3",
      "secondary-color": "#ffffff",
      "bg-input": "rgba(33, 150, 243, 0.09)",
      "gray-input": "#BCC1CA",
      "gray-cards":"#9095A0",
      "black-text": "#323842",
      "highlight-color": "#ffa317",
    },
    extend: {
      fontFamily: {
        title: [ "Lato", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
