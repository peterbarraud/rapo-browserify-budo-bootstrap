// credit: [davidguttman](https://gist.github.com/davidguttman/1f61ab59349cb99d28a1)
// include js
// Bootstrap wants jQuery global
window.jQuery = $  = require('jquery');
// For some reason, I get a Tether not found error (but sometimes). If you do get this error, uncomment the next line
// window.Tether = require('tether');
window.Popper = require('popper.js');
require('bootstrap');

$(function(){
    $('[data-toggle="popover"]').popover();
  $( "#sayhello" ).click(function() {
    $('#showhello').text('Allo, allo, allo');
  });   
});