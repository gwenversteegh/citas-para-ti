
// 1. variables (aka bindings), on top of global cope
const endpoint = 'https://quote.api.fdnd.nl/v1/quote'


// 2. the story
getData()

// 3. functions

function getData() {
    // 1. variables
    const list = $('ul')

    // 2. the story

    //get data asynchronously
    fetch(endpoint).then(function(response) {
        return response.json()
    })
    .then(function(giphies){
        console.log(giphies)
        list.insertAdjacentHTML('afterbegin', `<li>${giphies.data[0].text}</li>`)
    })

    // 3. functions

}

function $(element) {
    return document.querySelector(element)

}