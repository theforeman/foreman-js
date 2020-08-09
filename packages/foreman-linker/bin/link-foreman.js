#!/usr/bin/env node

/**
 * Link foreman to your plugin node_modules
 */

const { linkForemanProgram } = require('../');

linkForemanProgram(process.argv);
