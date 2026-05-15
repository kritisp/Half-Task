/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#111c33',
          mint: '#f0f9f8',
          teal: '#1db59b',
          tealDark: '#169982',
          tealLight: '#eaf6f4',
          inputBg: '#f4f9f8',
          // Dark Mode Base
          darkBg: '#082f26',
          darkCard: '#156153',
          darkAccent: '#4bd4bc',
          // Photography Accents
          photoAccent: '#f97316',
          // Driver Accents
          driverAccent: '#0ea5e9',
          driverLight: '#e0f2fe',
          // Creator Accents
          creatorAccent: '#8b5cf6',
          creatorLight: '#f3e8ff'
        }
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        blob: 'blob 7s infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}
