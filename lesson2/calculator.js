const rlSync = require('readline-sync');

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to Calculator!');

while (true) {

prompt("What's the first number?");
let number1 = rlSync.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = rlSync.question();
}

prompt("What's the second number?");
let number2 = rlSync.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = rlSync.question();
}

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = rlSync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = rlSync.question();
}

number1 = Number(number1);
number2 = Number(number2);
let output;

switch (operation) {
  case '1':
    output = number1 + number2;
    break;
  case '2':
    output = number1 - number2;
    break;
  case '3':
    output = number1 * number2;
    break;
  case '4':
    output = number1 / number2;
    break;
}

console.log(`The result is: ${output}`);

prompt('Whould you like to perform another operation');
let answer = rlSync.question();

if (answer[0].toLowerCase() !== 'y') break;
}
