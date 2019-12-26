const webpack = require('webpack');

module.exports = ({ config }) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('storybook'),
        CWD: JSON.stringify(process.cwd()),
      },
    })
  );

  config.plugins.push(
    new webpack.ContextReplacementPlugin(
      /intl\/locale-data\/jsonp/,
      new RegExp(`/(en)$`)
    )
  );
  config.plugins.push(
    new webpack.ContextReplacementPlugin(
      /react-intl\/locale-data/,
      new RegExp(`/(en)$`)
    )
  );

  return config;
};
