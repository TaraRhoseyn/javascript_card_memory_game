/* Bug fix: solved jshint errors by including the following line */
/* jshint esversion: 6 */

// Hides game until game difficulty level is selected
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('board').classList.add('no-display');
    document.getElementById('timer-and-home').classList.add('no-display');
    document.getElementById('board-content').classList.add('no-display');
});

// Makes sure the 'active' indicator on navbar is there upon page loading 
window.onload = setActive;

// Global variable for nav elements
const nav = document.getElementById('nav').getElementsByTagName('a');

/* Function takes navbar elements and checks if their href
matches to the document.location, letting users know what
page they're on.
Credit for function: CSS Deck. */
function setActive() {
    for(i = 0; i < nav.length; i++) { 
        if(document.location.href.indexOf(nav[i].href)>=0) {
            nav[i].className='active';
        }
    }
}