/**
 * All the lodash methods are available by importing lodash
 *  example: `import { get } from 'lodash';`
 *
 * `window._` contains only a lean version of lodash
 * to encourage developers using lodash from webpack.
 *
 * The only available methods in `window._` are:
 * - get
 * - escape
 *
 * Long term goals:
 * 1. reduce the usage of lodash from the window object
 * 2. reduce the usage of lodash
 * 3. optimize lodash to be leaner
 *
 * TODO: Once lodash is not relevant to the asset pipline anymore,
 *       remove this file
 */

const lodash = require('lodash');

// share limited methods with the window object
const { get, escape } = lodash;
window._ = { get, escape };

// share the full lodash module when importing from webpack
module.exports = lodash;
