/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '12px'
      },
      center: true
    },
    extend: {
      colors: {
        // primary: 'indigo',
        // contrast: '#f31020'
      }
    },
    screens: {
      xs: '576px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '1xl': '1440px',
      '2xl': '1536px',
      '3xl': '1751px'
    }
  },
  plugins: [
    require('daisyui'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '640px',
          '@screen sm': {
            maxWidth: '640px'
          },
          '@screen md': {
            maxWidth: '768px'
          },
          '@screen lg': {
            maxWidth: '960px'
          },
          '@screen xl': {
            maxWidth: '1140px'
          },
          '@screen 2xl': {
            maxWidth: '1200px'
          },
          '@screen 3xl': {
            maxWidth: '1320px'
          }
        }
      });
    }
  ]
};
