const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'

// Storing Winning combinations
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')

const playerType = prompt('Type player2 mode (H-human, C-computer): ');

// decalriing variable to change it further
let circleTurn

// Initializing game calling the function 'startGame()'
startGame()

function startGame() {
  // Keeping the variable circleTurn false
  circleTurn = false
  // iteration over all the cells of the board
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)  // Removes previously alloted class 
    cell.classList.remove(CIRCLE_CLASS) 
    
    // Event removal to every cell onclick
    cell.removeEventListener('click', handleClick) 

    // Event addition to every cell onclick
    cell.addEventListener('click', handleClick, {once: true})
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

// OnClicking a cell handlelick function will be triggered
function handleClick(e) {
  const cell = e.target // stores the information of clicked cell
  let currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS 
  placeMark(cell, currentClass) // function to mark the selected cell

  // After every mark Display checkWin() function will check for the winning combination
  if (checkWin(currentClass)) {
    // if checkWin() function returns true that means we have found winning combination,
    // after that we will end the game using endGame() function
    endGame(false)
    // if There is no WINNING_COMBINATION isDraw() function will be triggered to check for draw
  } else if (isDraw()) {
    endGame(true)
    // if there is no winning combination or draw combination the game will be carried out forward
  } else {
    swapTurns()
    if (playerType === 'C') {
      player2Name.innerHTML = 'Computer : '
      computer(currentClass)
    }
    setBoardHoverClass()
  }
}

// placeMark function will change the class of the selected cell, which will gives the style to the element to display X or O
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

// compares the every WINNING_COMBINATIONS to the current placedMarkes to get the winner 
function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      // only for every true return statement it will return true
      return cellElements[index].classList.contains(currentClass)
    })
  })
}

// isDraw() checks for the every cell and no winnig combination found then it returns true
function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!'
    drawCount.innerHTML++
    gamePlayed.innerHTML++ 
  } else {
    // this section if only triggered when there is a winning combination found
    winningMessageTextElement.innerText = `${circleTurn ? `${player2Name.innerHTML}` : `${player1Name.innerHTML}`} Wins!`
    gamePlayed.innerHTML++  
    if (circleTurn) {
      player2Score.innerHTML++;
    }
    else {
      player1Score.innerHTML++;
    }
  }
  winningMessageElement.classList.add('show')
}

// swaps The turn
function swapTurns() {
  circleTurn = !circleTurn
}


function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}



function computer(currentClass){
  currentClass = CIRCLE_CLASS
  console.log(currentClass)
  const emptyCell = []
  cellElements.forEach((cell,index)=> {
    if (cell.className === 'cell') {
      emptyCell.push(index) 
    }
  })
  const random = emptyCell[Math.ceil(Math.random() * emptyCell.length) - 1]
  cellElements[random].classList.add(CIRCLE_CLASS);
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
  swapTurns()
  }
}

restartButton.addEventListener('click', startGame)

// Player Name change

const player1Name = document.querySelector('.player1Name');
const player2Name = document.querySelector('.player2Name');
player1Name.addEventListener('click', changeName);
player2Name.addEventListener('click', changeName);

function changeName(e) {
  console.log(e.target.className)
  if (e.target.className == 'player1Name') {
    const Name = prompt(`Enter player1 Name: `);
    player1Name.innerHTML = `${Name} : `;
  }

  if (e.target.className == 'player2Name') {
    const Name = prompt(`Enter player2 Name: `);
    player2Name.innerHTML = `${Name} : `;
  }
}

//Player Score Change 

const player1Score = document.querySelector('.player1Score')
const player2Score = document.querySelector('.player2Score')

// Game Played and Draw count
const gamePlayed = document.querySelector('.gamePlayedCount');
const drawCount = document.querySelector('.drawCount');
