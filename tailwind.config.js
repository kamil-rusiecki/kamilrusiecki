module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        raleway: ["raleway", "sans-serif"],
        ms: ["montserrat", "sans-serif"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
