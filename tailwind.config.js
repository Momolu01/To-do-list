module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // https://colorhunt.co/palette/293b5f47597edbe6fdb2ab8c
      blue_main: "#293B5F",
      blue_secun: "#47597E",
      blue_third: "#DBE6FD",
      gray: "#B2AB8C"
    },
    extend: {
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
