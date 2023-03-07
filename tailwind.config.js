/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],     //configers and looks for the html for for compilation 
    theme: {
     screens: {
        sm:"480px",
        md:"768px",
        lg:"976px",
        xl:"1440px"

        },
        
      
      extend: {
        colors:{
          brightRed: 'hsl(12, 88%, 59%)',
          brightRedLight: 'hsl(12, 88%, 69%)',
          brightRedSupLight: 'hsl(12, 88%, 95%)',
          darkBlue: 'hsl(228, 39%, 23%)',
          darkGrayishBlue: 'hsl(227, 12%, 61%)',
          veryDarkBlue: 'hsl(233, 12%, 13%)',
          veryPaleRed: 'hsl(13, 100%, 96%)',
          veryLightGray: 'hsl(0, 0%, 98%)',
          // firstSectionColor: "#505170",
          // secondSectionColor:"F8FAFF",
          // underHeader:"#F4F4F4",
          // Clickbuttons:"#008EBD",
          // bgColor:"#FFFFFF",
          // footer:"1E1E29",
  
  
  
        },
      },
    },
    plugins: [],
  }



