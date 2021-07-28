// Makes sure the 'active' indicator on navbar is there upon page loading 
window.onload = setActive;

// Global variable for nav elements
const nav = document.getElementById('nav').getElementsByTagName('a');

/* Function takes navbar elements and checks if their href
matches to the document.location, letting users know what
page they're on.
Credit for function: CSS Deck. https://cssdeck.com/blog/intelligent-navigation/ */
function setActive() {
    for(i = 0; i < nav.length; i++) { 
        if(document.location.href.indexOf(nav[i].href)>=0) {
            nav[i].className='active';
        }
    }
};