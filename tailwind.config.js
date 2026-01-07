/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#93C572', // Pistachio - الفستقي
          light: '#B4D99A',
          dark: '#7BA85A',
        },
        secondary: {
          DEFAULT: '#0f172a', // Slate 900 - الكحلي
          light: '#1e293b',
          dark: '#020617',
        },
      },
      fontFamily: {
        arabic: ['Cairo', 'Tajawal', 'Arial', 'sans-serif'],
        english: ['Inter', 'Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

