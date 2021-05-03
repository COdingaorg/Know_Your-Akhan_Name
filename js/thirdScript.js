//user logic
//use the input from form to set date
$(document).ready(function () {
  $('form#birthday').submit(function (event) {
    event.preventDefault();
    $('form').css('background-color','green');
    var userDateInput = $('input#day').val();
    var dateSetting = new Date(userDateInput);
  })
})