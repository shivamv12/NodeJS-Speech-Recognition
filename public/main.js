var video = document.querySelector('#video');

var remoteControl = new RemoteControl(video);
var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';
recognition.start();

recognition.onresult = function (event) {
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      if (event.results[i][0].transcript.trim().includes('play')) {
        remoteControl.play();
      }
      if (event.results[i][0].transcript.trim().includes('stop')) {
        remoteControl.stop();
      }
      if (event.results[i][0].transcript.trim().includes('pause')) {
        remoteControl.pause();
      }
      if (event.results[i][0].transcript.trim().includes('mute')) {
        remoteControl.mute();
      }
      if (event.results[i][0].transcript.trim().includes('Unmute')) {
        remoteControl.unmute();
      }
      console.info(`You said : ${event.results[i][0].transcript}`);
    }
  }
};
