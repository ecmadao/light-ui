const path = require('path');
const webpack = require('webpack');

const postcssImport = require('postcss-import');
const postcssNext = require('postcss-cssnext');

const SOURCE_PATH = path.join(__dirname, '../components');
const WRAPPER_PATH = path.join(__dirname, '../examples');
const cssLoader = [
  'style-loader',
  'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap',
  'postcss-loader'
];

function getPostcssPlugins(webpack_) {
  return [
    // tell webpack to watch imported css changes
    postcssImport({ addDependencyTo: webpack_ }),
    postcssNext({
      autoprefixer: {
        browsers: "ie >= 9, ..."
      }
    })
  ]
}

module.exports = {
  context: SOURCE_PATH,
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: SOURCE_PATH,
        loader: cssLoader.join('!'),
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
        exclude: SOURCE_PATH
      },
      {
        test: /\.(js|jsx)$/,
        include: SOURCE_PATH,
        loaders: ['babel-loader'],
      },
      // {
      //   test: /\.svg$/,
      //   loader: 'babel!react-svg'
      // },
      {
        test: require.resolve('jquery'),
        loader: 'expose?jQuery'
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose?$'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  postcss: getPostcssPlugins,
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    }),
  ],
  devtool: '#source-map',
  debug: true
};
