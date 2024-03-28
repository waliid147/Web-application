/* Gets elements by their ID & assigns them to a consant*/ 
const adviceText = document.getElementById('advice-text');
const adviceButton = document.getElementById('new-advice');
const soundButton = document.getElementById('sound');


/* Event listener is added to the new advice button that will listen for clicks,
then once clicked, it fetch a new advice from API & display it as the advice text*/
adviceButton.addEventListener('click', function newAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json()) //Parse the JSON response
    .then(result => {
        adviceText.innerHTML = result.slip.advice;
        
    }) //Advice text is updated with the new fetched advice
    .catch(error => console.error('There was an error: ' + error)); //Errors are logged to the console
})


/* Event listener is added to the sound button, which
listens for clicks & once clicked, allows you to hear the displayed text using TTS (text-to-speech)*/
soundButton.addEventListener('click', function Pronounciation() {
    let utterance = new SpeechSynthesisUtterance(adviceText.innerHTML);
    window.speechSynthesis.speak(utterance);
})