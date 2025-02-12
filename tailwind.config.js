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
        muted: "#3C516A",
        light: "#6F89A7",
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
    extend: {
      keyframes: {
        slideLeft1: {
          "0%": { transform: "translateX(150%)", opacity: "1" },
          "90%": { transform: "translateX(-100%)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
        slideLeft2: {
          "0%": { transform: "translateX(150%)", opacity: "1" },
          "100%": { transform: "translateX(-200%)", opacity: "1" },
        },
      },
      animation: {
        'spin-slow': 'spin 90s linear infinite', // Durasi 2 detik, tanpa henti
        "slide-1": "slideLeft1 2s ease-in-out",
        "slide-2": "slideLeft2 1.7s ease-in-out",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}