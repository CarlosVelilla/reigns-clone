import { fillName, getRandomCharacter } from "./home.js";

fillName();
getRandomCharacter();

//! To move
function upgradeBar(points) {
  let progressBarValue = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--progress-bar");

  let actualProgressBar = parseInt(progressBarValue) + points;
  document.documentElement.style.setProperty(
    "--progress-bar",
    actualProgressBar
  );
}

//! To move
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

//!Not working
function playTheMusic () {
  gameAudio.play()
}

playTheMusic();

initAcc(".accordion", true);