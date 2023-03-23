/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ['Outfit'],
      },
      colors: {
        White: 'hsl(0, 0%, 100%)',
        LightGray: 'hsl(212, 45%, 89%)',
        GrayishBlue: 'hsl(220, 15%, 55%)',
        DarkBlue: 'hsl(218, 44%, 22%)',
      },
    },
  },
  plugins: [],
};
