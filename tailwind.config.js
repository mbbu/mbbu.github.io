/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,md}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: (theme) => ({
        primary: theme.colors.blue[800], //blue-700
        primaryDark: theme.colors.blue[400], //blue-400
        // surface: colors.white,
        // Dark: "#1f2937", //gray-800
      }),
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
        display: ['"Playfair Display"', "serif"],
        body: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
