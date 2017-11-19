
// credit: [davidguttman](https://gist.github.com/davidguttman/1f61ab59349cb99d28a1)
// include js
// Bootstrap wants jQuery global
window.jQuery = $  = require('jquery');
// For some reason, I get a Tether not found error (but sometimes). If you do get this error, uncomment the next line
// window.Tether = require('tether');
window.Popper = require('popper.js');
require('bootstrap');
require('./src/js/main');
// you will need jQuery if you're using Bootstrap
// also check the ./src/js/main.js for changes you need to make there


// includes styles
// to use Bootstrap
require('bootstrap/dist/css/bootstrap.css');
// If you want to use Bootstrap SASS, comment out the previous line and uncomment the next line
// require('bootstrap/scss/bootstrap.scss');
// of course, you're going to have to use SCSSIFY instead
require('./src/styles/main.css');

