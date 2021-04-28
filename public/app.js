let facts = {}

window.onload = function () {
    fetch('./facts.json')
    .then(response => response.json())
    .then( (data) => {
        facts = data
        hideFact()
        setTriggers()
    })
}

function setTriggers() {
    let a = document.getElementById("background")
    let svgobj = a.contentDocument;
    for (let [key, value] of Object.entries(facts)) {
        obj = svgobj.getElementById('trigger-' + key)
        obj.style.cursor = "Pointer"
        obj.onclick = () => {
            showFact(key)
        }
    }
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