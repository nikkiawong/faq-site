$(document).ready(function() {
  $(".clickable1").click(function() {
    $(".show-answer1").slideToggle();
  })
  $(".clickable2").click(function() {
    $(".show-answer2").slideToggle();
  })
  $(".clickable3").click(function() {
    $(".show-answer3").slideToggle();
  })
  $(".clickable4").click(function() {
    $(".show-answer4").slideToggle();
  })
  $(".clickable5").click(function() {
    $(".show-answer5").slideToggle();
  })
  $("button#light").click(function() {
    $("body").removeClass("dark-background");
    $("body").addClass("light-background");
  })
  $("button#dark").click(function() {
    $("body").removeClass("light-background");
    $("body").addClass("dark-background");
  })
  $("p#intro").click(function() {
    $("#intro").addClass("highlight");
    $("#intro").removeClass("non-highlight");

  });
});
