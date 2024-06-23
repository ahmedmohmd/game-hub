// tailwind-scrollbar.js

import plugin from 'tailwindcss/plugin';

export const customeScrollBar = plugin(function ({ addUtilities }) {
  addUtilities({
    '.scrollbar': {
      '::-webkit-scrollbar': {
        width: '20px',
      },
      '::-webkit-scrollbar-track': {
        background: '#000',
        'border-radius': '6px',
      },
      '::-webkit-scrollbar-thumb': {
        background: 'red',
        'border-radius': '15px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    },
  });
});
