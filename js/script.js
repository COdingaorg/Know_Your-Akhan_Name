let date=document.getElementById('day');//parseInt(prompt('Enter date of birth', 'Day only (DD)'));
let month=document.getElementById('month');//parseInt(prompt('Enter month of birth', 'MM'));
let yearFull=document.getElementById('year');//prompt('Enter year of birth', 'YYYY');
  let century=parseInt((yearFull.charAt(0))+(yearFull.charAt(1)));
  let year=parseInt((yearFull.charAt(2))+(yearFull.charAt(3)));
let gender=document.getElementById('gender');//(prompt('Enter Gender')).toLowerCase();

//function to calculate number that represents a day of the week
function dayOfTheWeek(century, year, month, date){
  return (( ( (century/4) -(2*century-1)) + ((5*(year/4)) ) + ((26*(month+1)/10)) + date )%7)
  //( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) %7
};
//fuction for submitting
function submitForm(){
  document.getElementById('birthday').submit();
      let bornDay=(`You were born on ${dOW[dayNumber]}`);
      let akanNames;
      if(gender=='male'|| gender=='Male'){
        akanNames=(`Your Akan Name is ${akanNamesMales[dayNumber]}`);
      }else if(gender=='female'||gender=='Female'){
        akanNames=(`Your Akan Name is ${akanNamesFemales[dayNumber]}`);
      }else if(gender==''){
        akanNames=('Please select your Gender')
      }else {
        akanNames=('Please Enter Either Male of Female')
      };
  document.getElementById('dayOfBirth').innerHTML=bornDay;


};
//function for reseting the form
function resetForm(){
  document.getElementById('birthday').reset();
};

let dayNumber=(dayOfTheWeek(century, year, month, date).toFixed());
let dOW=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let akanNamesMales=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
let akanNamesFemales=['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

