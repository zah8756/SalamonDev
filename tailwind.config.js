const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        fades:{
          '0%':{opacity:.4},
          '100%':{opacity:1}
        }
      },
      animation:{
        fades:'fades 1s ease-in-out '
      }
    },
  },
  plugins: [],
}