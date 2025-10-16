import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: 
    {
 
       fontFamily: {
        "text-large-medium-font-family": "Nunito-Medium, sans-serif",
      },
      fontSize: {
        "text-large-medium-font-size": "22px",
        "text-sizes-heading-2": "52px",
        "text-sizes-text-large": "22px",
      },
      fontWeight: {
        "text-large-medium-font-weight": "500",
      },
      lineHeight: {
        "text-large-medium-line-height": "150%",
      },
      letterSpacing: {},
      borderRadius: {},
      colors: {
        "color-mantis-lighter": "#e3f2da",
        "color-mantis-light": "#9dd17e",
        "color-mantis": "#73be48",
        "color-white": "#ffffff",
        "color-scheme-3-text": "#010207",
      },
      spacing: {
        "page-padding-padding-global": "64px",
        "section-padding-padding-section-large": "112px",
      },
      width: {},
      minWidth: {},
      maxWidth: {
        "container-container-large": "1280px",
      },
      height: {},
      minHeight: {},
      maxHeight: {},
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
