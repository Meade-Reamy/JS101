const rlSync = require('readline-sync');

function convertPaymentOutput(Payment) {
  Payment = Payment.toFixed(2);
  Payment = Payment.toString();
  Payment = '$' + Payment;
  return Payment;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to loan calculator');

while (true) {

  prompt('loan amount?');
  let loanAmount = rlSync.question();
  loanAmount = parseFloat(loanAmount.replace(/[^\d\.]/, '')); //parseFloat would not work if $

  prompt('What is the APR?');
  let apr = rlSync.questionFloat();
  apr = apr / 100 / 12;

  prompt('Loan duration in years?');
  let duration = rlSync.question();
  duration = parseFloat(duration);
  duration *= 12;

  prompt('Loan duration remaning months?');
  let durationInMonths = rlSync.question();
  durationInMonths = parseFloat(durationInMonths);
  durationInMonths += duration;

  if (durationInMonths <= 0) {
    let monthlyPayment = loanAmount / durationInMonths;
    prompt(`The monthly payment is ${monthlyPayment}`);
  }   else {
    let monthlyPayment = loanAmount * (apr / (1 - Math.pow((1 + apr), (-durationInMonths))));
    console.log(monthlyPayment);
    monthlyPayment = convertPaymentOutput(monthlyPayment);
    prompt(`The monthly payment is ${monthlyPayment}`);
  }


  prompt('Whould you like to perform another operation?');
  if (rlSync.keyInYN(' ') !== true) break;
}