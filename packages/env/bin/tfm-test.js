#!/usr/bin/env node
/* eslint-disable no-console */

const path = require('path');
const { runScript } = require('../test/helpers');

const envRoot = path.resolve(__dirname, '../');
const configArg = ['--config', `${envRoot}/test/config.js`];
const args = process.argv.slice(2).concat(configArg);

const errorHandling = error => {
  if (error) throw error;
};

runScript(`${envRoot}/node_modules/.bin/jest`, errorHandling, args);
