#!/usr/bin/env node
/* eslint-disable no-console */

const path = require('path');

const cwd = process.cwd();
const chalk = require('chalk');
const rules = require('../lib/index.js');
const { CLIEngine } = require('eslint');

let cli = null;

initCLI();
const results = lintFiles(['/webpack', '/script']);
formatting(results);

function initCLI() {
  cli = new CLIEngine({
    useEslintrc: false,
    baseConfig: rules,
    resolvePluginsRelativeTo: path.resolve(__dirname),
  });
}

function lintFiles(files) {
  const filesList = files.map(file => `${cwd}/${file}`);
  return cli.executeOnFiles(filesList);
}

function formatting(report) {
  if (report.errorCount > 0) {
    const formatter = cli.getFormatter();

    console.log(
      chalk.bold.redBright(`> eslint has found ${report.errorCount} error(s)`)
    );
    console.log(formatter(report.results));
  }
}
