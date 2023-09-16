/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#432361",
          10: "#783EAD",
          20: "#9B51E0"
        },
        gray: {
          20: "#4F4F4F",
          50: "#E0E0E0",
        }
      }
    },
  },
  plugins: [],
}