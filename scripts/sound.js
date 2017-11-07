$(document).ready(function(){
  $("#music")[0].volume = 0.4;
  $("#rainSoundEffect")[0].volume = 0;
  setTimeout(function(){
      $("#rainSoundEffect").animate({volume: 0.03}, 5000);
  }, 1000);
});
