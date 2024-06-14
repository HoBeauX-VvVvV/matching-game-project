let board = '';
let cardValue = '';
let firstCardId = '';
let firstCard = '';
let secondCardId = '';
let correctCount = 0;
let incorrectCount = 10;
let cardLocation = '';
let frozenBoard = false;
let isFirstClick = true;
let interval;
let count = 119

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

const cards = document.querySelectorAll('div');
const correctCountEl = document.querySelector('#correctCount');
const incorrectCountEl = document.querySelector('#incorrectCount');
const resetButtonEl = document.querySelector('.reset');


const populateBoard = (board) => {
  cards.forEach((card, index) => {
    card.id = board[index];
    card.textContent = board[index];
  });
}


window.onload = populateBoard(board);
correctCountEl.textContent = `Matches: ${correctCount}`;
incorrectCountEl.textContent = `Misses: ${incorrectCount}`;


const removeCard = (card) => {
  setTimeout(() => {
    firstCard.style.visibility = 'hidden';
    secondCard.style.visibility = 'hidden';
     firstCardId = '';
     secondCardId = '';
  }, 50);
}

const resetCard = (card) => {
  setTimeout(() => {
  firstCard.classList.remove('show');
  secondCard.classList.remove('show');
  }, 350);
}


const compare = () => {
  if (firstCardId === secondCardId) {
    correctCount += 1;
    console.log('Match!');
    correctCountEl.textContent = `Matches: ${correctCount}`;
    removeCard();
    checkForWin();
  } else {
    console.log('incorrect');
    incorrectCount -= 1;
    incorrectCountEl.textContent = `Misses: ${incorrectCount}`;
    checkForWin();
    resetCard();
    firstCardId = '';
    secondCardId = '';
  }
};


cards.forEach((card, index) => {
    card.addEventListener('click', (event) => {
      if (frozenBoard) return;
      card.classList.add('show');
      if (isFirstClick) {
        init();
        isFirstClick = false;
       
      }
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
    card.classList.remove('show');
  })
  firstCardId = '';
  secondCardId = '';
  timerEl.textContent = 'Time left 2:00'
  correctCount = 0;
  correctCountEl.textContent = `Matches: ${correctCount}`;
  incorrectCount = 10;
  incorrectCountEl.textContent = `Misses: ${incorrectCount}`;
  isFirstClick = true;
  //populateBoard(board);
}


const checkForWin = () => {
   if (correctCount === 8) {
    stopTimer();
    correctCountEl.textContent = `You won the game!`
  } 
   if (incorrectCount === 0) {
    frozenBoard = true;
    stopTimer();
    incorrectCountEl.textContent = "You've lost";
  }
};


resetButtonEl.addEventListener('click', (event) => {
     resetGame();
     stopTimer();
});
//---------------------------------------------------------------------------
timerEl = document.querySelector('.timer');

function init() {
  
  let base = 1000

  function renderNum(num) {
    const minutes = Math.floor(num / 60);
    const seconds = num % 60;
    const formattedTime = `Time left ${minutes}:${seconds}`;
    timerEl.textContent = formattedTime;
  }
  function increment(value, step) {
    return value += step
  }
  interval = setInterval(() => {
    renderNum(count)       
    count = increment(count, -1)
    if (count <= 0) {
      frozenBoard = true;
      correctCountEl.textContent =`Time's up!`
      timerEl.textContent = `Time left 0:00`
      clearInterval(interval)
    }
  }, base)
}

const stopTimer = () => {
  clearInterval(interval);
};