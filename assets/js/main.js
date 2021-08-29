import { fillName, getRandomCharacter } from "./home.js";

fillName();
getRandomCharacter()

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

initAcc('.accordion', true);