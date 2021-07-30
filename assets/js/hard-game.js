/* Bug fix: solved jshint errors by including the following line */
/* jshint esversion: 6 */

// Variables for hard mode of game
const hardGameGrid = document.querySelector('#board');
var hardCardsSelected = [];
var hardCardsSelectedId = [];
var hardCardsRight = [];

document.getElementById('hard-button').addEventListener('click', startHardGame);

// Unique start up function for hard mode of the game
function startHardGame() {
    displayGame();
    createHardBoard();
    document.getElementById('reset').addEventListener('click', resetHardGame);
    counter.innerHTML = `0`;
    resultDisplay.innerHTML = `0`;
    /* Bug fix: By placing setInterval within a function that's called upon game loading
    the timer doesn't automatically start when the page is loaded, affecting game play */
    setInterval(setTimer, 1200);
}

// Array of objects to be injected into the DOM. 
// This array is what the cards for the moderate & easy modes are based on using the .slice method
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
    // Bug fix: To prevent more than 2 cards being tested at the same time the array length is limited. Credit: Stack overflow, see credits in README.md for more details
    hardCardsSelected.length = Math.min(hardCardsSelected.length, 2);
}

// Check for a match. Credit: Ania Kubrow
function checkHardMatch() {
    var hardCards = document.querySelectorAll('img');
    const hardCardOneId = hardCardsSelectedId[0];
    const hardCardTwoId = hardCardsSelectedId[1];
    // Bug fix: test easyCardsSelected for true equality, not easyCardsSelectedId
    /* Bug fix: test for both match between data names and make sure ids don't match 
     to make sure users cannot pick the same card twice to count as a match */
    if (hardCardsSelected[0] === hardCardsSelected[1] && hardCardOneId !== hardCardTwoId) {
        hardCardsRight.push(hardCardsSelected);
        // Moves the counter
        moveCounter();
        // Bug fix: Remove event listener from selected cards to prevent users
        // cheating by clicking the same pair more than once
        hardCards[hardCardOneId].removeEventListener("click", flipHardCard);
        hardCards[hardCardTwoId].removeEventListener("click", flipHardCard);
        // Gives feedback to user that they found a match
        hardCards[hardCardOneId].classList.add('match');
        hardCards[hardCardTwoId].classList.add('match');
    } else {
        hardCards[hardCardOneId].setAttribute('src', './assets/images/fruit-card-back.png');
        hardCards[hardCardTwoId].setAttribute('src', './assets/images/fruit-card-back.png');
        /* Reverts alt for card images back to blank if not a match
        This prevents cheating the game by looking at the alt tags */
        hardCards[hardCardOneId].setAttribute('alt', 'Card back, select to flip over');
        hardCards[hardCardTwoId].setAttribute('alt', 'Card back, select to flip over');
        moveCounter();
    }
    // Resets array of cards
    hardCardsSelected = [];
    hardCardsSelectedId =[];
    resultDisplay.textContent = hardCardsRight.length;
    if (hardCardsRight.length === fruitCardsHard.length/2) {
        /* Bug fix: call function that makes cards img
        back to the original back after 200 miliseconds
        so the user has time to view the final matched car */
        setTimeout(correctHardMatch, 200); 
    }
}

function correctHardMatch() {
    alert('Yay, you found them all! Play again to beat your time or return home to try another difficulty.');
    resetHardGame();
}

// Resets hard game
function resetHardGame() {
    hardCardsSelected = [];
    hardCardsSelectedId = [];
    hardCardsRight = [];
    hardCards = document.querySelectorAll('img');
    fruitCardsHard.sort(() => 0.5 - Math.random());
    hardCards.forEach((c) => {
        c.setAttribute('src', './assets/images/fruit-card-back.png');
        c.addEventListener('click', flipHardCard);
        // Removes correct match feedback to users
        c.classList.remove('match');
    });
    resultDisplay.textContent = `0`;
    counter.innerHTML = `0`;
    resetTimer();
}
