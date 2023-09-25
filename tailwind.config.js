/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
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

