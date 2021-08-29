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

async function nextCard(event) {
  editFactors(event)
  createCard(event.target.dataset.tocard);
  toggleDataDisplayed()
  document.getElementById("flip-card--inner").classList.toggle("rotate--plus");
}

function toggleDataDisplayed() {
  let hiddencard = document.querySelector("[data-displayed='false']")
  let showedcard = document.querySelector("[data-displayed='true']")
  hiddencard.dataset.displayed="true"
  showedcard.dataset.displayed="false"
}



function editFactors(event) {
  let cardId = event.target.dataset.cardid
  let action = event.target.dataset.action
  fetch(`${URL}/modifiers/${cardId}-${action}`)
  .then((response) => response.json())
  .then((data) => Object.keys(data).forEach(factor => {
    if (factor != "id") {
      editFactorClass(factor, parseInt(data[factor]))
    }
  }));
}

function editFactorClass(factor, points) {
  let element = document.querySelector(`[data-icon="${factor}"]`)
  let currentPoints = getCurrentPoints(factor)
  element.classList.remove(`pa-${currentPoints}`)
  element.classList.add(`pa-${points+currentPoints}`)
  element.dataset.points = points+currentPoints
}

function getCurrentPoints(factor) {
  let element = document.querySelector(`[data-icon="${factor}"]`)
  let result = element.dataset.points
  return parseInt(result)
}

export { createCard, nextCard };