// For react-testing-library helpers, overrides, and utilities
// All elements from react-testing-library can be imported from this wrapper.
// See https://testing-library.com/docs/react-testing-library/setup for more info
import React from "react";
import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { renderHook } from '@testing-library/react-hooks';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

export class RTLUtils {
  /**
   * Create a React testing library utils for foreman
   * @param {ReduxReducers} reducers reducers to apply
   * @param {ReduxMiddlewares} middlewares middlewares to apply
   */
  constructor(reducers, middlewares, initialState = {}) {
    const combinedReducers = combineReducers(...reducers);
    this.store = createStore(
      combinedReducers,
      initialState,
      applyMiddleware(...middlewares)
    );
  }
  /**
   * Renders testable component with redux and react-router
   * @param  {ReactNode} component A react node to render
   * @param {Object} options renderOptions and routerParams
   * @return {Node}  rtl-rendered component
   */
  renderWithRedux(component, options) {
    const { routerParams, renderOptions } = options;

    const Wrapper = ({ children }) => {
      return (
        <Provider store={this.store}>
          <MemoryRouter {...routerParams}> {children} </MemoryRouter>
        </Provider>
      );
    };

    return render(component, { wrapper: Wrapper, ...renderOptions });
  }
  /**
   * renders a react-hook with redux wrapper
   * @param  {ReactNode} component hook callback
   * @param {Object} options rtl render options
   * @return {Node}  rtl-rendered hook
   */
  renderHookWithRedux(callback, options) {
    const wrapper = ({ children }) => (
      <Provider store={this.store}>{children}</Provider>
    );
    return renderHook(callback, { wrapper, ...options });
  }
}

// When the tests run slower, they can hit the default waitFor timeout, which is 1000ms
// There doesn't seem to be a way to set it globally for r-t-lib, so using this wrapper function
const rtlTimeout = 5000;
export const patientlyWaitFor = waitForFunc =>
  waitFor(waitForFunc, { timeout: rtlTimeout });
export const patientlyWaitForRemoval = waitForFunc =>
  waitForElementToBeRemoved(waitForFunc, { timeout: rtlTimeout });
