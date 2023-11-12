/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        colorOrange: '#F9B091',
        colorPrimary: '#863ED5',
        colorSecondary: '#240F4F',
        colorTertiary: '#8789A3',
        colorGradientStart: '#DF98FA',
        colorGradientEnd: '#9055FF',
      }
    },
  },
  plugins: [],
}

