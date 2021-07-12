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
document.getElementById('easy-button').addEventListener("click", startEasyGame);
document.getElementById('moderate-button').addEventListener("click", startModerateGame);
document.getElementById('hard-button').addEventListener("click", startHardGame);

// Functions to be used as nested functions repeatedly
function removeIntro() {
    document.getElementById("introduction-section").remove();
    document.getElementById("start-game-prompt").remove();
};

function displayGame() {
    document.getElementById('board').classList.remove('no-display');
    document.getElementById('score-text').classList.remove('no-display');
};

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

// Credit: Shuffle based on Fisher-Yates shuffle 
function shuffleCards() {  
    for (var i = gameGrid.children.length; i >= 0; i--) {
        gameGrid.appendChild(gameGrid.children[Math.random() * i | 0]);
    }
};

// Iterates through the cards array to create
// DOM element with given data values
// Credit: Based on function by Tania Rascia
fruitCardsModerate.forEach(c => {
    const fruitCard = document.createElement('span');
    fruitCard.classList.add('fruitCard');
    fruitCard.dataset.name = c.name;
    fruitCard.style.backgroundImage = `url(${c.img})`;
    gameGrid.appendChild(fruitCard); 
});

// Functions that trigger the game depending on difficulty
function startEasyGame() {
    removeIntro();
    displayGame();
};

function startModerateGame() {
    removeIntro();
    displayGame();
    shuffleCards();
};

function startHardGame() {
    removeIntro();
    displayGame();
};