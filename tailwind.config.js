/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#080609',
        'dark-burgundy': '#310714',
        'romantic-red': '#A71942',
        'soft-rose': '#F1A5B5',
        'champagne': '#F5D9CB',
        'white': '#FFF8F5',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(167, 25, 66, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(167, 25, 66, 0.6)' },
        }
      },
      backdropBlur: {
        'glass': '10px',
      }
    },
  },
  plugins: [],
}