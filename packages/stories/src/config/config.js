import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);
addDecorator(centered);

configure(
  require.context(`${process.env.CWD}/webpack`, true, /\.stories\.js$/),
  module
);
