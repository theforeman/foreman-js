#!/usr/bin/env node

/**
 * Link all the foreman-js packages
 * into your project node_modules/@theforeman
 */

const { linkForemanJsProgram } = require('../packages/foreman-linker');

linkForemanJsProgram(process.argv);
