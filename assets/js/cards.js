/* GLOBAL VARIABLES */
const URL = "http://localhost:3000";

/* EVENT LISTENERS */
//document.getElementById('decline-button').addEventListener('click', nextCard)
//document.getElementById('accept-button').addEventListener('click', nextCard)

function createCard(cardId) {
  /* LOCATING ELEMENTS IN DOM */
  const ACCEPTBTN = document.getElementById("accept-button");
  const DECLINEBTN = document.getElementById("decline-button");
  const TEXT = document.getElementById("card-text");
  const ADVICE = document.getElementById("card-advice");
  const CHARACTERIMAGE = document.getElementById("character-image");
  const CHARACTERNAME = document.getElementById("character-name");
  const CHARACTERCONTAINER = document.getElementById("character-container");

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
      CHARACTERCONTAINER.style.backgroundColor = data.background;
    });
}

async function nextCard(event) {
  /* TODO: DISMISS CURRENT CARD, MODIFY FACTORS */
  createCard(event.target.dataset.tocard);
  /* TODO: FLIP CARD */
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

export { createCard };
