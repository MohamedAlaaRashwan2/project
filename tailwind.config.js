/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        blue: {
          400: '#60a5fa',
          500: '#3B82F6',
          600: '#2563eb',
        },
        purple: {
          400: '#a78bfa',
          500: '#8B5CF6',
          600: '#7c3aed',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06B6D4',
          600: '#0891b2',
        },
        brand: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
          cyan: '#06B6D4',
        },
        surface: {
          900: '#0a0a0f',
          800: '#0f0f1a',
          700: '#13131f',
          600: '#1a1a2e',
          500: '#1e1e35',
          400: '#252540',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-mesh': `
          radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 60% 80%, rgba(6,182,212,0.1) 0%, transparent 60%)
        `,
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'blue-purple': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'purple-cyan': 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
        'blue-cyan': 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59,130,246,0.3)',
        'glow-purple': '0 0 30px rgba(139,92,246,0.3)',
        'glow-cyan': '0 0 30px rgba(6,182,212,0.3)',
        'card': '0 1px 1px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.2)',
        'card-hover': '0 1px 1px rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.4), 0 16px 48px rgba(0,0,0,0.3)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59,130,246,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(139,92,246,0.4)' },
        },
      },
    },
  },
  plugins: [],
};
