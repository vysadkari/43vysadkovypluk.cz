const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#A4082E",
          light: "#D50A3C",
          dark: "#4C0D1C",
        },
      },
      dropShadow: {
        bold: "3px 3px 2px rgba(0, 0, 0, .7)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
