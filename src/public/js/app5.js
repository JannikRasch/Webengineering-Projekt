var txtInput = document.querySelector('.contentwiki')
var voiceList = document.querySelector('#voiceList')
var btnSpeak = document.querySelector('#btnSpeak')
var synth = window.speechSynthesis
var voices = []

PopulateVoices()
if(speechSynthesis !== undefined){
    speechSynthesis.onvoiceschanged = PopulateVoices
}
//EventListener für den Knopf zum starten des Vorlesens
btnSpeak.addEventListener('click', () => {
    var toSpeech = new SpeechSynthesisUtterance(txtInput.textContent) //Wikipediatext zu Sprache umwandeln
    console.log(txtInput.textContent)
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name')
    voices.forEach((voice) => {
        if(voice.name === selectedVoiceName){
            toSpeech.voice = voice
        }
    })
    synth.speak(toSpeech)
})

//Auswahl der Stimmen
function PopulateVoices(){
    voices = synth.getVoices()
    var selectedIndex = voiceList.selectedIndex
    voiceList.innerHTML = ''
    voices.forEach((voice) => {
        var listItem = document.createElement('option')
        listItem.textContent = voice.name
        listItem.setAttribute('data-lang', voice.lang)
        listItem.setAttribute('data-name', voice.name)
        voiceList.appendChild(listItem)
    })
    voiceList.selectedIndex = selectedIndex
}
