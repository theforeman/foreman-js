#!/usr/bin/env node

const program = require('commander');
const ForemanLinter = require('../lib/src/linter');
const { version } = require('../package.json');

function spaceSeparatedList(value) {
  return value.split(',');
}
program.version(version);
program
  .option(
    '-d, --direcotory <path>',
    'Lint specific files and direcotries',
    spaceSeparatedList
  )
  .option('--fix, --fix', 'Auto fix')
  .option('--plugin, --plugin', 'Running plugins rules as well');

program.parse(process.argv);

let files = ['/webpack', '/script'];

const { direcotory, fix, plugin } = program;
if (direcotory) files = direcotory;
const linter = new ForemanLinter(files, fix, plugin);
linter.execute();
