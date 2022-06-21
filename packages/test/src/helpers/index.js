const path = require('path');
const childProcess = require('child_process');

module.exports = {
  getJestBin() {
    return path.resolve(require.resolve('jest'), '../../../.bin/', 'jest');
  },

  remainingArgs: (cli) => {
    const execArgs = ['bin/node', '.bin/tfm-test'];

    const isExecArg = (item) =>
      execArgs.reduce((memo, current) => memo || item.endsWith(current), false);

    return (
      cli.args
        // Only retain elements starting from the first --option
        .reduce(
          (acc, item) =>
            acc.length || item.startsWith('-') || !isExecArg(item)
              ? [...acc, item]
              : acc,
          []
        )
    );
  },

  runScript: (scriptPath, callback, args) => {
    let invoked = false;

    const process = childProcess.fork(scriptPath, args);

    process.on('error', (err) => {
      if (invoked) return;
      invoked = true;
      callback(err);
    });

    process.on('exit', (code) => {
      if (invoked) return;
      invoked = true;
      const err = code === 0 ? null : new Error(`exit code ${code}`);
      callback(err);
    });
  },
};
