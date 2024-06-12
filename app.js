
let board = '';
let cardValue = '';
let firstCardId = '';
let firstCard = '';
let secondCardId = '';
let correctCount = 0;
let incorrectCount = 0;
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


const populateBoard = (board) => {
  cards.forEach((card, index) => {
    card.id = board[index];
   // console.log(card.id);
  });
}
window.onload = populateBoard(board);

const removeCard = (card) => {
    firstCard.style.visibility = 'hidden';
    secondCard.style.visibility = 'hidden';
     firstCardId = '';
     secondCardId = '';
}

const compare = () => {
  if (firstCardId === secondCardId) {
    correctCount += 1;
    console.log('Match!');
    correctCountEl.textContent = correctCount;
    removeCard();
  } else {
    console.log('incorrect');
    incorrectCount += 1;
    incorrectCountEl.textContent = incorrectCount;
    firstCardId = '';
    secondCardId = '';
  }
};

cards.forEach((card, index) => {
    card.addEventListener('click', (event) => {
      cardValue = event.target.id;
      //cardLocation = board[index]; 
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
