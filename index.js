var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
function recognizeSpeech(options) {
    if (options.status == 'ON') {
        recognition.start();
        recognition.onresult = function (event) {
            var result = event.results[0][0].transcript;
            return result
        }
        recognition.onerror = function (event) {
            return event.error
        }
        recognition.onspeechend = function (event) {
            return 'Processing...'
        }
    }else{
        recognition.stop();
    }

}

module.exports.recognizeSpeech = recognizeSpeech;