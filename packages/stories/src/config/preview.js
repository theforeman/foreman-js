import { addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { storyWeight, storySort } from './services/sorting';

export const docs = {
  container: DocsContainer,
  page: DocsPage,
};

addParameters({
  docs,
  storyWeight,
  options: {
    storySort,
  },
});
