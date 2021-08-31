import { userName, getUrlCharacter } from "./home.js";

const mainContainer = document.getElementById("container");

// ? SHOWS CREDITS MODAL
function showCredits() {
  let generateModal = document.createElement("div");
  generateModal.id = "credits-modal-container";
  generateModal.innerHTML = `
  <div id="credits-modal" class="credits__modal"></div>
  <div class="credits__modal--window">
    <div id="close-btn" class="close__btn">&#10799;</div>
    <div class="credits__modal--text">
    <h1 class="credits--title">Credits</h1>
    <p class="credits--paraph">Carlos Velilla <a class="credits--link" href="https://github.com/CarlosVelilla" target="_blank">GitHub</a></p>
    <p class="credits--paraph">Salvador Gómez <a class="credits--link" href="https://github.com/SalvaBandicoot" target="_blank">GitHub</a></p>
    <hr>
      <h1 class="credits--title">Resources</h1>
      <p class="credits--paraph">Background <a class="credits--link" href="https://www.svgbackgrounds.com/" target="_blank">SVG Backgrounds</a></p>
      <p class="credits--paraph">Avatars <a class="credits--link" href="https://avatars.dicebear.com/styles/avataaars" target="_blank">DiceBear Avatars</a></p>
      <p class="credits--paraph">Music <a class="credits--link" href="https://soundimage.org/looping-music/" target="_blank">Soundimage</a></p>
      </div>
      </div>
      `;

      mainContainer.appendChild(generateModal);
    
      const modalWindow = document.getElementById("credits-modal");
      modalWindow.classList.add("show__modal");
    
      const modalBackground = document.getElementById("credits-modal");
      const closeBtn = document.getElementById("close-btn");
      modalBackground.addEventListener("click", closeModal);
      closeBtn.addEventListener("click", closeModal);
    }
    
    function closeModal() {
      let modalMainContainer = document.getElementById("credits-modal-container");
      modalMainContainer.remove();
    }

    function gameOverWindow (result, points) {
      mainContainer.classList.add("disappear");
      
      setTimeout( () => {
        mainContainer.innerHTML = `
        <div id="container-result" class="container__result">
        <p id="crown-result" class="crown__result icon-crown"></p>
      <div id="container-result-imgs" class="container__result--imgs">
      <img id="game-loser" class="game__loser" src="https://avatars.dicebear.com/api/avataaars/4.svg" alt="loser">
        <img id="game-winner" class="game__winner" src="https://avatars.dicebear.com/api/avataaars/4.svg" alt="winner">
        <img id="game-friend" class="game__friend" src="https://avatars.dicebear.com/api/avataaars/4.svg" alt="friend">
        </div>
        <h2 id="game-result-text" class="game__result--text">Your Highness!</h2>
        <hr class="points--line">
        <p id="total-points-text" class="total--points"></p>
        <div>
        <img id="facebook" class="facebook" src="" alt="">
        <img id="twitter" class="twitter" src="" alt="">
        <img id="mail" class="instagram" src="" alt="">
        </div>
        </div>
      <div id="credits" class="credits">Credits</div>
      `;
      
      mainContainer.classList.remove("disappear")
      gameOverWindowContent(result, points)
      
      let creditBtn = document.getElementById("credits");
      creditBtn.addEventListener("click", showCredits);
    }, 500);
}

function gameOverWindowContent(result, points) {
  const gameLoser = document.getElementById("game-loser")
  const gameWinner = document.getElementById("game-winner")
  const gameFriend = document.getElementById("game-friend")

  const gameResultText = document.getElementById("game-result-text")
  let totalPointsText = document.getElementById("total-points-text")

  totalPointsText.textContent = `You got ${points} points!`

  if (result == "success") {
    gameLoser.src = "https://avatars.dicebear.com/api/avataaars/eWJS7.svg?facialHairChance=0&hairColor=auburn&clothes=shirtCrewNeck&clothesColor=blue03&skin=pale&undefined=undefined&top=shortWaved&"
    gameWinner.src = getUrlCharacter()
    gameFriend.src = "https://avatars.dicebear.com/api/avataaars/RBknc.svg?hairColor=black&eyes=hearts"

    gameResultText.textContent = `Congratulations, Your Highness! You have been crowned as ${userName}.`

  } else if (result == "fail") {
    gameLoser.src = getUrlCharacter() += 'eyes=cry'
    gameWinner.src = "https://avatars.dicebear.com/api/avataaars/kXmtz.svg?hairColor=auburn&eyes=side&eyebrow=angryNatural&mouth=tongue"
    gameFriend.src = "https://avatars.dicebear.com/api/avataaars/RBknc.svg?hairColor=black&eyes=closed&eyebrow=default&mouth=concerned"

    gameResultText.textContent = `The Great and Powerful Rocky II is now the king of the school`

  }
}


export { gameOverWindow }