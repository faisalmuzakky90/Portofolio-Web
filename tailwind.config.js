/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#090a0f',
          card: '#12141d',
          border: '#1f2438',
          accent: '#00f0ff',
          neon: '#7928ca',
          purple: '#9d4edd',
          emerald: '#00ff87'
        }
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'border-beam': 'borderBeam 8s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        borderBeam: {
          '100%': {
            'offset-distance': '100%',
          },
        }
      }
    },
  },
  plugins: [],
}
