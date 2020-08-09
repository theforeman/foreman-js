import path from 'path';
import { createSymlink } from './symlinkHelpers';

export const linkForeman = (pluginPath, foremanPath) => {
  const pluginForemanPath = path.resolve(pluginPath, './node_modules/foreman');

  createSymlink(pluginForemanPath, foremanPath);
};

export const linkForemanReact = (pluginPath, foremanPath) => {
  const pluginForemanReactPath = path.resolve(
    pluginPath,
    './node_modules/foremanReact'
  );
  const foremanReactPath = path.resolve(
    foremanPath,
    './webpack/assets/javascripts/react_app'
  );

  createSymlink(pluginForemanReactPath, foremanReactPath);
};
