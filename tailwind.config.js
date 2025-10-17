/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#151515',
        'surface-elevated': '#1F1F1F',
        primary: '#00D9FF',
        'primary-light': '#4DE4FF',
        'primary-dark': '#00B8D9',
        secondary: '#FF6B6B',
        accent: '#FFD93D',
        text: '#FFFFFF',
        'text-secondary': '#B4B4B4',
        'text-muted': '#6B6B6B',
        border: '#2A2A2A',
        'border-light': '#3A3A3A',
        success: '#6BCF7F',
        warning: '#FFB84D',
        error: '#FF6B6B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(0, 217, 255, 0.15)',
        'glow-md': '0 0 40px rgba(0, 217, 255, 0.2)',
        'glow-lg': '0 0 60px rgba(0, 217, 255, 0.25)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 8px 40px rgba(0, 217, 255, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
