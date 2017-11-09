$(document).ready(function(){

  $(".select1").mouseenter(function() {
    $(".select1").addClass("pulse")
    $(".select2").removeClass("pulse")
  });

  $(".select2").mouseenter(function() {
    $(".select2").addClass("pulse")
    $(".select1").removeClass("pulse")
  });

});
