$(document).ready(function(){
  $("#music")[0].volume = 0.3;
  $("#rainSoundEffect")[0].volume = 0;
  setTimeout(function(){
      $("#rainSoundEffect").animate({volume: 0.03}, 7000);
  }, 1000);
});
