const colors = require('./styles/colors.module');

module.exports = {
  purge: { enabled: true, content: ['./src/layouts/**/*.vue'] },
  colors,
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    shadow: 'var(--shadow)',
    debugScreens: {
      position: ['bottom', 'left'],
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    screens: {
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '400px' },
      '-xs': { min: '400px' },
      '-sm': { min: '639px' },
      '-md': { min: '767px' },
      '-lg': { min: '1023px' },
      '-xl': { min: '1279px' },
    },
    extend: {
      fontSize: {
        xxs: '0.6rem',
        md: '0.95rem',
      },
      lineHeight: {
        1: '1',
        '1/25': '1.25',
        '1/5': '1.5',
        maxHeight: {
          inh: 'inherit',
        },
        maxWidth: {
          12: '12rem',
          xxs: '16rem',
        },
        padding: {
          '2px': '2px',
          '3px': '3px',
          '4px': '4px',
          '5p': '5%',
          '10p': '10%',
          '15p': '15%',
          '20p': '20%',
          '25p': '25%',
          '30p': '30%',
          '35p': '35%',
        },
        margin: {
          '5p': '5%',
          '10p': '10%',
          '15p': '15%',
          '20p': '20%',
          '25p': '25%',
          '30p': '30%',
          '35p': '35%',
        },
        spacing: {
          72: '18rem',
          80: '20rem',
          88: '22rem',
          96: '24rem',
          104: '26rem',
        },
        boxShadow: {
          default: '0 0 10px var(--shadowColor)',
          top: '0 -4px 10px var(--shadowColor)',
          bottom: '0 4px 10px var(--shadowColor)',
        },
        inset: {
          header: 'var(--headerHeight)',
          footer: 'var(--footerHeight)',
        },
      },
      important: true,
    },
  },
  variants: {
    extend: {},
  },

  // plugins: [require('tailwindcss-debug-screens')],
};
