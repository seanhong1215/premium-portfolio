import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050507',
          900: '#09090b',
          800: '#18181b',
          700: '#27272a',
          600: '#3f3f46',
        },
        accent: {
          blue: '#0369a1',
          cyan: '#22d3ee',
          green: '#14b8a6',
          violet: '#8b5cf6',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Noto Sans TC', 'Archivo', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Noto Sans TC', 'Archivo', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 44px rgba(37, 99, 235, 0.28)',
        soft: '0 24px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'premium-radial':
          'radial-gradient(circle at 20% 15%, rgba(37,99,235,0.24), transparent 32%), radial-gradient(circle at 80% 10%, rgba(34,211,238,0.14), transparent 28%), linear-gradient(180deg, #050507 0%, #09090b 48%, #101014 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config
