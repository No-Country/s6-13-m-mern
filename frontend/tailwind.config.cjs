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
        blueDark: '#002A61',
        black: '#00060D',
        white: '#F8F8F8',
        grey: '#4B4B4B',
        greyLight: '#A6A6A6',
        redLight: '#D9C0C0',
        red: '#ff0000',
        palePink: '#F6EAEA',
        blueUser: '#0064EB',
        greenLight: '#4FCD3A',
        greenJungle: "#25bd7d"
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
        jelloHorizontal: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "30%": { transform: "scale3d(1.25, 0.75, 1)" },
          "40%": { transform: "scale3d(0.75, 1.25, 1)" },
          "50%": { transform: "scale3d(1.15, 0.85, 1)" },
          "65%": { transform: "scale3d(0.95, 1.05, 1)" },
          "75%": { transform: "scale3d(1.05, 0.95, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" }
        },
        kenburnsRight: {
          '0%': { transform: 'scale(1) translate(0, 0)', transformOrigin: '84% 50%' },
          '100%': { transform: 'scale(1.25) translateX(20px)', transformOrigin: 'right' },
        },
        slideInBlurredBottom: {
          '0%': { transform: 'translateY(1000px) scaleY(2.5) scaleX(0.2)', transformOrigin: '50% 100%', filter: 'blur(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0) scaleY(1) scaleX(1)', transformOrigin: '50% 50%', filter: 'blur(0)', opacity: '1' },
        },
        write: {
          "from": { width: "0" },
          "to": { width: "100%" }
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        fadeInRight: 'fadeInRight 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        fadeInBottom: 'fadeInBottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
        kenburnsRight: 'kenburnsRight 5s ease-out both',
        write: 'write 0.8s steps(30) 0.2s',
        slideInBlurredBottom: 'slideInBlurredBottom 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000)',
        jelloHorizontal: 'jelloHorizontal 0.9s both 1s'
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
