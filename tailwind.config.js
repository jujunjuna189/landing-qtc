/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        dark: '#486281',
        muted: "",
        light: "",
      },
      secondary: {
        dark: '#EDA241',
        muted: "",
        light: "",
      },
      danger: {
        dark: '#E1372C',
        muted: "",
        light: "",
      },
      dark: {
        dark: '#404041',
        muted: "#504F50",
        light: "",
      },
      gray: {
        dark: '#DBDBDC',
        muted: "",
        light: "",
      },
      white: {
        dark: '',
        muted: "#EDEDED",
        light: "#FFFFFF",
      },
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}