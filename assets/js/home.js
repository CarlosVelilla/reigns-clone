/* IMPORTS */
import { getRandomName } from "./names-functionality.js";
import { createCard, nextCard } from "./cards.js";
import { showEditAvatar, cleanUrl, urlCharacter } from "./personalize-character.js";

/* VARIABLES */
const inputDice = document.getElementById("input--dice");
const avatartBtn = document.getElementById("avatar-edit");
const randomAvatarBtn = document.getElementById("avatar-random")
const creditBtn = document.getElementById("credits");
const playBtn = document.getElementById("start");

let userName = getRandomName()
let seed = getRandomSeed(5)

/* EVENT LISTENERS */
inputDice.addEventListener("click", fillName);
avatartBtn.addEventListener("click", showEditAvatar);
randomAvatarBtn.addEventListener("click", getRandomCharacter)
creditBtn.addEventListener("click", showModal);
playBtn.addEventListener("click", loadGame);

/* FUNCTIONALITIES */
function fillName() {
  const inputName = document.getElementById("input--name")
  userName = getRandomName()
  inputName.textContent = userName
}

function getRandomSeed(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function getRandomCharacter() {
  seed = getRandomSeed(5)
  document.getElementById("avatarHome").src = `https://avatars.dicebear.com/api/avataaars/${seed}.svg?facialHairChance=0&`
  cleanUrl()
}

// ? SHOWS CREDITS MODAL
function showModal() {
  const mainContainer = document.getElementById("container");
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

function loadGame() {
  const mainContainer = document.getElementById("container");
  mainContainer.classList.add("disappear");

  setTimeout( () => {
    mainContainer.innerHTML = `
    <div class="container__card">
      <div class="container__card--values">
        <!-- Points -->
        <div class="container__card--attr point-amount icon-influence" data-icon="influence"></div>
        <div class="container__card--attr point-amount icon-collection" data-icon="collection"></div>
        <div class="container__card--attr point-amount icon-grades" data-icon="grades"></div>
        <div class="point-out">
          <div id="progress-bar" class="point-in point-width"></div>
        </div>
        <img src="#" alt="Your own avatar" id="character-avatar-bar" class="container__card--avatar"/>
      </div>
      <div>
        <!-- Character -->
        <div class="character--container">
          <!-- Pic & Name -->
          <div class="flip-card">
            <div id="flip-card--inner" class="flip-card--inner">
              <div class="container__card--pic card-front" data-displayed='true'>
                <img
                  class="character--img"
                  src=""
                  alt=""
                  data-image
                />
                <div
                  class="container__card--character"
                  id="character-name"
                  data-name
                >
                </div>
              </div>
              <div class="container__card--pic card-back" data-displayed='false'>
                <img
                  class="character--img"
                  src=""
                  alt=""
                  data-image
                />
                <div
                  class="container__card--character"
                  id="character-name"
                  data-name
                >
                </div>
              </div>
            </div>
          </div>
          <div class="container__card--text" id="card-text" data-text></div>
        </div>
      </div>
      <div class="container--decission">
        <div class="decission--advice" data-advice></div>
        <!-- Advice -->
        <div class="container__card--btns">
          <!-- Buttons -->
          <button
            class="container__cards--action"
            id="decline-button"
            data-cardid="card-1"
            data-action="decline"
            data-toCard="card-3"
          >
          </button>
          <button
            class="container__cards--action"
            id="accept-button"
            data-cardid="card-1"
            data-action="accept"
            data-toCard="card-2"
          >
          </button>
        </div>
      </div>
    </div>
    `;

    createCard("card-1", false)
    if (urlCharacter == "") {
      document.getElementById("character-avatar-bar").src = `https://avatars.dicebear.com/api/avataaars/${seed}.svg?facialHairChance=0&`
    } else {
      document.getElementById("character-avatar-bar").src = urlCharacter
    }
    
    mainContainer.classList.remove("disappear")
    document.getElementById("decline-button").addEventListener("click", nextCard)
    document.getElementById("accept-button").addEventListener("click", nextCard)

    generateIcons()
  }, 500);
}

function generateIcons() {
  const pointsIcon = document.querySelectorAll("[data-icon]");
  let pointsValue = "pa-5";
  pointsIcon.forEach((point) => {
    point.classList.remove(
      "pa-1",
      "pa-2",
      "pa-3",
      "pa-4",
      "pa-5",
      "pa-6",
      "pa-7",
      "pa-8",
      "pa-9",
      "pa-10"
    );
    point.classList.add(pointsValue);
  });
}

export { fillName, getRandomCharacter, getRandomSeed, seed, userName };