#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Use the tfm-build command to build your bundles
 */

const webpack = require('webpack');
const loadCliArguments = require('../lib/loadCliArguments');
const loadUserConfigFile = require('../lib/loadUserConfigFile');
const createWebpackConfig = require('../config/createWebpackConfig');

// 1. Read the CLI arguments (mode, config)
const { mode = 'production', config: userConfigFile } = loadCliArguments(
  'mode',
  'config'
);

// 2. Read the user config file (tfm-build.config.js)
const userConfig = loadUserConfigFile(userConfigFile);

// 3. Create webpack configuration object
const webpackConfig = createWebpackConfig({ ...userConfig, mode });

// 4. Build with webpack
webpack(webpackConfig, (err, stats) => {
  console.log(
    stats.toString({
      assets: true,
      assetsSort: '!size',
      chunks: false,
      chunkGroups: false,
      chunkModules: false,
      chunkOrigins: false,
      children: false,
      colors: true,
    })
  );
});
