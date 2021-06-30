// @ts-check

// Hides game until game difficulty level is selected
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('game').classList.add('no-display');
});

// Global variables
let gameBoard = document.getElementsByClassName('.gameBoard');
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


