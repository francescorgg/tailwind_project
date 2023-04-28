/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'], //useremo './*.html' non avendo per questo progetto delle src directory o altro
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors: {

        // https://coolors.co/palettes/trending <---- link per palette dei colori
        paletteRichBlack: 'rgb(47, 72, 88)',
        paletteGrey: 'rgb(177, 167, 166)',
        paletteLigthGrey: 'rgb(248, 249, 250)',
        paletteBlueMarine: 'rgb(51, 101, 138)',
        paletteCerulean: 'rgb(51, 101, 138)',
        paletteYellow: 'rgb(246, 174, 45)',
        paletteOrange: 'rgb(242, 100, 25)'
      }
    },
  },
  plugins: [],
}

