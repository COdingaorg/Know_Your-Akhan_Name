//user logic
//use the input from form to set date
$(document).ready(function () {
  $('form#birthday').submit(function (event) {
    event.preventDefault();
    $('form').css('background-color','green');
    var userDateInput = $('input#day').val();
    var dateSetting = new Date(userDateInput);
    var weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var bornDayNumber = dateSetting.getDay();
    var bornDay = weekDay[bornDayNumber];
    console.log(bornDay)
    //Get Akan Names
  //   let akanNamesMales=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  //   let akanNamesFemales=['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  //     if (gender=='male') {
  //       var userAkanName = akanNamesMales[validDayNumber]
  //     }else if(gender=='female'){
  //       var userAkanName = akanNamesFemales[validDayNumber]
  //     }else if(gender=='other'){
  //       alert('sorry, we dont have Name results for the Gender option selected')
  //     }else{
  //       alert('Please select a gender option to proceed')
  //     };
  //     if(gender==null||gender==''){
  //       $('#akanName p').before('<p>You did not select any gender option</p>');
  //     }else if(gender=='other'){
  //       $('#akanName p').before('<p>Sorry we dont have Name results for the selected option</p>');
  //     };
  //     if(date==null||date==''){
  //       $('#dayOfBirth p').before('<p>You did not enter any date</p>');
  //     }
  //     $('#dayOfBirth p').before('<p>'+bornDay+'</p>');
  //     $('#akanName p').before('<p>'+userAkanName+'</p>');

  // event.preventDefault();
  // //deleting the first child
  // $('#dayOfBirth p:last-child').remove();
  // $('#akanName p:last-child').remove();
  })
})