import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { centered } from './centered';

addDecorator(withKnobs);
addDecorator(centered);
