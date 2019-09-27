$(document).ready(function() {
  $('.du-contact--loading').hide().removeClass('hidden');
  $('.du-contact--form-success').hide().removeClass('hidden');

  // Handle form submit
  $('.du-contact--form form').on('submit', function() {
    // Preserve height of form
    $('.du-contact--form form').css('opacity', 0);
    $('.du-contact--loading').show(function() {
      setTimeout(function() {
        $('.du-contact--loading').fadeOut(function() {
          $('.du-contact--form-success').fadeIn();
        }), 300
      });
    });
  });

  $('#du-contact--submit-another').click(function() {
    $('.du-contact--form-success').fadeOut();
    $('.du-contact--form form').find("input[type=text], input[type=email], textarea").val("");
    $('.du-contact--form form').animate({opacity: 1});
  });
});
