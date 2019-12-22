const childProcess = require('child_process');

module.exports = {
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
