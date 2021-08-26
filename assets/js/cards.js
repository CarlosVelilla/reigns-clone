/* GLOBAL VARIABLES */
const URL = "http://localhost:3000";

function createCard(cardId) {
  const ACCEPTBTN = document.getElementById("accept-button");
  const DECLINEBTN = document.getElementById("decline-button");

  /* LOCATING ELEMENTS IN THE HIDDEN CARD SIDE */
  let hiddencard = document.querySelector("[data-displayed='false']")
  const TEXT = hiddencard.querySelector("[data-text]");
  const ADVICE = hiddencard.querySelector("[data-advice]");
  const CHARACTERIMAGE = hiddencard.querySelector("[data-image]");
  const CHARACTERNAME = hiddencard.querySelector("[data-name]");

  /* ASSIGN NEXT CARD ID TO BUTTONS */
  // TODO REFACTOR
  fetch(`${URL}/accept/${cardId}`)
    .then((response) => response.json())
    .then((data) => {
      ACCEPTBTN.setAttribute("data-tocard", data.toCard)
      ACCEPTBTN.setAttribute("data-cardid", cardId)
    });

  fetch(`${URL}/decline/${cardId}`)
    .then((response) => response.json())
    .then((data) => {
      DECLINEBTN.setAttribute("data-tocard", data.toCard)
      DECLINEBTN.setAttribute("data-cardid", cardId)
    });

  /* PRINTING CARD TITLE AND ADVICE */
  fetch(`${URL}/content/${cardId}`)
    .then((response) => response.json())
    .then((data) => {
      TEXT.textContent = data.title;
      ADVICE.textContent = data.advice;
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
  document.getElementById("flip-card--inner").classList.toggle("test")
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
}

function getCurrentPoints(factor) {
  let element = document.querySelector(`[data-icon="${factor}"]`)
  console.log(element);
  let array = Array.from(element.classList)
  let result = ""
  array.forEach(element => {
    if (element.includes("pa-")) {
      result = element.slice(3)
    }
  })
  return parseInt(result)
}

export { createCard, nextCard };