/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: '#004AAD;',
        blueDark: '#002A61;',
        black: '#00060D',
        white: '#F8F8F8',
        grey: '#4B4B4B',
        greyLight: '##A6A6A6',
        redLight: '#D9C0C0',
        red: '#ff0000',
        palePink: "#F6EAEA"
      },
      fontSize: {
        '2.5xl': ['1.8rem', '2.3rem'],
        '4.5xl': ['2.5rem', '3.2rem'],
      }
    },
  },
  plugins: [],
};
