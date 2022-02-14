'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent='Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10; 
document.querySelector('.guess').value = 23;
*/
//Creating secret number
const guessNumber=function (){
 return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = guessNumber();
let score = 20;
let highscore = 0;
//Creating check button
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No input

  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');
    //When Player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    secretNumber=Math.trunc(Math.random() * 20) + 1;
    score = 20;
    // document.querySelector('.message').textContent = 'Start Guessing!';

    displayMessage('Start guessing ...');
    // document.querySelector('.score').textContent = score;
    displayScore(score);

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
  });
});
