$(document).ready(function () {
  $('#membership-form').on('submit', function () {
    var name = $('#membership-form #name').val();
    var email = $('#membership-form #email').val();

    if (email && name) {
      $.post('https://datu-membership.herokuapp.com/members', {
        name,
        email,
      }, (res) => {
        console.log('Successfully emailed user');
      });
    }
  });
});