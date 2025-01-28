const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
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