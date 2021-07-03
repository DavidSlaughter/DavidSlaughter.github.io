let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEL = document.getElementById('message-el');
let sumEL = document.getElementById('sum-el');

console.log(sumEL);
console.log(messageEL);

function startGame()
{
  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    hasBlackJack = true;
    message = 'Congratulations! You have blackjack!';
  } else {
    isAlive = false;
    message = 'You are BUST!';
  }
  messageEL.textContent = message;
  sumEL.textContent = 'Sum: ' + sum;
}
