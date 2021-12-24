module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./src/*.{js,jsx,ts,tsx}", "./src/Components/*.{js}", "./src/Pages/*.{js}" ,"./public/index.{html}"],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 1200px)' },
      }
    },
  },
  plugins: [],
}
