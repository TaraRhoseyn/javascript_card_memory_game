// @ts-check

// Global variables

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

// Hide game element until level difficulty selected
function hideGame() {
    document.getElementById('game').classList.add('no-display');
}

if (document.readyState === "complete") {
    // fired, run logic
    hideGame();
} else {
    // not yet fired, add eventlistener
    window.addEventListener("DOMContentLoaded", hideGame);
}


// document.addEventListener("DOMContentLoaded", function(event) {
//     console.log("DOM fully loaded and parsed");
//     document.getElementById('game').classList.add('no-display');
// });


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
    // document.getElementById('game').classList.add('yes-display');
};


// Functions that trigger the game depending on difficulty
function startEasyGame() {
    removeIntro();
    hideGame();
};

function startModerateGame() {
    removeIntro();
};

function startHardGame() {
    removeIntro();
};


