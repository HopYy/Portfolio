/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#111111",
        "second-color": "#1e1e1e",
        "third-color": "#282828"
      },
    },
  },
  plugins: [],
}