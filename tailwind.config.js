/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#282828",
        black: "#181818",
      },
      keyframes: {
        "show-down-to-top": {
          "0%": { transform: "translateY(8px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" }
        }
      },
      animation: {
        "show-down-to-top": "show-down-to-top 1s ease-out"
      }
    },
  },
  plugins: [],
}
