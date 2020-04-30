/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;


scores = [0,0];
roundScore = 0;
activePlayer = 0;

// document.querySelector('#current-' + activePlayer).textContent = dice; // setter - set the value of #current

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + "<em>"; - this help to work with html code instead of puting text directly like example above

// var x = document.querySelector('#score-0').textContent;
// console.log(x); // getter - get the value to #score

document.querySelector('.dice').style.display = 'none'; // set dice to not be displayed at the begginning before taping button

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// function btn () {
//  // do later somthing here
// }
// btn(); this is global function, for this projetc better to use anonimus function which is bellow

// document.querySelector('.btn-roll').addEventListener('click', btn); // this will call outside function btn, which is best way to do it, and it will execute on click as eventListener ordered to

document.querySelector('.btn-roll').addEventListener('click', function() {
 // 1. random number
 var dice = Math.floor(Math.random() * 6) + 1;

 // 2. Display the result
 var diceDOM = document.querySelector('.dice');
 diceDOM.style.display = 'block';
 diceDOM.src = 'dice-' + dice + '.png';


 // 3. Update the round score IF the roleed number was NOT a 1.
 if (dice !== 1) {
  // add score
  roundScore += dice;
  document.querySelector('#current-' + activePlayer).textContent = roundScore;
 } else {
  // next player
  nextPlayer();


 }

}); // this example is called anonimus function as function execute once and without name, which can only be used here
document.querySelector('.btn-hold').addEventListener('click', function() {
  // Add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScore;

  // update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  // Check if player won the game
  if (scores[activePlayer] >= 10) {
   document.querySelector('#name-' + activePlayer).textContent = 'Won!';
   document.querySelector('.dice').style.display = 'none';
   document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
   document.querySelector('.player-' + activePlayer + '-panel').classList.remove('activer');
  } else {
   // next player
  nextPlayer();
  }


});


function nextPlayer() {
 activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 roundScore = 0;

 document.getElementById('current-0').textContent = '0'; // this set the score to 0 if 1 is diced.
 document.getElementById('current-1').textContent = '0'; // this set the score to 0 if 1 is diced.

 document.querySelector('.player-0-panel').classList.toggle('active');
 document.querySelector('.player-1-panel').classList.toggle('active');

 document.querySelector('.dice').style.display = 'none';
}