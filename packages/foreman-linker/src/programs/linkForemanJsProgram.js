const path = require('path');
const fs = require('fs');
const program = require('commander');
const { version } = require('../../package.json');
const { linkForemanJs } = require('../linkForemanJs');

export const linkForemanJsProgram = argv => {
  program.version(version);
  program.option(
    '-l, --location <your-project-location>',
    'Set your project location location.'
  );

  program.parse(process.argv);

  const { location = '../foreman' } = program;

  const foremanJsPath = process.cwd();
  const userProjectPath = path.resolve(foremanJsPath, location);

  if (!fs.existsSync(userProjectPath)) {
    throw new Error(`Unable to find ${userProjectPath}`);
  }

  linkForemanJs(userProjectPath, foremanJsPath);
};
