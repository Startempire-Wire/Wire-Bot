/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6A70',
        secondary: '#333333',
        // More custom colors
      },
    },
  },
 plugins: [],
}
