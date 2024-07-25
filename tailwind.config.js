/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlack:"#31363f",
        darkWhite:"#efefef",
        darkCyan:"#00dbd5",
        darkBlue:"#003dc4",
        darkPurple:"#251760"
      }
    },
  },
  plugins: [],
  darkMode:"class"
}