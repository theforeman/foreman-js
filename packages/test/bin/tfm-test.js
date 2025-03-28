#!/usr/bin/env node

const commander = require('commander');
const { version } = require('../package.json');
const path = require('path');

const { getJestBin, runScript, remainingArgs } = require('../src/helpers');

const testRoot = path.resolve(__dirname, '../');
const program = new commander.Command();
program.version(version);

program
  .allowUnknownOption()
  .option('-p, --plugin', 'plugin support')
  .option('-c, --config <type>', 'path to alternative config');

program.parse(process.argv);

const { plugin, config } = program.opts();

const overrideConfig = () => {
  if (config) return config;
  return plugin
    ? `${testRoot}/src/pluginConfig.js`
    : `${testRoot}/src/config.js`;
};
const configArg = ['--config', overrideConfig()];
const jestArgs = configArg.concat(remainingArgs(program));

const errorHandling = (error) => {
  if (error) throw error;
};

runScript(getJestBin(), errorHandling, jestArgs);

throw new Error(
  '@theforeman/test package has been deprecated and will not be maintained. If you wish to continue using this packages use v15 or lower. For more information and alternatives, please refer to: https://community.theforeman.org/t/testing-plugins-from-foreman-core/43293 .'
);
