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
  // ! REVISAR CUÁL ES EL CONTENEDOR CON BACKGROUND PARA EL PERSONAJE:
  // const CHARACTERCONTAINER = hiddencard.querySelector("[data-]");

  /* ASSIGN NEXT CARD ID TO BUTTONS */
  fetch(`${URL}/accept/${cardId}`)
    .then((response) => response.json())
    .then((data) => ACCEPTBTN.setAttribute("data-tocard", data.toCard));

  fetch(`${URL}/decline/${cardId}`)
    .then((response) => response.json())
    .then((data) => DECLINEBTN.setAttribute("data-tocard", data.toCard));

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
      // CHARACTERCONTAINER.style.backgroundColor = data.background;
    });
}

async function nextCard(event) {
  /* TODO MODIFY FACTORS */
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

function editFactors(church, home, power, money, magic) {
  // ? THINK ABOUT REFACTORING, QUERYSELECTORALL WITH A DATA ATT AND FOREACH THEN

  /* LOCATING ELEMENTS IN DOM */
  const churchElement = document.getElementById("icon-church");
  const homeElement = document.getElementById("icon-home");
  const powerElement = document.getElementById("icon-power");
  const moneyElement = document.getElementById("icon-money");
  const magicElement = document.getElementById("icon-magic");

  // TODO WAIT TILL THERE'S AN EXAMPLE OF THE CSS
}

export { createCard, nextCard };
