/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0B0B0D',
          bg: '#0B0B0D',
          card: '#151519',
          elevated: '#1D1D23',
          border: 'rgba(255, 255, 255, 0.08)',
          subtle: '#272730',
        },
        accent: {
          DEFAULT: '#E5FF3F',
          hover: '#D4EE2B',
          glow: 'rgba(229, 255, 63, 0.25)',
          dark: '#9BB010',
        },
        muted: {
          DEFAULT: '#A1A1AA',
          light: '#D4D4D8',
          dark: '#71717A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'accent-glow': '0 0 25px -5px rgba(229, 255, 63, 0.35)',
        'accent-glow-lg': '0 0 40px -5px rgba(229, 255, 63, 0.45)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
