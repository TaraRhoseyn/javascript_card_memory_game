// @ts-nocheck

// Hides game until game difficulty level is selected
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('board').classList.add('no-display');
    document.getElementById('score-text').classList.add('no-display');
});

// Global variables
const gameGrid = document.querySelector('#board');
const resultDisplay = document.querySelector('#result');
var modCardsSelected = []
var modCardsSelectedId = []
var modCardsRight = []

document.getElementById('moderate-button').addEventListener("click", startModerateGame);

function startModerateGame() {
    displayGame();
    createBoard();
};

// Inserts back content hidden upon DOM loaded
// Add removes introductory information
function displayGame() {
    document.getElementById('board').classList.remove('no-display');
    document.getElementById('score-text').classList.remove('no-display');
    document.getElementById("introduction-section").remove();
    document.getElementById("start-game-prompt").remove();
}

// Array of card objects to be added to DOM
const fruitCardsModerate = [
    { name: "banana", img: "./assets/images/fruit-one-banana.png", },
    { name: "banana", img: "./assets/images/fruit-one-banana.png", },
    { name: "orange", img: "./assets/images/fruit-two-orange.png", },
    { name: "orange", img: "./assets/images/fruit-two-orange.png", },
    { name: "watermelon", img: "./assets/images/fruit-three-watermelon.png", },
    { name: "watermelon", img: "./assets/images/fruit-three-watermelon.png", },
    { name: "avocado", img: "./assets/images/fruit-four-avocado.png", },
    { name: "avocado", img: "./assets/images/fruit-four-avocado.png", },
    { name: "bluberry", img: "./assets/images/fruit-five-blueberry.png", },
    { name: "bluberry", img: "./assets/images/fruit-five-blueberry.png", },
    { name: "lime", img: "./assets/images/fruit-six-lime.png", },
    { name: "lime", img: "./assets/images/fruit-six-lime.png", },
];

// Shuffles through above array
fruitCardsModerate.sort(() => 0.5 - Math.random())

// Credit for function: Ania Kubow
function createBoard() {
    for (let i = 0; i < fruitCardsModerate.length; i++) {
        var modCard = document.createElement('img')
        modCard.setAttribute('src', './assets/images/fruit-card-back.png')
        modCard.setAttribute('data-id', i) 
        modCard.addEventListener('click', flipCard)
        board.appendChild(modCard)
    }
}

function flipCard() {
    var modCardId = this.getAttribute('data-id') // getting attribute from function above
    modCardsSelected.push(fruitCardsModerate[modCardId].name)
    modCardsSelectedId.push(modCardId)
    this.setAttribute('src', fruitCardsModerate[modCardId].img)
    if (modCardsSelected.length === 2) {
        setTimeout(checkMatch, 500) // this calls function checkMatch after 500 milliseconds
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
    } else {
        // Resets card back to card back is match is not found
        modCards[modCardOneId].setAttribute('src', './assets/images/fruit-card-back.png')
        modCards[modCardTwoId].setAttribute('src', './assets/images/fruit-card-back.png')
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
