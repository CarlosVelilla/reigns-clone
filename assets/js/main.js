import { fillName, getRandomCharacter } from "./home.js";

fillName();
getRandomCharacter();

let gameModeModifier = "undefined"
let gameMode = "undefined"

document.getElementById("mode-easy").addEventListener("click", selectMode)
document.getElementById("mode-medium").addEventListener("click", selectMode)
document.getElementById("mode-hard").addEventListener("click", selectMode)

function selectMode(event) {
  let activeBtn = document.querySelectorAll(".mode-active")
  activeBtn.forEach(btn => btn.classList.remove("mode-active"))
  event.target.classList.add("mode-active")
  gameMode = event.target.id
  gameModeModifier = parseInt(event.target.value)
}

//! Move to personalize character
function initAcc(elem, option){
  document.addEventListener('click', function (e) {
      if (!e.target.matches(elem+' .a-btn')) return;
      else{
          if(!e.target.parentElement.classList.contains('active')){
              if(option==true){
                  var elementList = document.querySelectorAll(elem +' .a-container');
                  Array.prototype.forEach.call(elementList, function (e) {
                      e.classList.remove('active');
                      e.querySelector(".a-btn-symbol").classList.remove('rotate');
                  });
              }
              e.target.parentElement.classList.add('active');
              e.target.querySelector(".a-btn-symbol").classList.add('rotate');
          }else{
              e.target.parentElement.classList.remove('active');
              e.target.querySelector(".a-btn-symbol").classList.remove('rotate');
          }
      }
  });
}

//! To move - Audio
import muteIcon from "https://cdn.skypack.dev/lottie-web";
const muteIconContainer = document.getElementById("mute-icon");
let gameAudio = document.getElementById("audio")
gameAudio.play();
let muteState = "unmute";
const muteAnimation = muteIcon.loadAnimation({
  container: muteIconContainer,
  path: "https://maxst.icons8.com/vue-static/landings/animated-icons/icons/mute/mute.json",
  renderer: "svg",
  loop: false,
  autoplay: false,
  name: "Mute Animation",
});

muteIconContainer.addEventListener("click", () => {
    if(muteState == "unmute") {
      gameAudio.pause();
        muteAnimation.playSegments([0, 15], true);
        muteState = "mute";
      } else {
        gameAudio.play();
        muteAnimation.playSegments([15, 25], true);
        muteState = "unmute";
    }
});


playTheMusic();

initAcc(".accordion", true);

export { gameModeModifier, gameMode }