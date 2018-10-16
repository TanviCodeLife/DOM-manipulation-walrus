$(document).ready(function(){
  $(".clickable1").click(function(){
    // toggle
    //$("#click-to-hide").toggle();
    // $("#click-to-show").toggle();
    //fadeIn and fadeOut
    // $("#click-to-hide").fadeIn(5000);
    // $("#click-to-show").fadeOut(5000);
    //fadeToggle
    $("#click-to-hide").fadeToggle("slow");
    $("#click-to-show").fadeToggle("slow");
    //slideUp and slideDown

  });

  // $("#clickable2").click(function(){
  //   $("#click-to-hide").fadeOut(1000);
  //   $("#click-to-show").fadeIn(1000);
  //   $("#click-to-show").fadeIn(1000);
  //   $("#click-to-hide").hide();
  //fadeToggle
  //   $("#click-to-show").fadeToggle(5000);
  // });
});
