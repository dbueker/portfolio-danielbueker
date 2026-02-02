/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      sans: ['"Instrument Sans"', 'sans-serif'],
      display: ['"BBH Bartle"', 'sans-serif']
    },
    fontSize: {
      'display-mobile': ['32px', {
        lineHeight: '120%',
        fontWeight: '400',
      }],
      'display-desktop': ['48px', {
        lineHeight: '120%',
        fontWeight: '400',
      }],
      'title-mobile': ['56px', {
        lineHeight: '105%',
        fontWeight: '600',
        letterSpacing: '-0.04em',
      }],
      'title-desktop': ['80px', {
        lineHeight: '105%',
        fontWeight: '600',
        letterSpacing: '-0.04em',
      }],
      'headline-mobile': ['36px', {
        lineHeight: '110%',
        fontWeight: '600',
        letterSpacing: '-0.025em',
      }],
      'headline-desktop': ['48px', {
        lineHeight: '110%',
        fontWeight: '600',
        letterSpacing: '-0.03em',
      }],
      'chapter': ['28px', {
        lineHeight: '120%',
        fontWeight: '500',
        letterSpacing: '0.0em',
      }],
      'body': ['22px', {
        lineHeight: '160%',
        fontWeight: '400',
        letterSpacing: '0em',
      }],
      'body-semibold': ['22px', {
        lineHeight: '160%',
        fontWeight: '500',
        letterSpacing: '0em',
      }],
      'body-bold': ['22px', {
        lineHeight: '160%',
        fontWeight: '600',
        letterSpacing: '0em',
      }],
      'body-small': ['16px', {
        lineHeight: '160%',
        fontWeight: '400',
        letterSpacing: '0em',
      }],
      'body-large': ['28px', {
        lineHeight: '120%',
        fontWeight: '400',
        letterSpacing: '0.015em',
      }],
      'button': ['24px', {
        lineHeight: '110%',
        fontWeight: '400',
        letterSpacing: '0em',
      }],
      'menu': ['18px', {
        lineHeight: '110%',
        fontWeight: '500',
        letterSpacing: '0.015em',
      }],
    },
    colors: {
      //layout
      'background': '#F0F0F0',
      'on-background': '#000000',
      'on-background-subdued': '#4D4D4D',
      'surface': '#F6F8F9',
      'on-surface': '#000000',
      'surface-variant': '#000000',
      'on-surface-variant': '#FFFFFF',
      'on-surface-variant-subdued': '#808080',
      'red': '#FFDBB8',
      'on-red': '#9B290F',
      'blue': '#0D00FF',
      'on-blue': '#FFFFFF',
      //utility
      'utility-red': '#EC0016',
      'utility-lightred': '#FEE6E6',
      'utility-blue': '#1455C0',
      'utility-lightblue': '#E0EFFB',
      'utility-green': '#508B1B',
      'utility-lightgreen': '#E9F8D9',
      'on-utility-light': '#1D1B20',
      'on-utility-dark': '#FFFFFF'
      //colors and gradients for the projects are set in the teaser component
    },
    borderRadius: {
      DEFAULT: '40px',
      'left': '40px 0 0 40px',
      'right': '0 40px 40px 0',
      'top': '40px 40px 0 0',
      'bottom': '0 0 40px 40px',
      'top-left': '40px 0 0 0',
      'top-right': '0 40px 0 0',
      'bottom-left': '0 0 40px 0',
      'bottom-right': '0 0 0 40px',
      'small': '24px',
      'small-left': '24px 0 0 24px',
      'small-right': '0 24px 24px 0',
      'small-top': '24px 24px 0 0',
      'small-bottom': '0 0 24px 24px',
      'small-top-left': '24px 0 0 0',
      'small-top-right': '0 24px 0 0',
      'small-bottom-left': '0 0 24px 0',
      'small-bottom-right': '0 0 0 24px',
      'full': '9999px'
    },
    extend: {
      boxShadow: {
        'navbar': '0 3px 6px 0px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}