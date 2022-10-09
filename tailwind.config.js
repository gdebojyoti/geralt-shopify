module.exports = {
  content: [
    "./**/*.{liquid,json}"
    // "./assets/*.liquid",
    // "./layout/*.liquid",
    // "./sections/*.liquid",
    // "./snippets/*.liquid",
    // "./templates/*.liquid",
    // // "./templates/**/*.liquid"
    // "./templates/customers/*.liquid"
  ],
  theme: {
    extend: {
      colors: {
        omega: {
          100: '#222',
          200: '#333'
        },
        alpha: {
          100: '#f7f7f7'
        }
      },
      height: {
        "94": "22rem"
      }
    },
  },
  plugins: [],
}
