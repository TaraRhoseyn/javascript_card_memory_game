/* Bug fix: solved jshint errors by including the following line */
/* jshint esversion: 6 */

// Hides game until game difficulty level is selected
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('board').classList.add('no-display');
    document.getElementById('timer-and-home').classList.add('no-display');
    document.getElementById('board-content').classList.add('no-display');
});

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
const resultEasyDisplay = document.querySelector('#result');
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
        setTimeout(checkEasyMatch, 300); // this calls function checkMatch after 500 milliseconds
    }
}

// Check for a match
function checkEasyMatch() {
    var easyCards = document.querySelectorAll('img');
    const easyCardOneId = easyCardsSelectedId[0];
    const easyCardTwoId = easyCardsSelectedId[1];
    // Bug fix: test easyCardsSelected for true equality, not easyCardsSelectedId
    if (easyCardsSelected[0] === easyCardsSelected[1]) {
        easyCardsRight.push(easyCardsSelected);
        // Moves the counter
        moveCounter();
        // Gives feedback to user that they found a match
        easyCards[easyCardOneId].classList.add('match');
        easyCards[easyCardTwoId].classList.add('match');
    } else {
        // Resets card back to card back is match is not found
        easyCards[easyCardOneId].setAttribute('src', './assets/images/fruit-card-back.png');
        easyCards[easyCardTwoId].setAttribute('src', './assets/images/fruit-card-back.png');
        /* Reverts alt for card images back to blank if not a match
        This prevents cheating the game by looking at the alt tags */
        easyCards[easyCardOneId].setAttribute('alt', 'Card back, select to flip over');
        easyCards[easyCardTwoId].setAttribute('alt', 'Card back, select to flip over');
        // Moves the counter
        moveCounter();
    }
    // Resets the array
    easyCardsSelected = [];
    easyCardsSelectedId = [];
    // Updates score
    resultEasyDisplay.textContent = easyCardsRight.length; 
    if (easyCardsRight.length === fruitCardsEasy.length/2) {
        alert('Yay, you found them all! Play again to beat your time or return home to try another difficulty.');
        resetEasyGame();
    }
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
    easyCards = document.querySelectorAll('img');
    fruitCardsEasy.sort(() => 0.5 - Math.random());
    easyCards.forEach((c) => {
        c.setAttribute('src', './assets/images/fruit-card-back.png');
    });
    resultEasyDisplay.textContent = `0`;
    counter.innerHTML = `0`;
    resetTimer();
}

// Resets the timer by clearing the HTML
function resetTimer() {
    document.getElementById('seconds').innerHTML = `00`;
    document.getElementById('minutes').innerHTML = `00`;
    totalSeconds = `0`;
}