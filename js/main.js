$(document).ready(function() {
  var $header, $video, $window;
  $window = $(window);
  $video = $("#welcome video");
  $header = $("#welcome h1");
  return $window.scroll(function() {
    var current_position;
    current_position = $window.scrollTop();
    if (current_position > 30) {
      $header.css({
        top: 350 - ($window.scrollTop() * 1.75),
        opacity: (90 - $window.scrollTop()) / 100
      });
    }
    if (current_position <= 100) {
      $video.css("top", current_position);
    }
    if (current_position > 720) {
      return $("nav").addClass("sticky");
    } else if (current_position <= 720) {
      return $("nav").removeClass("sticky");
    }
  });
});