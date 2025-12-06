const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    '../../libs/**/*.{ts,tsx,js,jsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      animation: {
        'slide-up': 'slide-up 0.3s ease-out',
      },
      keyframes: {
        'slide-up': {
          '0%': {
            transform: 'translateY(1rem) translateX(-50%)',
            opacity: '0',
          },
          '100%': { transform: 'translateY(0) translateX(-50%)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
