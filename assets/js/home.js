import { getRandomName } from "./names-functionality.js";
import { nextCard } from "./cards.js";

//Variables
const inputDice = document.getElementById("input--dice");
const playBtn = document.getElementById("start");

//Event Listeners
inputDice.addEventListener("click", fillName);
playBtn.addEventListener("click", loadGame);

function fillName() {
  const inputName = document.getElementById("input--name");
  inputName.textContent = getRandomName();
}

const creditBtn = document.getElementById("credits");
creditBtn.addEventListener("click", showModal);

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
        <p class="credits--paraph">Background SVG <a class="credits--link" href="https://www.svgbackgrounds.com/" target="_blank">SVG Backgrounds</a></p>
        <p class="credits--paraph">Avatars <a class="credits--link" href="https://avatars.dicebear.com/styles/avataaars" target="_blank">DiceBear Avatars</a></p>
        <p class="credits--paraph">Music <a class="credits--link" href="" target="_blank">Music</a></p>
    </div>
  </div>`;
  mainContainer.appendChild(generateModal);
  const modalWindow = document.getElementById("credits-modal");
  modalWindow.classList.add("show__modal");

  const modalBackground = document.getElementById("credits-modal");
  modalBackground.addEventListener("click", closeModal);
  const closeBtn = document.getElementById("close-btn");
  closeBtn.addEventListener("click", closeModal);
}

function closeModal() {
  let modalMainContainer = document.getElementById("credits-modal-container");
  modalMainContainer.remove();
}

function loadGame() {
  const mainContainer = document.getElementById("container");
  mainContainer.classList.add("disappear");
  setTimeout(() => {
    mainContainer.innerHTML = `<div class="container__card">
    <div class="container__card--values">
      <!-- Points -->
      <div class="container__card--attr point-amount icon-influence" data-icon="influence">
      </div>
      <div class="container__card--attr point-amount icon-collection" data-icon="collection">
      </div>
      <div class="container__card--attr point-amount icon-grades" data-icon="grades">
      </div>
      <div>Points</div>
      <div>===================</div>
    </div>
    <div>
      <!-- Character -->
      <div class="character--container">
        <!-- Pic & Name -->
        <div class="flip-card">
          <div id="flip-card--inner" class="flip-card--inner">
            <div class="container__card--pic card-front">
              <img
                class="character--img"
                src="https://avatars.dicebear.com/api/avataaars/4.svg"
                alt=""
                data-image
              />
              <div
                class="container__card--character"
                id="character-name"
                data-name
              >
                Carla
              </div>
            </div>
            <div class="container__card--pic card-back">
              <img
                class="character--img"
                src="https://avatars.dicebear.com/api/avataaars/5.svg"
                alt=""
                data-image
              />
              <div
                class="container__card--character"
                id="character-name"
                data-name
              >
                Pepe
              </div>
            </div>
          </div>
        </div>
        <div class="container__card--text" id="card-text" data-text>
        laborum quis ipsum ipsam incidunt voluptates doloribus illo tempore?
        </div>
      </div>
    </div>
    <div class="container--decission">
      <div class="decission--advice">
        laborum quis ipsum ipsam incidunt voluptates doloribus illo tempore?
      </div>
      <!-- Advice -->
      <div class="container__card--btns">
        <button
          class="container__cards--action"
          id="decline-button"
          data-cardid="card-1"
          data-action="decline"
          data-toCard="card-3"
        >
          Decline
        </button>
        <button
          class="container__cards--action"
          id="accept-button"
          data-cardid="card-1"
          data-action="accept"
          data-toCard="card-2"
        >
          Accept
        </button>
      </div>
      <!-- Buttons -->
    </div>
  </div>
   `;
    mainContainer.classList.remove("disappear");
    document
      .getElementById("decline-button")
      .addEventListener("click", nextCard);
    document
      .getElementById("accept-button")
      .addEventListener("click", nextCard);
    generateIcons();
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

export { fillName };
