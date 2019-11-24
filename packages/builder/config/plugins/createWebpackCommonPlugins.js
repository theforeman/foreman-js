const webpack = require('webpack');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// require @theforeman/vendor from the consumer node modules
const { WebpackForemanVendorPlugin } = require('@theforeman/vendor');

const { webpackFilename } = require('../../lib/webpackHelpers');

const createWebpackCommonPlugins = ({ mode, plugin }) => [
  new WebpackForemanVendorPlugin({
    mode,
    copy: !plugin,
  }),
  new StatsWriterPlugin({
    filename: 'manifest.json',
    fields: null,
    transform(data, opts) {
      return JSON.stringify(
        {
          assetsByChunkName: data.assetsByChunkName,
          errors: data.errors,
          warnings: data.warnings,
        },
        null,
        2
      );
    },
  }),
  /*
   * The EnvironmentPlugin takes default values.
   * It will use the default value if process.env[KEY] does not exists.
   */
  new webpack.EnvironmentPlugin({
    NODE_ENV: mode,
    NOTIFICATIONS_POLLING: 10000,
    REDUX_LOGGER: false,
  }),
  new MiniCssExtractPlugin({
    filename: webpackFilename({ mode, plugin, ext: 'css' }),
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: 'analyze-report.html',
  }),
];
module.exports = createWebpackCommonPlugins;
