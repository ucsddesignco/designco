$(document).ready(function() {
  $('.du-archive--table-event').click(function(e) {
    $($(e.target.parentNode.children).splice(1))
      .toggleClass('hidden-md')
      .toggleClass('hidden-sm')
      .toggleClass('hidden-xs');
  });

  /**
   * Events filtering module.
   * 
   *   Recent: show all
   *   Spring 2016: SP16
   *   Winter 2016: WI16
   */
  // TODO: dynamically generate buttons based on qtr.
  var ALL = 'ALL';

  $('.du-archive--button').click(function() {
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');

    var selectedQtr = $(this).attr('data-quarter');
    if (selectedQtr === ALL) {
      $('.du-archive--table-row').removeClass('hidden');
    } else {
      $.each($('.du-archive--table-row'), function(i, elem) {
        if (selectedQtr !== $(elem).attr('data-quarter')) {
          $(elem).addClass('hidden');
        } else {
          $(elem).removeClass('hidden');
        }
      });
    }
  });
});
