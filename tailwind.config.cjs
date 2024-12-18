const theme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', ...theme.fontFamily.sans],
        mono: ['Fira Code', ...theme.fontFamily.mono],
        emoji: ['Noto Color Emoji'],
        flow: ['Flow Circular'],
      },
    },
  },
  plugins: [],
}
