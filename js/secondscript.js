let date=parseInt(prompt('Enter date of birth', 'Day only (DD)'));
let month=parseInt(prompt('Enter month of birth', 'MM'));
let yearFull=prompt('Enter year of birth', 'YYYY');
  let century=parseInt((yearFull.charAt(0))+(yearFull.charAt(1)));
  let year=parseInt((yearFull.charAt(2))+(yearFull.charAt(3)));
let gender=(prompt('Enter Gender')).toLowerCase();
//function to calculate number that represents a day of the week
function dayOfTheWeek(century, year, month, date){
  return (( ( (century/4) -(2*century-1)) + ((5*(year/4)) ) + ((26*(month+1)/10)) + date )%7)
  //( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) %7
}
//fuction for submitting
function submitForm(){
  document.getElementById('birthday').submit();
}
//function for reseting the form
function resetForm(){
  document.getElementById('birthday').reset();
}
let dayNumber=(dayOfTheWeek(century, year, month, date).toFixed());

let dOW=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let akanNamesMales=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
let akanNamesFemales=['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
alert(`You were born on ${dOW[dayNumber]}`);
    if(gender=='male'|| gender=='Male'){
      alert(`Your Akan Name is ${akanNamesMales[dayNumber]}`);
    }else if(gender=='female'||gender=='Female'){
      alert(`Your Akan Name is ${akanNamesFemales[dayNumber]}`);
    }else if(gender==''){
      alert('Please select your Gender')
    }else {
      alert('Please Enter Either Male of Female')
    };
