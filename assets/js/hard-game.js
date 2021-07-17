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