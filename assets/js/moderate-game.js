/* Bug fix: solved jshint errors by including the following line */
/* jshint esversion: 6 */

// Variables for moderate game
const modGameGrid = document.querySelector('#board');
var modCardsSelected = [];
var modCardsSelectedId = [];
var modCardsRight = [];document.getElementById('moderate-button').addEventListener('click', startModerateGame);

// Unique start up function for moderate mode of the game
function startModerateGame() {
    displayGame();
    createModBoard();
    document.getElementById('reset').addEventListener('click', resetModGame);
    counter.innerHTML = `0`;
    resultDisplay.innerHTML = `0`;
    /* Bug fix: By placing setInterval within a function that's called upon game loading
    the timer doesn't automatically start when the page is loaded, affecting game play */
    setInterval(setTimer, 1200);
}

const fruitCardsModerate = fruitCardsHard.slice(0,12);

// Creates game board. Credit: Ania Kubow.
function createModBoard() {
    /* Bug fix: .sort function (shuffles array) has to 
    be called within a seperate function to allow
    .slice method in fruitCardsEasy to work */
    // Credit for .sort method of shuffling: Marina Ferreira
    fruitCardsModerate.sort(() => 0.5 - Math.random());
    for (let i = 0; i < fruitCardsModerate.length; i++) {
        var modCard = document.createElement('img');
        modCard.setAttribute('src', './assets/images/fruit-card-back.png');
        modCard.setAttribute('data-id', i);
        // Add alt text to make sure screen reader users can also play the game
        modCard.setAttribute('alt', 'Card back, select to flip over');
        modCard.classList.add('col-4', 'col-lg-2', 'fruitModCard');
        modCard.addEventListener('click', flipModCard);
        modGameGrid.appendChild(modCard);
    }
}

// Reveals front card faces and calls function to check for a match
function flipModCard() {
    var modCardId = this.getAttribute('data-id');
    modCardsSelected.push(fruitCardsModerate[modCardId].name);
    modCardsSelectedId.push(modCardId);
    this.setAttribute('alt', fruitCardsModerate[modCardId].name);
    this.setAttribute('src', fruitCardsModerate[modCardId].img);
    if (modCardsSelected.length === 2) {
        checkMatch(); 
    } else if (modCardsSelected.length > 2) {
        this.setAttribute('src', './assets/images/fruit-card-back.png');
    }
    // Bug fix: To prevent more than 2 cards being tested at the same time the array length is limited. Credit: Stack overflow, see credits in README.md for more details
    modCardsSelected.length = Math.min(modCardsSelected.length, 2);
}

// Check for a match. Credit: Ania Kubrow
function checkMatch() {
    var modCards = document.querySelectorAll('img');
    const modCardOneId = modCardsSelectedId[0];
    const modCardTwoId = modCardsSelectedId[1];
    // Bug fix: test easyCardsSelected for true equality, not easyCardsSelectedId
    /* Bug fix: test for both match between data names and make sure ids don't match 
     to make sure users cannot pick the same card twice to count as a match */
    if (modCardsSelected[0] === modCardsSelected[1] && modCardOneId !== modCardTwoId) {
        modCardsRight.push(modCardsSelected);
        // Moves 'move' counter forward
        moveCounter();
        // Bug fix: Remove event listener from selected cards to prevent users
        // cheating by clicking the same pair more than once
        modCards[modCardOneId].removeEventListener("click", flipModCard);
        modCards[modCardTwoId].removeEventListener("click", flipModCard);
        // Gives feedback to user that they found a match
        modCards[modCardOneId].classList.add('match');
        modCards[modCardTwoId].classList.add('match');
    } else {
        moveCounter();
        // Credit for setTimeout: Free Code Camp
        // Bug fix: Prevents users from breaking the game from selecting cards too fast. Allows match to be tested immediately but the cards to remain for 400 miliseconds
        setTimeout(changeCardBack, 400);
        function changeCardBack() {
            modCards[modCardOneId].setAttribute('src', './assets/images/fruit-card-back.png');
            modCards[modCardTwoId].setAttribute('src', './assets/images/fruit-card-back.png');
            /* Reverts alt for card images back to blank if not a match
            This prevents cheating the game by looking at the alt tags */
            modCards[modCardOneId].setAttribute('alt', 'Card back, select to flip over');
            modCards[modCardTwoId].setAttribute('alt', 'Card back, select to flip over');
        };
    }
    // Resets arrays and HTML element
    modCardsSelected = [];
    modCardsSelectedId = [];
    resultDisplay.textContent = modCardsRight.length; 
    if (modCardsRight.length === fruitCardsModerate.length/2) {
        /* Bug fix: call function that makes cards img
        back to the original back after 200 miliseconds
        so the user has time to view the final matched car */
        setTimeout(correctModMatch, 200);    
    }
}

function correctModMatch() {
    alert('Yay, you found them all! Play again to beat your time or return home to try another difficulty.');
    resetModGame();
}

// Resets moderate game
function resetModGame() {
    modCardsSelected = [];
    modCardsSelectedId = [];
    modCardsRight = [];
    modCards = document.querySelectorAll('img');
    fruitCardsModerate.sort(() => 0.5 - Math.random());
    modCards.forEach((c) => {
        c.setAttribute('src', './assets/images/fruit-card-back.png');
        c.addEventListener('click', flipModCard);
        // Removes correct match feedback to users
        c.classList.remove('match');
    });
    resultDisplay.textContent = `0`;
    counter.innerHTML = `0`;
    resetTimer();
}