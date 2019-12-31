import { addParameters } from '@storybook/react';
import { docs } from './docs';

import { storyWeight, storySort } from '../services/sorting';

addParameters({
  docs,
  storyWeight,
  options: {
    storySort,
  },
});
