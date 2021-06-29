// @ts-check
// Card array for Easy mode. Credit for object array format: Fakorede Damilola
let fruitCardsEasy = [
    { name: "banana", img: "../images/fruit-one-banana.png", },
    { name: "banana", img: "../images/fruit-one-banana.png", },
    { name: "orange", img: "../images/fruit-two-orange.png", },
    { name: "orange", img: "../images/fruit-two-orange.png", },
    { name: "watermelon", img: "../images/fruit-three-watermelon.png", },
    { name: "watermelon", img: "../images/fruit-three-watermelon.png", },
    { name: "avocado", img: "../images/fruit-four-avocado.png", },
    { name: "avocado", img: "../images/fruit-four-avocado.png", },
    { name: "bluberry", img: "../images/fruit-five-blueberry.png", },
    { name: "bluberry", img: "../images/fruit-five-blueberry.png", },
    { name: "lime", img: "../images/fruit-six-lime.png", },
    { name: "lime", img: "../images/fruit-six-lime.png", },
];

// Global variables
var gameBoard = document.getElementsByClassName('.gameBoard');

// Event listeners
document.getElementById('easy-button').addEventListener("click", startEasyGame);
document.getElementById('moderate-button').addEventListener("click", startModerateGame);
document.getElementById('hard-button').addEventListener("click", startHardGame);

// Functions
function startEasyGame() {
    
}