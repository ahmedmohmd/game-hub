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
          ...themes['black'],
          primary: '#fff',
        },
      },
      {
        light: {
          ...themes['light'],
          // primary: '#f97316',
        },
      },
    ],
  },
  plugins: [typoghraphy, daisyui],
};
