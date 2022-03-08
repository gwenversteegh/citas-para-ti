
// 1. variables (aka bindings), on top of global cope
export const endpoint = 'https://quote.api.fdnd.nl/v1/quote'
export const list = document.querySelector('ul:first-of-type')

import { showLoadingState, hideLoadingState, showErrorState } from './states.js';

// 2. the story
showLoadingState ()
getData()


export function getData() {
    const list = document.querySelector('ul')   //quoteList gebruik je verder nergens
    fetch(endpoint).then(function(response) {
        return response.json()
    })
.then (quotes => {
    hideLoadingState ()
    quotes.data = quotes.data.slice(0,-5)
    renderData (quotes)
})
.catch((error) => {  //de error parameter wordt niet gebruikt
    console.log ("het gaat niet goed...")
    hideLoadingState()
    showErrorState()
});

}

let id = 0;

export function renderData(quotes){
    quotes.data.forEach(data => {
    list.insertAdjacentHTML('beforeend', 
    `<li id=${id = id + 1}>
        <img src='${data.avatar}' alt='profielfoto' onerror="this.style.display='none'" >
        <h2>${data.name}</h2>
        <p>${data.text}</p>
    </li>`)
 })
}
;

const quotes = [
    '#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', '#10',
]

button.onclick = function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

    var base_url = window.location.origin;

    window.location.href = base_url +  randomQuote
}

const hallo = document.querySelector("#hallo")
function randomQuotes(quotes) {
    hallo.insertAdjacentHTML('beforeend', 
    `<li id=${id = 2}>
        <img src='${quotes.avatar}' alt='profielfoto' onerror="this.style.display='none'" >
        <h2>${quotes.name}</h2>
        <p>${quotes.text}</p>
    </li>`)
}

// var button = document.getElementById("button");
// var myarray = ["li"];

// button.onclick = function() {
//     alert(myarray[Math.floor(Math.random() * myarray.length)]);
// };


// document.getElementById('button');

// //;addEventListener("click", myFunction());

// function myFunction(randomQuotes) {
//     return randomQuotes = list [Math.floor(Math.random()*list.length)];
// }


// setTimeout(() => {window.location.hash = '#1';}, 1000)
// const liEl = document.querySelectorAll('ul li');
// for(let i = 0; i < liEl.length; i++) {
//     liEl[i].addEventListener('mouseenter', function() {
//         console.log('hoi')
//         let rect = liEl[i].getBoundingClientRect();
//         if(rect.bottom > 0 && rect.bottom < 550) {
//             window.location.hash = liEl[i].id;
//         }
    
//     })
// } 