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
  ],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      }
    }
  }
};