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
  .option('-c, --config <type>', 
          'path to alternative jest config that will be used instead of the standard config')
  .option('-o --override-config <type>',
          'path to jest config that will be used in addition to the standard config. This will ' + 
          'override and add additional settings')

program.parse(process.argv);

const { plugin, config, overrideConfig } = program;

const jestConfig = () => {
  if (config) return config;
  const standardConfig = plugin
    ? `${testRoot}/src/pluginConfig.js`
    : `${testRoot}/src/config.js`;
  if (overrideConfig) {
    const parsedStandard = require(standardConfig);
    const parsedOverride = require(path.resolve(testRoot, overrideConfig));
    // Jest accepts file names or JSON objects
    const combinedConfig = JSON.stringify({ ...parsedStandard, ...parsedOverride });
    return combinedConfig;
  }
  return standardConfig;
};
const configArg = ['--config', jestConfig()];
const jestArgs = configArg.concat(remainingArgs(program));

const errorHandling = error => {
  if (error) throw error;
};

runScript(getJestBin(), errorHandling, jestArgs);
