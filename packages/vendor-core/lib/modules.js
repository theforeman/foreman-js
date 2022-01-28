/*
  @theforeman/vendor/lib/modules

  List of exported npm packages by @theforeman/vendor
 */
const VendorModule = require('./VendorModule');

module.exports = [
  /**
   * React related
   */
  '@apollo/client',
  '@apollo/client/link/batch-http',
  '@reduxjs/toolkit',
  'core-js/shim',
  'regenerator-runtime/runtime',
  'formik',
  'rc-input-number',
  'react',
  'react-ace',
  'react-dom',
  'react-dnd',
  'react-dnd-html5-backend',
  'react-debounce-input',
  'react-diff-view',
  'react-ellipsis-with-tooltip',
  'react-numeric-input',
  'react-onclickoutside',
  'react-password-strength',
  'react-router-dom',
  'react-router-bootstrap',
  'react-loading-skeleton',
  'react-markdown',
  'react-redux',
  'redux',
  'redux-logger',
  'redux-thunk',
  'reselect',
  'prop-types',
  'classnames',
  'seamless-immutable',
  'isomorphic-fetch',
  'connected-react-router',
  'react-helmet',
  'react-intl',

  /**
   * Patternfly related
   */
  'patternfly-react',
  'patternfly-react-extensions',
  '@patternfly/react-catalog-view-extension',
  '@patternfly/react-core',
  '@patternfly/react-icons',
  '@patternfly/react-table',
  '@patternfly/react-tokens',
  '@patternfly/react-styles',
  '@patternfly/react-charts',
  '@redhat-cloud-services/frontend-components',

  /**
   * ace-builds related
   */
  'ace-builds',
  'ace-builds/src-noconflict/ace',
  'ace-builds/src-noconflict/ext-language_tools',
  'ace-builds/src-noconflict/mode-ruby',
  'ace-builds/src-noconflict/mode-json',
  'ace-builds/src-noconflict/mode-sh',
  'ace-builds/src-noconflict/mode-html_ruby',
  'ace-builds/src-noconflict/mode-xml',
  'ace-builds/src-noconflict/mode-yaml',
  'ace-builds/src-noconflict/theme-github',
  'ace-builds/src-noconflict/theme-monokai',
  'ace-builds/src-noconflict/keybinding-vim',
  'ace-builds/src-noconflict/keybinding-emacs',
  'ace-builds/src-min-noconflict/ext-searchbox',

  /**
   * UUID
   */
  'uuid',
  'uuid/v1',
  'uuid/v3',
  'uuid/v4',
  'uuid/v5',

  /**
   * Custom modules
   */
  {
    name: 'jquery',
    path: '@theforeman/vendor-core/lib/customModules/jquery.js',
  },
  {
    name: 'jstz',
    window: 'jstz',
  },
  {
    name: 'ipaddr.js',
    window: 'ipaddr',
  },
  {
    name: 'diff',
    window: 'diff',
  },

  /**
   * Other packages
   */
  'history',
  'number_helpers',
  'lodash',
  'axios',
  'file-saver',
  'humanize-duration',
  'unidiff',
  'urijs',
  'yup',
  'select2',
  '@novnc/novnc/core/rfb',
  '@spice-project/spice-html5',
  '@webcomponents/webcomponentsjs/webcomponents-bundle',
  '@webcomponents/webcomponentsjs/custom-elements-es5-adapter',
].map((module) => new VendorModule(module));
