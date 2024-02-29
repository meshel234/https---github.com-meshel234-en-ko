function copyText(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
  
  function speakText(text, lang) {
    var speech = new SpeechSynthesisUtterance(text);
    speech.lang = lang;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }
  
  function translateText() {
    var inputText = document.getElementById('inputText').value;
    var apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=en|ko`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        var translatedText = data.responseData.translatedText;
        document.getElementById('outputText').value = translatedText;
        speakText(inputText, 'en-US');
        speakText(translatedText, 'ko-KR');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  