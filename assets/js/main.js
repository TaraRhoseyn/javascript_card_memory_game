// @ts-check

// Global variables

// Hide game element until level difficulty selected
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});

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

// Functions that trigger the game depending on difficulty
function startEasyGame() {
    removeIntro();
};

function startModerateGame() {
    removeIntro();
};

function startHardGame() {
    removeIntro();
};


