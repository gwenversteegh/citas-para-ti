
// 1. variables (aka bindings), on top of global cope
export const endpoint = 'https://quote.api.fdnd.nl/v1/quote'


// 2. the story
getData()

// 3. functions

export function getData() {
    // 1. variables
    const list = document.querySelector('ul')

    // 2. the story

    //get data asynchronously
    fetch(endpoint).then(function(response) {
        return response.json()
    })

    .then(quotes =>{
        quotes.data = quotes.data.slice(0,-4);
        quotes.data.forEach(data => {
        list.insertAdjacentHTML('afterbegin', 
        `<li>
        <p>${data.text}</p>
        <div>
        <img src='${data.avatar}' alt='profielfoto'>
        <h2>${data.name}</h2>
        </div> 
        </li>`)
    })

})
}

