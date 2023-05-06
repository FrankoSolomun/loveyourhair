/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {

    screens: {
      'xs': '375px',
      'xs2': '385px',
      'xs3': '390px',
      'xs4': '410px',
      'xs5': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px', //720
      '2xl': '1366px', //768
      '3xl': '1440px', //900
      '4xl': '1536px', //864
      '5xl': '1700px', //1080
      '6xl': '2500px', //1440
      '7xl': '3040px', //1440

    },
    fontFamily: {
      //add font poppins with 64px font size
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}