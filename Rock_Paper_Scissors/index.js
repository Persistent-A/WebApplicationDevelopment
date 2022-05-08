
const choose = document.querySelectorAll('.choice');
const choices2sel = document.querySelectorAll('.choices')
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const player1Name = document.querySelector('#player1_name')
const player2Name = document.querySelector('#player2_name')
const player1Score = document.querySelector('#player1_score')
const player2Score = document.querySelector('#player2_score')
let numberOfDraw = 0;

// Computer As A Player
function play(e){
    restart.style.display = 'inline-block';
    const player1Choice = e.target.id;
    const player2Choice = selectionPlayer2();
    const winner = getWinner(player1Choice, player2Choice);
    showWinner(winner, player2Choice);
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

function getPlayer2Choice(){


}

//Get game winner
function getWinner(p, c){
    if(c === undefined){
        return false;
    } else if(p === c) {
        numberOfDraw++;
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
        result.innerHTML = `<h3>Number of Draw: ${numberOfDraw}</h3>
        <h3 class="text-win">You Win</h1>
        <i class="fas fa-hand-${player2Choice} fa-4x"></i>
        <p>Computer chose <strong>${player2Choice.charAt(0).toUpperCase()+ player2Choice.slice(1)}</strong></p>
        `;
    } else if(winner === 'computer'){
        //inc computer score
        player2Score.innerHTML++;
        //show modal result
        result.innerHTML = `<h3>Number of Draw: ${numberOfDraw}</h3>
        <h3 class="text-lose">You lose</h1>
        <i class="fas fa-hand-${player2Choice} fa-4x"></i>
        <p>Computer chose <strong>${player2Choice.charAt(0).toUpperCase()+ player2Choice.slice(1)}</strong></p>
        `;
    } //else if(winner === 'player2'){
    //     player2Score.innerHTML++;
    //     result.innerHTML = `<h3>Number of Draw: ${numberOfDraw}</h3>
    //     <h3 class="text-lose">You lose</h1>
    //     <i class="fas fa-hand-${player2Choice} fa-4x"></i>
    //     <p>Computer chose <strong>${player2Choice.charAt(0).toUpperCase()+ player2Choice.slice(1)}</strong></p>
    //     `;
    // }
    
    else{
        result.innerHTML = `<h3>Number of Draw: ${numberOfDraw}</h3>
        <h3>It's A Draw</h1>
        <i class="fas fa-hand-${player2Choice} fa-4x"></i>
        <p>Computer chose <strong>${player2Choice.charAt(0).toUpperCase()+ player2Choice.slice(1)}</strong></p>
        `;
    }
    //show score
    score.innerHTML = `
    <p><span id="player1_name">${player1Name.innerHTML}</span>: <span id="player1_score">${player1Score.innerHTML}</span></p>
    <p><span id="player2_name">${player2Name.options[player2Name.selectedIndex].value}</span>: <span id="player2_score">${player2Score.innerHTML}</span></p>
    `;

    modal.style.display = 'flex';
}

//Restart Game
function restartGame(){
    numberOfDraw = 0;
    player1Score.innerHTML = 0;
    player2Score.innerHTML = 0;
    score.innerHTML = `
    <p>
        <span id="player1_name">Player1</span>
        : 
        <span id="player1_score">0</span>
    </p>
    <p>
        <select id="player2_name">
            <option value="notSelected">--Please choose the player--</option>
            <option value="Computer">Computer</option>
            <option value="Player2">Player2</option>
        </select>  
        : 
        <span id="player2_score">0</span>
    </p>`;
    
    restart.style.display = 'none';  
    modal.style.display = 'none';  
}

function selectionPlayer2(){
    const selectedValue = player2Name.options[player2Name.selectedIndex].value;
    console.log(player2Name.value)
    console.log(selectedValue)
    if(selectedValue === "Computer") {
       return getComputerChoice();
    }else if(selectedValue === 'player2') {
        return getPlayer2Choice();
    }else if (selectedValue === 'notSelected'){
        alert("Please select another player")
        restart.style.display = 'none'; 
    }
}

function displayPlayer2Images(){
    
}
function changeName() {
    const userName = prompt("enter your name: ");
    if (userName === ''){
        player1Name.addEventListener('click', changeName);
    }else{ 
        player1Name.innerHTML = userName;
    }
}

//Event listeners
choose.forEach(choice => choice.addEventListener('click', play));
restart.addEventListener('click', restartGame);
player1Name.addEventListener('click', changeName);
player2Name.value.addEventListener('change', displayPlayer2Images)

