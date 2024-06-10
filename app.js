const cards = document.querySelectorAll('.card');
let board = '';
let firstCardId = '';
let secondCardId = '';

board = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

cards.forEach((card) => {
    card.addEventListener('click', (event) => {
        if (!firstCardId) {
        firstCardId = event.target.id;
        console.log(`first, ${firstCardId}`);
      } else if (!secondCardId) {
        secondCardId = event.target.id;
        console.log(`second, ${secondCardId}`);
      }
    });
})
