
let board = '';
let cardValue = '';
let firstCardId = '';
let firstCard = '';
let secondCardId = '';
let correctCount = 0;
let incorrectCount = 10;
let cardLocation = '';

board = [
  'guitar', 
  'drums', 
  'bass', 
  'keyboard', 
  'mic', 
  'sax', 
  'drums', 
  'sax', 
  'keyboard', 
  'mic', 
  'guitar', 
  'trumpet', 
  'fiddle', 
  'bass', 
  'fiddle', 
  'trumpet'
];

const cards = document.querySelectorAll('.card');
const correctCountEl = document.querySelector('#correctCount');
const incorrectCountEl = document.querySelector('#incorrectCount');
const resetButtonEl = document.querySelector('.reset');

const populateBoard = (board) => {
  cards.forEach((card, index) => {
    card.id = board[index];
  });
}


window.onload = populateBoard(board);
correctCountEl.textContent = correctCount;
incorrectCountEl.textContent = incorrectCount;


const removeCard = (card) => {
  setTimeout(() => {
    firstCard.style.visibility = 'hidden';
    secondCard.style.visibility = 'hidden';
     firstCardId = '';
     secondCardId = '';
  }, 1000);
}


const compare = () => {
  if (firstCardId === secondCardId) {
    correctCount += 1;
    console.log('Match!');
    correctCountEl.textContent = correctCount;
    removeCard();
  } else {
    console.log('incorrect');
    incorrectCount -= 1;
    incorrectCountEl.textContent = incorrectCount;
    firstCardId = '';
    secondCardId = '';
  }
};


cards.forEach((card, index) => {
    card.addEventListener('click', (event) => {
      cardValue = event.target.id; 
        if (card === firstCard) {
          return;
        }
        if (!firstCardId) {
        firstCardId = cardValue;
        firstCard = card;
        console.log(`first, ${firstCardId}`);
      } else if (!secondCardId) {
        secondCardId = cardValue;
        secondCard = card;
        console.log(`second, ${secondCardId}`);
        compare();
      }
   });
})


const resetGame = () => {
  cards.forEach((card) => {
    card.style.visibility = 'visible';
  })
  firstCardId = '';
  secondCardId = '';
  correctCount = 0;
  incorrectCount = 10;
  populateBoard(board);
}


resetButtonEl.addEventListener('click', (event) => {
     resetGame();
});
//---------------------------------------------------------------------------
/*timerEl = document.querySelector('.timer');

function init() {
  // model - bindings: variables, DOM references, other values related to application state 
  let interval;
  let count = 180
  let base = 1000

  //view - applications where the UI is updated / provided current data
  function renderNum(num) {
    timerEl.textContent = num;
    //console.log(`${num}`)
  }

  //controller - application logic (event listeners )
  function increment(value, step) {
    return value += step
  }

  interval = setInterval(() => {

    // display content
    renderNum(count)

    // update         
    count = increment(count, -1)

    if (count <= 0) {
      // game over state
      clearInterval(interval)
    }

  }, base)
  // setInterval(function, number)
  // function - anonymous
  // number - interger (in milliseconds)
}

init()*/
