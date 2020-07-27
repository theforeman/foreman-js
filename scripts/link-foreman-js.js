#!/usr/bin/env node

/**
 * Link all the foreman-js packages
 * into your project node_modules/@theforeman
 */

const path = require('path');
const fs = require('fs');
const program = require('commander');
const rimraf = require('rimraf');
const { version } = require('../package.json');

program.version(version);
program.option(
  '-l, --location <your-project-location>',
  'Set your project location location.'
);

program.parse(process.argv);

const { location = '../foreman' } = program;

const foremanJsLocation = path.resolve(__dirname, '../');
const foremanJsPackagesLocation = path.resolve(foremanJsLocation, './packages');
const userProjectLocation = path.resolve(foremanJsLocation, location);
const userNodeModules = path.resolve(userProjectLocation, './node_modules');
const userForemanJsDestination = path.resolve(userNodeModules, './@theforeman');

const isSymlink = p => fs.lstatSync(p).isSymbolicLink();

const createSymlink = () => {
  console.log(
    `Creating a symbolic link ${userForemanJsDestination} -> ${foremanJsPackagesLocation}`
  );
  fs.symlinkSync(foremanJsPackagesLocation, userForemanJsDestination);
};

if (!fs.existsSync(userProjectLocation)) {
  throw new Error(`Unable to find ${foremanJsLocation}`);
}

if (!fs.existsSync(userForemanJsDestination)) {
  return createSymlink();
}

if (isSymlink(userForemanJsDestination)) {
  console.log(`Symbolic link already exists in ${userForemanJsDestination}`);
  console.log('Unlinking...');
  fs.unlink(userForemanJsDestination, () => createSymlink());
} else {
  console.log(`@theforeman already installed in ${userForemanJsDestination}`);
  console.log('Removing...');
  rimraf(userForemanJsDestination, () => createSymlink());
}
