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
      "text-input": "#BCC1CA",
      "black-text": "#323842",
      "highlight-color": "#ffa317",
    },
    extend: {
      fontFamily: {
        lato: [ "Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
