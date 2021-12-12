var inputwiki = document.querySelector('.input_textwiki')
var buttonwiki = document.querySelector('.submitwiki')
var contentwiki = document.querySelector('.contentwiki')

//EventListener für den submit Knopf der Wikipediasuche
buttonwiki.addEventListener('click', function() {
    console.log(inputwiki.value)
    fetch('https://de.wikipedia.org/api/rest_v1/page/summary/'+inputwiki.value) //Beziehen des Wikipediaartikels
    .then(response => response.json())
    .then(data => {
        var textcontent = data['extract']
        contentwiki.textContent = textcontent   //Text übergeben
    })
})
