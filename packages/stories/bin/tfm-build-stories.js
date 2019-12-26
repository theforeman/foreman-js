#!/usr/bin/env node

/**
 * Use the tfm-build-stories to build your stories
 */

const path = require('path');
const program = require('commander');
const storybook = require('@storybook/react/standalone');
const { version } = require('../package.json');

const cwd = process.cwd();

program.version(version);
program
  .option('--plugin, --plugin', 'Use for a foreman-plugin')
  .option('-s, --setup-file <filename>', 'Stories global setup file.')
  .option('-o, --output-dir <dir-name>', 'Directory where to store built files')
  .option('-w, --watch', 'Enable watch mode')
  .option('-q, --quiet', 'Suppress verbose build output');

program.parse(process.argv);

const {
  plugin = false,
  setupFile = undefined,
  watch = false,
  quiet = false,
  outputDir = '.storybook-dist',
} = program;

if (plugin) {
  process.env.IS_FOREMAN_PLUGIN = true;
}

if (setupFile) {
  process.env.STORIES_SETUP_FILE = path.resolve(cwd, setupFile);
}

storybook({
  watch,
  quiet,
  mode: 'static',
  outputDir: path.resolve(cwd, outputDir),
  configDir: path.resolve(__dirname, '../src/config'),
});
