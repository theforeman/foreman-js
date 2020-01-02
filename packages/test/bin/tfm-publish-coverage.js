#!/usr/bin/env node
/* eslint-disable no-console */

const cwd = process.cwd();
const { exec } = require('child_process');

const coverallsPath = './node_modules/.bin/coveralls';
const lcovPath = `${cwd}/coverage/lcov.info`;

exec(`cat ${lcovPath} | ${coverallsPath}`, (error, stdout, stderr) => {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log(stdout);
  process.exit(0);
});
