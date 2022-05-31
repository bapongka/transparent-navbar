$(document).ready(function () {
  // Transition effect for navbar
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(window).scrollTop() > 700) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
});
