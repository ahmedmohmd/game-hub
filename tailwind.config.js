import typoghraphy from '@tailwindcss/typography';
import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes.js';

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        dark: {
          ...themes['dark'],

          'base-100': '#000',
          primary: '#ff7a00',
        },
      },
      {
        light: {
          ...themes['light'],
        },
      },
    ],
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [typoghraphy, daisyui],
};
