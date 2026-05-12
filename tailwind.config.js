/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  "./*.html",
  "./assets/js/**/*.js",
],
  theme: {
    extend: {
      fontFamily: {
      display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['"Poppins"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        primary: {
          50:  '#f0f7ff',
          100: '#e0effe',
          200: '#badefd',
          300: '#7ec3fc',
          400: '#38a3f8',
          500: '#0e86e8',
          600: '#0267c5',
          700: '#0352a0',
          800: '#074684',
          900: '#0c3b6d',
          950: '#082548',
        },
        gold: {
          DEFAULT: '#C8973A',
          light:   '#E4BC72',
          dark:    '#9A6E20',
          pale:    '#F5E6C8',
        },
        navy: {
          DEFAULT: '#0D1F3C',
          light:   '#1A3460',
          mid:     '#122952',
          dark:    '#070F1E',
        },
        warm: {
          50:  '#FAFAF7',
          100: '#F5F3EE',
          200: '#EDE9E0',
          300: '#DDD8CB',
        },
        slate: {
          body: '#3D4655',
          muted:'#7A8394',
        },
      },
fontSize: {
  'display-xl': [
    'clamp(2.3rem, 5vw, 4.2rem)',
    {
      lineHeight: '1.08',
      letterSpacing: '-0.04em',
      fontWeight: '700',
    },
  ],

  'display-lg': [
    'clamp(1.9rem, 4vw, 3.2rem)',
    {
      lineHeight: '1.1',
      letterSpacing: '-0.03em',
      fontWeight: '700',
    },
  ],

  'display-md': [
    'clamp(1.45rem, 2.5vw, 2.2rem)',
    {
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
      fontWeight: '600',
    },
  ],

  'display-sm': [
    'clamp(1.05rem, 1.8vw, 1.35rem)',
    {
      lineHeight: '1.35',
      letterSpacing: '-0.015em',
      fontWeight: '600',
    },
  ],
},
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      borderRadius: {
        'xs': '0.125rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glass':   '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
        'card':    '0 2px 12px rgba(13,31,60,0.06), 0 1px 3px rgba(13,31,60,0.04)',
        'card-hover': '0 16px 40px rgba(13,31,60,0.12), 0 4px 12px rgba(13,31,60,0.06)',
        'gold':    '0 4px 20px rgba(200,151,58,0.25)',
        'navy':    '0 8px 30px rgba(13,31,60,0.25)',
      },
      backgroundImage: {
        'hero-gradient':   'linear-gradient(135deg, #070F1E 0%, #0D1F3C 50%, #122952 100%)',
        'gold-gradient':   'linear-gradient(135deg, #9A6E20, #C8973A, #E4BC72)',
        'warm-gradient':   'linear-gradient(180deg, #FAFAF7 0%, #F5F3EE 100%)',
        'section-pattern': 'radial-gradient(circle at 1px 1px, rgba(200,151,58,0.15) 1px, transparent 0)',
      },
      backgroundSize: {
        'pattern-sm': '24px 24px',
        'pattern-md': '32px 32px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulse_slow: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up':      'fadeUp 0.7s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        'fade-in':      'fadeIn 0.6s ease forwards',
        'slide-left':   'slideInLeft 0.7s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        'slide-right':  'slideInRight 0.7s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        'scale-in':     'scaleIn 0.5s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        'shimmer':      'shimmer 2.5s linear infinite',
        'pulse-slow':   'pulse_slow 3s ease-in-out infinite',
        'float':        'float 3s ease-in-out infinite',
      },

      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}