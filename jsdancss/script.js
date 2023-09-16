window.onload = function() {
  var audioPlayer = document.getElementById("audioPlayer");
  var volumeSlider = document.getElementById("volumeSlider");
  var volumePercentage= document.getElementById("volumePercentage");

  audioPlayer.onplay = function() {
    console.log("Audio mulai diputar");
  };
  
  audioPlayer.onpause = function() {
      console.log("Audio Sedang Dipause");
  };

  audioPlayer.onended = function() {
    console.log("Audio selesai diputar");
  };

  volumeSlider.oninput = function() {
   var volumePercentageValue = volumeSlider.value + "%";
   audioPlayer.volume = parseFloat(volumeSlider.value) / 100;
   volumePercentage.textContent = volumePercentageValue;
  };
};
