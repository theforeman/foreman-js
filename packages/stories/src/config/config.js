import { configure } from '@storybook/react';

import './decorators';
import './parameters';

configure(
  require.context(`${process.env.CWD}/webpack`, true, /\.stories\.(js|mdx)$/),
  module
);
