# @theforeman/stories

> Documentation library for the foreman project

[![Package Version](https://img.shields.io/npm/v/@theforeman/stories.svg?style=flat-square)](https://www.npmjs.com/package/@theforeman/stories)
[![Downloads Status](https://img.shields.io/npm/dm/@theforeman/stories.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@theforeman/stories&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/theforeman/foreman-js/master.svg?style=flat-square)](https://travis-ci.org/theforeman/foreman-js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## What are stories?

Stories are a playground that allows you to develop, document, and demo your components in isolation.
It uses [storybook](https://storybook.js.org/), and some tailor-made configurations for foreman plugins.

## Writing a story

To create a story for a given component, `MyComponent`, first, create a story with the file name `MyComponent.stories.js` next to `MyComponent.js`.
The `tfm-stories` will search for files with the `.stories.js` extension.

```
•
└── webpack
    └── components
        └── MyComponent
            ├── MyComponent.js
            └── MyComponent.stories.js
```

```js
// MyComponent.js
import React from 'react';

const MyComponent = ({ opened, setOpened }) => (
  <button onClick={() => setOpened(!opened)}>
    {opened ? 'OPEN' : 'CLOSE'}
  </button>
);

export default MyComponent;

// MyComponent.stories.js
import React from 'react';
import { action, boolean } from '@theforeman/stories';
import MyComponent from './MyComponent';

export default {
  title: 'MyComponent|MyComponent/MyComponent',
  component: MyComponent,
};

export const Basic = () => <MyComponent setOpened={action('setOpened')} opened={boolean('opened')} />;

```

## Run stories development server

```bash
tfm-stories [options]
```

```
Options:
  -V, --version                output the version number
  --plugin                     Use for a foreman-plugin
  -p, --port <number>          Port to run Stories (default: 6006)
  -s, --setup-file <filename>  Stories global setup file.
  -h, --help                   output usage information
```

## Build stories

```bash
tfm-build-stories [options]
```

```
Options:
  -V, --version                output the version number
  --plugin, --plugin           Use for a foreman-plugin
  -s, --setup-file <filename>  Stories global setup file.
  -o, --output-dir <dir-name>  Directory where to store built files
  -w, --watch                  Enable watch mode
  -q, --quiet                  Suppress verbose build output
  -h, --help                   output usage information
```

## Available storybook addons

### @storybook/addon-actions

[@storybook/addon-actions](https://github.com/storybookjs/storybook/tree/HEAD/addons/actions) can be used to display data received by event handlers in Storybook.

To use it in your stories, import the `action` method from `@theforeman/stories` and assign it to an event handler.

```js
import { action } from '@theforeman/stories';

export const myByttonStory = () => <Button onClick={action('buttonClicked')}>Click Here</Button>;
```

### @storybook/addon-knobs

[@storybook/addon-knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs) allow you to edit props dynamically using the Storybook UI. You can also use Knobs as a dynamic variable inside stories in Storybook.

To use it in your stories, import the knobs that you need from `@theforeman/stories` and assign them to props.
See available knobs: https://github.com/storybookjs/storybook/tree/master/addons/knobs#available-knobs

```js
import { boolean, text, number } from '@theforeman/stories';

// Knobs for React props
export const withAButton = () => (
  <button disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Storybook")}
  </button>
);

// Knobs as dynamic variables.
export const asDynamicVariables = () => {
  const name = text("Name", "Arunoda Susiripala");
  const age = number("Age", 89);

  const content = `I am ${name} and I'm ${age} years old.`;
  return <div>{content}</div>;
};
```

### @storybook/addon-centered

[@storybook/addon-centered](https://github.com/storybookjs/storybook/tree/master/addons/centered) can be used to center components inside the preview in Storybook.

This addon will automatically centerize all your stories.

### @storybook/addon-storysource

[@storybook/addon-storysource](https://github.com/storybookjs/storybook/tree/master/addons/storysource) is used to show stories source in the addon panel.

### @storybook/addon-viewport

[@storybook/addon-viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport) allows your stories to be displayed in different sizes and layouts in Storybook. This helps build responsive components inside of Storybook.


## Contributing

Please checkout the [`contributing.md`](../../contributing.md), the [`roadmap.md`](../../roadmap.md) and the open issues.
