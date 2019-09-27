$(document).ready(function() {
  $(".mobile-link").click(function() {
    $(".du-nav").toggleClass("nav-open");
  });

  $(".du-footer--submit-message").hide();
  $(".du-footer--submit-message").removeClass("hidden");

  // Hide form on submit and fadein submit antother
  $(".du-footer--form").submit(function(e) {
    $(e.target).fadeOut();
    $(e.target.nextElementSibling).fadeIn();
  });

  // Fedin submit form
  $(".du-footer--submit-another").click(function(e) {
    $(".du-footer--submit-message").fadeOut();
    $(".du-footer--form").fadeIn();
  });
});
