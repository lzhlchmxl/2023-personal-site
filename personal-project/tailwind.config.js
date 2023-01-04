/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        typing1: {
          from: { width: '0', opacity: '1' },
          to: { width: '290px', opacity: '1' }
        },
        typing2: {
          from: { width: '0', opacity: '1' },
          to: { width: '220px', opacity: '1' }
        },
        fadeOut: {
          from: {opacity: '1'},
          to: {opacity: '0'}
        },
        wipeDown: {
          from: { height: '0', opacity: '0' },
          to: { height: '100%', opacity: '1'}
        },
        shrink: {
          from: { 'max-width': '1000px' },
          to: { 'max-width': '33%'}
        },
        fadeInFromLeft: {
          from: { transform: 'translateX(-50px)', opacity: '0'},
          to: { transform: 'translateX(0)',opacity: '1'}
        },
        fadeInFromRight: {
          from: { transform: 'translateX(50px)', opacity: '0'},
          to: { transform: 'translateX(0)',opacity: '1'}
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        typing1: 'typing1 3s steps(40, end) forwards, fadeOut 1s 5.5s ease forwards',
        typing2: 'typing2 1.5s steps(40, end) forwards 3.5s, fadeOut 1s 6s ease forwards',
        wipeDown: 'wipeDown 1s linear 6s forwards',
        shrink: 'shrink 3s ease-in-out 5s forwards',
        fadeInFromLeft: 'fadeInFromLeft 3s ease-out 7s forwards',
        fadeInFromRight: 'fadeInFromRight 3s ease-out 7s forwards',
      },
    },
  },
  plugins: [],
}
