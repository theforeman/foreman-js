import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { storyWeight, storySort } from './services/sorting';

export const docs = {
  container: DocsContainer,
  page: DocsPage,
};

// if we add any decorators, do it here
// export const decorators = [];

export const parameters = {
  docs,
  storyWeight,
  options: {
    storySort,
  },
};
