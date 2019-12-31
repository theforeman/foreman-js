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

There are 3 types of stories formats:
1. Component Story Format (CSF) - https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/mdx.md
2. Storybook Docs MDX - https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/mdx.md
3. StoriesOf API (will be deprecated) - https://storybook.js.org/docs/formats/storiesof-api/

Assuming having a `Toggle` component lives in `webpack/components/Toggle/Toggle.js`:
```js
import React from 'react';

const Toggle = ({ opened, setOpened }) => (
  <button onClick={() => setOpened(!opened)}>
    {opened ? 'OPEN' : 'CLOSE'}
  </button>
);

export default Toggle;
```

To create a story for a given component, `Toggle`, first, create a story with the file name `Toggle.stories.(js|mdx)` next to `Toggle.js`.
The `tfm-stories` will search for files with the `.stories.(js|mdx)` extension.

```
•
└── webpack
    └── components
        └── Toggle
            ├── Toggle.js
            └── Toggle.stories.js
```


### Component Story Format (CSF)

Storybook’s Component Story Format (CSF) is the recommended way to write stories since Storybook 5.2. Read the announcement to learn more about how it came to be.

In CSF, stories and component metadata are defined as ES Modules. Every component story file consists of a required default export and one or more named exports.

```js
import React from 'react';
import { action, boolean } from '@theforeman/stories';
import Toggle from './Toggle';

export default {
  title: 'Components|Widgets/Toggle',
  component: Toggle,
};

export const withState = () => {
  const [opened, setOpened] = useState(false);

  return <Toggle opened={opened} setOpened={setOpened} />;
};

export const withKnobs = () => (
  <Toggle setOpened={action('setOpened')} opened={boolean('opened')} />
);

export const opened = () => (
  <Toggle opened={true} />
);

export const closed = () => (
  <Toggle opened={false} />
);
```

Using this format will automatically generate a `doc-page` with the following features:

1. The **first story** will be configured as the **primary** story.

2. A Description slot is computed from the Component's docgen comments in the component's source.
   For example, here's the source for Badge:
   ```js
   /**
    * Use `Badge` to highlight key info with a predefined status.
    */
   export const Badge = ({ status, children }) => { ... }
   ```

3. A `prop-types` table is computed from the component's docgen prop-types.
   For example, here's the source for Badge prop-types:
   ```js
   Badge.propTypes = {
     /** Set the status of the badge */
     status: PropTypes.oneOf(['success', 'error', 'info']),
     /** Set the content of the badge */
     children: PropTypes.node,
   };
   ```

### Storybook Docs MDX

MDX is a syntax for writing long-form documentation and stories side-by-side in the same file. In contrast to DocsPage, which provides smart documentation out of the box, MDX gives you full control over your component documentation.

Read more about writing mdx stories:
https://github.com/storybookjs/storybook/blob/master/addons/docs/docs/mdx.md

```mdx
import { Meta, Story, Preview, Props, action } from '@theforeman/stories';

import Toggle from './Toggle';

<Meta
  title="Components|Widgets/Toggle"
  component={Toggle}
/>

# Toggle

Use `Toggle` to highlight key info with a predefined status.

<Props of={Toggle} />

<Preview>
  <Story name="With Knobs">
    <Toggle setOpened={action('setOpened')} opened={boolean('opened')} />
  </Story>
</Preview>

With `opened={true}`

<Preview>
  <Story name="opened">
    <Toggle opened={true} />
  </Story>
</Preview>

With `opened={false}`

<Preview>
  <Story name="closed">
    <Toggle opened={false} />
  </Story>
</Preview>

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

## Sorting stories

Stories will be sorted based on:
1. The `storyWeight` number parameter where smaller values appear first.
   By default, all the stories have a `storyWeight` set to `1000`.
2. Alphabetically A-Z

To change the `storyWeight` for a given `story`, set it in the story parameter.

**CSF**
```js
export default {
  title: 'Components/SomeComponent',
  component: SomeComponent,
  parameters: {
    storyWeight: 100,
  },
};
```

**MDX**
```mdx
import { Meta } from '@theforeman/stories';

<Meta
  title="Components/SomeComponent"
  component={SomeComponent}
  parameters={{
    storyWeight: 100,
  }}
/>
```

## Available storybook addons

### @storybook/addon-docs

Storybook Docs transforms your Storybook stories into world-class component documentation.

**DocsPage.** Out of the box, all your stories get a `DocsPage`. `DocsPage` is a zero-config aggregation of your component stories, text descriptions, docgen comments, props tables, and code examples into clean, readable pages.

**MDX.** If you want more control, `MDX` allows you to write long-form markdown documentation and stories in one file. You can also use it to write pure documentation pages and embed them inside your Storybook alongside your stories.

All the components from `@storybook/addon-docs` are available by using `@theforeman/stories`:
```js
import { Meta, Story, Preview, Props } from '@theforeman/stories';
```

See: https://github.com/storybookjs/storybook/tree/next/addons/docs

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

This addon will automatically centerize all your stories. To disable it, add a parameter to your story.
```js
// disable centered for all the stories in a given file
export default {
  title: 'MyComponent|MyComponent/MyComponent',
  component: MyComponent,
  parameters: {
    centered: { disable: true },
  },
};

// disable centered for a given story
export const Basic = () => <MyComponent />;

Basic.story = {
  parameters: {
    centered: { disable: true },
  },
};
```

### @storybook/addon-storysource

[@storybook/addon-storysource](https://github.com/storybookjs/storybook/tree/master/addons/storysource) is used to show stories source in the addon panel.

### @storybook/addon-viewport

[@storybook/addon-viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport) allows your stories to be displayed in different sizes and layouts in Storybook. This helps build responsive components inside of Storybook.


## Contributing

Please checkout the [`contributing.md`](../../contributing.md), the [`roadmap.md`](../../roadmap.md) and the open issues.
