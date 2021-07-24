// Global variables
const modGameGrid = document.querySelector('#board');
const resultDisplay = document.querySelector('#result');
var modCardsSelected = []
var modCardsSelectedId = []
var modCardsRight = []

document.getElementById('moderate-button').addEventListener("click", startModerateGame);

function startModerateGame() {
    displayGame();
    createModBoard();
    document.getElementById('reset').addEventListener("click", resetModGame);
    counter.innerHTML = `0`;
};

// Array of card objects to be added to DOM
const fruitCardsModerate = fruitCardsHard.slice(0,12)

// Credit for basis of function: Ania Kubow
function createModBoard() {
    // Bug fix: .sort function (shuffles array) has to 
    // be called within a seperate function to allow
    // .slice method in fruitCardsEasy to work
    fruitCardsModerate.sort(() => 0.5 - Math.random())
    modGameGrid.style.width = '80%';
    for (let i = 0; i < fruitCardsModerate.length; i++) {
        var modCard = document.createElement('img')
        modCard.setAttribute('src', './assets/images/fruit-card-back.png')
        modCard.setAttribute('data-id', i)
        modCard.setAttribute('alt', 'Card back, select to flip over') 
        modCard.classList.add('col-4', 'col-lg-2', 'fruitModCard')
        modCard.addEventListener('click', flipModCard)
        modGameGrid.appendChild(modCard)
    }
}

function flipModCard() {
    var modCardId = this.getAttribute('data-id') // getting attribute from function above
    modCardsSelected.push(fruitCardsModerate[modCardId].name)
    modCardsSelectedId.push(modCardId)
    this.setAttribute('alt', fruitCardsModerate[modCardId].name)
    this.setAttribute('src', fruitCardsModerate[modCardId].img)
    if (modCardsSelected.length === 2) {
        setTimeout(checkMatch, 300) // this calls function checkMatch after 500 milliseconds
    }
}

// Check for a match
function checkMatch() {
    // Variable grabs all img elements (the created cards)
    var modCards = document.querySelectorAll('img')
    // Variable grabs 1st [0] and 2nd value in array
    const modCardOneId = modCardsSelectedId[0] 
    const modCardTwoId = modCardsSelectedId[1]
    // if the cards selected have true equality (are a match)... 
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
    // Resets the array
    modCardsSelected = []
    modCardsSelectedId = []
    // Updates score
    resultDisplay.textContent = modCardsRight.length 
    if (modCardsRight.length === fruitCardsModerate.length/2) {
        resultDisplay.textContent = 'Congrats. You found them all!'
    }
}

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