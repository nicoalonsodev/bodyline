/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash-100': ['ClashDisplay-Extralight', 'sans-serif'],
        'clash-300': ['ClashDisplay-Light', 'sans-serif'],
        'clash-400': ['ClashDisplay-Regular', 'sans-serif'],
        'clash-500': ['ClashDisplay-Medium', 'sans-serif'],
        'clash-600': ['ClashDisplay-Semibold', 'sans-serif'],
        'clash-700': ['ClashDisplay-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}