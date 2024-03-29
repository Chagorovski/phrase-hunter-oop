const game = new Game();
var audio = document.getElementById('sound');

// Event for "Play Again" button
document.querySelector("#btn__reset").addEventListener( "click", () => {
   game.startGame();
   checkbox.checked = false;
   audio.pause();
});

// Event for mouse-click and keyboard press
document.querySelector("#qwerty").addEventListener("click", game.handleInteraction);
document.addEventListener("keypress", game.handleInteraction);

// Adding the flipswitch to the HTML with jQuery
$(`<div class="flipswitch">
      <input type="checkbox" name="flipswitch" class="flipswitch-cb" id="fs">
      <label class="flipswitch-label" for="fs">
            <div class="flipswitch-inner"></div>
            <div class="flipswitch-switch"></div>
      </label>
   </div>`).insertBefore('.main-container');

// Variable to select the audio switch
var checkbox = document.querySelector('input[type="checkbox"]');

// ON/OFF for the audio switch
checkbox.addEventListener('change', function () {
   if(checkbox.checked) { 
      audio.play();
      audio.volume = 0.4;
   } else {
      audio.pause();
      audio.currentTime = 0;
   }
});
