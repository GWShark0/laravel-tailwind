// extends the default Tailwind config
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // purge: ['./src/*.html'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f5f5f5',
          200: '#efefef',
          300: '#d4d6d9',
          400: '#b9bcc1',
          500: '#9ca2ab',
          600: '#737e8c',
          700: '#626C78',
          800: '#36414d',
          900: '#1f2830',
        },
        red: {
          100: '#fce8e7',
          500: '#e32d19',
          700: '#cd2917',
        },
        orange: {
          100: '#fae5d7',
          500: '#fa8334',
          700: '#b04904',
        },
        yellow: {
          100: '#fffce5',
          200: '#fff6bf',
          300: '#fff095',
          400: '#ffea6a',
          500: '#ffe121',
          600: '#fdce1d',
          700: '#fbb617',
        },
        green: {
          100: '#e5f5ea',
          500: '#10ab5b',
          700: '#0a7b40',
        },
        blue: {
          100: '#e3f2ff',
          200: '#bbdeff',
          300: '#75baff',
          400: '#42a1ff',
          500: '#0f87ff',
          600: '#007af5',
          700: '#0066cc',
        },
        pink: {
          100: '#fee3ef',
          200: '#fdb8d7',
          300: '#ff99d0',
          400: '#ff66b8',
          500: '#ff0089',
          600: '#e5007b',
          700: '#cc006e',
        },
      },
      fill: (theme) => ({
        red: theme('colors.red.500'),
        orange: theme('colors.orange.500'),
        yellow: theme('colors.yellow.500'),
        green: theme('colors.green.500'),
        blue: theme('colors.blue.500'),
        pink: theme('colors.pink.500'),
      }),
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        outline: '0 0 0 0.2rem rgba(15, 135, 255, 0.25)',
        'outline-red': '0 0 0 0.2rem rgba(227, 45, 25, 0.25)',
      },
    },
  },
  variants: {},
  plugins: [],
};
