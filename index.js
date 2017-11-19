
// credit: [davidguttman](https://gist.github.com/davidguttman/1f61ab59349cb99d28a1)
// include js
// Bootstrap wants jQuery global
window.jQuery = $  = require('jquery');
require('./src/js/main');
window.Popper = require('popper.js');
require('bootstrap');
// you will need jQuery if you're using Bootstrap
// also check the ./src/js/main.js for changes you need to make there


// includes styles
// to use Bootstrap 
require('bootstrap/dist/css/bootstrap.css');
require('./src/styles/main.css');

