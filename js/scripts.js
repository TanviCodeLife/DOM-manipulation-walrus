$(document).ready(function(){
  $("#clickable1").click(function(){
    // $("#click-to-hide").toggle();
    // $("#click-to-show").toggle();
      $("#click-to-hide").fadeIn(5000);
      $("#click-to-show").fadeOut(5000);
    // $("#click-to-show").hide();


  });
  $("#clickable2").click(function(){
    $("#click-to-hide").fadeOut(1000);
    $("#click-to-show").fadeIn(1000);
  //   $("#click-to-show").fadeIn(1000);
  //   $("#click-to-hide").hide();
  });
});
