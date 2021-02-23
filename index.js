var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
function recognizeSpeech(options) {
    if (options.status == 'ON') {
        recognition.start();
        document.getElementById('speechResult').innerHTML = 'Listening...';
        recognition.onresult = function (event) {
            var result = event.results[0][0].transcript;
            document.getElementById('speechResult').innerHTML = result;
        }
        recognition.onerror = function (event) {
            document.getElementById('speechResult').innerHTML = event.error;
        }
        recognition.onspeechend = function (event) {
            document.getElementById('speechResult').innerHTML = 'Processing';
        }
    }else{
        recognition.stop();
    }

}

module.exports.recognizeSpeech = recognizeSpeech;