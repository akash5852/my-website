module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./src/*.{js,jsx,ts,tsx}", "./src/Components/*.{js}", "./src/Pages/*.{js}" ,"./public/index.{html}"],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 1200px)' },
        'xs': { 'raw': '(min-width: 407px)' },
        'xxs': { 'raw': '(min-width: 390px max-width: 406px)' },
        'xxxs': { 'raw': '(min-width: 300px)' },
      }
    },
  },
  plugins: [],
}
