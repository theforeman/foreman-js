#!/usr/bin/env node

const commander = require('commander');
const { version } = require('../package.json');
const path = require('path');

const { runScript, remainingArgs } = require('../test/helpers');

const envRoot = path.resolve(__dirname, '../');
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
    ? `${envRoot}/test/pluginConfig.js`
    : `${envRoot}/test/config.js`;
};
const configArg = ['--config', overrideConfig()];
const jestArgs = configArg.concat(remainingArgs(program));

const errorHandling = error => {
  if (error) throw error;
};

runScript(`${process.cwd()}/node_modules/.bin/jest`, errorHandling, jestArgs);
