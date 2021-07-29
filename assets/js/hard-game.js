/* Bug fix: solved jshint errors by including the following line */
/* jshint esversion: 6 */

// Variables for hard mode of game
const hardGameGrid = document.querySelector('#board');
var hardCardsSelected = [];
var hardCardsSelectedId = [];
var hardCardsRight = [];

document.getElementById('hard-button').addEventListener('click', startHardGame);

function startHardGame() {
    displayGame();
    createHardBoard();
    document.getElementById('reset').addEventListener('click', resetHardGame);
    counter.innerHTML = `0`;
    /* Bug fix: By placing setInterval within a function that's called upon game loading
    the timer doesn't automatically start when the page is loaded, affecting game play */
    setInterval(setTimer, 1200);
}

// Array of objects to be injected into the DOM. 
// This array is what the cards for the moderate & easy modes are based on
const fruitCardsHard = [
    { name: 'banana', img: './assets/images/fruit-one-banana.png', },
    { name: 'banana', img: './assets/images/fruit-one-banana.png', },
    { name: 'orange', img: './assets/images/fruit-two-orange.png', },
    { name: 'orange', img: './assets/images/fruit-two-orange.png', },
    { name: 'watermelon', img: './assets/images/fruit-three-watermelon.png', },
    { name: 'watermelon', img: './assets/images/fruit-three-watermelon.png', },
    { name: 'avocado', img: './assets/images/fruit-four-avocado.png', },
    { name: 'avocado', img: './assets/images/fruit-four-avocado.png', },
    { name: 'bluberry', img: './assets/images/fruit-five-blueberry.png', },
    { name: 'bluberry', img: './assets/images/fruit-five-blueberry.png', },
    { name: 'lime', img: './assets/images/fruit-six-lime.png', },
    { name: 'lime', img: './assets/images/fruit-six-lime.png', },
    { name: 'pineapple', img: './assets/images/fruit-seven-pineapple.png', },
    { name: 'pineapple', img: './assets/images/fruit-seven-pineapple.png', },
    { name: 'fig', img: './assets/images/fruit-eight-fig.png', },
    { name: 'fig', img: './assets/images/fruit-eight-fig.png', },
    { name: 'apple', img: './assets/images/fruit-nine-apple.png', },
    { name: 'apple', img: './assets/images/fruit-nine-apple.png', },
];

// Creates game board. Credit: Ania Kubow.
function createHardBoard() {
    fruitCardsHard.sort(() => 0.5 - Math.random());
    for (let i = 0; i < fruitCardsHard.length; i++) {
        var hardCard = document.createElement('img');
        hardCard.setAttribute('src', './assets/images/fruit-card-back.png');
        hardCard.setAttribute('data-id', i);
        hardCard.setAttribute('alt', 'Card back, select to flip over');
        hardCard.classList.add('col-4', 'col-lg-2', 'fruitHardCard');
        hardCard.addEventListener('click', flipHardCard);
        hardGameGrid.appendChild(hardCard);
    }
}

// Reveals front card faces and calls function to check for a match
function flipHardCard() {
    var hardCardId = this.getAttribute('data-id');
    hardCardsSelected.push(fruitCardsHard[hardCardId].name);
    hardCardsSelectedId.push(hardCardId);
    // Add alt text to make sure screen reader users can also play the game
    this.setAttribute('alt', fruitCardsHard[hardCardId].name);
    this.setAttribute('src', fruitCardsHard[hardCardId].img);
    if (hardCardsSelected.length === 2) {
        setTimeout(checkHardMatch, 300);
    }
}

// Check for a match
function checkHardMatch() {
    var hardCards = document.querySelectorAll('img');
    const hardCardOneId = hardCardsSelectedId[0];
    const hardCardTwoId = hardCardsSelectedId[1];
    if (hardCardsSelected[0] === hardCardsSelected[1]) {
        hardCardsRight.push(hardCardsSelected);
        // Moves the counter
        moveCounter();
        // Gives feedback to user that they found a match
        hardCards[hardCardOneId].classList.add('match');
        hardCards[hardCardTwoId].classList.add('match');
    } else {
        hardCards[hardCardOneId].setAttribute('src', './assets/images/fruit-card-back.png');
        hardCards[hardCardTwoId].setAttribute('src', './assets/images/fruit-card-back.png');
        hardCards[hardCardOneId].setAttribute('alt', 'Card back, select to flip over');
        hardCards[hardCardTwoId].setAttribute('alt', 'Card back, select to flip over');
        moveCounter();
    }
    hardCardsSelected = [];
    hardCardsSelectedId =[];
    resultDisplay.textContent = hardCardsRight.length;
    if (hardCardsRight.length === fruitCardsHard.length/2) {
        alert('Yay, you found them all! Play again to beat your time or return home to try another difficulty.');
        resetHardGame();
    }
}

// Resets game
function resetHardGame() {
    hardCardsSelected = [];
    hardCardsSelectedId = [];
    hardCardsRight = [];
    hardCards = document.querySelectorAll('img');
    fruitCardsHard.sort(() => 0.5 - Math.random());
    hardCards.forEach((c) => {
        c.setAttribute('src', './assets/images/fruit-card-back.png');
        // Removes correct match feedback to users
        c.classList.remove('match');
    });
    resultDisplay.textContent = `0`;
    counter.innerHTML = `0`;
    resetTimer();
}
