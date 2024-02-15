/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        success: colors.green,
        primary: colors.blue,
        danger: colors.red,
        sky: colors.sky,
        white: colors.white,
        green: colors.green,
        amber: colors.amber,
        indigo: colors.indigo,
        gray: colors.gray,
      },
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1024px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
