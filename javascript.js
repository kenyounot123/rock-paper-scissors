


//Rock paper scissors will be played against the computer 
const computerChoices = ['rock', 'paper', 'scissors']
//Randomly generate the computers choice rock, paper, or scissors
let playerChoice = ''
let computerSelects = ''
let win = 'You Win!'
let lose = 'You Lose!'
let tie = 'You Tied!'
let winCounter = 0
let loseCounter = 0
let tieCounter = 0

/*
need to add play again option and disable buttons after game is done
need to update rules 
*/

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', playerChoiceClicked);   //iterates over button nodes and adds 'click' event listener to each
});

function playerChoiceClicked(e) {                   //function for when buttons are clicked 
  if (e.target.id === 'rules') {                   
    console.log('rules');
  }
  playerChoice = e.target.id;
  let result = playRound(playerChoice);
  console.log(result)
  updateScoreboard(result);
}

function playRound(playerSelection) {                       
  computerChoice = getComputerChoice().toLowerCase();
  playerSelection = playerChoice 
  let winner = decideWinner();
  return winner;
}

function updateScoreboard(update) {
  const playerScore = document.getElementById('playerScore');
  const computerScore = document.getElementById('computerScore');
  const tieScore = document.getElementById('tieScore');
  const finalScore = document.getElementById('finalScore')
  playerScore.innerText = `Player: ${winCounter}`;
  computerScore.innerText = `Computer: ${loseCounter}`;
  tieScore.innerText = `Tie: ${tieCounter}`;
  finalScore.innerText = update;
  if ((winCounter > loseCounter) && ((winCounter === 5) || loseCounter === 5)) {
    finalScore.innerText = 'Player is the winner!';
  } else if ((winCounter < loseCounter) && ((winCounter === 5) || loseCounter === 5)) {
    finalScore.innerText = 'Computer is the winner!';
  }  
}

function randomInteger() {
  let randomNumber = Math.floor(Math.random() * 3);      //gets random number between 0 and 2, including 0 and 2
  return randomNumber;
}
function decideWinner() {                                       
  if (computerSelects === playerChoice.toLowerCase()) {
    tieCounter += 1;
    return tie;
  } else if (computerSelects > playerChoice.toLowerCase()) {
    winCounter += 1;
    return win; 
  } else if (computerSelects < playerChoice.toLowerCase()) {
    loseCounter += 1;
    return lose;
  }
}
function getComputerChoice() {
  computerSelects = computerChoices[randomInteger()];
  return computerSelects;
}