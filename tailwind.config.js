/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#eeeeef",
          200: "#e6e9ed",
          600: "#95989c"

        },
        purple: {
          300: "#dee8ff",
          500: "#7571c7",
          600: "#5046e5"

        }
      }
    },
  },
  plugins: [],
}

