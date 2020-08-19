import 'core-js/shim';
import 'regenerator-runtime/runtime';
import MutationObserver from '@sheerun/mutationobserver-shim';

const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

// https://github.com/facebook/jest/issues/6121
// eslint-disable-next-line no-console
const { error } = console;
// eslint-disable-next-line no-console
console.error = (message, ...args) => {
  error.apply(console, args); // keep default behaviour
  const err = message instanceof Error ? message : new Error(message);
  throw err;
};

// Needed for react-testing-library
// see https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0
window.MutationObserver = MutationObserver;
