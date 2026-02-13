/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ios-blue': '#007AFF',
        'ios-gray': '#8E8E93',
        'ios-light': '#F2F2F7',
        'ios-dark': '#1C1C1E',
        'ios-card': '#FFFFFF',
        'ios-card-dark': '#2C2C2E',
        'ios-separator': '#C6C6C8',
        'ios-purple': '#AF52DE',
        'ios-pink': '#FF2D55',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in',
        'galaxy-orbit': 'galaxyOrbit 18s linear infinite',
        'portal-pulse': 'portalPulse 3s ease-in-out infinite',
        'stars-twinkle': 'starsTwinkle 4s ease-in-out infinite',
        'explode': 'explode 1s ease-out forwards',
        'envelope-open': 'envelopeOpen 0.5s ease-out forwards',
        'countdown-pulse': 'countdownPulse 1s ease-in-out infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite',
        'letter-float': 'letterFloat 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '10%, 30%': { transform: 'scale(0.9)' },
          '20%, 40%, 50%, 60%, 70%, 80%, 90%': { transform: 'scale(1.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        galaxyOrbit: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        portalPulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 25px rgba(168, 85, 247, 0.5)',
          },
          '50%': {
            transform: 'scale(1.08)',
            boxShadow: '0 0 45px rgba(236, 72, 153, 0.9)',
          },
        },
        starsTwinkle: {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '1' },
        },
        explode: {
          '0%': {
            transform: 'scale(0) rotate(0deg) translate(0, 0)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.2) rotate(180deg) translate(var(--explode-x), var(--explode-y))',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1) rotate(360deg) translate(var(--final-x), var(--final-y))',
            opacity: '1',
          },
        },
        envelopeOpen: {
          '0%': { transform: 'scale(1) rotateY(0deg)' },
          '50%': { transform: 'scale(1.1) rotateY(180deg)' },
          '100%': { transform: 'scale(0) rotateY(360deg)', opacity: '0' },
        },
        countdownPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.8' },
        },
        textGlow: {
          '0%, 100%': { 
            textShadow: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
          },
          '50%': { 
            textShadow: '0 0 30px rgba(236, 72, 153, 0.8), 0 0 60px rgba(168, 85, 247, 0.5), 0 0 80px rgba(236, 72, 153, 0.3)',
          },
        },
        letterFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
