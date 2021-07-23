// @ts-nocheck

// Hides game until game difficulty level is selected
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('board').classList.add('no-display');
    document.getElementById("timer-and-home").classList.add('no-display');
    document.getElementById("board-content").classList.add('no-display');
});

// Inserts back content hidden upon DOM loaded
// Add removes introductory information
function displayGame() {
    document.getElementById('board').classList.remove('no-display');
    document.getElementById("timer-and-home").classList.remove('no-display');
    document.getElementById("introduction-section").remove();
    document.getElementById("start-game-prompt").remove();
    document.getElementById("board-content").classList.remove('no-display');
    setTimer();
}

// Credit for timer & reset timer functions: user efuzz on Stack Overflow. https://stackoverflow.com/questions/65091796/reset-a-count-up-timer-in-javascript
setInterval(setTimer, 1000);
var totalSeconds = 0;

function setTimer(){
    ++totalSeconds;
    var seconds = document.getElementById("seconds")
    seconds.innerHTML = pad(totalSeconds%60);
    var minutes = document.getElementById("minutes")
    minutes.innerHTML = pad(parseInt(totalSeconds/60));
}

function pad(val){
    var valString = val + "";
    if(valString.length < 2) {
        return "0" + valString;
    } else { return valString;
    }
}

// Global variables
const easyGameGrid = document.querySelector('#board');
const resultEasyDisplay = document.querySelector('#result');
var easyCardsSelected = [];
var easyCardsSelectedId = [];
var easyCardsRight = [];

document.getElementById('easy-button').addEventListener("click", startEasyGame);

function startEasyGame() {
    displayGame();
    createEasyBoard();
    document.getElementById('reset').addEventListener("click", resetEasyGame);
};

const fruitCardsEasy = fruitCardsModerate.slice(0, 6);

function createEasyBoard() {
    fruitCardsEasy.sort(() => 0.5 - Math.random())
    easyGameGrid.style.width = '50%';
    for (let i = 0; i < fruitCardsEasy.length; i++) {
        var easyCard = document.createElement('img');
        easyCard.setAttribute('src', './assets/images/fruit-card-back.png');
        easyCard.setAttribute('data-id', i);
        easyCard.setAttribute('alt', 'Card back, select to flip over');
        easyCard.classList.add('col-6', 'col-lg-4', 'fruitCard');
        easyCard.addEventListener('click', flipEasyCard);
        easyGameGrid.appendChild(easyCard);
    }
};

function flipEasyCard() {
    var easyCardId = this.getAttribute('data-id') // getting attribute from function above
    easyCardsSelected.push(fruitCardsEasy[easyCardId].name);
    easyCardsSelectedId.push(easyCardId);
    this.setAttribute('src', fruitCardsEasy[easyCardId].img);
    this.setAttribute('alt', fruitCardsEasy[easyCardId].name);
    if (easyCardsSelected.length === 2) {
        setTimeout(checkEasyMatch, 300) // this calls function checkMatch after 500 milliseconds
    };
};

function checkEasyMatch() {
    var easyCards = document.querySelectorAll('img')
    const easyCardOneId = easyCardsSelectedId[0];
    const easyCardTwoId = easyCardsSelectedId[1];
    // Bug fix: test easyCardsSelected for true equality, not easyCardsSelectedId
    if (easyCardsSelected[0] === easyCardsSelected[1]) {
        easyCardsRight.push(easyCardsSelected);
    } else {
        // Resets card back to card back is match is not found
        easyCards[easyCardOneId].setAttribute('src', './assets/images/fruit-card-back.png');
        easyCards[easyCardTwoId].setAttribute('src', './assets/images/fruit-card-back.png');
        easyCards[easyCardOneId].setAttribute('alt', 'Card back, select to flip over');
        easyCards[easyCardTwoId].setAttribute('alt', 'Card back, select to flip over');
    }
    // Resets the array
    easyCardsSelected = [];
    easyCardsSelectedId = [];
    // Updates score
    resultEasyDisplay.textContent = easyCardsRight.length; 
    if (easyCardsRight.length === fruitCardsEasy.length/2) {
        resultEasyDisplay.textContent = 'Congrats. You found them all!'
    }
};

function resetEasyGame() {
    easyCardsSelected = [];
    easyCardsSelectedId = [];
    easyCardsRight = [];
    easyCards = document.querySelectorAll('img')
    fruitCardsEasy.sort(() => 0.5 - Math.random())
    easyCards.forEach((c) => {
        c.setAttribute('src', './assets/images/fruit-card-back.png');
    });
    resultEasyDisplay.textContent = `0`;
    resetTimer();
};

function resetTimer() {
    document.getElementById("seconds").innerHTML = `00`
    document.getElementById("minutes").innerHTML = `00`
    totalSeconds = `0`;
}