


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
need to update rules 
*/

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', playerChoiceClicked);   //iterates over button nodes and adds 'click' event listener to each
});

function playerChoiceClicked(e) {                   //function for when buttons are clicked 
  if (e.target.id === 'rules') {                   
    console.log(e);
  } else if (e.target.id === 'playAgainButton') {
    reset();
    console.log('hi');
  }
    else {
    playerChoice = e.target.id;
    let result = playRound(playerChoice);
    updateScoreboard(result);
  }
}

function playRound(playerSelection) {                       
  computerChoice = getComputerChoice().toLowerCase();
  playerSelection = playerChoice;
  let winner = decideWinner();
  return winner;
}

function updateScoreboard(update) {
  const playerScore = document.getElementById('playerScore');
  const computerScore = document.getElementById('computerScore');
  const tieScore = document.getElementById('tieScore');
  const finalScore = document.getElementById('finalScore');
  playerScore.innerText = `Player: ${winCounter}`;
  computerScore.innerText = `Computer: ${loseCounter}`;
  tieScore.innerText = `Tie: ${tieCounter}`;
  finalScore.innerText = update;
  if ((winCounter > loseCounter) && ((winCounter === 5) || loseCounter === 5)) {
    finalScore.innerText = 'Player is the winner!';
    playAgainBtn();
    disablePlayerButtons()
  } else if ((winCounter < loseCounter) && ((winCounter === 5) || loseCounter === 5)) {
    finalScore.innerText = 'Computer is the winner!';
    playAgainBtn();
    disablePlayerButtons()
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


function playAgainBtn () {
  const playAgain = document.getElementById('playAgain');
  const playAgainBtn = document.createElement('button');
  playAgainBtn.innerText = 'Play Again';
  playAgainBtn.setAttribute('id', 'playAgainButton');
  playAgain.appendChild(playAgainBtn);
  playAgainBtn.addEventListener('click', reset);
  
}

function disablePlayerButtons() {
  let playerButtons = document.getElementsByClassName('playerMoves');
  for (let i = 0; i < 3; i++) {
    playerButtons[i].classList.toggle('disableButtons');
    playerButtons[i].disabled = true;
  }
}

function reset() {
  let playerButtons = document.getElementsByClassName('playerMoves');
  for (let i = 0; i < 3; i++) {
    playerButtons[i].classList.toggle('disableButtons');
    playerButtons[i].disabled = false;
  }
  const playAgain = document.getElementById('playAgain');
  const playAgainChild = document.getElementById('playAgainButton')
  playAgain.removeChild(playAgainChild);
  winCounter = 0;
  loseCounter = 0;
  tieCounter = 0;
  updateScoreboard('');
}
