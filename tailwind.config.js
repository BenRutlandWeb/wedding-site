/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Great Vibes', 'cursive'],
        sans: ['Noto Sans', 'sans-serif']
      },
      colors: {
        gold: {
          start: '#F1C56C',
          end: '#DAB097'
        }
      }
    },
  },
  plugins: [],
}

