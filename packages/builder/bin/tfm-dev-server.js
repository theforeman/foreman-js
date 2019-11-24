#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Use the tfm-dev-server command to run a development server
 * and automatically build and serve your bundles.
 */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const loadCliArguments = require('../lib/loadCliArguments');
const loadUserConfigFile = require('../lib/loadUserConfigFile');
const createDevServerWebpackConfig = require('../config/createDevServerWebpackConfig');

const port = '3808';
const host = '0.0.0.0';

// 1. Read the CLI arguments (mode, config)
const { mode = 'development', config: userConfigFile } = loadCliArguments(
  'mode',
  'config'
);

// 2. Read the user config file (tfm-build.config.js)
const userConfig = loadUserConfigFile(userConfigFile);

// 3. Create webpack configuration object
const webpackConfig = createDevServerWebpackConfig({ ...userConfig, mode });

const options = {
  publicPath: '/webpack/',
  hot: true,
  inline: true,
  stats: { colors: true },
  https: true,
  allowedHosts: ['centos7-luna-devel.sharvit-fedorabook-t480s.example.com'],
  index: '',
  proxy: {
    context: () => true,
    target: 'https://centos7-luna-devel.sharvit-fedorabook-t480s.example.com',
  },
};

// 4. Create webpack-dev-server
const devServer = new WebpackDevServer(webpack(webpackConfig), options);

devServer.listen(port, host, err => {
  if (err) {
    console.log(err);
  }
  console.log(`TheForeman DevServer listening at tcp://${host}:${port}`);
});
