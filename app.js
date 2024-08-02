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


//STATEs
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
        scorePlayer1.innerHTML = currentScorePlayer1;
        currentScorePlayer1 = 0;
        scoreEndPlayer1.innerHTML = currentScorePlayer1;
    } else if(activePlayer == 'player 2') {
        console.log(currentScorePlayer2);
        activePlayer = 'player 1'
        player1.style.backgroundColor = 'blue';
        player2.style.backgroundColor = 'red';
        scorePlayer2.innerHTML = currentScorePlayer2;
        currentScorePlayer2 = 0;
        scoreEndPlayer2.innerHTML = currentScorePlayer2;
    }
    console.log(activePlayer);
})



buttonRollDice.addEventListener('click', function() {
    randomNum = randomNumber()
    roleStat.innerHTML = randomNum
    console.log(activePlayer)

    if(activePlayer == 'player 1') {
        currentScorePlayer1+= randomNum;
        scoreEndPlayer1.innerHTML = currentScorePlayer1;
        if(currentScorePlayer1 >= 20) {
            totalScorePlayer1 = currentScorePlayer1;
            scorePlayer1.innerHTML = totalScorePlayer1;
            scoreEndPlayer1.innerHTML = '0';
            activePlayer = 'player 2';
            player1.style.backgroundColor = 'red';
            player2.style.backgroundColor = 'blue';
            currentScorePlayer1 = 0;
            totalScorePlayer1 = 0;
        } else if (randomNum == 1) {
            scoreEndPlayer1.innerHTML = '0';
            activePlayer = 'player 2';
            player1.style.backgroundColor = 'red';
            player2.style.backgroundColor = 'blue';
            currentScorePlayer1 = 0;
            totalScorePlayer1 = 0;

        }
    }

     else if(activePlayer == 'player 2') {
        currentScorePlayer2+=randomNum;
        scoreEndPlayer2.innerHTML = currentScorePlayer2
        if(currentScorePlayer2 >= 20) {
            totalScorePlayer2 = currentScorePlayer2;
            scorePlayer2.innerHTML = totalScorePlayer2;
            activePlayer = 'player 1';
            player2.style.backgroundColor = 'red';
            player1.style.backgroundColor = 'blue';
            currentScorePlayer2 = 0;
            totalScorePlayer2 = 0;
        } else if(randomNum == 1) {
            scoreEndPlayer2.innerHTML = '0';
            activePlayer = 'player 1';
            player2.style.backgroundColor = 'red';
            player1.style.backgroundColor = 'blue';
            currentScorePlayer2 = 0;
            totalScorePlayer2 = 0;
        }
    }
 
console.log(activePlayer)
console.log(randomNum);
console.log(currentScorePlayer1);
})

buttonNewGame.addEventListener('click', function() {
    activePlayer = 'player 1';
    player1.style.backgroundColor = 'blue';
    player2.style.backgroundColor = 'red';
     randomNum = null
     currentScorePlayer1 = 0;
     totalScorePlayer1 = 0;
     currentScorePlayer2 = 0;
     totalScorePlayer2 = 0;
     roleStat.innerHTML = '0';
     scoreEndPlayer1.innerHTML = '0';
     scorePlayer1.innerHTML = '0';
     scoreEndPlayer2.innerHTML = '0';
     scorePlayer2.innerHTML = '0';
     
})

























