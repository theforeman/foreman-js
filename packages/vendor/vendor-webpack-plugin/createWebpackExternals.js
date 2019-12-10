/* eslint-disable no-unused-vars */
import { modules } from '@theforeman/vendor-core';

const createWebpackExternals = () => {
  const externals = {};

  for (const module of modules) {
    externals[module.name] = module.key;
  }

  return externals;
};

export default createWebpackExternals;
