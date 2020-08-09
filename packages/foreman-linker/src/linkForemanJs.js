import path from 'path';

import { createSymlink } from './symlinkHelpers';

export const linkForemanJs = (projectPath, foremanJsPath) => {
  const foremanJsPackagesPath = path.resolve(foremanJsPath, './packages');
  const projectForemanJsDestination = path.resolve(
    projectPath,
    './node_modules/@theforeman'
  );

  createSymlink(projectForemanJsDestination, foremanJsPackagesPath);
};
