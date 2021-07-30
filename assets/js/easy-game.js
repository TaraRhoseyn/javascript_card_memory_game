/* Bug fix: solved jshint errors by including the following line */
/* jshint esversion: 6 */

// Global variable across all versions of the game to display score counter
const resultDisplay = document.querySelector('#result');

// Inserts back content hidden upon DOM loaded
// Removes introductory information
function displayGame() {
    document.getElementById('board').classList.remove('no-display');
    document.getElementById('timer-and-home').classList.remove('no-display');
    document.getElementById('introduction-section').remove();
    document.getElementById('start-game-prompt').remove();
    document.getElementById('board-content').classList.remove('no-display');
    setTimer();
}

// Credit for timer & reset timer functions: user efuzz on Stack Overflow.
var totalSeconds = 0;

function setTimer(){
    ++totalSeconds;
    var seconds = document.getElementById('seconds');
    seconds.innerHTML = pad(totalSeconds%60);
    var minutes = document.getElementById('minutes');
    minutes.innerHTML = pad(parseInt(totalSeconds/60));
}

function pad(val){
    var valString = val + '';
    if(valString.length < 2) {
        return '0' + valString;
    } else { return valString;
    }
}

// Variables for easy game
const easyGameGrid = document.querySelector('#board');
const counter = document.querySelector('#count');
var easyCardsSelected = [];
var easyCardsSelectedId = [];
var easyCardsRight = [];

document.getElementById('easy-button').addEventListener('click', startEasyGame);

function startEasyGame() {
    displayGame();
    createEasyBoard();
    document.getElementById('reset').addEventListener('click', resetEasyGame);
    counter.innerHTML = `0`;
    resultDisplay.innerHTML = `0`;
    /* Bug fix: By placing setInterval within a function that's called upon game loading
    the timer doesn't automatically start when the page is loaded, affecting game play */
    setInterval(setTimer, 1200);
}

const fruitCardsEasy = fruitCardsModerate.slice(0, 6);

// Credit for basis of function: Ania Kubow
function createEasyBoard() {
    /* Bug fix: .sort function (shuffles array) has to 
    be called within a seperate function to allow
    .slice method in fruitCardsEasy to work */
    // Credit for .sort method of shuffling: Marina Ferreira
    fruitCardsEasy.sort(() => 0.5 - Math.random());
    /* Change id of game board specifically for Easy mode to allow all of the
    peripherals (e.g. score and counter tracker) to fit within the user's view of the browser */
    easyGameGrid.id = 'easyboard';
    for (let i = 0; i < fruitCardsEasy.length; i++) {
        var easyCard = document.createElement('img');
        easyCard.setAttribute('src', './assets/images/fruit-card-back.png');
        easyCard.setAttribute('data-id', i);
        // Add alt text to make sure screen reader users can also play the game
        easyCard.setAttribute('alt', 'Card back, select to flip over');
        easyCard.classList.add('col-6', 'col-lg-4', 'fruitCard');
        easyCard.addEventListener('click', flipEasyCard);
        easyGameGrid.appendChild(easyCard);
    }
}

// Reveals front card faces and calls function to check for a match
function flipEasyCard() {
    var easyCardId = this.getAttribute('data-id'); // getting attribute from element clicked
    easyCardsSelected.push(fruitCardsEasy[easyCardId].name);
    easyCardsSelectedId.push(easyCardId);
    this.setAttribute('src', fruitCardsEasy[easyCardId].img);
    this.setAttribute('alt', fruitCardsEasy[easyCardId].name);
    if (easyCardsSelected.length === 2) {
        checkEasyMatch(); 
    } else if (easyCardsSelected.length > 2) {
        this.setAttribute('src', './assets/images/fruit-card-back.png');
    }
    // Bug fix: To prevent more than 2 cards being tested at the same time the array length is limited. Credit: Stack overflow, see credits in README.md for more details
    easyCardsSelected.length = Math.min(easyCardsSelected.length, 2);
}

// Check for a match. Credit: Ania Kubrow
function checkEasyMatch() {
    var easyCards = document.querySelectorAll('img');
    const easyCardOneId = easyCardsSelectedId[0];
    const easyCardTwoId = easyCardsSelectedId[1];
    // Bug fix: test easyCardsSelected for true equality, not easyCardsSelectedId
    /* Bug fix: test for both match between data names and make sure ids don't match 
     to make sure users cannot pick the same card twice to count as a match */
    if (easyCardsSelected[0] === easyCardsSelected[1] && easyCardOneId !== easyCardTwoId) {
        easyCardsRight.push(easyCardsSelected);
        console.log(easyCardsRight);
        // Moves the counter
        moveCounter();
        // Bug fix: Remove event listener from selected cards to prevent users
        // cheating by clicking the same pair more than once
        easyCards[easyCardOneId].removeEventListener("click", flipEasyCard);
        easyCards[easyCardTwoId].removeEventListener("click", flipEasyCard);
        // Gives feedback to user that they found a match
        easyCards[easyCardOneId].classList.add('match');
        easyCards[easyCardTwoId].classList.add('match');
    } else {
        moveCounter();
        // Credit for setTimeout: Free Code Camp
        // Bug fix: Prevents users from breaking the game from selecting cards too fast. Allows match to be tested immediately but the cards to remain for 400 miliseconds
        setTimeout(changeCardBack, 400);
        function changeCardBack() {
            easyCards[easyCardOneId].setAttribute('src', './assets/images/fruit-card-back.png');
            easyCards[easyCardTwoId].setAttribute('src', './assets/images/fruit-card-back.png');
            /* Reverts alt for card images back to blank if not a match
            This prevents cheating the game by looking at the alt tags */
            easyCards[easyCardOneId].setAttribute('alt', 'Card back, select to flip over');
            easyCards[easyCardTwoId].setAttribute('alt', 'Card back, select to flip over');
        };
    }
    // Resets array of cards
    easyCardsSelected = [];
    easyCardsSelectedId = [];
    resultDisplay.textContent = easyCardsRight.length; 
    if (easyCardsRight.length === fruitCardsEasy.length/2) {
        /* Bug fix: call function that makes cards img
        back to the original back after 200 miliseconds
        so the user has time to view the final matched car */
        setTimeout(correctEasyMatch, 200);        
    }
}

function correctEasyMatch() {
    alert('Yay, you found them all! Play again to beat your time or return home to try another difficulty.');
    resetEasyGame();
}

// Moves the counter
// Credit for counting moves method: Michelle Toscano. https://github.com/Michelle3334/freaky_memory/blob/master/assets/js/script.js
function moveCounter() {
    counter.innerHTML ++;
}

// Resets the game by clearing arrays and elements, and shuffling cards
function resetEasyGame() {
    easyCardsSelected = [];
    easyCardsSelectedId = [];
    easyCardsRight = [];
    // Reshuffles cards
    easyCards = document.querySelectorAll('img');
    fruitCardsEasy.sort(() => 0.5 - Math.random());
    easyCards.forEach((c) => {
        c.setAttribute('src', './assets/images/fruit-card-back.png');
        c.addEventListener('click', flipEasyCard);
        // Removes correct match feedback to users
        c.classList.remove('match');
    });
    resultDisplay.textContent = `0`;
    counter.innerHTML = `0`;
    resetTimer();
}

// Resets the timer by clearing the HTML
function resetTimer() {
    document.getElementById('seconds').innerHTML = `00`;
    document.getElementById('minutes').innerHTML = `00`;
    totalSeconds = `0`;
}