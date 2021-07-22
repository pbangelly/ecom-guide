const colors = require('tailwindcss/colors')
const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
  objectPosition: {
    center: 'center'
  },
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        transparent: 'transparent',
        current: 'currentColor',
        yellow: {
          light: 'rgb(250, 175, 60)',
          DEFAULT: 'rgb(250, 175, 60)', // logo-sword-color:
          dark: 'rgb(250, 175, 60)',
        },
        black: {
          light: '#000',
          DEFAULT: '#000',
          dark: '#000',
        },
        maxWidth: {
          '1/4': '25%',
          '1/2': '50%',
          '3/4': '75%',
        },
      }
    }
  }
};