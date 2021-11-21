/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const borderRadius = require('./tailwind/border-radius');
const boxShadow = require('./tailwind/box-shadows');
const colors = require('./tailwind/colors');
const fontFamilies = require('./tailwind/font-families');
const fontSizes = require('./tailwind/font-sizes');
const spacing = require('./tailwind/spacing');
const viewports = require('./tailwind/viewports');

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    borderRadius,
    boxShadow,
    colors,
    fontFamily: fontFamilies,
    fontSize: fontSizes,
    screens: viewports,
    spacing,
    textShadow: {
      default:
        'var(--text-shadow-size) var(--text-shadow-size) 0 var(--text-shadow-color);',
      none: 'none',
    },
    extend: {
      minHeight: spacing,
      maxHeight: spacing,
      minWidth: spacing,
      maxWidth: {
        ...spacing,
        '3xl-w-padding': 'calc(48rem + 1.6rem)',
      },
      lineHeight: {
        0: '0',
        relaxed: '1.75',
      },
      letterSpacing: {
        unset: 'unset',
        button: '0.03125rem', // 0.5px
        fab: '0.0625rem', // 1px
      },
      dropShadow: {
        'project-icon': '0 1px 2px var(--filter-color, var(--dashed-color))',
        'project-preview':
          '2px 3px 4px var(--filter-color, var(--dashed-color))',
      },
      outline: {
        accent: ['2px solid var(--accent)', '0px'],
      },
      transitionDelay: {
        0: '0ms',
        50: '50ms',
      },
    },
  },
  corePlugins: {
    appearance: false,
    float: false,
    zIndex: false,
    transitionProperty: false,
    transitionDuration: false,
    transitionTimingFunction: false,
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-textshadow')],
};
