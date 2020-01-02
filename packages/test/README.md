# @theforeman/test

> Adds theforeman testing tools to you project.

[![Package Version](https://img.shields.io/npm/v/@theforeman/test.svg?style=flat-square)](https://www.npmjs.com/package/@theforeman/test)
[![Downloads Status](https://img.shields.io/npm/dm/@theforeman/test.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@theforeman/test&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/theforeman/foreman-js/master.svg?style=flat-square)](https://travis-ci.org/theforeman/foreman-js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Installation

```sh
npm install --save-dev @theforeman/test
```

1. Use `tfm-test` and `tfm-publish-coverage` (for coverage) scripts under `test` and `publish-coverage` respectively in `package.json`:

```json
{
  "test": "tfm-test --plugin",
  "publish-coverage": "tfm-publish-coverage"
}
```

This script accepts all [jest's arguments](https://jestjs.io/docs/en/cli), including `plugin`
which is a flag indicator for plugins.

## Configuration

In order to extend general settings or creating global mocks, create a `test_setup.js`
file under `/webpack` directory

For example, some global mocks :

```js
// test_setup.js
jest.mock("jed");
jest.mock("./assets/javascripts/react_app/common/I18n");
jest.mock("./assets/javascripts/foreman_tools", () => ({
  foremanUrl: url => url
}));
```

## Usage

This package gives an opiniated approach for test configurations and tools,
including jest, enzyme and a test utils library. 

These functions can be imported directly from `@theforeman/test`:
`mount` and `shallow`- which are from `enzyme`
`testComponentSnapshotsWithFixtures`
`testReducerSnapshotWithFixtures`,
`testActionSnapshotWithFixtures`
`testSelectorsSnapshotWithFixtures`,
`IntegrationTestHelper` - which are from `react-redux-test-utils`
`MockAdapter` - which is from `axios-mock-adapter`
and also adding `coveralls` for coverage.

[jest docs](https://jestjs.io/docs/en/getting-started)
[enzyme docs](https://airbnb.io/enzyme/)
[react-redux-test-utils](https://github.com/sharvit/react-redux-test-utils#documentations)

### Unit testing
You can use `testComponentSnapshotsWithFixtures` for a unit testing without redux.
Keep in mind to import unconnected component (wrapped by `connect` nor redux-hooks)

```js
/* UserProfile.test.js */
import { testComponentSnapshotsWithFixtures } from "@theforeman/test";
import UserProfile from "../UserProfile"; // not redux connected

const fixtures = {
  "should render UserProfile": {
    user: "some-user"
  },
  "should render UserProfile with avatar": {
    user: "some-user",
    showAvatar: true
  },
  "should render UserProfile with posts and photos": {
    user: "some-user",
    showPosts: true,
    showPhotos: true
  }
};

describe("UserProfile - component", () =>
  testComponentSnapshotsWithFixtures(UserProfile, fixtures));
```

### Redux's Actions

This will create a snapshot for `UserProfileActions.js` actions file:

```js
/* UserProfileActions.test.js */
import { testActionSnapshotWithFixtures } from '@theforeman/test';
import {
  updateShowAvatar,
  updateShowPosts,
  updateShowPhotos
} from "../UserProfileActions";

const fixtures = {
  "should update-show-avatar": () => updateShowAvatar(true),
  "should update-show-posts": () => updateShowPosts(true),
  "should update-show-photos": () => updateShowPhotos(true)
};

describe("UserProfile - Actions", () =>
  testActionSnapshotWithFixtures(fixtures));
```

For async actions and further explanation please look [here](https://github.com/sharvit/react-redux-test-utils/blob/master/docs/unit-testing-actions.md)

### Redcuer's Testing

`testReducerSnapshotWithFixtures` creates a snapshot of a given reducer and fixtures:

```js
/* LoginFormReducer.test.js */
import { testReducerSnapshotWithFixtures } from '@theforeman/test';
import {
  LOGIN_FORM_UPDATE_USERNAME,
  LOGIN_FORM_UPDATE_PASSWORD,
  LOGIN_FORM_TOGGLE_REMEMBER_ME,
} from '../LoginFormConstants';

import reducer from '../LoginFormReducer';

const fixtures = {
  'it should update username': {
      action: {
        type: LOGIN_FORM_UPDATE_USERNAME,
        payload: { username: 'some-username' }
      }
  },
  'it should update password': {
    action: {
      type: LOGIN_FORM_UPDATE_PASSWORD,
      payload: { password: 'some-password' }
    }
  },
  'it should toggle remember-me': {
    state: { rememberMe: false },
    action: {
      type: LOGIN_FORM_TOGGLE_REMEMBER_ME,
    }
  },
};

describe('LoginForm - Reducer', () =>
  testReducerSnapshotWithFixtures(reducer, fixtures));
  ```

### Integration testing
This test a full cycle of a component including redux (actions, reducers and store)

```js
/* __tests__/integration.test.js */
import React from 'react';
import { IntegrationTestHelper } from '@theforeman/test';

import UserProfile, { reducers } from '../index'; // This is a connected component

describe('UserProfile - Integration Test', () => {
  it('should flow', () => {
    const integrationTestHelper = new IntegrationTestHelper(reducers);

    const component = integrationTestHelper.mount(
      <UserProfile user="some-user" />
    );

    // The user-avatar should not be shown
    expect(component.exists('UserAvatar')).toEqual(false);
    integrationTestHelper.takeStoreSnapshot('initial state');

    // trigger checkbox change
    component
      .find('input#show-avatar-toggler')
      .simulate('change', { target: { checked: true } });

    // The user-avatar should be shown now
    expect(component.exists('UserAvatar')).toEqual(true);
    integrationTestHelper.takeStoreAndLastActionSnapshot(
      'Update to show the user-avatar'
    );
  });
});
```


## Contributing

Please checkout the [`contributing.md`](../../contributing.md), the [`roadmap.md`](../../roadmap.md) and the open issues.
