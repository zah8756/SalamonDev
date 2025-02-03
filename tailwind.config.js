const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'background-light':'#f2f8fd',
        'hover':'#C4DFF0',
        'text-dark':'#1E1F24',
        'text-light':'#c3e0f4',
        'borderG':'#B3B5C1',
        'footerC':'#73bbe7',
        'ButtonC':'#73BCE9'
      },

      keyframes:{
        slideIn:{
          from:{
            opacity:"0",
            transform:"translateY(-10px)",
          },
          to:{
            opacity:"1",
            transform:"translateY(0)",
          }
        },

        fades:{
          '0%':{opacity:.4},
          '100%':{opacity:1}
        }
      },
      animation:{
        fades:'fades 1s ease-in-out',
        slideIn:'slideIn 1.5s ease-in-out'
      }
    },
  },
  plugins: [],
}