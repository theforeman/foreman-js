const jquery = require('jquery');

window.$ = jquery;
window.jQuery = jquery;
window.jquery = jquery;

require('jquery.cookie');
require('jquery-ujs');
require('jquery-flot/excanvas');
require('jquery-flot');
require('jquery-flot/jquery.flot.pie');
require('jquery-flot/jquery.flot.selection');
require('jquery-flot/jquery.flot.stack');
require('jquery-flot/jquery.flot.time');
require('multiselect');
require('select2');
require('datatables.net-bs');
require('dsmorse-gridster/dist/jquery.dsmorse-gridster');

module.exports = jquery;
