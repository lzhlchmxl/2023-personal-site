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
        }
        // typing3: {
        //   from: { width: '0', opacity: '1' },
        //   to: { width: '78px', opacity: '1' }
        // },
        // blink: {
        //   'from, to': { borderColor: 'transparent' },
        //   '50%': { borderColor: 'orange' }
        // },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        typing1: 'typing1 3s steps(40, end) forwards, fadeOut 1s 5.5s ease forwards',
        typing2: 'typing2 1.5s steps(40, end) forwards 3.5s, fadeOut 1s 6s ease forwards',
        // typing3: 'typing3 0.5s steps(40, end) forwards 5.5s',
        // blink: 'blink .75s step-end infinite',
      },
    },
  },
  plugins: [],
}
