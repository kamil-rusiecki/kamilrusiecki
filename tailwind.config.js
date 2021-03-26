const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
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
