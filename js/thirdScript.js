//user logic
//use the input from form to set date
$(document).ready(function () {
  $('form#birthday').submit(function (event) {
    event.preventDefault();
    $('form').css('background-color', 'green');
    var userDateInput = $('input#day').val();
    var dateSetting = new Date(userDateInput);
    var weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var bornDayNumber = dateSetting.getDay();
    var bornDay = weekDay[bornDayNumber];
    
    var gender = $('#gender[type="radio"]:checked').val();
    //Get Akan Names
    let akanNamesMales = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    let akanNamesFemales = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    if (gender == 'male') {
      var userAkanName = akanNamesMales[bornDayNumber]
    } else if (gender == 'female') {
      var userAkanName = akanNamesFemales[bornDayNumber]
    } else if (gender == 'other') {
      $('#akanName').append('<p>Sorry we dont have Name results for the selected option</p>');
    } else if (gender == null || gender == ''||gender == undefined) {
      $('#akanName').append('<p>You did not select any gender option</p>');
    };
    //deleting the first child
    $('#dayOfBirth p').first().remove();
    $('#akanName p').first().remove();
    //Printing day of borth and Akan Name
    $('#dayOfBirth').append('<p>' + bornDay + '</p>');
    $('#akanName').append('<p>' + userAkanName + '</p>');
  })
})