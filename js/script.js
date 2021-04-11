let date=parseInt(prompt('Enter date of birth', 'Day only (DD)'));
let month=parseInt(prompt('Enter month of birth', 'MM'));
let yearFull=prompt('Enter year of birth', 'YYYY');
  let century=parseInt((yearFull.charAt(0))+(yearFull.charAt(1)));
  let year=parseInt((yearFull.charAt(2))+(yearFull.charAt(3)));
let gender=(prompt('Enter Gender')).toLowerCase();

function dayOfTheWeek(century, year, month, date){
  return (( ( (century/4) -(2*century-1)) + ((5*(year/4)) ) + ((26*(month+1)/10)) + date )%7)
  //( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) %7
}
