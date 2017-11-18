
// Bootstrap wants jQuery global =(
window.$ = window.jQuery = require('jquery');
require('./src/js/main');
window.Popper = require('popper.js');
require('bootstrap');
// you will need jQuery if you're using Bootstrap
// also check the ./src/js/main.js for changes you need to make there


// styles
// to use Bootstrap 
require('bootstrap/dist/css/bootstrap.css')
require('./src/styles/main.css');

