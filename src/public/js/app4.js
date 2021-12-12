var inputwiki = document.querySelector('.input_textwiki')
var buttonwiki = document.querySelector('.submitwiki')
var contentwiki = document.querySelector('.contentwiki')

buttonwiki.addEventListener('click', function() {
    console.log(inputwiki.value)
    fetch('https://de.wikipedia.org/api/rest_v1/page/summary/'+inputwiki.value)
    .then(response => response.json())
    .then(data => {
        var textcontent = data['extract']
        contentwiki.textContent = textcontent
    })
})
