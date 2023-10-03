/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "240px",
        sm: "320px",
        sml: "480px",
        md: "768px",
        // lg: "960px",
        lg: "1024px",
        
      },
      fontFamily: {
        bodyFont: ["DM Sans", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        primeColor: "#D131FB",
        secColor: "#150E28",
        thdColor: '#903AFF',
        fthColor: '#D434FE'
      },
    },
  },
  plugins: [],
}

