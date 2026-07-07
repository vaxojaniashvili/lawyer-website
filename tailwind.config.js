/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0e17',
          900: '#0f1420',
          800: '#161d2e',
          700: '#1f283c',
        },
        gold: {
          400: '#e8c987',
          500: '#d4af6a',
          600: '#b8934d',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif Georgian"', 'Georgia', 'serif'],
        sans: ['"Noto Sans Georgian"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 10px 40px -10px rgba(212, 175, 106, 0.35)',
        soft: '0 20px 60px -20px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at 30% 20%, rgba(212,175,106,0.12), transparent 55%)',
      },
    },
  },
  plugins: [],
}
