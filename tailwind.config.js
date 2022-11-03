/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EAECF0',
        secondary: '#667085',
        darkGrey: '#475467',
        labelColor: '#344054',
        placeholderColor: '#667085',
        border: '#D0D5DD'
      },
    },
  },
  plugins: [],
}