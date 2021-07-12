// @ts-nocheck

// Hides game until game difficulty level is selected
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('board').classList.add('no-display');
    document.getElementById('score-text').classList.add('no-display');
});

// Global variables
const gameGrid = document.querySelector('#board');
const resultDisplay = document.querySelector('#result');
var cardsSelected = []
var cardsSelectedId = []
var cardsRight = []

// Event listeners
// document.getElementById('easy-button').addEventListener("click", startEasyGame);
document.getElementById('moderate-button').addEventListener("click", displayGame);
// document.getElementById('hard-button').addEventListener("click", startHardGame);

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
        var card = document.createElement('img')
        card.setAttribute('src', './assets/images/fruit-card-back.png')
        card.setAttribute('data-id', i) 
        card.addEventListener('click', flipCard)
        board.appendChild(card)
    }
}
createBoard()

// Check for a match
function checkMatch() {
    // Variable grabs all img elements (the created cards)
    var cards = document.querySelectorAll('img')
    // Variable grabs 1st [0] and 2nd value in array
    const cardOneId = cardsSelectedId[0] 
    const cardTwoId = cardsSelectedId[1]
    // if the cards selected have true equality (are a match)... 
    if (cardsSelected[0] === cardsSelected[1]) {
        cardsRight.push(cardsSelected)
    } else {
        // Resets card back to card back is match is not found
        cards[cardOneId].setAttribute('src', './assets/images/fruit-card-back.png')
        cards[cardTwoId].setAttribute('src', './assets/images/fruit-card-back.png')
    }
    // Resets the array
    cardsSelected = []
    cardsSelectedId = []
    // Updates score
    resultDisplay.textContent = cardsRight.length
    // 
    if (cardsRight.length === fruitCardsModerate.length/2) {
        resultDisplay.textContent = 'Congrats. You found them all!'
    }

}











// Functions that trigger the game depending on difficulty
// function startEasyGame() {
//     removeIntro();
//     displayGame();
// };

// function startModerateGame() {
//     removeIntro();
//     displayGame();
//     shuffleCards();
// };

// function startHardGame() {
//     removeIntro();
//     displayGame();
// };