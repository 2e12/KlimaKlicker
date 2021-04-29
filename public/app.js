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
    document.getElementById('blacklayer').onclick = () => {
        hideFact()
    }
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
    document.getElementById('blacklayer').style.display = 'Block'
    document.getElementById('content-title').innerHTML = fact['title']
    document.getElementById('content-body').innerHTML = fact['body']

    let list = document.createElement('ul')
    for (var i = 0; i < fact['sources'].length; i++) {
        let item = document.createElement('a');
        item.appendChild(document.createTextNode(fact['sources'][i]))
        item.href = fact['sources'][i]
        item.target = '_blank'
        list.appendChild(item);
    }
    document.getElementById('content-sources').innerHTML = list.innerHTML

}

function hideFact() {
    document.getElementById('content').style.display = 'None'
    document.getElementById('blacklayer').style.display = 'None'
}