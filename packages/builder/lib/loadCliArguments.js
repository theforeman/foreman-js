const loadCliArguments = (...names) => {
  const cliArguments = {};

  for (const argName of names) {
    try {
      const [, argValue] = process.argv
        .find(arg => arg.startsWith(`--${argName}=`))
        .split('=');

      cliArguments[argName] = argValue;
    } catch {
      cliArguments[argName] = undefined;
    }
  }

  return cliArguments;
};

module.exports = loadCliArguments;
