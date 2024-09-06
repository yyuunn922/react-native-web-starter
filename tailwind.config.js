/** @type {import('tailwindcss').Config} */
const {ColorData} = require('./src/util/ColorData');
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './App.tsx',
    './web/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: ColorData,
    },
  },
  plugins: [],
};
