module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      autoprefixer: {
        browsers: "ie >= 9"
      }
    }
  }
};
