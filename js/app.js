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

console.log(squareEls)
// console.log(messageEl)

/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('.board').addEventListener('click', handleClick)

// ******  can't add event listener to HTML collection  ******
// squareEls.addEventListener("click", handleClick)
// board.addEventListener("click", handleClick)

/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  // console.log('test')
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
}



function render(){
  board.forEach(function(square, index){
    if(square === 1) {
      squareEls[index].textContent = 'X'
    } else if (square === -1) {
      squareEls[index].textContent = 'O'
    } else {
      squareEls[index].textContent = ''
    }
  })
    if (winner === null) {
      messageEl.textContent = `It is player ${turn}'s turn!`
    } else if (winner === 'T') {
      messageEl.textContent = `It's a tie!`
    } else {
      messageEl.textContent = `Player ${winner} won!`
  }
}



// if (board[i]) {

// }

function handleClick(evt) {
  let sqIdx = parseInt(evt.target.id.slice(2))
  
  console.log(sqIdx)
  
  if(board[sqIdx] !== null) {
    return
  } 

  if (winner !== null) {
    return
  }

  board[sqIdx] = turn

  console.log(board)
  // board.splice(sqIdx, 1, turn)

  // turn = turn*(-1)
  // getWinner()
  // render()
}

// function getWinner() {

//   winnerCombos.forEach(function(element,))

// }



// let sqIdx = parseInt(evt.target.id.replace('sq',''));

// let sqIdx = parseInt(evt.target.id.replace('sq',''));
//   if (board[sqIdx] !== 'null') return;
//   getWinner();
//   render(squareIdx);



// Step 6 - Handle a player clicking a square with a `handleClick` function

  // a) Create a function called `handleClick`. It will have an `evt` parameter.

  // b) Attach an event listener to the game board. On the `'click'` event, it 
  //    should call the `handleClick` function you created in 6a.

  // c) Obtain the index of the square that was clicked by "extracting" the 
  //    index from an `id` assigned to the element in the HTML. Assign this to 
  //    a constant called `sqIdx`.

  // d) If the `board` has a value at the `sqIdx`, immediately `return` because 
  //    that square is already taken. Also, if `winner` is not `null`
  //    immediately `return` because the game is over.

  // e) Update the `board` array at the `sqIdx` with the current value of
  //    `turn`.

  // f) Change the turn by multiplying `turn` by `-1` (this flips a `1` to
  //    `-1`, and vice-versa).

  // g) Set the `winner` variable if there's a winner by calling a new 
  //    function: `getWinner`.

  // h) All the state has been updated so we need to render our updated state 
  //    to the user by calling the `render` function we wrote earlier.

// Step 7 - Build the `getWinner` function

  // a) Create a function called `getWinner`

  /* 
   * There are two methods you can use to find out if there is a winner.
   *
   * Step b1 below is a more elegant method that takes advantage of the
   * `winningCombos` array you wrote above in step 5. 
   *
   * Step b2 might be a little simpler to comprehend, but you'll need to write  
   * more code. Step b2 also won't take advantage of the `winningCombos`
   * array, but using it as a reference will help you build a solution.
   * ***Ensure you choose only one path.***
   */

  // b1) Loop through each of the winning combination arrays defined in the 
  //     `winningCombos` array. Total up the three board positions using the 
  //     three indexes in the current combo. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at
  //     the index specified by the first index of that winning combination's
  //     array by returning that value.

  // b2) For each one of the winning combinations you wrote in step 5, find the
  //     total of each winning combination. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at 
  //     the index specified by the first index of that winning combination's 
  //     array by returning that value.

  // c) If there is no winner, check to see if there is a tie. Set the `winner` 
  //    variable to `'T'` if there are no more nulls in the board array by 
  //    returning the string `'T'`.

  // d) If there is no winner and there isn’t a tie, return `null`.

// Step 8 - Create Reset functionality

  // a) Add a reset button to the HTML document.

  // b) Store the new reset button element in a constant named `resetBtnEl`.

  // c) Attach an event listener to the `resetBtnEl`. On the `'click'` event it 
  //should call the `init` function you created in 3.