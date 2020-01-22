const path = require('path');
const childProcess = require('child_process');

module.exports = {
  getJestBin() {
    return path.resolve(require.resolve('jest-cli'), '../../../.bin/', 'jest');
  },

  remainingArgs: cli =>
    cli.rawArgs
      // Only retain elements starting from the first --option
      .reduce(
        (acc, item) =>
          acc.length || item.startsWith('-') ? [...acc, item] : acc,
        []
      )
      // Filter out arguments already parsed by commander.js
      .filter((rawArg, index, rawArgs) => {
        // --option=B, --oB
        const matches =
          rawArg.match(/^(--.+)=(.+)$/) || rawArg.match(/^(-[^-])(.+)$/);
        if (matches) {
          const [, option] = matches;
          if (cli.optionFor(option)) {
            return false;
          }
          return true;
        }

        // If the option is consumed by commander.js, then we skip it
        if (cli.optionFor(rawArg)) {
          return false;
        }

        // If it's an argument of an option consumed by commander.js, then we
        // skip it too
        const previousRawArg = rawArgs[index - 1];
        const previousOption = cli.optionFor(previousRawArg);
        if (previousOption) {
          // Option consumed by commander.js
          const previousKey = previousOption.attributeName();
          if (cli[previousKey] === rawArg) {
            return false;
          }
        }

        return true;
      }),

  runScript: (scriptPath, callback, args) => {
    let invoked = false;

    const process = childProcess.fork(scriptPath, args);

    process.on('error', err => {
      if (invoked) return;
      invoked = true;
      callback(err);
    });

    process.on('exit', code => {
      if (invoked) return;
      invoked = true;
      const err = code === 0 ? null : new Error(`exit code ${code}`);
      callback(err);
    });
  },
};
