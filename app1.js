/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var  scores, roundScore, activePlayer, gamePlaying;

init();

var TwoSix;
// document.querySelector('#current-' + activePlayer).textContent = dice; // setter - set the value of #current

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + "<em>"; - this help to work with html code instead of puting text directly like example above

// var x = document.querySelector('#score-0').textContent;
// console.log(x); // getter - get the value to #score


// function btn () {
//  // do later somthing here
// }
// btn(); this is global function, for this projetc better to use anonimus function which is bellow

// document.querySelector('.btn-roll').addEventListener('click', btn); // this will call outside function btn, which is best way to do it, and it will execute on click as eventListener ordered to

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
     // 1. random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    // 3. Update the round score IF the roled number was NOT a 1.
    /* if (dice === 6 && TwoSix === 6) {
     scores[activePlayer] = 0;
     document.querySelector('#score-' + activePlayer).textContent = '0';
     nextPlayer();
  } else */
  if (dice1 !== 1 && dice2 !== 1) {
      // add score
      roundScore += dice1 + dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
      // next player
      nextPlayer();
      }
     // TwoSix = dice;
 }
}); // this example is called anonimus function as function execute once and without name, which can only be used here


document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.final-score').value;
    var winningScore;
    // Undefined, 0, null, or '' COERCED to false
    // anything else is COERCED to true
    if (input) {
      winningScore = input;
    } else {
     winningScore = 100;
    }
    // Check if player won the game
    if (scores[activePlayer] >= winningScore) {
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
     document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
     document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
     document.querySelector('.player-' + activePlayer + '-panel').classList.remove('activer');
     gamePlaying = false;
    } else {
     // next player
    nextPlayer();
    }}
});


function nextPlayer() {
 activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 roundScore = 0;

 document.getElementById('current-0').textContent = '0'; // this set the score to 0 if 1 is diced.
 document.getElementById('current-1').textContent = '0'; // this set the score to 0 if 1 is diced.

 document.querySelector('.player-0-panel').classList.toggle('active');
 document.querySelector('.player-1-panel').classList.toggle('active');

 document.getElementById('dice-1').style.display = 'none';
 document.getElementById('dice-2').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);

function init () {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  TwoSix = 0;
  gamePlaying = true;
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none'; // set dice to not be displayed at the begginning before taping button

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('Winner!');
  document.querySelector('.player-1-panel').classList.remove('Winner!');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}
