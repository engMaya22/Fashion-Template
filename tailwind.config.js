/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        primaryColor: '#010a5e',
        primaryColorLight: "#010d78",
        secondaryColor: '#FFCC00',
        whiteColor: '#fff',
        blackColor: "#000",
        greenLigthColor: "#C2EFD4",
        greenColor: "#224F34",
        paragraphColor : '#267D49',
        imageColor : '#6BC785',
        liColor: '#454545',
        submitColor :'#A3F3BE',

        

        
        redColor: "#cc3433",
        darkColor: '#000',
        darkColorLight: "#171717",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem'
        }
      },
    },
  },
  plugins: [],
}

