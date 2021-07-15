// @ts-nocheck

// Hides game until game difficulty level is selected
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('board').classList.add('no-display');
    document.getElementById('score-text').classList.add('no-display');
});

// Global variables
const easyGameGrid = document.querySelector('#board');
const resultEasyDisplay = document.querySelector('#result');
var easyCardsSelected = []
var easyCardsSelectedId = []
var easyCardsRight = []

document.getElementById('easy-button').addEventListener("click", startEasyGame);

function startEasyGame() {
    displayGame();
    createEasyBoard();
};

const fruitCardsEasy = [
    { name: "banana", img: "./assets/images/fruit-one-banana.png", },
    { name: "banana", img: "./assets/images/fruit-one-banana.png", },
    { name: "orange", img: "./assets/images/fruit-two-orange.png", },
    { name: "orange", img: "./assets/images/fruit-two-orange.png", },
    { name: "watermelon", img: "./assets/images/fruit-three-watermelon.png", },
    { name: "watermelon", img: "./assets/images/fruit-three-watermelon.png", },
];

fruitCardsEasy.sort(() => 0.5 - Math.random())

function createEasyBoard() {
    for (let i = 0; i < fruitCardsEasy.length; i++) {
        var easyCard = document.createElement('img')
        easyCard.setAttribute('src', './assets/images/fruit-card-back.png')
        easyCard.setAttribute('data-id', i) 
        easyCard.addEventListener('click', flipEasyCard)
        easyGameGrid.appendChild(easyCard)
    }
}

function flipEasyCard() {
    var easyCardId = this.getAttribute('data-id') // getting attribute from function above
    easyCardsSelected.push(fruitCardsEasy[easyCardId].name)
    easyCardsSelectedId.push(easyCardId)
    this.setAttribute('src', fruitCardsEasy[easyCardId].img)
    if (easyCardsSelected.length === 2) {
        setTimeout(checkEasyMatch, 500) // this calls function checkMatch after 500 milliseconds
    }
}

function checkEasyMatch() {
    var easyCards = document.querySelectorAll('img')
    const easyCardOneId = easyCardsSelectedId[0]
    const easyCardTwoId = easyCardsSelectedId[1]
    if (easyCardsSelectedId[0] === easyCardsSelectedId[1]) {
        easyCardsRight.push(easyCardsSelected)
    } else {
        easyCards[easyCardOneId].setAttribute('src', './assets/images/fruit-card-back.png')
        easyCards[easyCardTwoId].setAttribute('src', './assets/images/fruit-card-back.png')
    }
    easyCardsSelected = []
    easyCardsSelectedId = []
    resultEasyDisplay.textContent = easyCardsRight.length
    if (easyCardsRight.length === fruitCardsEasy.length/2) {
        resultEasyDisplay.textContent = 'Congrats, you found them all!'
    }
}