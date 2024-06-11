const cards = document.querySelectorAll('.card');
let board = '';
let firstCardId = '';
let firstCard = '';
let secondCardId = '';
let scoreCount = 0;
let IncorrectCount = 0;

board = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

cards.forEach((card) => {
    card.addEventListener('click', (event) => {
        if (card === firstCard) {
          return;
        }
        if (!firstCardId) {
        firstCardId = event.target.id;
        firstCard = card;
        console.log(`first, ${firstCardId}`);
      } else if (!secondCardId) {
        secondCardId = event.target.id;
        console.log(`second, ${secondCardId}`);
      }
   });
})


//---------------------------------------------------------------------------
timerEl = document.querySelector('.timer');

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

init()
