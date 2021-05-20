'use strict';

let highScore = 0;
let actualScore = 20;
let randomNumber = Math.ceil(Math.random() * 20);

const scoreDOM = document.querySelector('.score');
const checkDOM = document.querySelector('.check');
const againButtonDOM = document.querySelector('.again');
const numberDOM = document.querySelector('.number');
const bodyDOM = document.body;
const guessDOM = document.querySelector('.guess');
const messageDOM = document.querySelector('.message');
const highScoreDOM = document.querySelector('.highscore');

const displayMessage = function (message) {
  messageDOM.textContent = message;
};

checkDOM.addEventListener('click', function () {
  const number = Number(guessDOM.value);

  if (number && number > 0 && number < 21) {
    if (number !== randomNumber) {
      number > randomNumber
        ? displayMessage('📈 Too High!')
        : displayMessage('📉 Too Low!');
      if (actualScore > 0) {
        scoreDOM.textContent = --actualScore;
      } else {
        bodyDOM.style.backgroundColor = '#d62828';
        checkDOM.disabled = true;
        numberDOM.textContent = '😵';
        displayMessage('Try Again...');
        againButtonDOM.style.backgroundColor = '#56AA3F';
        againButtonDOM.style.color = 'white';
      }
    } else {
      displayMessage('🎉 Correct Number!');
      bodyDOM.style.backgroundColor = '#56AA3F';
      numberDOM.style.width = '35rem';
      numberDOM.textContent = randomNumber;
      scoreDOM.textContent = actualScore;

      if (actualScore > highScore) {
        highScore = actualScore;
        highScoreDOM.textContent = highScore;
      }
      checkDOM.disabled = true;
    }
  }
});

// -------------------------Again--------------------------
againButtonDOM.addEventListener('click', function () {
  actualScore = 20;
  randomNumber = Math.ceil(Math.random() * 20);

  numberDOM.textContent = '?';
  scoreDOM.textContent = actualScore;
  guessDOM.value = '';

  bodyDOM.style.backgroundColor = '#222';
  numberDOM.style.width = '15rem';
  againButtonDOM.style.backgroundColor = 'white';
  againButtonDOM.style.color = 'black';
  checkDOM.disabled = false;
  displayMessage('Start guessing...');
});
