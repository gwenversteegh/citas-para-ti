
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


// setTimeout(() => {window.location.hash = '#1';}, 1000)
const liEl = document.querySelectorAll('ul li');
for(let i = 0; i < liEl.length; i++) {
    liEl[i].addEventListener('mouseover', function() {
        console.log('hoi')
        let rect = liEl[i].getBoundingClientRect();
        if(rect.bottom > 0 && rect.bottom < 550) {
            window.location.hash = liEl[i].id;
        }
    
    })
} 