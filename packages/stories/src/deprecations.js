const deprecationError = (exportName, newExportLocation) => {
  throw new Error(
    `${exportName} is no longer exported from @theforeman/stories.  Import it directly from ${newExportLocation}.`
  );
};

export const action = () =>
  deprecationError('action', '@storybook/addon-actions');
export const boolean = () =>
  deprecationError('boolean', '@storybook/addon-knobs');
export const number = () =>
  deprecationError('number', '@storybook/addon-knobs');
export const object = () =>
  deprecationError('object', '@storybook/addon-knobs');
export const select = () =>
  deprecationError('select', '@storybook/addon-knobs');
export const radios = () =>
  deprecationError('radios', '@storybook/addon-knobs');
export const optionsKnob = () =>
  deprecationError('optionsKnob', '@storybook/addon-knobs');
export const withKnobs = () =>
  deprecationError('withKnobs', '@storybook/addon-knobs');
export const button = () =>
  deprecationError('button', '@storybook/addon-knobs');

export const text = () => deprecationError('text', '@storybook/addon-knobs');
export const color = () => deprecationError('color', '@storybook/addon-knobs');
export const array = () => deprecationError('array', '@storybook/addon-knobs');
export const files = () => deprecationError('files', '@storybook/addon-knobs');
export const date = () => deprecationError('date', '@storybook/addon-knobs');
