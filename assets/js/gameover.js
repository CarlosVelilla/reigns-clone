function gameOverWindow (result) {
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
    <h2>Congratulations Your Highness!</h2>
    <p>You got 79 points!</p>
    <div>
      <img id="facebook" class="facebook" src="" alt="">
      <img id="twitter" class="twitter" src="" alt="">
      <img id="mail" class="instagram" src="" alt="">
    </div>
    <div id="credits" class="credits">Credits</div>
  </div>
  `;

    mainContainer.classList.remove("disappear")
  }, 500);

}
export { gameOverWindow }