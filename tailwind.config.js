import typoghraphy from '@tailwindcss/typography';
import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes.js';
// import { customeScrollBar } from './src/plugins/scrollbar';

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
          primary: '#ff7a00',
        },
      },
      'black',
    ],
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [typoghraphy, daisyui],
};
