#!/usr/bin/env node

/**
 * Use the tfm-stories to run a development server for stories
 */

const path = require('path');
const program = require('commander');
const storybook = require('@storybook/react/standalone');
const { version } = require('../package.json');

const cwd = process.cwd();

program.version(version);
program
  .option('--plugin, --plugin', 'Use for a foreman-plugin')
  .option(
    '-p, --port <number>',
    'Port to run Stories (default: 6006)',
    parseInt
  )
  .option('-s, --setup-file <filename>', 'Stories global setup file.');

program.parse(process.argv);

const { plugin, setupFile, port = 6006 } = program;

if (plugin) {
  process.env.IS_FOREMAN_PLUGIN = true;
}

if (setupFile) {
  process.env.STORIES_SETUP_FILE = path.resolve(cwd, setupFile);
}

storybook({
  port,
  mode: 'dev',
  configDir: path.resolve(__dirname, '../src/config'),
});
