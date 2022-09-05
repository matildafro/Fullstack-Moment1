/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        "primaryBlue" : "#666666"
      },
      fontFamily: {
        "primaryFont" : ["Times new roman, serif"]
      }
    },
  },
  plugins: [],
}
