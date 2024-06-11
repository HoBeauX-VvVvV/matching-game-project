
let board = '';
let cardIndex = '';
let firstCardId = '';
let firstCard = '';
let secondCardId = '';
let scoreCount = 0;
let IncorrectCount = 0;

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

const populateBoard = (board) => {
  cards.forEach((card, index) => {
    card.id = board[index];
  });
}
populateBoard(board);

const compare = () => {
  if (firstCardId === secondCardId) {
    console.log('Match!');
    firstCardId = '';
    secondCardId = '';
  } else {
    console.log('incorrect');
    firstCardId = '';
    secondCardId = '';
  }
};

cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      cardIndex = event.target.id;
        if (card === firstCard) {
          return;
        }
        if (!firstCardId) {
        firstCardId = cardIndex;
        firstCard = card;
        console.log(`first, ${firstCardId}`);
      } else if (!secondCardId) {
        secondCardId = cardIndex;
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
