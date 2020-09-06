/* eslint-disable no-console */

const chalk = require('chalk');
const path = require('path');
const createConfig = require('./config');
const { CLIEngine } = require('eslint');

module.exports = class ForemanLinter {
  constructor(files, shouldFix, plugin) {
    this.cwd = process.cwd();
    this.files = files;
    this.shouldFix = shouldFix;
    this.cli = new CLIEngine({
      fix: shouldFix,
      useEslintrc: false,
      baseConfig: createConfig(plugin),
      resolvePluginsRelativeTo: path.resolve(
        this.cwd,
        './node_modules/@theforeman/eslint-plugin-foreman'
      ),
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
    const filesList = files.map((file) => `${cwd}/${file}`);

    const report = cli.executeOnFiles(filesList);
    this.formatting(report);
  }
};
