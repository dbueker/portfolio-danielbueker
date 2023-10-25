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
      sans: ['"Inter"', 'sans-serif']
    },
    fontSize: {
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
      'subtitle-mobile': ['56px', {
        lineHeight: '105%',
        fontWeight: '300',
        letterSpacing: '-0.04em',
      }],
      'subtitle-desktop': ['80px', {
        lineHeight: '105%',
        fontWeight: '300',
        letterSpacing: '-0.04em',
        fontStretch: '150%'
      }],
      'headline-mobile': ['36px', {
        lineHeight: '110%',
        fontWeight: '600',
        letterSpacing: '-0.025em',
      }],
      'headline-desktop': ['56px', {
        lineHeight: '110%',
        fontWeight: '600',
        letterSpacing: '-0.03em',
      }],
      'chapter': ['18px', {
        lineHeight: '140%',
        fontWeight: '400',
        letterSpacing: '-0.01em',
      }],
      'body': ['24px', {
        lineHeight: '160%',
        fontWeight: '400',
        letterSpacing: '0em',
      }],
      'body-bold': ['24px', {
        lineHeight: '160%',
        fontWeight: '500',
        letterSpacing: '0em',
      }],
      'body-small': ['16px', {
        lineHeight: '160%',
        fontWeight: '400',
        letterSpacing: '0em',
      }],
      'button': ['24px', {
        lineHeight: '110%',
        fontWeight: '400',
        letterSpacing: '0em',
      }],
    },
    colors: {
      //layout lightmode
      'lightmode-primary': '#2470EB',
      'lightmode-on-primary': '#FFFFFF',
      'lightmode-background': '#FFFFFF',
      'lightmode-on-background': '#1D1B20',
      'lightmode-on-background-subdued': '#808080',
      'lightmode-surface': '#F6F8F9',
      'lightmode-on-surface': '#1D1B20',
      'lightmode-surface-variant': '#1D1B20',
      'lightmode-on-surface-variant': '#FFFFFF',
      'lightmode-on-surface-variant-subdued': '#808080',
      'lightmode-border': '#D7DCE1',
      //layout darkmode
      'darkmode-primary': '#A8C7FA',
      'darkmode-on-primary': '#000000',
      'darkmode-background': '#000000',
      'darkmode-on-background': '#FFFFFF',
      'darkmode-on-background-subdued': '#949494',
      'darkmode-surface': '#1D1B20',
      'darkmode-on-surface': '#FFFFFF',
      'darkmode-surface-variant': '#2B2930',
      'darkmode-on-surface-variant': '#FFFFFF',
      'darkmode-on-surface-variant-subdued': '#949494',
      'darkmode-border': '#3C414B',
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