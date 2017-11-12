$(document).ready(function(){
  $("#campaign").click(function(){
    $("body").removeClass("back-row-toggle start");
    $( "body" ).addClass( "campaign" );
    $( "#startMenu" ).remove();
    $("#container").load("https://ilsilentii.github.io/Halo-Reach-Main-Menu/campaign.html");
      $("#rainSoundEffect").animate({volume: 0}, 5000);
    setTimeout(function(){
        $( "#rainSoundEffect" ).remove();
    }, 5000);
  });
});
