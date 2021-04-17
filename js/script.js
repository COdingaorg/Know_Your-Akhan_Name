/*  let date=parseInt(prompt('Enter date of birth', 'Day only (DD)'));
    if (date==0||date>31) {
      alert('Refresh and Enter valid date')
    };
  let month=parseInt(prompt('Refresh and Enter month of birth', 'MM'));
    if(month==0||month>12){
      alert('Refresh and Enter a valid month')
    };
  let yearFull=prompt('Enter year of birth', 'YYYY');
    let century=parseInt((yearFull.charAt(0))+(yearFull.charAt(1)));
    let year=parseInt((yearFull.charAt(2))+(yearFull.charAt(3)));
  let gender=(prompt('Enter Gender')).toLowerCase();
  //function to calculate number that represents a day of the week
  function dayOfTheWeek(century, year, month, date){
    return (( ( (century/4) -(2*century-1)) + ((5*(year/4)) ) + ((26*(month+1)/10)) + date )%7)
    //( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) %7
  };
  let dayNumber=(dayOfTheWeek(century, year, month, date).toFixed());

  let dOW=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let akanNamesMales=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  let akanNamesFemales=['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
      bornDay=(`You were born on ${dOW[dayNumber]}`);
      if(gender=='male'|| gender=='Male'){
        akanName=(`Your Akan Name is ${akanNamesMales[dayNumber]}`);
      }else if(gender=='female'||gender=='Female'){
        akanName=(`Your Akan Name is ${akanNamesFemales[dayNumber]}`);
      }else if(gender==''){
        akanName=('Please select your Gender')
      }else {
        akanName=('Please Enter Either Male of Female')
      };
  //changing the alerts below to submit button
  //  alert(bornDay)
  //  alert(akanName);
  let confirmation = confirm('Results are ready, click ok to proceed');
  if(confirmation==true){
    printNameAndDay()
  }else if(confirmation==false){
    alert('You cancelled')
  };

  //fuction for submitting
  function submitForm(){
    /*document.getElementById('birthday').submit();
  }*/
  var bornDay
  //user Logic
  //getting inputs from user
$(document).ready(function(){
  $('#submit').click(function(event){
    //alert('success');
    $('form').css('background-color', 'green');
    var date = ($('#day').val());
    console.log(date)
    var day = parseInt((date.charAt(8))+(date.charAt(9)))
    var month = parseInt((date.charAt(5))+(date.charAt(6)))
    var year = parseInt((date.charAt(2))+(date.charAt(3)))
    var century = parseInt((date.charAt(0))+(date.charAt(1)))
    var gender = $('input:radio[name=gender]:checked').val();
  //formula to calculate day Number  
  var dayNumber=Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) %7);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      if (dayNumber>=0||dayNumber<=7){
        var validDayNumber = dayNumber
        bornDay = days[validDayNumber];
        console.log(validDayNumber)
        console.log(bornDay)
      }else{
        alert('Please enter a Valid date')
      }

      let akanNamesMales=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
      let akanNamesFemales=['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
        if (gender=='male') {
          var userAkanName = akanNamesMales[validDayNumber]
        }else if(gender=='female'){
          var userAkanName = akanNamesFemales[validDayNumber]
        }else if(gender=='other'){
          alert('sorry, we dont have Name results for the Gender option selected')
        }else{
          alert('Please select a gender option to proceed')
        };
        $('#dayOfBirth').after('<p>'+bornDay+'</p>');
        $('#akanName').after('<p>'+userAkanName+'</p>');
  
  

    event.preventDefault();
  })
})















  //function to print Akan name and day a user was born
  function printNameAndDay(){
    document.getElementById('dayOfBirth').innerHTML= bornDay;
    document.getElementById('akanName').innerHTML= akanName;
  }
  //function for reseting the form
  function resetForm(){
    document.getElementById('birthday').reset();
  }