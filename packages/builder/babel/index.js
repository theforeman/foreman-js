/*
  @theforeman/builder/babel - Adds theforeman babel production configuration to your project
*/

const presets = require('./presets');
const plugins = require('./plugins');

module.exports = () => ({ presets, plugins });
