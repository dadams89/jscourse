/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score 
gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


document.querySelector('.btn-new').addEventListener('click', newGameSetup);

//Declare global vars
var playerOne, playerTwo, diceImg, diceImg2, winningScore;

//Create Player prototype
var Player = function(name,panel,score,roundScore,prevDiceNum,active){
    this.name = name;
    this.panel = panel;
    this.score = score;
    this.roundScore = roundScore;
    this.prevDiceNum = prevDiceNum;
    this.active = active;
}

//Init global vars
playerOne = new Player(
    document.getElementById('name-0'),
    document.querySelector('.player-0-panel'),
    document.getElementById('score-0'),
    document.getElementById('current-0'),
    0,false
);

playerTwo = new Player(
    document.getElementById('name-1'),
    document.querySelector('.player-1-panel'),
    document.getElementById('score-1'),
    document.getElementById('current-1'),
    0,false
);

// playerOne = {name: document.getElementById('name-0'),
//             panel: document.querySelector('.player-0-panel'),
//             score: document.getElementById('score-0'),
//             roundScore: document.getElementById('current-0'),
//             prevDiceNum: 0,
//             active: false};

// playerTwo = {name: document.getElementById('name-1'),
//             panel: document.querySelector('.player-1-panel'),
//             score: document.getElementById('score-1'),
//             roundScore: document.getElementById('current-1'),
//             prevDiceNum: 0,
//             active: false};  
            
diceImg = document.querySelector('.dice');
diceImg.style.display = 'none';
diceImg2 = document.querySelector('.dice2');
diceImg2.style.display = 'none';



function newGameSetup(){
    if(!isNaN(parseInt(document.getElementById('winningscore').value))){
        winningScore = parseInt(document.getElementById('winningscore').value);
    }else{
        winningScore = 100;
    }
    
    document.getElementById('winningscore').disabled = true;
    document.getElementById('winningscore').placeholder = '';
    playerOne.name.textContent = 'PLAYER 1';
    playerTwo.name.textContent = 'PLAYER 2';
    playerOne.score.textContent = 0;
    playerTwo.score.textContent = 0;
    playerOne.roundScore.textContent = 0;
    playerTwo.roundScore.textContent = 0;
    playerOne.prevDiceNum = 0;
    playerTwo.prevDiceNum = 0;
    playerOne.active = true;
    playerTwo.active = false;
    switchActivePlayerCSS(playerOne,playerTwo);
    removeWinningPlayerCSS();
    diceImg.style.display = 'block';
    diceImg2.style.display = 'block';

    document.querySelector('.btn-roll').addEventListener('click', btnRoll);
    document.querySelector('.btn-hold').addEventListener('click', btnHold);
}

function newGameTearDown(winningPlayer){

    diceImg.style.display = 'none';
    diceImg2.style.display = 'none';
    document.getElementById('winningscore').disabled = false;
    document.getElementById('winningscore').placeholder = 'Enter a Winning Score and start a new game...';
    document.querySelector('.btn-roll').removeEventListener('click', btnRoll);
    document.querySelector('.btn-hold').removeEventListener('click', btnHold);
    winningPlayer.panel.classList.toggle('winner');
    winningPlayer.name.textContent = 'Winner!';
}

function btnRoll(){
    let player = getActivePlayer();
    let diceNum = Math.floor(Math.random()*6) + 1;
    let diceNum2 = Math.floor(Math.random()*6) + 1;
    let diceStr = 'dice-' + diceNum + '.png';
    let diceStr2 = 'dice-' + diceNum + '.png';
    diceImg.setAttribute('src', diceStr);
    diceImg2.setAttribute('src', diceStr);
    if(!checkRolledTwoSixes(player,diceNum) && !checkRolledTwoSixes(player,diceNum2)){
        if(diceNum !== 1 || diceNum2 !== 1){
            player.roundScore.textContent = parseInt(player.roundScore.textContent) + diceNum;
        }else{
            player.roundScore.textContent = 0;
            btnHold();
        }
    }
}

function btnHold(){
    let player = getActivePlayer();
    player.score.textContent = parseInt(player.score.textContent) + parseInt(player.roundScore.textContent);
    player.roundScore.textContent = 0;
    if(!checkWin()){
        switchActivePlayer();
    }
}

function checkRolledTwoSixes(activePlayer,diceNum){
    if(diceNum === 6 && activePlayer.prevDiceNum === 6){
        activePlayer.prevDiceNum = 0;
        activePlayer.score.textContent = 0;
        activePlayer.roundScore.textContent = 0;
        switchActivePlayer();
        return true;
    }else{
        activePlayer.prevDiceNum = diceNum;
        return false;
    }
}

function checkWin(){
    if(parseInt(playerOne.score.textContent) >= winningScore && parseInt(playerTwo.score.textContent) < winningScore){
        console.log('playerOne wins');
        newGameTearDown(playerOne);
        return true;
    }else if(parseInt(playerTwo.score.textContent) >= winningScore && parseInt(playerOne.score.textContent) < winningScore){
        console.log('playerTwo wins');
        newGameTearDown(playerTwo);
        return true;
    }else if(parseInt(playerTwo.score.textContent) < 0 || parseInt(playerTwo.score.textContent) < 0){
        console.log('Nobody has won, a player is below 0');
        return false;
    }else{
        console.log('Nobody has won');
        return false;
    }
}

function switchActivePlayer(){

    if(playerOne.active && !playerTwo.active){
        playerOne.active = false;
        playerTwo.active = true;
        switchActivePlayerCSS(playerTwo,playerOne);
    }else if(playerTwo.active && !playerOne.active){
        playerTwo.active = false;
        playerOne.active = true;
        switchActivePlayerCSS(playerOne,playerTwo);
    }
}

function getActivePlayer(){
    let player;
    if(playerOne.active && !playerTwo.active){
        player = playerOne;
    }else if(playerTwo.active && !playerOne.active){
        player = playerTwo;
    }
    return player;
}

function switchActivePlayerCSS(activePlayer,inactivePlayer){
    activePlayer.panel.classList.add("active");
    inactivePlayer.panel.classList.remove("active");
}

function removeWinningPlayerCSS(){
    playerOne.panel.classList.remove("winner");
    playerTwo.panel.classList.remove("winner");
}
