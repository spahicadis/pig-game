//DOM
const scorePlayer1 = document.querySelector('.score-player-1');
const scoreEndPlayer1 = document.querySelector('.score-end-player-1');
const scorePlayer2 = document.querySelector('.score-player-2');
const scoreEndPlayer2 = document.querySelector('.score-end-player-2');
const buttonNewGame = document.querySelector('.new-game');
const buttonRollDice = document.querySelector('.roll-game');
const buttonHoldGame = document.querySelector('.hold-game');
const infoButton = document.querySelector('.info');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const roleStat = document.querySelector('.rollResult');

//

let randomNum = null
let currentScorePlayer1 = 0;
let totalScorePlayer1 = 0;
let currentScorePlayer2 = 0;
let totalScorePlayer2 = 0;
let activePlayer = 'player 1';
player1.style.backgroundColor = 'blue';



infoButton.addEventListener('click', function() {
    alert('roll the dice, whoever gets one point loses');
})

function randomNumber() {
    return Math.floor(Math.random() * 6) + 1
}

buttonHoldGame.addEventListener('click', function() {
    if(activePlayer == 'player 1') {
        activePlayer = 'player 2'
        player1.style.backgroundColor = 'red';
        player2.style.backgroundColor = 'blue';
    } else if(activePlayer == 'player 2') {
        activePlayer = 'player 1'
        player1.style.backgroundColor = 'blue';
        player2.style.backgroundColor = 'red';
    }
    console.log(activePlayer);
})



buttonRollDice.addEventListener('click', function() {
    randomNum = randomNumber()
    roleStat.innerHTML = randomNum;

    if(activePlayer == 'player 1') {
        currentScorePlayer1+= randomNum
        scoreEndPlayer1.innerHTML = currentScorePlayer1
        
    }

console.log(currentScorePlayer1);
})

























