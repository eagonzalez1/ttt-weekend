/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.square')
const messageEl = document.querySelector("#message")
const resetBtnEl = document.querySelector("#resetBtn")

/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('.board').addEventListener('click', handleClick)
resetBtnEl.addEventListener("click", init)

// ******  can't add event listener to HTML collection  ******
// squareEls.addEventListener("click", handleClick)
// board.addEventListener("click", handleClick)

/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
}

function render(){
  board.forEach(function(square, index){
    if(square === 1) {
      squareEls[index].textContent = '📼'
    } else if (square === -1) {
      squareEls[index].textContent = '🛼'
    } else {
      squareEls[index].textContent = ''
    }
  })
    if (turn === 1 && winner === null) {
      messageEl.textContent = `It's 📼's turn!`
    } else if (turn === -1 && winner === null) {
      messageEl.textContent = `It's 🛼's turn!`
    }
    else if (winner === 1) {
      messageEl.textContent = `Player 📼 won!!! 🥳`
    } 
    else if (winner === -1) {
      messageEl.textContent = `Player 🛼 won!!! 🎉 😃`
    } 
    else if (winner === 'T') {
      messageEl.textContent = `The 80's called ☎️, they want their tie back!! 🙄`
    }
}

function handleClick(evt) {
  let sqIdx = parseInt(evt.target.id.slice(2))  
  // console.log(sqIdx)
  if(board[sqIdx] !== null) {
    return
  } 
  if (winner !== null) {
    return
  }
  board[sqIdx] = turn
  turn = turn*(-1)
  getWinner()
  render()
}

// I wasn't able to fully understand the instructions for the getWinner looping function over the winningCombos array, and saw this method used in one of the examples provided. I know there's a more efficient way to figure out the winner, but had to brute force it this way.
  function getWinner() {
    const tieGame = board.every((square) => {
      return square !== null
    })
    if (tieGame === true) {
      winner = 'T'
    }

//     // we can do:
// winningCombos.forEach(combo => {
//   if( board[combo[0]] + board[combo[1]] + board[combo[2]])  === 3 ) { ... } 
// }

    if (board[0]+board[1]+board[2] === 3 ||  
        board[3]+board[4]+board[5] === 3 ||  
        board[6]+board[7]+board[8] === 3 ||  
        board[0]+board[3]+board[6] === 3 ||  
        board[1]+board[4]+board[7] === 3 ||  
        board[2]+board[5]+board[8] === 3 ||  
        board[0]+board[4]+board[8] === 3 ||  
        board[2]+board[4]+board[6] === 3) {
          winner = 1
}   
    if (board[0]+board[1]+board[2] === -3 ||  
        board[3]+board[4]+board[5] === -3 ||  
        board[6]+board[7]+board[8] === -3 ||  
        board[0]+board[3]+board[6] === -3 ||  
        board[1]+board[4]+board[7] === -3 ||  
        board[2]+board[5]+board[8] === -3 ||  
        board[0]+board[4]+board[8] === -3 ||  
        board[2]+board[4]+board[6] === -3) {
          winner = -1
}   
}

// // we can do:
// winningCombos.forEach(combo => {
//   if( board[combo[0]] + board[combo[1]] + board[combo[2]])  === 3 ) { ... } 
// }

