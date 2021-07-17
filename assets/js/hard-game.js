// @ts-nocheck

// Hides game until game difficulty level is selected
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('board').classList.add('no-display');
    document.getElementById('score-text').classList.add('no-display');
});

// Global variables
const hardGameGrid = document.querySelector('#board');
const resultHardDisplay = document.querySelector('#result');
var hardCardsSelected = []
var hardCardsSelectedId = []
var hardCardsRight = []

document.getElementById('hard-button').addEventListener("click", startHardGame);

function startHardGame() {
    displayGame();
    createHardBoard();
};

const fruitCardsHard = [
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
    { name: "pineapple", img: "./assets/images/fruit-seven-pineapple.png", },
    { name: "pineapple", img: "./assets/images/fruit-seven-pineapple.png", },
    { name: "fig", img: "./assets/images/fruit-eight-fig.png", },
    { name: "fig", img: "./assets/images/fruit-eight-fig.png", },
    { name: "apple", img: "./assets/images/fruit-nine-apple.png", },
    { name: "apple", img: "./assets/images/fruit-nine-apple.png", },
];

function createHardBoard() {
    fruitCardsHard.sort(() => 0.5 - Math.random())
    for (let i = 0; i < fruitCardsHard.length; i++) {
        var hardCard = document.createElement('img')
        hardCard.setAttribute('src', './assets/images/fruit-card-back.png')
        hardCard.setAttribute('data-id', i)
        hardCard.classList.add('col-4', 'col-lg-2', 'fruitHardCard')
        hardCard.addEventListener('click', flipHardCard)
        hardGameGrid.appendChild(hardCard)
    }
}

function flipHardCard() {
    var hardCardId = this.getAttribute('data-id')
    hardCardsSelected.push(fruitCardsHard[hardCardId].name)
    hardCardsSelectedId.push(hardCardId)
    this.setAttribute('src', fruitCardsHard[hardCardId].img)
    if (hardCardsSelected.length === 2) {
        setTimeout(checkHardMatch, 500)
    }
}

function checkHardMatch() {
    var hardCards = document.querySelectorAll('img')
    const hardCardOneId = hardCardsSelectedId[0]
    const hardCardTwoId = hardCardsSelectedId[1]
    if (hardCardsSelected[0] === hardCardsSelected[1]) {
        hardCardsRight.push(hardCardsSelected)
    } else {
        hardCards[hardCardOneId].setAttribute('src', './assets/images/fruit-card-back.png')
        hardCards[hardCardTwoId].setAttribute('src', './assets/images/fruit-card-back.png')
    }
    hardCardsSelected = []
    hardCardsSelectedId =[]
    resultHardDisplay.textContent = hardCardsRight.length
    if (hardCardsRight.length === fruitCardsHard.length/2) {
        resultHardDisplay.textContent = 'Congrats. You found them all!'
    }
}