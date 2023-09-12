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
      sans: ['"SourceSans3"', 'sans-serif']
    },
    fontSize: {
      'title-mobile': ['56px', {
        lineHeight: '110%',
        fontWeight: '600',
        letterSpacing: '-0.03em',
      }],
      'title-desktop': ['82px', {
        lineHeight: '110%',
        fontWeight: '600',
        letterSpacing: '-0.03em',
      }],
      'subtitle-mobile': ['56px', {
        lineHeight: '110%',
        fontWeight: '300',
        letterSpacing: '-0.03em',
      }],
      'subtitle-desktop': ['82px', {
        lineHeight: '110%',
        fontWeight: '300',
        letterSpacing: '-0.03em',
        fontStretch: '150%'
      }],
      'h1-mobile': ['36px', {
        lineHeight: '110%',
        fontWeight: '600',
        letterSpacing: '-0.01em',
      }],
      'h1-desktop': ['56px', {
        lineHeight: '110%',
        fontWeight: '600',
        letterSpacing: '-0.01em',
      }],
      'h2-mobile': ['32px', {
        lineHeight: '110%',
        fontWeight: '500',
        letterSpacing: '-0.01em',
      }],
      'h2-desktop': ['48px', {
        lineHeight: '110%',
        fontWeight: '500',
        letterSpacing: '-0.01em',
      }],
      'chapter': ['20px', {
        lineHeight: '130%',
        fontWeight: '400',
        letterSpacing: '-0.01em',
      }],
      'body': ['26px', {
        lineHeight: '160%',
        fontWeight: '350',
        letterSpacing: '0.03em',
      }],
      'body-semibold': ['26px', {
        lineHeight: '160%',
        fontWeight: '400',
        letterSpacing: '0.03em',
      }],
      'body-bold': ['26px', {
        lineHeight: '160%',
        fontWeight: '600',
        letterSpacing: '0.03em',
      }],
      'body-small': ['16px', {
        lineHeight: '160%',
        fontWeight: '300',
        letterSpacing: '0.03em',
      }],
      'button': ['26px', {
        lineHeight: '110%',
        fontWeight: '400',
        letterSpacing: '0.02em',
      }],
    },
    colors: {
      'lightmode-primary': '#000000',
      'lightmode-on-primary': '#FFFFFF',
      'lightmode-on-primary-subdued': '#808080',
      'accent': '#3C56EC',
      'on-accent': '#FFFFFF',
      'lightmode-background': '#FFFFFF',
      'lightmode-on-background': '#1D1B20',
      'lightmode-on-background-subdued': '#808080',
      'lightmode-surface': '#F6F8F9',
      'lightmode-on-surface': '#1D1B20',
      'lightmode-border': '#D7DCE1',
      'darkmode-primary': '#2B2930',
      'darkmode-on-primary': '#FFFFFF',
      'darkmode-on-primary-subdued': '#949494',
      'darkmode-background': '#000000',
      'darkmode-on-background': '#FFFFFF',
      'darkmode-on-background-subdued': '#949494',
      'darkmode-surface': '#1D1B20',
      'darkmode-on-surface': '#FFFFFF',
      'darktmode-border': '#3C414B',
      'secondary-streckenagent': '#061350',
      'secondary-hek': '#9CE0F3',
      'secondary-lightelligence': '#FF6000',
      'on-secondary-light': '#1D1B20',
      'on-secondary-dark': '#FFFFFF',
      'utility-red': '#EC0016',
      'utility-lightred': '#FEE6E6',
      'utility-blue': '#1455C0',
      'utility-lightblue': '#E0EFFB',
      'utility-green': '#508B1B',
      'utility-lightgreen': '#E9F8D9',
      'on-utility-light': '#1D1B20',
      'on-utility-dark': '#FFFFFF'
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