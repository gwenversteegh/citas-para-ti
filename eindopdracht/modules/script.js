import { endpoint } from './API.js';
import { getData } from './API.js';



var showQuote = document.querySelector("section:first-of-type > li");

var klikQuoteNrEen = document.querySelector("section:first-of-type ul:nth-of-type(2) li:first-of-type button");
var klikQuoteNrTwee = document.querySelector("section:first-of-type ul:nth-of-type(2) li:nth-of-type(2) button");
var klikQuoteNrDrie = document.querySelector("section:first-of-type ul:nth-of-type(2) li:nth-of-type(3) button");
var klikQuoteNrVier = document.querySelector("section:first-of-type ul:nth-of-type(2) li:nth-of-type(4) button");

function veranderQuoteInNrEen () {
    showQuote = 'section:first-of-type ul:first-of-type li:first-of-type';
     
     klikQuoteNrEen.classList.remove("active");
     klikQuoteNrTwee.classList.remove("active");
     klikQuoteNrDrie.classList.remove("active");
     klikQuoteNrVier.classList.remove("active");
     
     klikQuoteNrEen.classList.add("active");
 }

 function veranderQuoteInNrTwee () {
    showQuote = 'section:first-of-type ul:first-of-type li:nth-of-type(2)' ;
    
    klikQuoteNrEen.classList.remove("active");
    klikQuoteNrTwee.classList.remove("active");
    klikQuoteNrDrie.classList.remove("active");
    klikQuoteNrVier.classList.remove("active");
    
    klikQuoteNrTwee.classList.add("active");
}

function veranderQuoteInNrDrie () {
    showQuote = 'section:first-of-type ul:first-of-type li:nth-of-type(3)' ;
    
    klikQuoteNrEen.classList.remove("active");
    klikQuoteNrTwee.classList.remove("active");
    klikQuoteNrDrie.classList.remove("active");
    klikQuoteNrVier.classList.remove("active");
    
    klikQuoteNrDrie.classList.add("active")
}

function veranderQuoteInNrVier () {
    showQuote = 'section:first-of-type ul:first-of-type li:nth-of-type(4)' ;
    
    klikQuoteNrEen.classList.remove("active");
    klikQuoteNrTwee.classList.remove("active");
    klikQuoteNrDrie.classList.remove("active");
    klikQuoteNrVier.classList.remove("active");
    
    klikQuoteNrVier.classList.add("active")
    
}

 klikQuoteNrEen.addEventListener('click', veranderQuoteInNrEen);
 klikQuoteNrTwee.addEventListener('click', veranderQuoteInNrTwee);
 klikQuoteNrDrie.addEventListener('click', veranderQuoteInNrDrie);
 klikQuoteNrVier.addEventListener('click', veranderQuoteInNrVier);

