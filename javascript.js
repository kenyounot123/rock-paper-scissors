

/*
Need to reprompt user if input is not rock paper or scissors
*/
//Rock paper scissors will be played against the computer 
const computerChoices = ["rock", "paper", "scissors"]
//Randomly generate the computers choice rock, paper, or scissors
let playerChoice = ''
let computerSelects = ''
let winCounter = 0
let loseCounter = 0
let tieCounter = 0
function getComputerChoice() {
  computerSelects = computerChoices[randomInteger()];
  return computerSelects;
}

function playRound(playerSelection, computerSelection) {
  computerSelects = computerSelection
  playerSelection = playerChoice.toLowerCase();
  let winner = decideWinner();
  return winner;
}

function game() {
  while ((winCounter + loseCounter) != 5) {
    playerChoice = prompt("Please choose Rock, Paper, or Scissors");
    if (playerChoice == null) {
      return;
    }
    computerSelects = getComputerChoice()
    let score = playRound(playerChoice, computerSelects)
    console.log(score)
    console.log(`Player: ${winCounter.toString()}`)
    console.log(`Computer: ${loseCounter.toString()}`)
    console.log(`Tie: ${tieCounter.toString()}`) 
  }
  if (winCounter > loseCounter) {
    console.log("Player is the winner!")
  } else if (winCounter < loseCounter) {
    console.log("Computer is the winner!")
  } 
}


function randomInteger() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}
function decideWinner() {
  if (computerSelects === playerChoice.toLowerCase()) {
    tieCounter += 1;
    return "You Tied!";
  } else if (computerSelects > playerChoice.toLowerCase()) {
    winCounter += 1;
    return "Player Wins!"; 
  } else if (computerSelects < playerChoice.toLowerCase()) {
    loseCounter += 1;
    return "Computer Wins!";
  } else {
    return null;
  }
  
}