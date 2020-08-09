const path = require('path');
const fs = require('fs');
const program = require('commander');
const { version } = require('../../package.json');
const { linkForeman, linkForemanReact } = require('../linkForeman');

export const linkForemanProgram = argv => {
  program.version(version);
  program.option(
    '-l, --location <foreman-relative-path>',
    'Set foreman location relative to your project root.',
    '../foreman'
  );

  program.parse(argv);

  const { location } = program;

  const pluginPath = process.cwd();
  const foremanPath = path.resolve(pluginPath, location);

  if (!fs.existsSync(foremanPath)) {
    throw new Error(`Unable to find ${foremanPath}`);
  }

  linkForeman(pluginPath, foremanPath);
  linkForemanReact(pluginPath, foremanPath);
};
