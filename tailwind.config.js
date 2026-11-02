/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm cream — primary surface
        cream: {
          50: '#fffdf8',
          100: '#fdf9f0',
          200: '#f7f0e1',
          300: '#efe3cd',
          400: '#e3d2b0',
        },
        // Soft lavender — accent / calm
        lavender: {
          100: '#f4f0fa',
          200: '#e7ddf3',
          300: '#d4c4e8',
          400: '#b9a3d8',
          500: '#9d82c4',
          600: '#7f63a8',
        },
        // Dusty rose — warmth / human
        rose: {
          100: '#f9eef0',
          200: '#f1d9de',
          300: '#e6bcc6',
          400: '#d49aab',
          500: '#c07a8a',
          600: '#a85d6f',
        },
        // Sage green — healing / growth
        sage: {
          100: '#eef2ec',
          200: '#dde7d8',
          300: '#c2d2ba',
          400: '#a8b9a3',
          500: '#8a9d83',
          600: '#6f8168',
          700: '#576451',
        },
        // Sky blue — trust / openness
        sky: {
          100: '#eaf2f7',
          200: '#d4e6ef',
          300: '#b3d3e3',
          400: '#8bbacf',
          500: '#6ba0cf',
        },
        // Warm yellow — gentle optimism
        honey: {
          100: '#fbf3e0',
          200: '#f7e6bd',
          300: '#efd489',
          400: '#e4bd55',
        },
        // Soft peach
        peach: {
          100: '#fbeee6',
          200: '#f6dccc',
          300: '#eec4ad',
          400: '#e3a888',
        },
        // Charcoal — text
        ink: {
          700: '#3d3a36',
          800: '#2b2926',
          900: '#1d1c1a',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.875rem, 3.5vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'h3': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h4': ['clamp(1.25rem, 1.8vw, 1.5rem)', { lineHeight: '1.2' }],
      },
      maxWidth: {
        'prose-well': '68ch',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(61,58,54,0.04), 0 8px 30px -12px rgba(61,58,54,0.10)',
        'soft-lg': '0 2px 4px rgba(61,58,54,0.05), 0 20px 50px -16px rgba(61,58,54,0.16)',
        'lift': '0 24px 60px -20px rgba(61,58,54,0.22)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'breathe': {
          '0%,100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'breathe': 'breathe 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
