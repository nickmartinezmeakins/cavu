/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#EDC953'
        },
        orange: {
          DEFAULT: '#DB6E2E'
        },
        green: {
          DEFAULT: '#009D42'
        },
        blue: {
          DEFAULT: '#0072EE'
        },
        gray: {
          DEFAULT: '#A2B4C2'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
