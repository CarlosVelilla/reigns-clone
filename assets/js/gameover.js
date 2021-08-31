import { urlCharacter } from "./personalize-character.js";
import { userName } from "./home.js";

function gameOverWindow (result, points) {
  const mainContainer = document.getElementById("container");
  mainContainer.classList.add("disappear");

  setTimeout( () => {
    mainContainer.innerHTML = `
    <div id="container-result" class="container__result">
    <img id="crown-result" class="crown__result" src="" alt="crown">
    <div id="container-result-imgs" class="container__result--imgs">
      <img id="game-loser" class="game__loser" src="" alt="loser">
      <img id="game-winner" class="game__winner" src="" alt="winner">
      <img id="game-friend" class="game__friend" src="" alt="friend">
    </div>
    <h2 id="game-result-text"></h2>
    <p id="total-points-text"></p>
    <div>
      <img id="facebook" class="facebook" src="" alt="">
      <img id="twitter" class="twitter" src="" alt="">
      <img id="mail" class="instagram" src="" alt="">
    </div>
    <div id="credits" class="credits">Credits</div>
  </div>
  `;

    mainContainer.classList.remove("disappear")
    gameOverWindowContent(result, points)
  }, 500);
}

function gameOverWindowContent(result, points) {
  const gameLoser = document.getElementById("game-loser")
  const gameWinner = document.getElementById("game-winner")
  const gameFriend = document.getElementById("game-friend")

  const gameResultText = document.getElementById("game-result-text")
  const totalPointsText = document.getElementById("total-points-text")

  totalPointsText = `You got ${points} points!`

  if (result == "success") {
    gameLoser.src = "https://avatars.dicebear.com/api/avataaars/eWJS7.svg?facialHairChance=0&hairColor=auburn&clothes=shirtCrewNeck&clothesColor=blue03&skin=pale&undefined=undefined&top=shortWaved&"
    gameWinner.src = urlCharacter
    gameFriend.src = "https://avatars.dicebear.com/api/avataaars/RBknc.svg?hairColor=black&eyes=hearts"

    gameResultText.textContent = `Congratulations, Your Highness! You have been crowned as ${userName}`

  } else if (result == "fail") {
    gameLoser.src = urlCharacter += 'eyes=cry'
    gameWinner.src = "https://avatars.dicebear.com/api/avataaars/kXmtz.svg?hairColor=auburn&eyes=side&eyebrow=angryNatural&mouth=tongue"
    gameFriend.src = "https://avatars.dicebear.com/api/avataaars/RBknc.svg?hairColor=black&eyes=closed&eyebrow=default&mouth=concerned"

    gameResultText.textContent = `The Great and Powerful Rocky II is now the king of the school`

  }
}


export { gameOverWindow }