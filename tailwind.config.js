/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#FE724C',
        lightGrey:'#C4C4C4',
        text:'#838383'
      },
      fontFamily:{
        robotoCB:['robotoCB'],
        robotoR:['robotoR'],
        roboto:['roboto']
      },
    },
  },
  plugins: [],
}
