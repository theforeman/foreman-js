/* eslint-disable global-require, import/no-dynamic-require */
const path = require('path');

const manifestFiles = {
  production: path.join(__dirname, '../dist/manifest.production.json'),
  development: path.join(__dirname, '../dist/manifest.development.json'),
};

class Manifest {
  get data() {
    if (!this._data) {
      this._loadManifest();
    }

    return this._data;
  }

  get files() {
    return []
      .concat(...Object.values(this.data))
      .map(file => path.join(__dirname, '../dist', file));
  }

  constructor(mode = 'production') {
    this.mode = mode;
  }

  _loadManifest() {
    const filename = manifestFiles[this.mode];

    try {
      this._data = require(filename);
    } catch (error) {
      throw new Error(`Unable to load manifest file: ${filename}`);
    }
  }
}

module.exports = Manifest;
