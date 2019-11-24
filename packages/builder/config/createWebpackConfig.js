const { webpackFilename } = require('../lib/webpackHelpers');
const createWebpackRules = require('./createWebpackRules');
const createWebpackPlugins = require('./createWebpackPlugins');

const createWebpackConfig = options => {
  const { mode, entry, output, plugin, alias } = options;

  return {
    mode,
    entry,

    devtool: 'source-maps',

    output: {
      path: output,
      publicPath: '/webpack/',
      filename: webpackFilename({ mode, plugin, ext: 'js' }),
    },

    optimization: {
      namedModules: true,
      namedChunks: true,
    },

    resolve: {
      alias,
    },

    // externals: [
    //   (context, request, callback) => {
    //     if (/^foremanReact/.test(request)) {
    //       return callback(null, `commonjs ${request}`);
    //     }
    //     return callback();
    //   },
    // ],

    module: {
      rules: createWebpackRules(options),
    },

    plugins: createWebpackPlugins(options),
  };
};

module.exports = createWebpackConfig;
