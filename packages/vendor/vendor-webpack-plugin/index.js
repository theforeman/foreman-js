const currentVersion = process.versions.node;
const major = parseInt(currentVersion.split('.')[0], 10);
const minor = parseInt(currentVersion.split('.')[1], 10);
if (
  !(
    (major === 14 && minor >= 18) ||
    (major === 16 && minor >= 17) ||
    major > 16
  )
) {
  // Older versions fail because they don't support the 'node:fs' module
  // Error: Cannot find module 'node:fs'
  console.error(
    `The current node version ${currentVersion} does not satisfy the required version. Please update your Node.js version. Supported versions are >=14.18.0, >=16.17.0 and >18`
  );
  process.exit(1);
}

export { default as Manifest } from './Manifest';
export { default as WebpackForemanVendorPlugin } from './vendor-webpack-plugin';
