
const choices = document.querySelectorAll('.choice');
const choices2sel = document.querySelectorAll('.choice1')
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const player1Name = document.getElementById('player1_name')
const player2Name = document.getElementById('player2_name')
const player1Score = document.getElementById('player1_score')
const player2Score = document.getElementById('player2_score')



// Computer As A Player
function play(e){
    restart.style.display = 'inline-block';
    const player1Choice = e.target.id;
    const player2Choice = selectionPlayer2();
    const winner = getWinner(player1Choice, player2Choice);
    showWinner(winner, player2Choice);
    // console.log(player1Choice, player2Choice, winner)
}

// get computer's choice
function getComputerChoice(){
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock';
    } else if(rand <= 0.57){
        return 'paper';
    } else {
        return 'scissors';
    }
}

// get Player@ Choice
function getPlayer2Choice(){
    
}



//Get game winner
function getWinner(p, c){
    if(p === c) {
        return 'draw';
    } else if(p === 'rock'){    
        if (c === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if(p === 'paper'){
        if(c === 'scissors'){
            return 'computer';
        } else {
            return 'player';
        }
    } else if(p === 'scissors'){
        if(c === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}
function showWinner(winner, player2Choice){
    if (winner === 'player'){
        //Inc player score
        player1Score.innerHTML++;
        result.innerHTML = `<h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${player2Choice} fa-10x"></i>
        <p>Computer chose <strong>${player2Choice.charAt(0).toUpperCase()+ player2Choice.slice(1)}</strong></p>
        `;
    } else if(winner === 'computer'){
        //inc computer score
        player2Score.innerHTML++;
        //show modal result
        result.innerHTML = `<h1 class="text-lose">You lose</h1>
        <i class="fas fa-hand-${player2Choice} fa-10x"></i>
        <p>Computer chose <strong>${player2Choice.charAt(0).toUpperCase()+ player2Choice.slice(1)}</strong></p>
        `;
    } else{
        result.innerHTML = `<h1>It's A Draw</h1>
        <i class="fas fa-hand-${player2Choice} fa-10x"></i>
        <p>Computer chose <strong>${player2Choice.charAt(0).toUpperCase()+ player2Choice.slice(1)}</strong></p>
        `;
    }
    //show score
    score.innerHTML = `
    <p><span id="player1_name">${player1Name.innerHTML}</span>: <span id="player1_score">${player1Score.innerHTML}</span></p>
    <p><span id="player2_name">${player2Name.options[player2Name.selectedIndex].value}</span>: <span id="player2_score">${player2Score.innerHTML}</span></p>
    `;

    modal.style.display = 'block';
}
//Restart Game
function restartGame(){
    player1Score.innerHTML = 0;
    player2Score.innerHTML = 0;
    player1Name.innerHTML  = 'Player';
    player2Name.innerHTML = 'Computer';
    score.innerHTML = 
    `<p><span id="player1_name">${player1Name.innerHTML}</span>: <span id="player1_score">${player1Score.innerHTML}</span></p>
    <p><span id="player2_name">${player2Name.innerHTML}</span>: <span id="player2_score">${player2Score.innerHTML}</span></p>`;
    restart.style.display = 'none' 
}

function selectionPlayer2(){
    var selectedValue = player2Name.options[player2Name.selectedIndex].value;
    if(selectedValue == "Computer") {
       return getComputerChoice();
    }
 
}

//clear modal
function clearModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

function changeName() {
    const userName = prompt("enter your name: ");
    player1Name.innerHTML = userName;
}

//Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
player1Name.addEventListener('click', changeName);