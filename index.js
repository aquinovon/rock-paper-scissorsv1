var numberOfButtons = document.querySelectorAll('button').length;
var playerMove = ['paper']; /*paper by default*/
var computerMove = ['paper']; /*paper by default*/
var handSymbols = ['rock', 'paper', 'scissors'];
var playerScore = 0;
var computerScore = 0;


for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function() {

    playerSelectedMove(this.id); /* after calling this func, playerMove array is empty */
    playerMove.push(this.id);

    var randomNum = Math.trunc(Math.random() * 3); 
    var randomMove = `${handSymbols[randomNum]}`;
    computerSelectedMove(randomMove); /* after calling this func, computerMove array is empty */

    computerMove.push(randomMove);
    compareMoves(playerMove[0],computerMove[0]);
  });
}

function playerSelectedMove(selectedMove) {
  document.querySelector('.player-chosen').classList.add(`${selectedMove}`);
  document.querySelector('.player-chosen').classList.remove(`${playerMove}`);
  playerMove = [];
}

function computerSelectedMove(randomMove) {
  document.querySelector('.computer-chosen').classList.add(`${randomMove}`);
  document.querySelector('.computer-chosen').classList.remove(`${computerMove}`);
  computerMove = [];
}

function compareMoves(playerMove , computerMove) {
    console.log(`player: ${playerMove}`);
    console.log(`player class: ${document.querySelector('.computer-chosen').classList[1]}`);
    console.log(`computer: ${computerMove}`);
    console.log(`computer class: ${document.querySelector('.computer-chosen').classList[1]}`);

    if (playerMove === 'rock' &&  computerMove === 'paper') {
      document.querySelector('h1').innerText = 'Computer wins!';
      var computer = document.querySelector('h1').innerText = 'Computer wins!';
      addScore(computer);
    } else if (playerMove === 'rock' && computerMove === 'scissors' ) {
      var player = document.querySelector('h1').innerText = 'Player wins!';
      addScore(player);
    } else if (playerMove === 'paper' &&  computerMove === 'rock') {
      var player = document.querySelector('h1').innerText = 'Player wins!';
      addScore(player);
    } else if (playerMove === 'paper' &&  computerMove === 'scissors') {
      var computer = document.querySelector('h1').innerText = 'Computer wins!';
      addScore(computer);
    } else if (playerMove === 'scissors' && computerMove === 'paper' ) {
      var player = document.querySelector('h1').innerText = 'Player wins!';
      addScore(player);
    } else if (playerMove === 'scissors' && computerMove === 'rock' ) {
      var computer = document.querySelector('h1').innerText = 'Computer wins!';
      addScore(computer);
    } else {
      document.querySelector('h1').innerText = 'Tie!';
    }
}

function addScore(winner) {
  if (winner === 'Player wins!') {
    playerScore++;
    document.querySelector('.player-score').innerText = playerScore;
  } else {
    computerScore++;
    document.querySelector('.computer-score').innerText = computerScore;
  }
}

