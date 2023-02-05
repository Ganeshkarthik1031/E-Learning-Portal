var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = $('#textbox');
var instructions = $('instructions');
var down = $('download');
var Content = '';
recognition.continuous = true;
recognition.onresult = function(event) {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;
  Content += transcript+'.\n';
  Textbox.val(Content);
};
recognition.onstart = function() {
  instructions.text('Voice recognition is ON.');
}
recognition.onspeechend = function() {
  instructions.text('No activity.');
}
recognition.onerror = function(event) {
  if (event.error == 'no-speech') {
    instructions.text('Try again.');
  }
}
$('#start-btn').on('click', function(e) {
  if (Content.length) {
    Content += ' ';
  }
  recognition.start();
});
Textbox.on('input', function() {
  Content = $(this).val();
})
function download(file, text) {
  var element = document.createElement('a');
  element.setAttribute('href','data:text/plain;charset=utf-8, ' +
    encodeURIComponent(text));
  element.setAttribute('download', file);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
document.getElementById("btn")
  .addEventListener("click", function() {

    var text = document.getElementById("textbox").value;
    var filename = "Notes.txt";

    download(filename, text);
  }, false);

var SpeechRecognitionf = window.webkitSpeechRecognition;
var recognitionf = new SpeechRecognitionf();

var Contentf = '';

recognitionf.continuous = true;
recognitionf.onresult = function(event) {
  var currentf = event.resultIndex;
  var transcriptf = event.results[currentf][0].transcript;
  Contentf += transcriptf+'.jpg';

  var randomImage = "images/" + Contentf;
  var image1 = $('img')[0];
  image1.setAttribute("src",randomImage);
 
};
recognitionf.onstart = function() {
  instructionsf.text('Voice recognition is ON.');
}
recognitionf.onspeechend = function() {
  instructionsf.text('No activity.');
}
recognitionf.onerror = function(event) {
  if (event.error == 'no-speech') {
    instructionsf.text('Try again.');
  }
}
$('#ch-btn').on('click', function(e) {
  if (Contentf.length) {
    Contentf += ' ';
  }
  recognitionf.start();
});
Textbox.on('input', function() {
  Contentf = $(this).val();
})
