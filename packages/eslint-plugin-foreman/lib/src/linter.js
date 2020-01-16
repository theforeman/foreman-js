/* eslint-disable no-console */

const chalk = require('chalk');
const coreConfig = require('./core');
const pluginConfig = require('./plugins');
const { CLIEngine } = require('eslint');
const path = require('path');

const mergedConfig = {
  ...coreConfig,
  rules: { ...coreConfig.rules, ...pluginConfig.rules },
};
module.exports = class ForemanLinter {
  constructor(files, shouldFix, plugin) {
    this.cwd = process.cwd();
    this.files = files;
    this.shouldFix = shouldFix;
    this.cli = new CLIEngine({
      fix: shouldFix,
      useEslintrc: false,
      baseConfig: plugin ? { ...mergedConfig } : coreConfig,
      resolvePluginsRelativeTo: path.resolve(__dirname),
    });
  }

  formatting(report) {
    const { cli, shouldFix } = this;

    if (shouldFix) {
      chalk.bold.greenBright('> Fixing... ');
      CLIEngine.outputFixes(report);
    }
    if (report.errorCount > 0) {
      const formatter = cli.getFormatter();

      console.log(
        chalk.bold.redBright(`> eslint has found ${report.errorCount} error(s)`)
      );
      console.log(formatter(report.results));

      process.exit(1);
    }
    console.log(
      chalk.bold.greenBright('> eslint finished without any errors!')
    );
  }

  execute() {
    const { files, cli, cwd } = this;
    const filesList = files.map(file => `${cwd}/${file}`);

    const report = cli.executeOnFiles(filesList);
    this.formatting(report);
  }
};
