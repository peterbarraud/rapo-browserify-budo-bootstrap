$(function(){
    $('[data-toggle="popover"]').popover()
  $( "#sayhello" ).click(function() {
    $('#showhello').text('Allo, allo, allo');
  });   
});