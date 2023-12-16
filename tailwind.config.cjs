const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

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
        az: {
          DEFAULT: "#304e12",
          light: "#4a771c",
        },
        stone: {
          950: "#0c0a09",
        },
      },
      dropShadow: {
        bold: "3px 3px 2px rgba(0, 0, 0, .7)",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ matchUtilities }) => {
      matchUtilities({
        "grid-area": (value) => ({
          "grid-area": value.split(" ").join(" / "),
        }),
      });
    }),
  ],
};
