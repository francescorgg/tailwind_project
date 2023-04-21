/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'], //useremo './*.html' non avendo per questo progetto delle src directory o altro
  theme: {
    extend: {
      colors: {

        // https://coolors.co/palettes/trending <---- link per palette dei colori
        paletteRichBlack: 'rgb(47, 72, 88)',
        paletteBlueMarine: 'rgb(51, 101, 138)',
        paletteCerulean: 'rgb(51, 101, 138)',
        paletteYellow: 'rgb(246, 174, 45)',
        paletteOrange: 'rgb(242, 100, 25)'
      }
    },
  },
  plugins: [],
}

