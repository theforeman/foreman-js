const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const createWebpackRules = ({ mode }) => [
  {
    test: /\.js$/,
    /* Include novnc, unidiff in webpack, transpiling is needed for phantomjs (which does not support ES6) to run tests
    unidiff can be removed once https://github.com/mvoss9000/unidiff/pull/1 is merged */
    exclude: /node_modules(?!\/(@novnc|unidiff))/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('../babel')],
    },
  },
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      require.resolve('css-loader'),
      require.resolve('sass-loader'),
    ],
  },
  {
    test: /(\.png|\.gif)$/,
    use: require.resolve('url-loader'),
  },
];

module.exports = createWebpackRules;
