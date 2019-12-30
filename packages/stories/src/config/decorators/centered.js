import addonCentered from '@storybook/addon-centered/react';

// Centered addon causes layout issues on docs page.
// See: https://github.com/storybookjs/storybook/issues/8128
export const centered = (...args) => {
  const params = new URL(document.location).searchParams;
  const isInDockView = params.get('viewMode') === 'docs';

  if (isInDockView) {
    const [storyFn] = args;
    return storyFn();
  }

  return addonCentered(...args);
};
