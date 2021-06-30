// @ts-check

// AT BELOW BACK IN WHEN SORT OUT GAME LOGIC
// Hides game until game difficulty level is selected
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById('game').classList.add('no-display');
// });

// Global variables
const gameGrid = document.getElementById('game');
let fruitCards = document.getElementsByClassName('fruit-card');

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
    document.getElementById('game').classList.add('yes-display');
};

// Array of card objects to be added to DOM
let fruitCardsModerate = [
    { name: "banana", img: "./images/fruit-one-banana.png", },
    { name: "banana", img: "./images/fruit-one-banana.png", },
    { name: "orange", img: "./images/fruit-two-orange.png", },
    { name: "orange", img: "./images/fruit-two-orange.png", },
    { name: "watermelon", img: "./images/fruit-three-watermelon.png", },
    { name: "watermelon", img: "./images/fruit-three-watermelon.png", },
    { name: "avocado", img: "./images/fruit-four-avocado.png", },
    { name: "avocado", img: "./images/fruit-four-avocado.png", },
    { name: "bluberry", img: "./images/fruit-five-blueberry.png", },
    { name: "bluberry", img: "./images/fruit-five-blueberry.png", },
    { name: "lime", img: "./images/fruit-six-lime.png", },
    { name: "lime", img: "./images/fruit-six-lime.png", },
];

fruitCardsModerate.forEach(item => {
    const fruitCard = document.createElement('div');
    fruitCard.classList.add('fruitCard');
    fruitCard.dataset.name = item.name;
    fruitCard.style.backgroundImage = "url('./assets/images/fruit-card-back.png')";
    gameGrid.appendChild(fruitCard);
});

 // Credit for shuffle method: Michelle Toscano
 fruitCardsModerate.sort(() => 0.5 - Math.random());

 console.log(fruitCardsModerate);

// Functions that trigger the game depending on difficulty
function startEasyGame() {
    removeIntro();
    displayGame();
};

function startModerateGame() {
    removeIntro();
    displayGame();
};

function startHardGame() {
    removeIntro();
    displayGame();
};


