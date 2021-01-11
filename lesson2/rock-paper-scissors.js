/* Features:
Lizard and Spock, Shortened input, Best of 5, Games won is counted
can eaisly be expanded without major edits.
*/
const rlSync = require('readline-sync');
let validChoices = [];
let randomIndex = null;
let gameinfo = {              //Could not figure out how to make the object all at once
  player: {choice: null},
  computer: {choice: null},
  gameParam: {type: null},
  wins: {player: 0}
};
gameinfo.player.score = null;
gameinfo.computer.score = null;
gameinfo.gameParam.bestOf = null;
gameinfo.gameParam.winner = null;
gameinfo.wins.computer = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function checkFirstTwoLetters(array,search) { //Eslint does not like this function, says there is no return. not sure why
  for (let element = 0; element < array.length; element++) {
    if (array[element].substring(0,2) === search) return array[element];
  }
}

function checkIfPlayerWins(choice, computerChoice) {
  return (choice === 'rock' && computerChoice === 'scissors') ||
         (choice === 'rock' && computerChoice === 'lizard') ||
         (choice === 'paper' && computerChoice === 'rock') ||
         (choice === 'paper' && computerChoice === 'spock') ||
         (choice === 'scissors' && computerChoice === 'paper') ||
         (choice === 'scissors' && computerChoice === 'lizard') ||
         (choice === 'lizard' && computerChoice === 'paper') ||
         (choice === 'lizard' && computerChoice === 'spock') ||
         (choice === 'spock' && computerChoice === 'rock') ||
         (choice === 'spock' && computerChoice === 'scissors');
}

function returnWinner(choice, computerChoice) {
  if (checkIfPlayerWins(choice, computerChoice)) {
    return 1;
  } else if (choice === computerChoice) {
    return null;
  } else {
    return 0;
  }
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (checkIfPlayerWins(choice, computerChoice)) {
    prompt('You win the round!');
  } else if (choice === computerChoice) {
    prompt("The round is a tie!");
  } else {
    prompt('Computer win the round!');
  }
}

function generatePlayerChoice() {
  prompt(`Choose one: ${validChoices.join(', ')}`);
  let choice = rlSync.question();
  choice = choice.toLowerCase();
  if (choice.length < 3) choice = checkFirstTwoLetters(validChoices,choice);  //length needs to be less than 3 in case whole word is typed
  while (!validChoices.includes(choice)) {
    prompt("That's not a valid choice");
    choice = rlSync.question();
  }
  return choice;
}

function displayScore() {
  if (gameinfo.player.score === 2 && gameinfo.computer.score === 2) {
    prompt("Last Point!");
  } else if (gameinfo.player.score === 3 || gameinfo.computer.score === 3) {  //Intentionally empty
  } else console.log(`Player score: ${gameinfo.player.score}:${gameinfo.computer.score}`);
}

prompt("Welcome to Rock Paper Scissors Lizard Spock <=");
prompt("When choosing action you may only type the first two letters instead.");

while (true) {
  if (rlSync.keyInYNStrict("=> Rock Paper Scissors Lizard Spock?")) {
    gameinfo.gameParam.type = "rpsls";
    validChoices = ['rock','paper', 'scissors', 'lizard', 'spock'];
  } else {
    gameinfo.gameParam.type = "rps";
    validChoices = ['rock','paper', 'scissors'];
  }
  if (rlSync.keyInYNStrict("=> Best of five?")) {
    gameinfo.player.score = 0;
    gameinfo.computer.score = 0;
  } else {
    gameinfo.player.score = 2;
    gameinfo.computer.score = 2;
  }

  while (gameinfo.player.score < 3 && gameinfo.computer.score < 3) {
    let choice = generatePlayerChoice();
    randomIndex = Math.floor(Math.random() * validChoices.length);
    let computerChoice = validChoices[randomIndex];

    displayWinner(choice, computerChoice);
    gameinfo.gameParam.winner = returnWinner(choice, computerChoice);
    if (gameinfo.gameParam.winner === 1) gameinfo.player.score++;
    if (gameinfo.gameParam.winner === 0) gameinfo.computer.score++;
    displayScore();
  }
  if (gameinfo.player.score === 3) {
    prompt("You have won the game! :D");
    gameinfo.wins.player++;
  } else {
    prompt("You have lost the game! :(");
    gameinfo.wins.computer++;
  }
  console.log(`Player games won: ${gameinfo.wins.player} | Computer games won: ${gameinfo.wins.computer}`);
  if (!rlSync.keyInYNStrict('Do you want to play again?')) break;
}