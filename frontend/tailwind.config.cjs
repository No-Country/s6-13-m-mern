const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: '#004AAD',
        blueDark: '#002A61;',
        black: '#00060D',
        white: '#F8F8F8',
        grey: '#4B4B4B',
        greyLight: '##A6A6A6',
        redLight: '#D9C0C0',
        red: '#ff0000',
        palePink: '#F6EAEA',
        blueUser: '#0064EB',
      },
      fontSize: {
        '2.5xl': ['1.8rem', '2.3rem'],
        '4.5xl': ['2.5rem', '3.2rem'],
      },
      keyframes: {
        fadeInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0deg)', opacity: '1' },
        },
        fadeInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0deg)', opacity: '1' },
        },
        fadeInBottom: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        kenburnsRight: {
          '0%': { transform: 'scale(1) translate(0, 0)', transformOrigin: '84% 50%' },
          '100%': { transform: 'scale(1.25) translateX(20px)', transformOrigin: 'right' },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        fadeInRight: 'fadeInRight 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        fadeInBottom: 'fadeInBottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
        kenburnsRight: 'kenburnsRight 5s ease-out both',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      })
    }),
  ],
}
