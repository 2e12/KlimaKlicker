let facts = {}

window.onload = () => {
    fetch('./facts.json')
    .then(response => response.json())
    .then( (data) => {
        facts = data
        showFact('car')
    })
}

function showFact(name) {
    let fact = facts[name]
    document.getElementById('content').style.display = 'Block'
    document.getElementById('content-title').innerHTML = fact['title']
    document.getElementById('content-body').innerHTML = fact['body']
}

function hideFact() {
    document.getElementById('content').style.display = 'None'
}