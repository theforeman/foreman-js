# Project Roadmap

This is where we‘ll define a few things about the library‘s goals.

**Care to help?** Feel free discusing about the roadmap by opening a github issue.
You can also suggest a change by creating a new pull request.
See [`contributing.md`](./contributing.md)


## `foreman-js` (root)

### Packages want to add

- `@theforeman/builder` - Build production and development assents for `theforeman` and it's plugins.

### Want to do

- Switch to yarn

### Might do

### Won‘t do

---

## `@theforeman/builder`

### Want to do

### Might do

### Won‘t do

---

## `@theforeman/eslint-plugin-foreman`

### Want to do

### Might do
- Remove eslint dependency from core

### Won‘t do

---

## `@theforeman/env`

### Want to do

- Add `jest` environment
- Add `storybook` environment
- Add `eslint` environment

### Might do

### Won‘t do

---

## `@theforeman/vendor-core`

### Want to do

- Add `react-loadable`
- Add support for async loadabe modules
  - See the PR in foreman: https://github.com/theforeman/foreman/pull/6719
- Add the `I18n` related modules from foreman as async modules
- Drop `datatables.net`
- Drop `jquery`
- Drop `select2`

### Might do

- Drop `redux-thunk`

### Won‘t do

- Drop `react`

### Track

- Track `novnc` versions, when a new version that is bigger then noVNC 1.1.0 will released we should update it
(The last versions of novnc were not released consistently, but you can check for a new release in February).

---

## `@theforeman/vendor`

### Want to do

- Automatically produce `available-packages.md` as part of the `deploy-docs` process
- Test together with `foreman` and `foreman-plugins` in the CI
- Add eslint rule about duplicates in vendor vs core/plugin

### Might do

### Won‘t do

---

## `@theforeman/vendor-dev`

### Want to do

### Might do

### Won‘t do

---

## `@theforeman/find-foreman`

### Want to do
- Use find-foreman in eslint plugin to automatically setup eslint for Foreman plugins.

### Might do

### Won‘t do
