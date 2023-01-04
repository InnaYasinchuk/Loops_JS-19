// 1
let age = prompt('How old are you?');

if (age <= 17){
  confirm('Do you study at school?');
} else if (age < 25){
 confirm('Do you study at university?');
} else if (age < 60){
 confirm('Do you have a job?');
} else {
  prompt('What are you doing?');
}

//2

let displayValue = prompt('Set the display value');

switch(displayValue){
  case 'block':
    alert(`display: ${displayValue};`);
    break;

  case 'flex':
    alert(`display: ${displayValue};`);
    break;

  case 'grid':
    alert(`display: ${displayValue};`);
    break;

  case 'inline':
    alert(`display: ${displayValue};`);
    break;

  case 'none':
    alert(`display: ${displayValue};`);
    break;

  default:
    alert("'Set display: inline-block;'");
}

//3

let number = prompt("Please enter the number", "1");

if (isNaN(number)){
  alert("Your number is incorrect, please enter correct number");
} else {
  alert(`${number} by 12 equals ${number * 12}`);
}

//4

for (let i = 2; i <= 50; i ++){
  if(i % 2 === 0){
    console.log(i);
  }
}