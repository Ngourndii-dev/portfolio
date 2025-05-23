/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#3b82f6',
      },
      fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};