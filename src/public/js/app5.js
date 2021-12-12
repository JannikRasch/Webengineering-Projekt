var txtInput = document.querySelector('.contentwiki')
var voiceList = document.querySelector('#voiceList')
var btnSpeak = document.querySelector('#btnSpeak')
var synth = window.speechSynthesis
var voices = []

PopulateVoices()
if(speechSynthesis !== undefined){
    speechSynthesis.onvoiceschanged = PopulateVoices
}
btnSpeak.addEventListener('click', () => {
    var toSpeech = new SpeechSynthesisUtterance(txtInput.textContent)
    console.log(txtInput.textContent)
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name')
    voices.forEach((voice) => {
        if(voice.name === selectedVoiceName){
            toSpeech.voice = voice
        }
    })
    synth.speak(toSpeech)
})

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
