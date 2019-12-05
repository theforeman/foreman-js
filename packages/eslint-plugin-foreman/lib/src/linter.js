/* eslint-disable no-console */

const chalk = require('chalk');
const rules = require('./recommended');
const { CLIEngine } = require('eslint');
const path = require('path');

module.exports = class ForemanLinter {
  constructor(files) {
    this.cwd = process.cwd();
    this.files = files;
    this.cli = new CLIEngine({
      useEslintrc: false,
      baseConfig: rules,
      resolvePluginsRelativeTo: path.resolve(__dirname),
    });
  }
  formatting(report) {
    if (report.errorCount > 0) {
      const formatter = this.cli.getFormatter();

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
    const filesList = this.files.map(file => `${this.cwd}/${file}`);
    this.formatting(this.cli.executeOnFiles(filesList));
  }
};
