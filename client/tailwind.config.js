module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        averta: ['Averta', 'sans-serif'],
      },
      backgroundColor: {
        gray: {
          '950': '#090A16',
        },
        green: {
          '450': '#3EAF7C'
        }
      },
      textColor: {
        green: {
          '450': '#3EAF7C',
        },
      },
        borderColor: {
           green: {
            '450': '#3EAF7C',
         }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
