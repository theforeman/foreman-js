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
  .option('--fix, --fix', 'Auto fix');

program.parse(process.argv);

let files = ['/webpack', '/script'];

const { direcotory, fix } = program;
if (direcotory) files = direcotory;
const linter = new ForemanLinter(files, fix);
linter.execute();
