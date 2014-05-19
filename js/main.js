$(document).ready(function() {
  var $header, $video, $window;
  $window = $(window);
  $header = $("#welcome h1");
  $window.scroll(function() {
    var current_position;
    var $nav = $("nav");
    var $nav_spacer = $("#nav-spacer");
    current_position = $window.scrollTop();
    if (current_position > 470) {
      $nav.addClass("sticky");
      $nav_spacer.show();
    } else if (current_position <= 470) {
      $nav.removeClass("sticky");
      $nav_spacer.hide();
    }
  });
});