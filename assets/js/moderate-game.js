// Variables for moderate game
const modGameGrid = document.querySelector('#board');
const resultDisplay = document.querySelector('#result');
var modCardsSelected = [];
var modCardsSelectedId = [];
var modCardsRight = [];document.getElementById('moderate-button').addEventListener("click", startModerateGame);

function startModerateGame() {
    displayGame();
    createModBoard();
    document.getElementById('reset').addEventListener("click", resetModGame);
    counter.innerHTML = `0`;
    setInterval(setTimer, 1000);
};

const fruitCardsModerate = fruitCardsHard.slice(0,12);

// Creates game board. Credit: Ania Kubow.
function createModBoard() {
    fruitCardsModerate.sort(() => 0.5 - Math.random())
    for (let i = 0; i < fruitCardsModerate.length; i++) {
        var modCard = document.createElement('img')
        modCard.setAttribute('src', './assets/images/fruit-card-back.png')
        modCard.setAttribute('data-id', i)
        modCard.setAttribute('alt', 'Card back, select to flip over') 
        modCard.classList.add('col-4', 'col-lg-2', 'fruitModCard')
        modCard.addEventListener('click', flipModCard)
        modGameGrid.appendChild(modCard)
    }
};

// Reveals front card faces and calls function to check for a match
function flipModCard() {
    var modCardId = this.getAttribute('data-id') 
    modCardsSelected.push(fruitCardsModerate[modCardId].name)
    modCardsSelectedId.push(modCardId)
    this.setAttribute('alt', fruitCardsModerate[modCardId].name)
    this.setAttribute('src', fruitCardsModerate[modCardId].img)
    if (modCardsSelected.length === 2) {
        setTimeout(checkMatch, 300) 
    }
};

// Check for a match
function checkMatch() {
    var modCards = document.querySelectorAll('img')
    const modCardOneId = modCardsSelectedId[0] 
    const modCardTwoId = modCardsSelectedId[1]
    if (modCardsSelected[0] === modCardsSelected[1]) {
        modCardsRight.push(modCardsSelected)
        moveCounter();
    } else {
        // Resets card back to card back is match is not found
        modCards[modCardOneId].setAttribute('src', './assets/images/fruit-card-back.png')
        modCards[modCardTwoId].setAttribute('src', './assets/images/fruit-card-back.png')
        // Reverts alt for card images back to blank if not a match
        // This prevents cheating the game by looking at the alt tags
        modCards[modCardOneId].setAttribute('alt', 'Card back, select to flip over')
        modCards[modCardTwoId].setAttribute('alt', 'Card back, select to flip over')
        moveCounter();
    }
    // Resets arrays and HTML element
    modCardsSelected = []
    modCardsSelectedId = []
    resultDisplay.textContent = modCardsRight.length 
    if (modCardsRight.length === fruitCardsModerate.length/2) {
        alert('Yay, you found them all! Play again to beat your time or return home to try another difficulty.');
        resetModGame();
    }
}

// Resets moderate game
function resetModGame() {
    modCardsSelected = [];
    modCardsSelectedId = [];
    modCardsRight = [];
    modCards = document.querySelectorAll('img')
    fruitCardsModerate.sort(() => 0.5 - Math.random())
    modCards.forEach((c) => {
        c.setAttribute('src', './assets/images/fruit-card-back.png');
    });
    resultEasyDisplay.textContent = `0`;
    counter.innerHTML = `0`;
    resetTimer();
};