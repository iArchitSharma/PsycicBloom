/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./*.html",
  "./dist/**/*.{css}"],
  theme: {
    extend: {
      colors: {
        myCustom: {
          bg: '#fffffe',  //Background color
          headline: '#094067',
          pg: '#5f6c7b',
          btn: '#3da9fc',
          text: '#fffffe',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
