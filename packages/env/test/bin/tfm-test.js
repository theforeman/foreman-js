#!/usr/bin/env node
/* eslint-disable no-console */

const path = require('path');

const envRoot = path.resolve(__dirname, '../../');
const childProcess = require('child_process');

const args = process.argv.slice(2);

function runScript(scriptPath, callback) {
  // keep track of whether callback has been invoked to prevent multiple invocations
  let invoked = false;

  const configArg = ['--config', `${envRoot}/jest/config.js`];
  const process = childProcess.fork(scriptPath, [...configArg, ...args]);

  // listen for errors as they may prevent the exit event from firing
  process.on('error', err => {
    if (invoked) return;
    invoked = true;
    callback(err);
  });

  // execute the callback once the process has finished running
  process.on('exit', code => {
    if (invoked) return;
    invoked = true;
    const err = code === 0 ? null : new Error(`exit code ${code}`);
    callback(err);
  });
}

// Now we can run a script and invoke a callback when complete, e.g.
runScript(`${envRoot}/node_modules/jest/bin/jest.js`, err => {
  if (err) throw err;
});
