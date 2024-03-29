const path = require('path');
const fs = require('fs');

/**
 * Check if a location is foreman location
 * @param  {String}  [currentDir=process.cwd()] Location to check
 * @return {Boolean}                            Is foreman location
 */
const isForemanLocation = (currentDir = process.cwd()) =>
  currentDir.endsWith('/foreman');

// Get full path of Foreman from plugin
const foremanLocation = (throwError = true) => {
  const relativePaths = ['./foreman', '../foreman', '../../foreman'];
  const notFound =
    'Foreman directory cannot be found! This action requires Foreman to be present ' +
    'in either a parent, sibling, or child directory relative to the plugin.';
  const currentDir = process.cwd();

  const foremanRelativePath = relativePaths.find((relativePath) => {
    const result = path.join(currentDir, relativePath);
    return fs.existsSync(result);
  });

  if (!foremanRelativePath) {
    if (throwError) {
      throw new Error(notFound);
    } else {
      return null;
    }
  }

  return path.join(currentDir, foremanRelativePath);
};

// Get a subdirectory within Foreman
const foremanRelativePath = (innerPath) => {
  const foremanPath = foremanLocation();
  const notFound = `Could not find ${innerPath} in ${foremanPath}`;
  const result = path.join(foremanPath, innerPath);
  if (!fs.existsSync(result)) throw new Error(notFound);
  return result;
};

module.exports = { isForemanLocation, foremanLocation, foremanRelativePath };
