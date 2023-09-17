/** @type {import('tailwindcss').Config} */

const { screens } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [ "*","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'teko':['Teko', 'sans-serif'],
      'lato':['Lato', 'sans-serif']
     

    },
    screens:{
      xsm:"550px",
      ...screens
    }
   
  },
  plugins: [],
}

