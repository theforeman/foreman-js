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

const { plugin, config } = program;

const overrideConfig = () => {
  if (config) return config;
  return plugin
    ? `${testRoot}/src/pluginConfig.js`
    : `${testRoot}/src/config.js`;
};
const configArg = ['--config', overrideConfig()];
const jestArgs = configArg.concat(remainingArgs(program));

const errorHandling = error => {
  if (error) throw error;
};

runScript(getJestBin(), errorHandling, jestArgs);
