module.exports = {
  stories: [`${process.env.CWD}/webpack/**/*.stories.@(js|mdx)`],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    '@storybook/addon-docs',
  ],
};
