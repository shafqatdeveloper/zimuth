/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cyan10:"#e5fbfb",
        cyan20:"#ccf8f7",
        cyan40:"#99f1ee",
        cyan60:"#66e9e6",
        cyan80:"#33e2dd",
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