#!/usr/bin/env node

const ForemanLinter = require('../lib/src/linter');

let files = ['/webpack', '/script'];
if (process.argv[2] && process.argv[2] === '-f') {
  files = process.argv.slice(3);
}
const linter = new ForemanLinter(files);
linter.execute();
