// Makes sure the 'active' indicator on navbar is there upon page loading 
window.onload = setActive;

/* Function takes navbar elements and checks if their href
 matches to the document.location, letting users know what
page they're on.
Credit for function: CSS Deck. https://cssdeck.com/blog/intelligent-navigation/ */
function setActive() {
    var nav = document.getElementById('nav').getElementsByTagName('a');
    for(i = 0; i < nav.length; i++) { 
        if(document.location.href.indexOf(nav[i].href)>=0) {
            nav[i].className='active';
        }
    }
}