import { gameModeModifier, gameMode } from "./main.js"

/* GLOBAL VARIABLES */
const URL = "http://localhost:3000";

function createCard(cardId, firstCard) {
  const ACCEPTBTN = document.getElementById("accept-button");
  const DECLINEBTN = document.getElementById("decline-button");

  /* LOCATING ELEMENTS IN THE HIDDEN CARD SIDE */
  let hiddencard = document.querySelector("[data-displayed='false']")
  const TEXT = document.querySelector("[data-text]");
  const ADVICE = document.querySelector("[data-advice]");
  let CHARACTERIMAGE
  let CHARACTERNAME
  if (firstCard === false) {
    CHARACTERIMAGE = document.querySelector("[data-image]");
    CHARACTERNAME = document.querySelector("[data-name]");
  } else {
    CHARACTERIMAGE = hiddencard.querySelector("[data-image]");
    CHARACTERNAME = hiddencard.querySelector("[data-name]");
  }

  /* ASSIGN NEXT CARD ID TO BUTTONS */
  // TODO REFACTOR
  fetch(`${URL}/accept/${cardId}`)
    .then((response) => response.json())
    .then((data) => {
      ACCEPTBTN.setAttribute("data-tocard", data.toCard)
      ACCEPTBTN.setAttribute("data-cardid", cardId)
      ACCEPTBTN.textContent = data.text
    });

  fetch(`${URL}/decline/${cardId}`)
    .then((response) => response.json())
    .then((data) => {
      DECLINEBTN.setAttribute("data-tocard", data.toCard)
      DECLINEBTN.setAttribute("data-cardid", cardId)
      DECLINEBTN.textContent = data.text
    });

  /* PRINTING CARD TITLE AND ADVICE */
  fetch(`${URL}/content/${cardId}`)
    .then((response) => response.json())
    .then((data) => {
      TEXT.textContent = data.text;
      data.advice === false
        ? (ADVICE.textContent = "")
        : (ADVICE.textContent = data.advice);
    });

  /* PRINTING CHARACTER INFO */
  fetch(`${URL}/character/${cardId}`)
    .then((response) => response.json())
    .then((data) => {
      CHARACTERIMAGE.src = data.url;
      CHARACTERNAME.textContent = data.name;
      CHARACTERIMAGE.style.backgroundColor = data.background;
    });
}

function nextCard(event) {
  editScore(event)
  /* We use a small timeout to give time to the editScore function to run */
  setTimeout(() => {
    let currentTotalPoints = getCurrentPointsTotal()
    editProgressBar(currentTotalPoints)
    let gameOver = isGameOver(currentTotalPoints)
    if (gameOver == "continue") {
      createCard(event.target.dataset.tocard);
      toggleDataDisplayed()
      document.getElementById("flip-card--inner").classList.toggle("rotate--plus");
    } else if (gameOver == "fail") {
      // TODO GAME OVER FUNCTIONALITY IF FAIL
      console.log("Game over, you loose!");
    } else if (gameOver == "success") {
      // TODO GAME OVER FUNCTIONALITY IF SUCCESS
      console.log("Game over, your highness!");
    }
  }, 50)
}

function toggleDataDisplayed() {
  let hiddencard = document.querySelector("[data-displayed='false']")
  let showedcard = document.querySelector("[data-displayed='true']")
  hiddencard.dataset.displayed="true"
  showedcard.dataset.displayed="false"
}

function editScore(event) {
  let cardId = event.target.dataset.cardid
  let action = event.target.dataset.action
  fetch(`${URL}/modifiers/${cardId}-${action}`)
  .then((response) => response.json())
  .then((data) => Object.keys(data).forEach(factor => {
    if (factor != "id") {
      editFactor(factor, parseInt(data[factor]))
    }
  }));
}

function editFactor(factor, points) {
  let element = document.querySelector(`[data-icon="${factor}"]`)
  let currentPoints = getCurrentPointsByFactor(factor)
  let totalPoints = points+currentPoints
  if (totalPoints > 10) {
    totalPoints = 10
  } else if (totalPoints < 0) {
    totalPoints = 0
  }
  element.dataset.points = totalPoints
  element.classList.remove(`pa-${currentPoints}`)
  element.classList.add(`pa-${totalPoints}`)
}

function getCurrentPointsByFactor(factor) {
  let element = document.querySelector(`[data-icon="${factor}"]`)
  let result = element.dataset.points
  return parseInt(result)
}

function getCurrentPointsTotal() {
  let factors = document.querySelectorAll(`[data-points]`)
  let totalPoints = 0
  factors.forEach(factor => {
    totalPoints += parseInt(factor.dataset.points)
  })
  return totalPoints
}

function editProgressBar(points) {
  // console.log("Points "+points);
  document.documentElement.style.setProperty("--progress-bar", (points-15)*gameModeModifier);
  // console.log("Variable "+getComputedStyle(document.documentElement).getPropertyValue("--progress-bar"));
}

function pointsToWin(mode) {
  switch (mode) {
    case 'mode-easy':
      return 5
    case 'mode-medium':
      return 10
    case 'mode-hard':
      return 30
  }
}

function isGameOver(totalPoints) {
  let pointsToSuccess = 15 + pointsToWin(gameMode)
  if (totalPoints >= pointsToSuccess) return "success"
  else if (totalPoints > 0) return "continue"
  else if (totalPoints <= 0) return "fail"
}

export { createCard, nextCard };