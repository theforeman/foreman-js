const path = require('path');
const { tfmStoriesPath } = require('./paths');

module.exports = ({ config }) => {
  config.entry = [
    path.resolve(tfmStoriesPath, './src/setupStories.js'),
    ...config.entry,
  ];

  if (process.env.STORIES_SETUP_FILE) {
    config.entry = [process.env.STORIES_SETUP_FILE, ...config.entry];
  }

  return config;
};
